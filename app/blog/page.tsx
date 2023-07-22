import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import ViewCounter from "./view-counter";
import { getViewsCount } from "lib/metrics";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Elie Hamouche's blog - Data engineering, API development, Privacy, and more",
};

export default async function BlogPage() {
  // const allViews = await getViewsCount();
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">read my blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 hover:underline"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <h2 className="text-neutral-900 dark:text-neutral-100 tracking-tight font-semibold text-xl">
                {post.title}
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                Published on: {post.publishedAt}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
