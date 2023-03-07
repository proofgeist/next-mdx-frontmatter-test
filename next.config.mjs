import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import addMdx from "@next/mdx";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true
  }
};

const withMdx = addMdx({
  options: {
    remarkPlugins: [remarkMdxFrontmatter, remarkFrontmatter],
    rehypePlugins: [rehypeSlug]
  },
  pageExtensions: ["mdx", "md"]
});

export default withMdx(nextConfig);
