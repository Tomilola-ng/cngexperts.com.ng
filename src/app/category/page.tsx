export const revalidate = 60;

import { wisp } from "@/lib/wisp";
import Link from "next/link";
import { FullWidthHeader } from "../../components/FullWidthHeader";

export default async function Page() {
  const result = await wisp.getTags();

  return (
    <>
      <FullWidthHeader
        title="Sort By Categories"
        description="Browse CNG articles by category"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Category", href: `/category/` },
        ]}
      />
      <div className="container mx-auto text-xl px-4 mb-10 max-w-6xl">
        {result.tags.map((tag) => (
          <Link key={tag.id} href={`/category/${tag.name}`}>
            <div className="inline-block mr-4 mt-2">#{tag.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
