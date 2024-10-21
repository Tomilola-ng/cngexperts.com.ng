import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  {
    label: "CNG Conversion",
    tag: "cng-conversion",
    description: "Guides on converting vehicles from petrol/diesel to CNG, including costs and processes in Nigeria.",
  },
  {
    label: "CNG Technology",
    tag: "cng-technology",
    description: "Insights into the latest advancements and innovations in CNG technology and safety measures.",
  },
  {
    label: "CNG Maintenance",
    tag: "cng-maintenance",
    description: "Maintenance tips and troubleshooting for CNG vehicles to ensure optimal performance.",
  },
  {
    label: "Cost & Economics",
    tag: "cost-savings-economics",
    description: "Detailed breakdown of financial benefits and long-term savings when using CNG in Nigeria.",
  },
  {
    label: "Nigeria Government",
    tag: "government-policies-incentives",
    description: "Updates on Nigerian government policies, tax incentives, and regulations surrounding CNG.",
  },
  {
    label: "News & Trends",
    tag: "industry-news-trends",
    description: "Latest news and trends in CNG adoption both in Nigeria and globally, with future forecasts.",
  },
];


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "clvlugru90000o4g8ahxp069s",
  baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "Example Org",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "Launched",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Let's build something amazing!",
  categories,
};
