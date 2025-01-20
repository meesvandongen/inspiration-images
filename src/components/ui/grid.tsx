import {
  type CSSProperties,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import styles from './grid.module.css';

const GridSizeContext = createContext<
  | {
      size: number;
      setSize: (size: number) => void;
    }
  | undefined
>(undefined);

export function GridSizeProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [size, setSize] = useState(300);

  return (
    <GridSizeContext.Provider
      value={useMemo(() => ({ size, setSize }), [size])}
    >
      {children}
    </GridSizeContext.Provider>
  );
}

export function useGridSize() {
  const context = useContext(GridSizeContext);
  if (!context) {
    throw new Error('useGridSize must be used within a GridSizeProvider');
  }
  return context;
}

export function Grid({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { size } = useGridSize();
  return (
    <div
      className={styles.grid}
      style={
        {
          '--size': `${size}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function GridItem({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className={styles.item}>{children}</div>;
}

export function GridImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return <img className={styles.image} src={src} alt={alt} />;
}

export function GridTitle({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} className={styles.title} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
