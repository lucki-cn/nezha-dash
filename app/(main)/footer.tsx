import pack from "@/package.json";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const version = pack.version;
  return (
    <footer className="mx-auto w-full max-w-5xl">
      <section className="flex flex-col">
        <div className="mt-3 flex gap-1 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          {t("p_146-598_Findthecodeon")}{" "}
          <p
            className="font-normal"
          >
            {version}
          </p>
        </div>
        <section className="mt-1 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          {t("section_607-869_2020")}{t("a_800-850_Hamster1963")}
        </section>
      </section>
    </footer>
  );
}
