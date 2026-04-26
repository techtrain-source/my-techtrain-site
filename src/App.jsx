import React, { useState } from "react";
import {
  Phone,
  FileText,
  Search,
  Code,
  ArrowUpRight,
  ArrowRight,
  Check,
  Mountain,
  Clock,
  Globe,
  Users,
  Mail,
  MessageSquare,
  Calendar,
  Database,
  Headphones,
  PenTool,
  BookOpen,
  Languages,
  Presentation,
  Edit3,
  Server,
  GitBranch,
  Smartphone,
  Plug,
  ShieldCheck,
  Send,
  CheckCircle2,
  Gift,
} from "lucide-react";

/* ================================================================
   CONTENT — bilingual (EN / ZH-HK)
   Switch source of truth; everything renders from here.
   ================================================================ */

const CONTENT = {
  en: {
    nav: {
      tag: "Pvt. Ltd.",
      services: "Services",
      process: "Process",
      pricing: "Pricing",
      contact: "Contact",
      quote: "Get a quote",
    },
    hero: {
      badgeLeft: "— Kathmandu → Hong Kong",
      badgeRight: "Est. 2016",
      title: ["Hong Kong's", "back office,", "expertly", "run."],
      titleEm: "expertly",
      subtitle:
        "Tech Train is a Kathmandu-based BPO partner for Hong Kong's ambitious teams. We handle the operational weight — calls, documents, research, code — so your team can focus on the climb that matters.",
      ctaPrimary: "Start a conversation",
      ctaSecondary: "Explore services",
      cards: [
        { tag: "01 / TIMEZONE", title: "HK aligned", sub: "Mirroring 09:00–18:00 HKT, Mon–Fri" },
        { tag: "02 / LANGUAGE", title: "English fluent", sub: "Trained, neutral-accent communication" },
        { tag: "03 / COST", title: "~70% less", sub: "vs. equivalent in-house Hong Kong hires" },
        { tag: "04 / SCOPE", title: "3 verticals", sub: "Communications, knowledge work, engineering" },
      ],
    },
    marquee: [
      "INBOUND CALLS",
      "EMAIL TRIAGE",
      "RESEARCH BRIEFS",
      "WEB DEVELOPMENT",
      "API INTEGRATIONS",
      "DEVOPS & CLOUD",
      "DOCUMENT PROCESSING",
      "VIRTUAL ASSISTANTS",
      "TECHNICAL WRITING",
      "CUSTOMER SUPPORT",
      "DATA ENTRY",
      "MOBILE APPS",
    ],
    why: {
      tag: "— THE CASE",
      titleStart: "Why Hong Kong teams pick ",
      titleEm: "Nepal",
      titleEnd: ".",
      lede:
        "Outsourcing has matured. The smartest Hong Kong operators don't pick a country — they pick a partner who treats their work like their own. Nepal happens to be an unusually well-suited place to find that partner.",
      points: [
        { title: "Aligned with HK", desc: "Just 2h 15m behind Hong Kong — full overlap with your business day." },
        { title: "English-first workforce", desc: "Schooling, business, and tech are conducted in English." },
        { title: "Educated talent pool", desc: "Strong universities and a fast-growing technical workforce." },
        { title: "Stable, accountable", desc: "Long-term partnerships, NDAs, and clear SLAs — no churn-and-burn." },
      ],
    },
    services: {
      tag: "— SERVICES / 03",
      title1: "Three practices.",
      title2Em: "One partner.",
      lede:
        "Pick one stream, mix several, or hand us the whole back office. We staff each practice with specialists — never generalists pretending to be experts.",
      cards: [
        {
          num: "01",
          title: "Communications & Admin",
          tagline: "Your front-of-house, run remotely.",
          items: [
            "Inbound & outbound calls",
            "Email & inbox management",
            "Calendar & scheduling",
            "Document processing & data entry",
            "Live chat & customer support",
            "Virtual receptionist",
          ],
        },
        {
          num: "02",
          title: "Knowledge Work",
          tagline: "Words and research, sharpened.",
          items: [
            "Document writing & reports",
            "Market & competitive research",
            "Editing & proofreading",
            "Decks & presentations",
            "Long-form & content writing",
            "Translation services",
          ],
        },
        {
          num: "03",
          title: "Engineering",
          tagline: "Ship software, not just sites.",
          items: [
            "Website design & build",
            "Web app development",
            "API design & integrations",
            "DevOps, cloud & CI/CD",
            "Mobile app development",
            "Maintenance & monitoring",
          ],
        },
      ],
    },
    process: {
      tag: "— HOW IT WORKS",
      title1: "A path with",
      title2Em: "no surprises.",
      lede:
        "Most outsourcing relationships fail because the first weeks are chaos. Ours are boring on purpose — discovery, scoping, a free onboarding month, and only then full execution.",
      freeBadge: "Free",
      steps: [
        {
          n: "01",
          t: "Discovery call",
          d: "A focused conversation to understand the work, the volume, the constraints, and the success criteria. We listen first, propose later.",
        },
        {
          n: "02",
          t: "Scoped proposal",
          d: "A written brief: what we'll do, who'll do it, hours, SLA, pricing in USD and HKD. No vague retainers, no hidden fees.",
        },
        {
          n: "03",
          t: "Free onboarding month",
          d: "Your first month is on us. We embed with your stack, absorb your processes, build documented SOPs — and only start billing once everything runs smoothly.",
          badge: true,
        },
        {
          n: "04",
          t: "Run, iterate, scale",
          d: "Weekly check-ins, monthly reviews. Scale up, scale down, switch streams — your call, every step.",
        },
      ],
    },
    plans: {
      tag: "— TRANSPARENT PRICING",
      title1: "Pick a practice.",
      title2Em: "Pick a commitment.",
      lede:
        "All rates in USD with HKD shown for reference (HK$ ≈ 7.8/USD). No setup fees. Your first onboarding month is free across every plan.",
      popular: "Popular",
      labels: { hourly: "Hourly", pt: "Part-time FTE", ft: "Full-time FTE", ptNote: "~20 hrs/week", ftNote: "40 hrs/week" },
      cards: [
        { title: "Communications & Admin", tagline: "Front-of-house, remote." },
        { title: "Knowledge Work", tagline: "Words & research, sharpened." },
        { title: "Engineering", tagline: "Ship software, not just sites." },
      ],
      custom: {
        tag: "— BEYOND THE CARD",
        title: "Custom multi-skill teams.",
        desc:
          "Need a developer + writer + VA pod, all reporting to one project lead? Tell us the outcome you need; we'll size the team, set the SLAs, quote in USD & HKD, and review quarterly.",
        cta: "Request a custom quote",
      },
    },
    form: {
      tag: "— TELL US WHAT YOU NEED",
      title1: "Start the",
      title2Em: "conversation.",
      lede:
        "The more boxes you check, the better our first reply will be. We respond within four Hong Kong business hours.",
      section1: "Who you are",
      f_name: "Full name",
      f_email: "Work email",
      f_company: "Company",
      f_country: "Country / timezone",
      ph_name: "Wing Chan",
      ph_email: "wing.chan@yourcompany.hk",
      ph_company: "Pacific Holdings Ltd.",
      ph_country: "Hong Kong / HKT",
      section2: "What do you need?",
      section2Sub: "Check all that apply — across one or several practices.",
      groups: [
        {
          label: "Communications & Admin",
          options: [
            { key: "calls", label: "Inbound / outbound call handling" },
            { key: "email", label: "Email & inbox management" },
            { key: "calendar", label: "Calendar & scheduling" },
            { key: "docs", label: "Document processing & data entry" },
            { key: "support", label: "Customer support / live chat" },
            { key: "receptionist", label: "Virtual receptionist" },
          ],
        },
        {
          label: "Knowledge Work",
          options: [
            { key: "writing", label: "Document writing & reports" },
            { key: "research", label: "Market & competitive research" },
            { key: "editing", label: "Editing & proofreading" },
            { key: "decks", label: "Presentations & decks" },
            { key: "content", label: "Content & long-form writing" },
            { key: "translation", label: "Translation services" },
          ],
        },
        {
          label: "Engineering",
          options: [
            { key: "website", label: "Website design & build" },
            { key: "webapp", label: "Web app development" },
            { key: "api", label: "API & integrations" },
            { key: "devops", label: "DevOps & cloud infrastructure" },
            { key: "mobile", label: "Mobile app development" },
            { key: "maintenance", label: "Maintenance & monitoring" },
          ],
        },
      ],
      section3: "How would you like to work?",
      r_engagement: "Engagement model",
      r_engagement_opts: [
        "Hourly / pay-as-you-go",
        "Part-time dedicated (~20h/wk)",
        "Full-time dedicated (40h/wk)",
        "Custom team / project",
        "Not sure yet",
      ],
      r_team: "Team size needed",
      r_team_opts: ["1 person", "2–5 people", "6+ people", "Not sure yet"],
      r_timeline: "When do you want to start?",
      r_timeline_opts: ["ASAP", "Within 2–4 weeks", "1–3 months out", "Just exploring"],
      section4: "Anything else?",
      section4Sub: "Volume, tools, languages, deadlines — whatever helps us scope it well.",
      ph_notes:
        "e.g. We get ~200 inbound support tickets a week, need EN/Cantonese coverage 09:00–18:00 HKT, currently using Zendesk and HubSpot...",
      consent:
        "By submitting, you agree to be contacted by Tech Train about your inquiry. We never share your details and we don't do mass-mailing.",
      submit: "Send brief",
      thanks_t: "Thank you",
      thanks_d_a: "We've got your brief. A team lead from Tech Train will email ",
      thanks_d_b: " within four Hong Kong business hours with a tailored proposal.",
      submit_again: "Submit another",
    },
    footer: {
      ctaTag: "— READY WHEN YOU ARE",
      ctaTitleStart: "Hong Kong's mornings are ",
      ctaTitleEm: "our mornings",
      ctaTitleEnd: ".",
      ctaSub:
        "One brief is all it takes. We reply within four HK business hours, and your first month with us is on the house.",
      ctaBtn: "Start your brief",
      brandDesc:
        "A Kathmandu-based BPO partner for Hong Kong's ambitious teams. Communications, knowledge work, and engineering — under one roof since 2016.",
      hoursLabel: "Office hours",
      hoursHKT: "HKT  Mon–Fri · 09:00–18:00",
      hoursNPT: "NPT  Mon–Fri · 06:45–15:45",
      sla: "Briefs answered within 4 HK business hours",
      colServices: "Services",
      colCompany: "Company",
      colContact: "Get in touch",
      services: ["Communications", "Knowledge Work", "Engineering", "Custom Teams"],
      company: ["How it works", "Pricing", "Contact"],
      address: "Lalitpur, Kathmandu, Nepal",
      copyright: "© 2026 Tech Train Pvt. Ltd. · Established 2016",
      tagline: "Built for Hong Kong's pace",
    },
  },

  zh: {
    nav: {
      tag: "有限公司",
      services: "服務",
      process: "流程",
      pricing: "收費",
      contact: "聯絡",
      quote: "取得報價",
    },
    hero: {
      badgeLeft: "— 加德滿都 → 香港",
      badgeRight: "創立於 2016",
      title: ["香港嘅", "後勤工作，", "專業", "打理。"],
      titleEm: "專業",
      subtitle:
        "Tech Train 係一間總部設於加德滿都嘅 BPO 合作夥伴，專為香港有志氣嘅企業團隊服務。我哋承擔所有運營重擔 — 電話、文件、研究、編程 — 等你嘅團隊專注於最重要嘅事業。",
      ctaPrimary: "開始合作",
      ctaSecondary: "了解服務",
      cards: [
        { tag: "01 / 時區", title: "與香港同步", sub: "配合香港時間 09:00–18:00，週一至五" },
        { tag: "02 / 語言", title: "流利英語", sub: "受訓口音中性，溝通專業" },
        { tag: "03 / 成本", title: "節省約 70%", sub: "相比香港本地全職僱員" },
        { tag: "04 / 範疇", title: "三大領域", sub: "客戶溝通、知識工作、工程開發" },
      ],
    },
    marquee: [
      "來電處理",
      "電郵管理",
      "研究簡報",
      "網站開發",
      "API 整合",
      "DevOps 雲端",
      "文件處理",
      "虛擬助理",
      "技術文件",
      "客戶服務",
      "數據輸入",
      "手機應用",
    ],
    why: {
      tag: "— 我哋嘅優勢",
      titleStart: "點解香港團隊揀 ",
      titleEm: "尼泊爾",
      titleEnd: "。",
      lede:
        "外判已經非常成熟。最精明嘅香港經營者唔係揀國家 — 而係揀一個會將你嘅工作當成自己工作嘅夥伴。尼泊爾正好就係搵呢類夥伴嘅最佳地點。",
      points: [
        { title: "與香港時區同步", desc: "僅比香港慢 2 小時 15 分鐘 — 與你嘅工作日完全重疊。" },
        { title: "英語為主嘅勞動力", desc: "教育、商業、科技皆以英語進行。" },
        { title: "高素質嘅人才庫", desc: "大學實力強勁，技術人才迅速增長。" },
        { title: "穩定可靠", desc: "長期合作、保密協議、明確嘅服務水平協議 — 絕無短炒文化。" },
      ],
    },
    services: {
      tag: "— 服務 / 03",
      title1: "三個專業領域。",
      title2Em: "一個合作夥伴。",
      lede:
        "揀一條服務線、混合幾條、定係將整個後勤交俾我哋。每個領域都由專家負責 — 唔會用通才扮專家。",
      cards: [
        {
          num: "01",
          title: "客戶溝通與行政",
          tagline: "你嘅前台，遠端運作。",
          items: [
            "來電及外撥電話處理",
            "電郵及收件箱管理",
            "日程及預約安排",
            "文件處理及數據輸入",
            "即時聊天及客戶服務",
            "虛擬接待員",
          ],
        },
        {
          num: "02",
          title: "知識工作",
          tagline: "文字與研究，磨得更利。",
          items: [
            "文件撰寫及報告",
            "市場及競爭研究",
            "編輯及校對",
            "簡報製作",
            "長篇及內容創作",
            "翻譯服務",
          ],
        },
        {
          num: "03",
          title: "工程開發",
          tagline: "交付軟件，唔止係網站。",
          items: [
            "網站設計及建置",
            "網絡應用程式開發",
            "API 設計及整合",
            "DevOps、雲端及 CI/CD",
            "手機應用程式開發",
            "維護及監測",
          ],
        },
      ],
    },
    process: {
      tag: "— 運作流程",
      title1: "透明流程，",
      title2Em: "毫無意外。",
      lede:
        "大部分外判關係之所以失敗，係因為頭幾個星期一片混亂。我哋嘅流程刻意「悶」 — 先了解需求、再做範圍規劃、跟住係免費入職月，最後先全速執行。",
      freeBadge: "免費",
      steps: [
        {
          n: "01",
          t: "需求溝通",
          d: "深入嘅對話，了解工作內容、業務量、限制條件同成功標準。我哋先聆聽，後提案。",
        },
        {
          n: "02",
          t: "範圍提案",
          d: "書面簡報：做啲乜、邊個做、工時、服務水平協議、美金及港幣價格。無模糊嘅顧問費，無隱藏收費。",
        },
        {
          n: "03",
          t: "免費入職月",
          d: "第一個月由我哋請。我哋會深入了解你嘅系統、吸收你嘅流程、建立完整 SOP 文件 — 一切順暢運作後先開始收費。",
          badge: true,
        },
        {
          n: "04",
          t: "運作、優化、擴展",
          d: "每週跟進、每月檢討。擴大、縮減、轉換服務 — 每一步都由你話事。",
        },
      ],
    },
    plans: {
      tag: "— 透明收費",
      title1: "揀一個領域。",
      title2Em: "揀一個合作模式。",
      lede:
        "所有價格以美金計算，附港幣參考（港幣 ≈ 7.8/美金）。無設置費。所有計劃首月入職完全免費。",
      popular: "熱門",
      labels: { hourly: "時薪", pt: "兼職全職", ft: "全職", ptNote: "約 20 小時/週", ftNote: "40 小時/週" },
      cards: [
        { title: "客戶溝通與行政", tagline: "前台運作，遠端執行。" },
        { title: "知識工作", tagline: "文字與研究，磨得更利。" },
        { title: "工程開發", tagline: "交付軟件，唔止係網站。" },
      ],
      custom: {
        tag: "— 超越標準方案",
        title: "客製化多元技能團隊。",
        desc:
          "需要一隊開發人員＋撰稿人＋虛擬助理，全部由同一個項目主管統籌？話俾我哋知你想要嘅成果，我哋會配置團隊、設定服務水平協議、提供美金及港幣報價，並每季檢討。",
        cta: "申請客製化報價",
      },
    },
    form: {
      tag: "— 話俾我哋知你需要乜",
      title1: "開始",
      title2Em: "對話。",
      lede:
        "你揀得越多選項，我哋嘅第一個回覆就越精準。我哋會喺香港四個工作小時內回覆。",
      section1: "你嘅資料",
      f_name: "姓名",
      f_email: "公司電郵",
      f_company: "公司名稱",
      f_country: "國家／時區",
      ph_name: "陳偉明",
      ph_email: "wing.chan@yourcompany.hk",
      ph_company: "太平洋控股有限公司",
      ph_country: "香港 / HKT",
      section2: "你需要乜服務？",
      section2Sub: "可以揀多項 — 跨越唔同領域都得。",
      groups: [
        {
          label: "客戶溝通與行政",
          options: [
            { key: "calls", label: "來電／外撥電話處理" },
            { key: "email", label: "電郵及收件箱管理" },
            { key: "calendar", label: "日程及預約" },
            { key: "docs", label: "文件處理及數據輸入" },
            { key: "support", label: "客戶服務／即時聊天" },
            { key: "receptionist", label: "虛擬接待員" },
          ],
        },
        {
          label: "知識工作",
          options: [
            { key: "writing", label: "文件撰寫及報告" },
            { key: "research", label: "市場及競爭研究" },
            { key: "editing", label: "編輯及校對" },
            { key: "decks", label: "簡報製作" },
            { key: "content", label: "內容及長篇寫作" },
            { key: "translation", label: "翻譯服務" },
          ],
        },
        {
          label: "工程開發",
          options: [
            { key: "website", label: "網站設計及建置" },
            { key: "webapp", label: "網絡應用程式開發" },
            { key: "api", label: "API 及整合" },
            { key: "devops", label: "DevOps 及雲端架構" },
            { key: "mobile", label: "手機應用程式開發" },
            { key: "maintenance", label: "維護及監測" },
          ],
        },
      ],
      section3: "你想點樣合作？",
      r_engagement: "合作模式",
      r_engagement_opts: [
        "時薪／按需付費",
        "兼職專屬（約 20 小時／週）",
        "全職專屬（40 小時／週）",
        "客製化團隊／項目",
        "仲未決定",
      ],
      r_team: "需要幾多人",
      r_team_opts: ["1 人", "2–5 人", "6 人或以上", "仲未決定"],
      r_timeline: "想幾時開始？",
      r_timeline_opts: ["越快越好", "2–4 週內", "1–3 個月後", "只係了解中"],
      section4: "仲有冇其他資料？",
      section4Sub: "業務量、工具、語言、期限 — 任何有助我哋規劃嘅資料都歡迎。",
      ph_notes:
        "例如：我哋每週收到約 200 張支援工單，需要英文／粵語覆蓋香港時間 09:00–18:00，目前使用 Zendesk 同 HubSpot...",
      consent:
        "提交即代表你同意 Tech Train 就你嘅查詢與你聯絡。我哋絕不分享你嘅個人資料，亦唔會做群發郵件。",
      submit: "提交需求",
      thanks_t: "多謝你",
      thanks_d_a: "我哋已經收到你嘅需求。Tech Train 嘅項目主管會喺四個香港工作小時內，透過 ",
      thanks_d_b: " 傳送量身訂製嘅提案俾你。",
      submit_again: "再提交一份",
    },
    footer: {
      ctaTag: "— 你準備好我哋就開始",
      ctaTitleStart: "香港嘅早晨，就係 ",
      ctaTitleEm: "我哋嘅早晨",
      ctaTitleEnd: "。",
      ctaSub:
        "一份簡報就夠晒。我哋會喺香港四個工作小時內回覆，第一個月嘅服務完全免費。",
      ctaBtn: "開始提交簡報",
      brandDesc:
        "我哋係總部設於加德滿都嘅 BPO 合作夥伴，專為香港有志氣嘅團隊服務。客戶溝通、知識工作、工程開發 — 一站式服務，自 2016 年起。",
      hoursLabel: "辦公時間",
      hoursHKT: "HKT  週一至五 · 09:00–18:00",
      hoursNPT: "NPT  週一至五 · 06:45–15:45",
      sla: "香港 4 個工作小時內回覆所有簡報",
      colServices: "服務",
      colCompany: "公司",
      colContact: "聯絡我哋",
      services: ["客戶溝通", "知識工作", "工程開發", "客製化團隊"],
      company: ["運作流程", "收費", "聯絡"],
      address: "尼泊爾 加德滿都 拉利特普爾",
      copyright: "© 2026 Tech Train Pvt. Ltd. · 創立於 2016",
      tagline: "為香港節奏而生",
    },
  },
};

