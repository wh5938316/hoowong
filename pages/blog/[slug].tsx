import { allBlogs } from ".contentlayer/generated";
import type { Blog } from ".contentlayer/generated/types";
import components from "components/mdxComponents";
import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function PolicyPage({ blog }: { blog: Blog }) {
  const Component = useMDXComponent(blog.body.code);

  return (
    <main className="max-w-screen-md mx-auto">
      <div className="w-full mt-4 prose max-w-none">
        <Component
          components={{
            ...components,
          }}
        />
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const blog = allBlogs.find((blog) => blog.slug === context?.params?.slug);

  return { props: { blog } };
};
