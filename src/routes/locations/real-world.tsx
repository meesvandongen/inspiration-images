import { Grid, GridImage, GridItem, GridTitle } from '@/components/ui/grid';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/locations/real-world')({
  component: RouteComponent,
  beforeLoad: () => {
    return {
      title: 'Real World',
    };
  },
});

const context = import.meta.webpackContext('@/images/locations/real-world', {
  recursive: false,
  regExp: /\.png$/,
});

function RouteComponent() {
  return (
    <Grid>
      {context
        .keys()
        .toSorted((a, b) => a.localeCompare(b))
        .map((key) => {
          const title = key.replace('./', '').replace('.png', '');
          return (
            <GridItem key={key}>
              <GridImage src={context(key) as string} alt={title} />
              <GridTitle>{title}</GridTitle>
            </GridItem>
          );
        })}
    </Grid>
  );
}
