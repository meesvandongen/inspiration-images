import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Concepts
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose">
        The goal of this project is to create a categorized visual library of
        concepts. These concepts can be used to inspire new ideas. Writers may
        find the next location for their story. Game developers may find the
        next level for their game. Artists may find the next subject for their
        art. The possibilities are endless.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose">
        Various sources were used in the creation, such as the{' '}
        <a
          href="https://concept-table.pages.dev/"
          className="hover:underline text-blue-600"
        >
          concept table
        </a>{' '}
        and the{' '}
        <a
          href="https://github.com/dikonov/Universal-Dictionary-of-Concepts/tree/master"
          className="hover:underline text-blue-600"
        >
          Universal library of concepts
        </a>
        .
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose">
        Of course, the library is not complete. You can contribute new concept
        lists in the{' '}
        <a
          href="https://github.com/meesvandongen/inspiration-images"
          className="hover:underline text-blue-600"
        >
          Github Issues
        </a>
        .
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose">
        All images are generated using text-to-image AI models. Some images may
        not be accurate representations of the concept. Such concepts can be
        reported in Github as well.
      </p>
    </div>
  );
}
