/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { createContext, useContext, useEffect, useState } from "react";
import BrandLockup from "./components/BrandLockup";
import { translations, type Lang } from "./i18n";
import { applySeo } from "./seo";
import {
  Brain,
  Activity,
  TrendingUp,
  Cpu,
  Globe,
  ChevronRight,
  ChevronDown,
  Twitter,
  MessageSquare,
  Github,
  ExternalLink,
  Shield,
  Users,
  Rocket,
  Target,
  Layers,
  Copy,
  Check,
  Youtube,
  ArrowUpRight,
  CircleDollarSign,
  BarChart3,
  Droplets,
  Wallet,
  Languages,
} from "lucide-react";

/* ───────────────── 常量 ───────────────── */
const CONTRACT_ADDRESS = "E4VngHJAQV6jkeRT6nF8bJmh2DugpE4oAhpbUYCbpump";
const OKX_URL = `https://web3.okx.com/zh-hans/token/solana/${CONTRACT_ADDRESS}`;
const YOUTUBE_URL = "https://www.youtube.com/@CryptoFuture2026";

/* ───────────────── i18n Context ───────────────── */
const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({ lang: "zh", setLang: () => {}, t: (k) => k });

const useLang = () => useContext(LangContext);

/* ───────────────── 语言切换按钮 ───────────────── */
const LangToggle = () => {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "zh" ? "en" : "zh")}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-primary transition-colors hover:bg-white/[0.06] font-headline text-[10px] tracking-[0.22em]"
      title={lang === "zh" ? "Switch to English" : "切换到中文"}
    >
      <Languages className="w-3.5 h-3.5" />
      {lang === "zh" ? "EN" : "中文"}
    </button>
  );
};

