import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import addMdx from "@next/mdx";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
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
  extension: /\.(md|mdx)$/
});

export default withMdx(nextConfig);
