export const revalidate = 60;

import { BlogPostList } from "@/components/BlogPostList";
import { PostPagination } from "@/components/PostPagination";
import { wisp } from "@/lib/wisp";
import { FilterBar } from "../../../components/FilterBar";
import { FullWidthHeader } from "../../../components/FullWidthHeader";
import { config } from "../../../config";
import { Metadata } from "next";
import { getOgImageUrl } from "@/lib/ogImage";

export async function generateMetadata({
  params: { tag },
}: {
  params: { tag: string };
}): Promise<Metadata> {
  return {
    title: `Every CNG articles under #${tag} category`,
    description: `List of all blog posts on ${config.organization} tagged with #${tag}`,
    openGraph: {
      title: `Every CNG articles under #${tag} category`,
      description: `List of all blog posts on ${config.organization} tagged with #${tag}`,
      images: [getOgImageUrl(`#${tag}`)],
    },
  };
}

export default async function Page({
  searchParams,
  params: { tag },
}: {
  searchParams?: { query: string; page: string };
  params: { tag: string };
}) {
  const category = config.categories.find((c) => c.tag === tag);
  const { label, description } = category || {
    label: `#${tag}`,
    description: `Every CNG articles under #${tag} category`,
  };
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const result = await wisp.getPosts({
    limit: 6,
    tags: [tag],
    query: searchParams?.query,
    page,
  });

  return (
    <>
      <FullWidthHeader
        title={label}
        description={description}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Category", href: `/category/` },
          { label, href: `/category/${tag}` },
        ]}
      />
      <div className="container mx-auto max-w-6xl">
        <FilterBar active={tag} className="my-8" />
        <BlogPostList posts={result.posts} />
        <PostPagination
          pagination={result.pagination}
          className="my-16"
          query={searchParams?.query}
          basePath={`/category/${tag}`}
        />
      </div>
    </>
  );
}