/* ───────────────── 导航栏 ───────────────── */
const Navbar = () => {
  const { t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto max-w-7xl rounded-[1.85rem] border border-white/10 bg-[rgba(5,8,22,0.72)] shadow-[0_18px_50px_rgba(2,6,23,0.38)] backdrop-blur-2xl">
        <div className="flex h-[78px] items-center justify-between px-5 md:px-7">
          <a href="#hero" className="shrink-0">
            <BrandLockup size="sm" showMeta={false} />
          </a>
          <div className="hidden md:flex items-center gap-2">
            {[
              { name: t("nav.launchpad"), href: "#hero" },
              { name: t("nav.tokenomics"), href: "#tokenomics" },
              { name: t("nav.roadmap"), href: "#roadmap" },
              { name: t("nav.community"), href: "#community" },
              { name: t("nav.whitepaper"), href: OKX_URL },
            ].map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 font-headline text-[10px] tracking-[0.28em] transition-colors ${
                  i === 0
                    ? "bg-white/[0.05] text-primary shadow-[inset_0_0_0_1px_rgba(152,255,215,0.18)]"
                    : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <LangToggle />
            <a
              href={OKX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-flex"
            >
              {t("nav.buy")}
            </a>
            <button
              className="md:hidden rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Layers className="w-6 h-6" />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="m-3 rounded-[1.6rem] border border-white/10 bg-[rgba(8,14,30,0.92)] p-6 shadow-[0_20px_50px_rgba(2,6,23,0.4)] backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-3">
              {[
                { name: t("nav.launchpad"), href: "#hero" },
                { name: t("nav.tokenomics"), href: "#tokenomics" },
                { name: t("nav.roadmap"), href: "#roadmap" },
                { name: t("nav.community"), href: "#community" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3 font-headline text-xs tracking-[0.2em] text-slate-300 hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

/* ───────────────── 英雄区 ───────────────── */
const Hero = () => {
  const { t } = useLang();
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-20 pt-40 lg:px-16"
    >
      <div className="absolute inset-x-0 top-[-12rem] -z-10 h-[42rem] bg-[radial-gradient(circle_at_50%_32%,rgba(143,184,255,0.14),transparent_38%),radial-gradient(circle_at_78%_28%,rgba(109,255,241,0.14),transparent_26%),radial-gradient(circle_at_22%_78%,rgba(152,255,215,0.08),transparent_22%)]" />
      <div className="absolute right-[-8rem] top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[140px]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(430px,0.98fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 shadow-[0_14px_35px_rgba(2,6,23,0.18)]">
            <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_rgba(152,255,215,0.75)]" />
            <span className="font-headline text-[10px] tracking-[0.34em] text-primary/90">
              {t("hero.kicker")}
            </span>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(152,255,215,0.7)]" />
            <span className="font-headline text-[10px] tracking-[0.3em] text-primary uppercase">
              {t("hero.status")}
            </span>
          </div>
          <h1 className="mt-8 max-w-[12ch] font-headline text-[clamp(4rem,12vw,7.6rem)] font-black leading-[0.86] tracking-[-0.08em]">
            <span className="block text-white glow-text">
              {t("hero.title_main")}
            </span>
            <span className="hero-title-accent mt-4 block text-[0.33em] font-bold leading-[1.1] tracking-[0.08em] md:text-[0.35em]">
              {t("hero.title_subtitle")}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-primary-container"
            >
              {t("hero.source_name")}
            </a>{" "}
            {t("hero.desc")}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={OKX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 py-5 px-10 text-sm"
            >
              <CircleDollarSign className="w-4 h-4" />
              {t("hero.buy")}
            </a>
            <a
              href={OKX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 py-5 px-10 text-sm"
            >
              <BarChart3 className="w-4 h-4" />
              {t("hero.charts")}
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: t("hero.price"), value: "$0.0₅24", change: "+0.64%" },
              { label: t("hero.mcap"), value: "$2.43K", change: "" },
              {
                label: t("hero.network"),
                value: t("hero.network_value"),
                change: t("hero.network_sub"),
              },
            ].map((stat) => (
              <div key={stat.label} className="hero-stat-card text-center">
                <p className="text-[10px] font-headline text-slate-400 uppercase tracking-[0.28em]">
                  {stat.label}
                </p>
                <p className="mt-2 text-[1.7rem] font-headline font-bold text-white">
                  {stat.value}
                </p>
                {stat.change && (
                  <p className="mt-1 text-[10px] text-primary">{stat.change}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-[34rem]">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tertiary/10 blur-[120px]" />
            <div className="absolute inset-6 -z-10 rounded-full border border-white/8" />
            <div className="absolute inset-[14%] -z-10 rounded-full border border-primary/14" />
            <div className="relative rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(19,27,50,0.86),rgba(9,15,31,0.72))] p-4 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
              <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_20%_18%,rgba(143,184,255,0.14),transparent_24%),radial-gradient(circle_at_80%_82%,rgba(109,255,241,0.12),transparent_25%)]" />
              <div
                className="portrait-shell relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-low"
                style={{
                  clipPath:
                    "polygon(12% 0,100% 0,100% 88%,88% 100%,0 100%,0 12%)",
                }}
              >
                <img
                  src="/avatar.jpg"
                  alt={t("hero.image_alt")}
                  className="portrait-image relative z-10 aspect-[0.96] w-full object-cover"
                />
                <div className="portrait-grid absolute inset-0" />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(4,10,24,0.14),rgba(4,10,24,0.48))]" />
                <div className="portrait-aura absolute -right-6 top-10 h-28 w-28 rounded-full bg-tertiary/20 blur-3xl" />
                <div className="portrait-beam absolute inset-y-0 -left-1/3 w-1/3" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_24%,rgba(255,255,255,0.18),transparent_34%)] mix-blend-screen" />
              </div>
              <div
                className="pointer-events-none absolute inset-8 rounded-[1.85rem] border border-white/8 opacity-80"
                style={{
                  clipPath:
                    "polygon(12% 0,100% 0,100% 88%,88% 100%,0 100%,0 12%)",
                }}
              />
            </div>
            <div className="absolute -left-4 top-8 hidden section-panel px-4 py-3 text-[10px] font-headline tracking-[0.24em] text-primary sm:block">
              {t("hero.node_strength")}
            </div>
            <div className="absolute -right-3 top-28 hidden section-panel px-4 py-3 text-[10px] font-headline tracking-[0.24em] text-tertiary sm:block">
              {t("hero.latency")}
            </div>
            <div className="absolute bottom-6 left-6 section-panel px-4 py-3 text-[10px] font-headline tracking-[0.24em] text-white">
              {t("hero.solana")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────────── 代币实时数据 ───────────────── */
const TokenData = () => {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="token-data" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="font-headline text-primary text-[10px] tracking-[0.4em] uppercase mb-2">
          {t("token.title_label")}
        </p>
        <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">
          {t("token.title")}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-panel p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <p className="text-[10px] font-headline text-primary tracking-widest uppercase mb-1">
            {t("token.contract_label")}
          </p>
          <code className="text-sm text-white break-all">
            {CONTRACT_ADDRESS}
          </code>
        </div>
        <button
          onClick={handleCopy}
          className="btn-outline py-2 px-6 inline-flex items-center gap-2 shrink-0"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? t("token.copied") : t("token.copy")}
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: CircleDollarSign,
            label: t("token.price_label"),
            value: "$0.0₅24396",
            sub: t("token.price_sub"),
            color: "text-primary",
          },
          {
            icon: BarChart3,
            label: t("token.mcap_label"),
            value: "$2.43K",
            sub: t("token.mcap_sub"),
            color: "text-primary",
          },
          {
            icon: Droplets,
            label: t("token.liquidity_label"),
            value: "$51.8",
            sub: t("token.liquidity_sub"),
            color: "text-tertiary",
          },
          {
            icon: Wallet,
            label: t("token.holders_label"),
            value: "4",
            sub: t("token.holders_sub"),
            color: "text-tertiary",
          },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="section-panel p-6 transition-colors group hover:border-primary/20 hover:bg-white/[0.03]"
          >
            <item.icon
              className={`w-8 h-8 ${item.color} mb-4 group-hover:scale-110 transition-transform`}
            />
            <p className="text-[10px] font-headline text-gray-500 uppercase tracking-widest mb-1">
              {item.label}
            </p>
            <p className="text-3xl font-headline font-bold text-white">
              {item.value}
            </p>
            <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-panel mt-8 flex flex-col items-center justify-between gap-6 bg-[linear-gradient(120deg,rgba(152,255,215,0.12),rgba(143,184,255,0.1))] p-8 md:flex-row"
      >
        <div>
          <h3 className="text-xl font-headline font-bold uppercase tracking-wider">
            {t("token.trade_title")}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {t("token.trade_desc")}
          </p>
        </div>
        <a
          href={OKX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary py-4 px-10 inline-flex items-center gap-2 shrink-0"
        >
          {t("token.trade_btn")}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};

/* ───────────────── 愿景区 ───────────────── */
const Vision = () => {
  const { t } = useLang();
  return (
    <section
      id="vision"
      className="py-24 bg-surface-low border-y border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          <h2 className="text-4xl font-headline font-bold tracking-tight">
            {t("vision.title_prefix")}
            <span className="text-tertiary">CryptoFuture2026</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">{t("vision.desc")}</p>
          <div className="space-y-4 pt-4">
            {[
              { title: t("vision.community_driven"), desc: t("vision.community_driven_desc") },
              { title: t("vision.solana_native"), desc: t("vision.solana_native_desc") },
              { title: t("vision.onchain"), desc: t("vision.onchain_desc") },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-headline text-sm font-bold text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-6">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                <Youtube className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="font-headline text-xs tracking-widest uppercase text-white">
                  {t("vision.watch")}
                </p>
                <p className="text-[10px] text-gray-500 uppercase">
                  {t("vision.watch_sub")}
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Brain, title: t("vision.neural"), desc: t("vision.neural_desc"), accent: false },
            { icon: Globe, title: t("vision.grid"), desc: t("vision.grid_desc"), accent: true },
            { icon: Shield, title: t("vision.security"), desc: t("vision.security_desc"), accent: false },
            { icon: Cpu, title: t("vision.ai"), desc: t("vision.ai_desc"), accent: true },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className={`p-8 space-y-4 transition-colors cursor-default ${
                item.accent
                  ? "section-panel border-primary/25 bg-[linear-gradient(160deg,rgba(18,27,49,0.92),rgba(9,17,34,0.82))]"
                  : "glass-panel"
              }`}
            >
              <item.icon className="w-8 h-8 text-primary" />
              <h3 className="font-headline font-bold text-xl uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────────────── Tokenomics ───────────────── */
const Tokenomics = () => {
  const { t } = useLang();
  const allocations = [
    { name: t("tokenomics.airdrop"), pct: 40, color: "bg-primary" },
    { name: t("tokenomics.lp"), pct: 25, color: "bg-tertiary" },
    { name: t("tokenomics.team"), pct: 15, color: "bg-yellow-400" },
    { name: t("tokenomics.eco"), pct: 10, color: "bg-purple-400" },
    { name: t("tokenomics.reserve"), pct: 10, color: "bg-orange-400" },
  ];

  return (
    <section id="tokenomics" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="font-headline text-primary text-[10px] tracking-[0.4em] uppercase mb-2">
          {t("tokenomics.label")}
        </p>
        <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">
          {t("tokenomics.title")}
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="section-panel p-8 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline font-bold text-lg uppercase tracking-wider">
                {t("tokenomics.allocation")}
              </h3>
              <span className="text-[10px] font-headline text-primary tracking-widest uppercase">
                {t("tokenomics.total")}
              </span>
            </div>
            {allocations.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300 font-headline text-xs uppercase tracking-wider">
                    {item.name}
                  </span>
                  <span className="text-white font-bold">{item.pct}%</span>
                </div>
                <div className="w-full h-2 bg-surface-highest rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {[
            { icon: Layers, title: t("tokenomics.standard"), value: t("tokenomics.standard_val"), desc: t("tokenomics.standard_desc") },
            { icon: CircleDollarSign, title: t("tokenomics.supply"), value: t("tokenomics.supply_val"), desc: t("tokenomics.supply_desc") },
            { icon: Droplets, title: t("tokenomics.launch"), value: t("tokenomics.launch_val"), desc: t("tokenomics.launch_desc") },
            { icon: Shield, title: t("tokenomics.risk"), value: t("tokenomics.risk_val"), desc: t("tokenomics.risk_desc") },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="section-panel p-6 transition-colors flex items-start gap-4 hover:border-primary/20"
            >
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-headline font-bold text-sm uppercase tracking-wider">
                  {item.title}
                </p>
                <p className="text-lg font-bold text-primary mt-1">
                  {item.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────────── 数据指标 ───────────────── */
const Metrics = () => {
  const { t } = useLang();
  return (
    <section id="metrics" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <p className="font-headline text-primary text-[10px] tracking-[0.4em] uppercase mb-2">
            {t("metrics.label")}
          </p>
          <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">
            {t("metrics.title")}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-[10px] font-headline text-primary uppercase tracking-widest">
            {t("metrics.live")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-panel md:col-span-2 lg:col-span-3 h-64 p-8 flex flex-col justify-between"
        >
          <span className="font-headline text-[10px] text-gray-500 uppercase tracking-widest">
            {t("metrics.price_label")}
          </span>
          <div className="space-y-1">
            <p className="text-5xl font-headline font-bold text-primary">
              $0.0₅24
            </p>
            <p className="text-[10px] text-primary/60 uppercase">
              {t("metrics.price_change")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-panel md:col-span-2 lg:col-span-3 h-64 p-8 flex flex-col justify-between relative overflow-hidden"
        >
          <TrendingUp className="absolute top-4 right-4 w-24 h-24 text-primary/10" />
          <span className="font-headline text-[10px] text-gray-500 uppercase tracking-widest">
            {t("metrics.mcap_label")}
          </span>
          <div className="z-10">
            <p className="text-5xl font-headline font-bold text-white">$2.43K</p>
            <p className="text-[10px] text-gray-500 uppercase">
              {t("metrics.mcap_sub")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 lg:col-span-2 h-48 glass-panel p-6 flex flex-col justify-center gap-2"
        >
          <p className="font-headline text-[10px] text-primary uppercase tracking-[0.2em]">
            {t("metrics.gas_label")}
          </p>
          <p className="text-3xl font-headline font-bold text-white">
            &lt; $0.01
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="section-panel md:col-span-2 lg:col-span-2 h-48 p-6 flex flex-col justify-center gap-2"
        >
          <p className="font-headline text-[10px] text-tertiary uppercase tracking-[0.2em]">
            {t("metrics.holders_label")}
          </p>
          <p className="text-3xl font-headline font-bold text-white">4</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 lg:col-span-2 h-48 rounded-[2rem] border border-primary/20 bg-[linear-gradient(135deg,#98ffd7,#6dfff1)] p-6 shadow-[0_20px_45px_rgba(109,255,241,0.18)] flex flex-col justify-center gap-2"
        >
          <p className="font-headline text-[10px] text-black uppercase tracking-[0.2em] font-bold">
            {t("metrics.liquidity_label")}
          </p>
          <p className="text-3xl font-headline font-bold text-black">$51.8</p>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────────── 路线图 ───────────────── */
const Roadmap = () => {
  const { t } = useLang();
  const phases = [
    {
      phase: t("roadmap.p1"),
      title: t("roadmap.p1_title"),
      status: "completed" as const,
      items: [t("roadmap.p1_1"), t("roadmap.p1_2"), t("roadmap.p1_3"), t("roadmap.p1_4")],
    },
    {
      phase: t("roadmap.p2"),
      title: t("roadmap.p2_title"),
      status: "active" as const,
      items: [t("roadmap.p2_1"), t("roadmap.p2_2"), t("roadmap.p2_3"), t("roadmap.p2_4")],
    },
    {
      phase: t("roadmap.p3"),
      title: t("roadmap.p3_title"),
      status: "upcoming" as const,
      items: [t("roadmap.p3_1"), t("roadmap.p3_2"), t("roadmap.p3_3"), t("roadmap.p3_4")],
    },
    {
      phase: t("roadmap.p4"),
      title: t("roadmap.p4_title"),
      status: "upcoming" as const,
      items: [t("roadmap.p4_1"), t("roadmap.p4_2"), t("roadmap.p4_3"), t("roadmap.p4_4")],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-surface-low border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-headline text-primary text-[10px] tracking-[0.4em] uppercase mb-2">
            {t("roadmap.label")}
          </p>
          <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">
            {t("roadmap.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative overflow-hidden rounded-[2rem] p-6 border transition-colors ${
                phase.status === "active"
                  ? "border-primary bg-primary/5"
                  : phase.status === "completed"
                  ? "border-primary/30 bg-surface-highest"
                  : "border-white/5 bg-surface"
              }`}
            >
              {phase.status === "active" && (
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-tertiary" />
              )}
              <div className="flex items-center justify-between mb-4">
                <span className="font-headline text-[10px] tracking-widest uppercase text-primary font-bold">
                  {phase.phase}
                </span>
                <span
                  className={`text-[9px] font-headline uppercase tracking-widest px-3 py-1 ${
                    phase.status === "active"
                      ? "bg-primary text-black"
                      : phase.status === "completed"
                      ? "bg-primary/20 text-primary"
                      : "bg-white/5 text-gray-500"
                  }`}
                >
                  {phase.status === "active"
                    ? t("roadmap.active")
                    : phase.status === "completed"
                    ? t("roadmap.completed")
                    : t("roadmap.upcoming")}
                </span>
              </div>
              <h3 className="font-headline font-bold text-lg uppercase tracking-wider mb-4">
                {phase.title}
              </h3>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-gray-400 flex items-start gap-2"
                  >
                    <ChevronRight className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────────────── 社区板块 ───────────────── */
const Community = () => {
  const { t } = useLang();
  return (
    <section id="community" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="font-headline text-primary text-[10px] tracking-[0.4em] uppercase mb-2">
          {t("community.label")}
        </p>
        <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">
          {t("community.title")}
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          {t("community.desc")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Youtube,
            name: "YouTube",
            desc: t("community.yt_desc"),
            href: YOUTUBE_URL,
            color: "from-red-500/20 to-red-600/5",
            iconColor: "text-red-500",
            btnText: t("community.yt_btn"),
          },
          {
            icon: Twitter,
            name: "X (Twitter)",
            desc: t("community.x_desc"),
            href: "#",
            color: "from-blue-400/20 to-blue-500/5",
            iconColor: "text-blue-400",
            btnText: t("community.x_btn"),
          },
          {
            icon: MessageSquare,
            name: "Telegram",
            desc: t("community.tg_desc"),
            href: "#",
            color: "from-cyan-400/20 to-cyan-500/5",
            iconColor: "text-cyan-400",
            btnText: t("community.tg_btn"),
          },
        ].map((item, i) => (
          <motion.a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group p-8 bg-gradient-to-br ${item.color} border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1`}
          >
            <item.icon
              className={`w-10 h-10 ${item.iconColor} mb-6 group-hover:scale-110 transition-transform`}
            />
            <h3 className="font-headline font-bold text-xl uppercase tracking-wider mb-2">
              {item.name}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {item.desc}
            </p>
            <span className="font-headline text-xs tracking-widest uppercase text-primary inline-flex items-center gap-2">
              {item.btnText}
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

/* ───────────────── FAQ ───────────────── */
const FAQItem = ({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-white/5">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left group"
    >
      <span className="font-headline text-sm uppercase tracking-wider text-white group-hover:text-primary transition-colors">
        {q}
      </span>
      <ChevronDown
        className={`w-5 h-5 text-primary transition-transform shrink-0 ml-4 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        className="pb-6"
      >
        <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
      </motion.div>
    )}
  </div>
);

const FAQ = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <section className="py-24 bg-surface-low border-y border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-headline text-primary text-[10px] tracking-[0.4em] uppercase mb-2">
            {t("faq.label")}
          </p>
          <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">
            {t("faq.title")}
          </h2>
        </motion.div>

        <div className="section-panel px-6">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────────────── CTA ───────────────── */
const CTA = () => {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 relative px-6 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-right" />
      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-headline font-bold uppercase tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="text-gray-400 text-lg mt-4">{t("cta.desc")}</p>
        </motion.div>
        <div className="flex flex-col items-center gap-6">
          <a
            href={OKX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-6 px-16 text-sm hover:scale-105 shadow-xl shadow-primary/20 inline-flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            {t("cta.btn")}
          </a>
          <div
            onClick={handleCopy}
            className="section-panel cursor-pointer border-primary/20 p-4 transition-colors group hover:bg-white/[0.04]"
          >
            <p className="text-[10px] font-headline text-primary tracking-widest uppercase mb-2">
              {t("cta.contract")}
            </p>
            <code className="text-xs text-white break-all group-hover:text-primary transition-colors">
              {CONTRACT_ADDRESS}
            </code>
            {copied && (
              <p className="text-[10px] text-primary mt-2 animate-pulse">
                {t("cta.copied")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───────────────── 页脚 ───────────────── */
const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <BrandLockup
            size="sm"
            showMeta
            meta={t("brand.meta")}
          />
          <p className="font-headline text-[10px] tracking-[0.2em] text-gray-500">
            {t("footer.rights")}
          </p>
          <p className="text-[10px] text-gray-600">{t("footer.risk")}</p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            { name: "YouTube", href: YOUTUBE_URL },
            { name: "X", href: "#" },
            { name: "Telegram", href: "#" },
            { name: "OKX Web3", href: OKX_URL },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-all duration-300 font-headline text-[10px] tracking-widest uppercase"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

/* ───────────────── 主应用 ───────────────── */
export default function App() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = (key: string) => translations[lang][key] || key;

  useEffect(() => {
    applySeo(lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen selection:bg-primary selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <TokenData />
          <Vision />
          <Tokenomics />
          <Metrics />
          <Roadmap />
          <Community />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  );
}
