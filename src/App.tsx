import { RouterProvider, createRouter } from '@tanstack/react-router';

import { GridSizeProvider } from './components/ui/grid';
import { routeTree } from './routeTree.gen';

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    title: 'Home',
  },
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
const App = () => {
  return (
    <GridSizeProvider>
      <RouterProvider router={router} />
    </GridSizeProvider>
  );
};

export default App;
