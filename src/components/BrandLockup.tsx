type BrandLockupSize = "sm" | "md" | "lg";

type BrandLockupProps = {
  className?: string;
  showMeta?: boolean;
  size?: BrandLockupSize;
  meta?: string;
};

const sizeMap = {
  sm: {
    wordmark: "h-12 md:h-14",
    tagline: "text-[9px]",
  },
  md: {
    wordmark: "h-16 md:h-18",
    tagline: "text-[10px]",
  },
  lg: {
    wordmark: "h-20 md:h-22",
    tagline: "text-[11px]",
  },
} satisfies Record<
  BrandLockupSize,
  {
    wordmark: string;
    tagline: string;
  }
>;

export default function BrandLockup({
  className = "",
  showMeta = true,
  size = "md",
  meta = "CryptoFuture2026",
}: BrandLockupProps) {
  const styles = sizeMap[size];
  const isAsciiMeta = /^[\x00-\x7F\s]+$/.test(meta);

  return (
    <div className={`leading-none ${className}`}>
      <img
        src="/brand-wordmark.png"
        alt="JMWL"
        className={`brand-wordmark-img block w-auto ${styles.wordmark}`}
      />
      {showMeta && (
        <div
          className={`brand-meta mt-1 font-headline text-primary/72 ${
            isAsciiMeta ? "uppercase tracking-[0.34em]" : "tracking-[0.18em]"
          } ${styles.tagline}`}
        >
          {meta}
        </div>
      )}
    </div>
  );
}
