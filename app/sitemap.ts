import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://eliehamouche.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/blog", "/links"].map((route) => ({
    url: `https://eliehamouche.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
