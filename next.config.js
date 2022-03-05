const { i18n } = require("./next-i18next.config");
const { withContentlayer } = require("next-contentlayer");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer()(
  withMDX({
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    i18n,
  })
);

module.exports = nextConfig