/* Pricing data — language-independent (numbers) */
const PRICES = [
  {
    icon: "headphones",
    prices: [
      { kind: "hourly", usd: "9", hkd: "70", suffix: "/hr" },
      { kind: "pt", usd: "400", hkd: "3,120", suffix: "/mo" },
      { kind: "ft", usd: "550", hkd: "4,290", suffix: "/mo" },
    ],
  },
  {
    icon: "pen",
    highlight: true,
    prices: [
      { kind: "hourly", usd: "15", hkd: "117", suffix: "/hr" },
      { kind: "pt", usd: "600", hkd: "4,680", suffix: "/mo" },
      { kind: "ft", usd: "900", hkd: "7,020", suffix: "/mo" },
    ],
  },
  {
    icon: "code",
    prices: [
      { kind: "hourly", usd: "20", hkd: "156", suffix: "/hr" },
      { kind: "pt", usd: "800", hkd: "6,240", suffix: "/mo" },
      { kind: "ft", usd: "1,600", hkd: "12,480", suffix: "/mo" },
    ],
  },
];

const ICON_MAP = { headphones: Headphones, pen: PenTool, code: Code };

/* ================================================================
   COMPONENT
   ================================================================ */

export default function TechTrainSite() {
  const [lang, setLang] = useState("en");
  const c = CONTENT[lang];

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    services: [],
    engagement: "",
    teamSize: "",
    timeline: "",
    notes: "",
  });

  const toggleService = (key) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(key)
        ? f.services.filter((s) => s !== key)
        : [...f.services, key],
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setSubmitted(true);
    console.log("Lead captured:", form);
  };

  // Service icons (parallel to services.cards order)
  const serviceCardIcons = [Headphones, PenTool, Code];
  const serviceItemIcons = [
    [Phone, Mail, Calendar, Database, MessageSquare, Users],
    [FileText, Search, Edit3, Presentation, BookOpen, Languages],
    [Globe, Code, Plug, Server, Smartphone, GitBranch],
  ];
  const groupIcons = [Headphones, PenTool, Code];

  return (
    <div className={`font-body min-h-screen lang-${lang}`} style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+HK:wght@300;400;500;600;700&family=Noto+Sans+HK:wght@300;400;500;600;700&display=swap');

        :root {
          --bg: #f3ede0;
          --bg-2: #ebe3d0;
          --paper: #faf5e8;
          --ink: #14110f;
          --ink-soft: #3a342e;
          --muted: #8a8275;
          --line: #d4c9b1;
          --line-soft: #e2d8c1;
          --accent: #b53d0a;
          --accent-2: #8a2d05;
          --accent-soft: #f0d5a8;
        }

        body { background: var(--bg); }

        .lang-en .font-display { font-family: 'Fraunces', 'Noto Serif HK', serif; font-feature-settings: 'ss01' on; letter-spacing: -0.02em; }
        .lang-en .font-body    { font-family: 'Manrope', 'Noto Sans HK', sans-serif; }
        .lang-zh .font-display { font-family: 'Noto Serif HK', 'Fraunces', serif; letter-spacing: -0.01em; }
        .lang-zh .font-body    { font-family: 'Noto Sans HK', 'Manrope', sans-serif; }
        .font-mono   { font-family: 'JetBrains Mono', 'Noto Sans HK', monospace; letter-spacing: -0.01em; }

        .rule { border-color: var(--line); }
        .rule-soft { border-color: var(--line-soft); }
        .ink { color: var(--ink); }
        .ink-soft { color: var(--ink-soft); }
        .muted { color: var(--muted); }
        .accent { color: var(--accent); }
        .bg-paper { background: var(--paper); }
        .bg-ink { background: var(--ink); }
        .bg-accent { background: var(--accent); }
        .bg-accent-soft { background: var(--accent-soft); }

        .btn-primary {
          background: var(--ink);
          color: var(--paper);
          transition: all 0.2s ease;
        }
        .btn-primary:hover { background: var(--accent); }

        .btn-ghost {
          border: 1px solid var(--ink);
          color: var(--ink);
          transition: all 0.2s ease;
        }
        .btn-ghost:hover { background: var(--ink); color: var(--paper); }

        .check-card {
          border: 1px solid var(--line);
          background: var(--paper);
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .check-card:hover { border-color: var(--ink); }
        .check-card.active {
          background: var(--ink);
          color: var(--paper);
          border-color: var(--ink);
        }

        .input-field {
          background: var(--paper);
          border: 1px solid var(--line);
          color: var(--ink);
          transition: border-color 0.15s ease;
        }
        .input-field:focus { outline: none; border-color: var(--ink); }
        .input-field::placeholder { color: var(--muted); }

        .radio-pill {
          border: 1px solid var(--line);
          background: var(--paper);
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .radio-pill:hover { border-color: var(--ink); }
        .radio-pill.active {
          background: var(--ink);
          color: var(--paper);
          border-color: var(--ink);
        }

        /* Language toggle */
        .lang-toggle {
          display: inline-flex;
          align-items: center;
          padding: 3px;
          border: 1px solid var(--ink);
          border-radius: 9999px;
          background: var(--paper);
        }
        .lang-toggle button {
          padding: 5px 13px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border-radius: 9999px;
          color: var(--ink);
          background: transparent;
          transition: all 0.18s ease;
          line-height: 1.2;
        }
        .lang-toggle button.active {
          background: var(--ink);
          color: var(--paper);
        }
        .lang-toggle .globe-ico {
          margin-left: 6px;
          margin-right: 4px;
          color: var(--ink);
          opacity: 0.6;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        .delay-1 { animation-delay: 0.08s; }
        .delay-2 { animation-delay: 0.16s; }
        .delay-3 { animation-delay: 0.24s; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 38s linear infinite;
          width: max-content;
        }

        .display-xl {
          font-size: clamp(2.75rem, 8.5vw, 7.5rem);
          line-height: 0.94;
        }
        .display-lg {
          font-size: clamp(2.1rem, 5.2vw, 4.25rem);
          line-height: 0.98;
        }

        .service-card {
          border: 1px solid var(--line);
          background: var(--paper);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .service-card:hover {
          border-color: var(--ink);
          transform: translateY(-2px);
        }

        .underline-grow {
          background-image: linear-gradient(var(--ink), var(--ink));
          background-size: 0% 1px;
          background-position: 0 100%;
          background-repeat: no-repeat;
          transition: background-size 0.3s ease;
        }
        .underline-grow:hover { background-size: 100% 1px; }

        .num-tag {
          font-family: 'JetBrains Mono', monospace;
          color: var(--muted);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }
      `}</style>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "rgba(243,237,224,0.85)", borderBottom: "1px solid var(--line)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between py-4 lg:py-5 gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <Mountain size={20} className="ink" strokeWidth={1.6} />
            <span className="font-display text-xl lg:text-2xl font-medium tracking-tight">Tech Train</span>
            <span className="font-mono text-[10px] muted ml-1 mt-1.5 uppercase tracking-widest hidden sm:inline">{c.nav.tag}</span>
          </div>

          <div className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium">
            <a href="#services" className="underline-grow">{c.nav.services}</a>
            <a href="#process" className="underline-grow">{c.nav.process}</a>
            <a href="#plans" className="underline-grow">{c.nav.pricing}</a>
            <a href="#contact" className="underline-grow">{c.nav.contact}</a>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            {/* Language toggle */}
            <div className="lang-toggle" role="group" aria-label="Language">
              <Globe size={13} strokeWidth={1.7} className="globe-ico" />
              <button
                type="button"
                onClick={() => setLang("en")}
                className={lang === "en" ? "active" : ""}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("zh")}
                className={lang === "zh" ? "active" : ""}
                aria-pressed={lang === "zh"}
                style={{ fontFamily: "'Noto Sans HK', sans-serif" }}
              >
                中文
              </button>
            </div>

            <a href="#contact" className="btn-primary px-4 lg:px-5 py-2.5 text-sm font-medium rounded-full inline-flex items-center gap-1.5 whitespace-nowrap">
              <span className="hidden sm:inline">{c.nav.quote}</span>
              <span className="sm:hidden">→</span>
              <ArrowUpRight size={14} className="hidden sm:inline" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="flex items-center gap-3 mb-10 fade-up flex-wrap">
            <span className="font-mono text-xs uppercase tracking-[0.2em] muted">{c.hero.badgeLeft}</span>
            <span className="h-px w-12" style={{ background: "var(--line)" }} />
            <span className="font-mono text-xs uppercase tracking-[0.2em] muted">{c.hero.badgeRight}</span>
          </div>

          <h1 className="font-display display-xl font-light fade-up delay-1">
            {c.hero.title.map((line, i) => (
              <React.Fragment key={i}>
                {line === c.hero.titleEm ? (
                  <em className="italic" style={{ color: "var(--accent)" }}>{line}</em>
                ) : (
                  line
                )}
                {i < c.hero.title.length - 1 && (i === 1 ? <br /> : i === 2 ? " " : <br />)}
              </React.Fragment>
            ))}
          </h1>

          <div className="grid lg:grid-cols-12 gap-10 mt-14">
            <div className="lg:col-span-5 lg:col-start-1 fade-up delay-2">
              <p className="text-lg ink-soft leading-relaxed max-w-md">{c.hero.subtitle}</p>
              <div className="flex items-center gap-3 mt-8 flex-wrap">
                <a href="#contact" className="btn-primary px-6 py-3.5 text-sm font-medium rounded-full inline-flex items-center gap-2">
                  {c.hero.ctaPrimary} <ArrowRight size={15} />
                </a>
                <a href="#services" className="btn-ghost px-6 py-3.5 text-sm font-medium rounded-full">
                  {c.hero.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 fade-up delay-3">
              <div className="grid grid-cols-2 gap-px" style={{ background: "var(--line)" }}>
                {c.hero.cards.map((card, i) => (
                  <div key={i} className="bg-paper p-6">
                    <div className="num-tag mb-3">{card.tag}</div>
                    <div className="font-display text-3xl font-medium">{card.title}</div>
                    <p className="text-sm muted mt-1.5">{card.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-t border-b rule overflow-hidden bg-paper">
        <div className="marquee-track flex items-center gap-12 py-5 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, j) => (
            <React.Fragment key={j}>
              {c.marquee.map((t, i) => (
                <span key={`${j}-${i}`} className="font-mono text-xs uppercase tracking-[0.25em] muted flex items-center gap-12">
                  {t}
                  <span className="text-base accent">✦</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* WHY NEPAL */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="num-tag mb-4">{c.why.tag}</div>
              <h2 className="font-display display-lg font-light">
                {c.why.titleStart}<em className="italic accent">{c.why.titleEm}</em>{c.why.titleEnd}
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-8">
              <p className="text-xl ink-soft leading-relaxed">{c.why.lede}</p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 pt-4">
                {c.why.points.map((p, i) => {
                  const Icon = [Clock, Globe, Users, ShieldCheck][i];
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--ink)", color: "var(--paper)" }}>
                        <Icon size={15} strokeWidth={1.6} />
                      </div>
                      <div>
                        <div className="font-display text-xl font-medium">{p.title}</div>
                        <p className="text-sm ink-soft mt-1 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t rule py-24 lg:py-32 bg-paper relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="num-tag mb-4">{c.services.tag}</div>
              <h2 className="font-display display-lg font-light max-w-3xl">
                {c.services.title1}
                <br />
                <em className="italic accent">{c.services.title2Em}</em>
              </h2>
            </div>
            <p className="text-base ink-soft max-w-md">{c.services.lede}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {c.services.cards.map((card, idx) => (
              <ServiceCard
                key={idx}
                num={card.num}
                Icon={serviceCardIcons[idx]}
                title={card.title}
                tagline={card.tagline}
                items={card.items.map((label, i) => ({ icon: serviceItemIcons[idx][i], label }))}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-t rule py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div className="num-tag mb-4">{c.process.tag}</div>
              <h2 className="font-display display-lg font-light">
                {c.process.title1}
                <br />
                <em className="italic accent">{c.process.title2Em}</em>
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-base ink-soft">{c.process.lede}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--line)" }}>
            {c.process.steps.map((s, i) => (
              <div key={i} className="bg-paper p-7 lg:p-8 relative">
                {s.badge && (
                  <div className="absolute top-5 right-5 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest" style={{ background: "var(--accent)", color: "var(--paper)" }}>
                    <Gift size={10} strokeWidth={2} />
                    {c.process.freeBadge}
                  </div>
                )}
                <div className="font-mono text-xs muted tracking-widest mb-6">{s.n}</div>
                <div className="font-display text-2xl font-medium mb-3">{s.t}</div>
                <p className="text-sm ink-soft leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="plans" className="border-t rule py-24 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="num-tag mb-4">{c.plans.tag}</div>
            <h2 className="font-display display-lg font-light">
              {c.plans.title1}
              <br />
              <em className="italic accent">{c.plans.title2Em}</em>
            </h2>
            <p className="text-base ink-soft mt-6">{c.plans.lede}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.plans.cards.map((card, i) => (
              <PriceTierCard
                key={i}
                num={`0${i + 1}`}
                Icon={ICON_MAP[PRICES[i].icon]}
                title={card.title}
                tagline={card.tagline}
                highlight={PRICES[i].highlight}
                popular={c.plans.popular}
                labels={c.plans.labels}
                prices={PRICES[i].prices}
              />
            ))}
          </div>

          {/* Custom team callout */}
          <div className="mt-5 rounded-md p-7 lg:p-10" style={{ background: "var(--ink)", color: "var(--paper)" }}>
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs uppercase tracking-widest opacity-60 mb-3">{c.plans.custom.tag}</div>
                <h3 className="font-display text-3xl lg:text-4xl font-medium mb-3">{c.plans.custom.title}</h3>
                <p className="opacity-80 max-w-lg leading-relaxed">{c.plans.custom.desc}</p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full" style={{ background: "var(--accent)", color: "var(--paper)" }}>
                  {c.plans.custom.cta} <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTAKE FORM */}
      <section id="contact" className="border-t rule py-24 lg:py-32 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="num-tag mb-4">{c.form.tag}</div>
            <h2 className="font-display display-lg font-light">
              {c.form.title1}
              <br />
              <em className="italic accent">{c.form.title2Em}</em>
            </h2>
            <p className="text-base ink-soft mt-6 max-w-xl mx-auto">{c.form.lede}</p>
          </div>

          {submitted ? (
            <div className="bg-paper border rule p-12 text-center">
              <div className="w-14 h-14 rounded-full bg-ink mx-auto mb-6 flex items-center justify-center" style={{ color: "var(--paper)" }}>
                <CheckCircle2 size={26} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-3xl font-medium mb-3">{c.form.thanks_t}{lang === "en" ? `, ${form.name.split(" ")[0]}` : `，${form.name}`}.</h3>
              <p className="ink-soft max-w-md mx-auto">
                {c.form.thanks_d_a}
                <span className="font-mono text-sm">{form.email}</span>
                {c.form.thanks_d_b}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", company: "", country: "", services: [], engagement: "", teamSize: "", timeline: "", notes: "" });
                }}
                className="btn-ghost px-5 py-2.5 text-sm font-medium rounded-full mt-8"
              >
                {c.form.submit_again}
              </button>
            </div>
          ) : (
            <div className="bg-paper border rule p-7 lg:p-12 space-y-12">
              {/* Contact info */}
              <div>
                <FormSection num="01" title={c.form.section1} />
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label={c.form.f_name} required>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field w-full px-4 py-3 rounded-md text-sm font-body" placeholder={c.form.ph_name} />
                  </Field>
                  <Field label={c.form.f_email} required>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field w-full px-4 py-3 rounded-md text-sm font-body" placeholder={c.form.ph_email} />
                  </Field>
                  <Field label={c.form.f_company}>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input-field w-full px-4 py-3 rounded-md text-sm font-body" placeholder={c.form.ph_company} />
                  </Field>
                  <Field label={c.form.f_country}>
                    <input type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="input-field w-full px-4 py-3 rounded-md text-sm font-body" placeholder={c.form.ph_country} />
                  </Field>
                </div>
              </div>

              {/* Services checkboxes */}
              <div>
                <FormSection num="02" title={c.form.section2} subtitle={c.form.section2Sub} />
                <div className="space-y-7">
                  {c.form.groups.map((g, gi) => (
                    <CheckGroup
                      key={gi}
                      label={g.label}
                      Icon={groupIcons[gi]}
                      options={g.options}
                      form={form}
                      toggleService={toggleService}
                    />
                  ))}
                </div>
              </div>

              {/* Engagement / team / timeline */}
              <div>
                <FormSection num="03" title={c.form.section3} />
                <div className="space-y-7">
                  <RadioGroup label={c.form.r_engagement} value={form.engagement} onChange={(v) => setForm({ ...form, engagement: v })} options={c.form.r_engagement_opts} />
                  <RadioGroup label={c.form.r_team} value={form.teamSize} onChange={(v) => setForm({ ...form, teamSize: v })} options={c.form.r_team_opts} />
                  <RadioGroup label={c.form.r_timeline} value={form.timeline} onChange={(v) => setForm({ ...form, timeline: v })} options={c.form.r_timeline_opts} />
                </div>
              </div>

              {/* Notes */}
              <div>
                <FormSection num="04" title={c.form.section4} subtitle={c.form.section4Sub} />
                <textarea
                  rows={5}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="input-field w-full px-4 py-3 rounded-md text-sm resize-none font-body"
                  placeholder={c.form.ph_notes}
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t rule-soft">
                <p className="text-xs muted max-w-sm leading-relaxed">{c.form.consent}</p>
                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.email}
                  className="btn-primary px-7 py-3.5 text-sm font-medium rounded-full inline-flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {c.form.submit} <Send size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t rule" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
          {/* CTA strip */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b" style={{ borderColor: "rgba(250,245,232,0.15)" }}>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest opacity-50 mb-4">{c.footer.ctaTag}</div>
              <h3 className="font-display text-4xl lg:text-5xl font-light max-w-2xl leading-[1.05]">
                {c.footer.ctaTitleStart}<em className="italic" style={{ color: "var(--accent-soft)" }}>{c.footer.ctaTitleEm}</em>{c.footer.ctaTitleEnd}
              </h3>
              <p className="opacity-70 mt-5 max-w-md text-sm leading-relaxed">{c.footer.ctaSub}</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium rounded-full whitespace-nowrap" style={{ background: "var(--accent)", color: "var(--paper)" }}>
              {c.footer.ctaBtn} <ArrowRight size={15} />
            </a>
          </div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-12 gap-10 mt-14">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-5">
                <Mountain size={22} strokeWidth={1.6} />
                <span className="font-display text-3xl font-medium">Tech Train</span>
              </div>
              <p className="opacity-70 max-w-sm leading-relaxed text-sm mb-7">{c.footer.brandDesc}</p>

              <div className="text-sm">
                <div className="font-mono text-xs uppercase tracking-widest opacity-50 mb-3">{c.footer.hoursLabel}</div>
                <div className="space-y-1.5">
                  <div className="opacity-90 font-mono">{c.footer.hoursHKT}</div>
                  <div className="opacity-60 font-mono">{c.footer.hoursNPT}</div>
                </div>
                <div className="flex items-center gap-2 mt-4 opacity-80">
                  <Clock size={13} strokeWidth={1.7} />
                  <span className="text-xs">{c.footer.sla}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="font-mono text-xs uppercase tracking-widest opacity-50 mb-5">{c.footer.colServices}</div>
              <ul className="space-y-2.5 text-sm opacity-80">
                {c.footer.services.map((s, i) => (
                  <li key={i}><a href={i === 3 ? "#plans" : "#services"} className="hover:opacity-100 transition">{s}</a></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="font-mono text-xs uppercase tracking-widest opacity-50 mb-5">{c.footer.colCompany}</div>
              <ul className="space-y-2.5 text-sm opacity-80">
                <li><a href="#process" className="hover:opacity-100 transition">{c.footer.company[0]}</a></li>
                <li><a href="#plans" className="hover:opacity-100 transition">{c.footer.company[1]}</a></li>
                <li><a href="#contact" className="hover:opacity-100 transition">{c.footer.company[2]}</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <div className="font-mono text-xs uppercase tracking-widest opacity-50 mb-5">{c.footer.colContact}</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2.5 opacity-90">
                  <Mail size={14} strokeWidth={1.7} className="opacity-60" />
                  <a href="mailto:info@techtrain.com.np" className="hover:opacity-100 transition">info@techtrain.com.np</a>
                </li>
                <li className="flex items-center gap-2.5 opacity-90">
                  <Phone size={14} strokeWidth={1.7} className="opacity-60" />
                  <a href="tel:+9779852056119" className="hover:opacity-100 transition font-mono">+977 985 205 6119</a>
                </li>
                <li className="flex items-center gap-2.5 opacity-90">
                  <Phone size={14} strokeWidth={1.7} className="opacity-60" />
                  <a href="tel:+97715921426" className="hover:opacity-100 transition font-mono">+977 1 592 1426</a>
                </li>
                <li className="flex items-start gap-2.5 opacity-70 pt-2">
                  <Mountain size={14} strokeWidth={1.7} className="opacity-60 mt-0.5" />
                  <span>{c.footer.address}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs font-mono uppercase tracking-widest opacity-50" style={{ borderColor: "rgba(250,245,232,0.15)" }}>
            <span>{c.footer.copyright}</span>
            <span style={{ color: "var(--accent-soft)" }}>{c.footer.tagline}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================================================================
   SUB-COMPONENTS
   ================================================================ */

function ServiceCard({ num, Icon, title, tagline, items }) {
  return (
    <div className="service-card rounded-md p-7 lg:p-8 flex flex-col">
      <div className="flex items-start justify-between mb-8">
        <div className="w-11 h-11 rounded-full bg-ink flex items-center justify-center" style={{ color: "var(--paper)" }}>
          <Icon size={18} strokeWidth={1.6} />
        </div>
        <span className="font-mono text-xs muted tracking-widest mt-2">{num}</span>
      </div>
      <h3 className="font-display text-3xl font-medium mb-2 leading-tight">{title}</h3>
      <p className="text-sm ink-soft mb-7 italic">{tagline}</p>
      <ul className="space-y-3 mt-auto">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3 text-sm ink-soft">
            <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "var(--accent-soft)", color: "var(--accent-2)" }}>
              <Check size={11} strokeWidth={2.5} />
            </span>
            {it.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PriceTierCard({ num, Icon, title, tagline, prices, highlight, popular, labels }) {
  const dark = highlight;
  const labelMap = { hourly: labels.hourly, pt: labels.pt, ft: labels.ft };
  const noteMap = { hourly: null, pt: labels.ptNote, ft: labels.ftNote };
  return (
    <div
      className="rounded-md p-7 flex flex-col h-full relative"
      style={{
        background: dark ? "var(--ink)" : "var(--bg)",
        color: dark ? "var(--paper)" : "var(--ink)",
        border: `1px solid ${dark ? "var(--ink)" : "var(--line)"}`,
      }}
    >
      {dark && (
        <div className="absolute -top-3 left-7 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest" style={{ background: "var(--accent)", color: "var(--paper)" }}>
          {popular}
        </div>
      )}

      <div className="flex items-start justify-between mb-6">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: dark ? "var(--paper)" : "var(--ink)",
            color: dark ? "var(--ink)" : "var(--paper)",
          }}
        >
          <Icon size={18} strokeWidth={1.6} />
        </div>
        <span className={`font-mono text-xs tracking-widest mt-2 ${dark ? "opacity-60" : "muted"}`}>{num}</span>
      </div>

      <h3 className="font-display text-2xl font-medium mb-1 leading-tight">{title}</h3>
      <p className={`text-sm italic mb-7 ${dark ? "opacity-75" : "ink-soft"}`}>{tagline}</p>

      <div className="space-y-5 mt-auto pt-5 border-t" style={{ borderColor: dark ? "rgba(250,245,232,0.18)" : "var(--line-soft)" }}>
        {prices.map((p, i) => (
          <div key={i} className="flex items-baseline justify-between gap-3">
            <div className="min-w-0">
              <div className={`text-xs font-mono uppercase tracking-widest ${dark ? "opacity-70" : "muted"}`}>{labelMap[p.kind]}</div>
              {noteMap[p.kind] && <div className={`text-[11px] mt-0.5 ${dark ? "opacity-50" : "muted"}`}>{noteMap[p.kind]}</div>}
            </div>
            <div className="text-right shrink-0">
              <div className="font-display text-2xl font-medium leading-none">
                ${p.usd}
                <span className="text-xs font-mono opacity-70 ml-0.5">{p.suffix}</span>
              </div>
              <div className={`text-[11px] font-mono mt-1 ${dark ? "opacity-60" : "muted"}`}>HK${p.hkd}{p.suffix}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormSection({ num, title, subtitle }) {
  return (
    <div className="mb-7">
      <div className="flex items-baseline gap-3 mb-2 flex-wrap">
        <span className="font-mono text-xs muted tracking-widest">{num}</span>
        <h3 className="font-display text-2xl font-medium">{title}</h3>
      </div>
      {subtitle && <p className="text-sm ink-soft">{subtitle}</p>}
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-widest muted mb-2">
        {label} {required && <span className="accent">*</span>}
      </span>
      {children}
    </label>
  );
}

function CheckGroup({ label, Icon, options, form, toggleService }) {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-3">
        <Icon size={15} strokeWidth={1.7} />
        <span className="font-display text-lg font-medium">{label}</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {options.map((opt) => {
          const active = form.services.includes(opt.key);
          return (
            <button
              type="button"
              key={opt.key}
              onClick={() => toggleService(opt.key)}
              className={`check-card ${active ? "active" : ""} rounded-md px-4 py-3 text-left text-sm flex items-center gap-2.5`}
            >
              <span
                className="shrink-0 w-4 h-4 rounded border flex items-center justify-center"
                style={{
                  borderColor: active ? "var(--paper)" : "var(--line)",
                  background: active ? "var(--paper)" : "transparent",
                }}
              >
                {active && <Check size={11} strokeWidth={3} style={{ color: "var(--ink)" }} />}
              </span>
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RadioGroup({ label, value, onChange, options }) {
  return (
    <div>
      <span className="block text-xs font-mono uppercase tracking-widest muted mb-3">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            type="button"
            key={opt}
            onClick={() => onChange(opt)}
            className={`radio-pill ${value === opt ? "active" : ""} px-4 py-2.5 text-sm rounded-full`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
