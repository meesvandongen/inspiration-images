import { AppSidebar } from '@/components/app-sidebar';
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { GridSizeProvider } from '@/components/ui/grid';
import { GridSizeSlider } from '@/components/ui/grid-size-slider';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  Link,
  Outlet,
  createRootRouteWithContext,
  useRouterState,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Fragment } from 'react/jsx-runtime';

interface MyRouterContext {
  title: string;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  const matches = useRouterState({ select: (s) => s.matches });

  return (
    <ThemeProvider defaultTheme="light">
      <GridSizeProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {matches
                    .filter((match) => match.context.title)
                    .map(({ context, pathname }, index, fullArray) => (
                      <Fragment key={pathname}>
                        {index < fullArray.length - 1 && (
                          <>
                            <BreadcrumbItem className="hidden md:block">
                              <BreadcrumbLink asChild>
                                <Link to={pathname}>{context.title}</Link>
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                          </>
                        )}
                        {index === fullArray.length - 1 && (
                          <BreadcrumbItem>
                            <BreadcrumbPage>{context.title}</BreadcrumbPage>
                          </BreadcrumbItem>
                        )}
                      </Fragment>
                    ))}
                </BreadcrumbList>
              </Breadcrumb>
              <div className="ml-auto px-3 flex items-center gap-4">
                <GridSizeSlider />
                <ModeToggle />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <Outlet />
            </div>
          </SidebarInset>
        </SidebarProvider>

        <TanStackRouterDevtools position="bottom-right" />
      </GridSizeProvider>
    </ThemeProvider>
  );
}
