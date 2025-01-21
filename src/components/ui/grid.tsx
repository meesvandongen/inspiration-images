import {
  type CSSProperties,
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
} from 'react';
import classes from './grid.module.css';

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
      className={classes.grid}
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
  return <div className={classes.item}>{children}</div>;
}

export function GridImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const id = useId();

  return (
    <button type="button" popoverTarget={id} className={classes.popoverButton}>
      <img
        className={classes.image}
        src={src}
        alt={alt}
        style={{
          viewTransitionName: id,
        }}
      />
      <div popover="auto" id={id} className={classes.popover}>
        <img
          src={src}
          alt={alt}
          style={{
            viewTransitionName: id,
          }}
        />
      </div>
    </button>
  );
}

export function GridTitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <span className="absolute bottom-2 flex px-2 py-1 capitalize bg-background text-foreground rounded-md text-sm font-semibold">{children}</span>;
}
