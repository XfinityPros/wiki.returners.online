import Link from "next/link";
import { LinkArrowIcon } from "nextra/icons";

export default function Banner() {
  return (
    <aside
      className="flex w-full items-center justify-center bg-black py-2 text-center text-sm text-white"
      role="banner "
    >
      <span>
        🎉 Alpha game development started.{" "}
        <Link
          href="https://www.returners.online/changelog"
          className="text-sm underline"
          target="_blank"
        >
          Changelog
        </Link>
        <LinkArrowIcon className="-mt-1 inline size-3" />
      </span>
    </aside>
  );
}
