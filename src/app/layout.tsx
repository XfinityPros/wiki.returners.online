import type { Metadata } from "next";
import "./globals.css";
import "nextra-theme-docs/style.css";
import { Inter } from "next/font/google";
import { Anchor, Head, Image, Search } from "nextra/components";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import Banner from "@/components/banner";
import { Icons } from "@/components/icons";
import { getPageMap } from "nextra/page-map";
import xfinityProsBanner from "@/images/xfinity-pros-banner.webp";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Returners Online Wiki",
  description: "All about Returners Online, the social MMORPG by Xfinity Pros.",
};

const inter = Inter({ subsets: ["latin"] });

const navbar = (
  <div className="dark sticky top-0 z-50 text-zinc-100 [&_.nextra-navbar]:!bg-zinc-800 [&_.nextra-navbar-blur]:!border-zinc-700 [&_.nextra-navbar-blur]:!bg-zinc-800 [&_.nextra-navbar-blur]:!backdrop-blur-none [&_.nextra-search_kbd]:!border-zinc-600 [&_.nextra-search_kbd]:!bg-zinc-900 [&_.nextra-search_kbd]:!text-zinc-100">
    <Navbar
      className="bg-zinc-800 text-zinc-100"
      logo={<Icons.textLogo className="text-primaryColor h-10 w-fit" />}
      chatLink="https://discord.gg/A5FNGmEYV"
      chatIcon={<Icons.discordIcon className="h-8 w-fit" />}
    />
    <div className="bg-primaryColor w-full py-2 text-center text-sm text-black">
      AI art used for demonstration only!{" "}
      <Link href="/temporary-ai-art" className="underline">
        Learn More
      </Link>
    </div>
  </div>
);

const footer = (
  <Footer className="flex-col items-center md:items-start">
    <a
      className="x:focus-visible:nextra-focus flex items-center gap-1 text-sm sm:gap-2"
      target="_blank"
      rel="noreferrer"
      title="Xfinity Pros homepage"
      href="https://www.xfinitypros.com"
    >
      Developed by
      <Icons.xfinityProsLogo className="h-6 w-auto" />
    </a>
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} Returners Online.
    </p>
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          banner={<Banner />}
          docsRepositoryBase="https://github.com/XfinityPros/wiki.returners.online"
          editLink="Edit this page on GitHub"
          search={<Search placeholder="Search wiki" />}
          sidebar={{
            defaultMenuCollapseLevel: 1,
          }}
          navbar={navbar}
          feedback={{
            link: "mailto:returnersonline@gmail.com",
          }}
          pageMap={await getPageMap()}
          footer={footer}
          toc={{
            extraContent: (
              <>
                <b className="mt-2 text-xs">Maintained by the community and:</b>
                {[
                  {
                    url: "https://www.xfinitypros.com",
                    alt: "Web Development Agency",
                    img: xfinityProsBanner,
                  },
                ].map((o) => (
                  <Anchor
                    key={o.url}
                    href={`${o.url}?utm_source=wiki.returners.online&utm_campaign=wiki.returners.online&utm_content=sidebarLink`}
                  >
                    <Image
                      src={o.img}
                      title={o.alt}
                      alt={o.alt}
                      className="nextra-border rounded-sm border"
                    />
                  </Anchor>
                ))}
              </>
            ),
          }}
        >
          {children}
        </Layout>
        <Analytics />
        <GoogleAnalytics gaId={"G-Y6EMN5RFP1"} />
      </body>
    </html>
  );
}
