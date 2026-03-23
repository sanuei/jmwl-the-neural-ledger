type BrandLockupSize = "sm" | "md" | "lg";

type BrandLockupProps = {
  className?: string;
  showTagline?: boolean;
  size?: BrandLockupSize;
  tagline?: string;
};

const sizeMap = {
  sm: {
    frame: "rounded-[1.15rem] p-1",
    mark: "h-10 w-10",
    name: "text-xl",
    tagline: "text-[8px]",
    gap: "gap-3",
  },
  md: {
    frame: "rounded-[1.3rem] p-1.5",
    mark: "h-12 w-12",
    name: "text-[1.95rem]",
    tagline: "text-[9px]",
    gap: "gap-3.5",
  },
  lg: {
    frame: "rounded-[1.5rem] p-2",
    mark: "h-16 w-16",
    name: "text-4xl md:text-5xl",
    tagline: "text-[10px]",
    gap: "gap-4",
  },
} satisfies Record<
  BrandLockupSize,
  {
    frame: string;
    mark: string;
    name: string;
    tagline: string;
    gap: string;
  }
>;

export default function BrandLockup({
  className = "",
  showTagline = true,
  size = "md",
  tagline = "The Neural Ledger",
}: BrandLockupProps) {
  const styles = sizeMap[size];
  const isAsciiTagline = /^[\x00-\x7F\s]+$/.test(tagline);

  return (
    <div className={`flex items-center ${styles.gap} ${className}`}>
      <div className={`brand-frame ${styles.frame}`}>
        <img
          src="/brand-mark.svg"
          alt=""
          aria-hidden="true"
          className={`brand-mark block ${styles.mark}`}
        />
      </div>
      <div className="leading-none">
        <div className={`font-headline font-black tracking-[-0.08em] ${styles.name}`}>
          <span className="text-white">JM</span>
          <span className="text-primary">W</span>
          <span className="text-tertiary">L</span>
        </div>
        {showTagline && (
          <div
            className={`mt-1 font-headline text-primary/70 ${
              isAsciiTagline ? "uppercase tracking-[0.32em]" : "tracking-[0.14em]"
            } ${styles.tagline}`}
          >
            {tagline}
          </div>
        )}
      </div>
    </div>
  );
}
