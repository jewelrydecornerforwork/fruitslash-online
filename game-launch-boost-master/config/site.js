// 多语言配置 至少设置一个，默认语言设置 isDefault: true, 如果需要启用多语言，需要设置 SITE_CONFIG 处 features.i18n = true
// 重命名后检查 next.config.mjs 、theme.config.jsx 、next-sitemap.config.js pages/_document.tsx 中配置文件引入是否正确 注意都应该为 site.js / site
const SUPPORTED_LOCALES = {
  en: {
    name: "English",
    localeName: "English",
    ogLocale: "en_US",
    htmlLang: "en",
    titleSuffix: "- Fruitslash Online",
    isDefault: true, // 改为英文默认
  },
  zh: {
    name: "简体中文",
    localeName: "简体中文",
    ogLocale: "zh_CN",
    htmlLang: "zh",
    titleSuffix: "- 水果切切乐在线",
    // isDefault: false, // 中文作为第二语言
  },
};

// 获取默认语言配置
const getDefaultLocale = () => {
  const locales = Object.entries(SUPPORTED_LOCALES);
  // 如果只有一个语言，它就是默认值
  if (locales.length === 1) {
    return locales[0][1];
  }
  // 否则找到标记为默认的语言
  return locales.find(([_, config]) => config.isDefault)?.[1] || locales[0][1];
};

// 从 SUPPORTED_LOCALES 生成 Next.js i18n 配置
const i18nConfig = {
  locales: Object.keys(SUPPORTED_LOCALES),
  defaultLocale:
    Object.entries(SUPPORTED_LOCALES).find(
      ([_, config]) => config.isDefault
    )?.[0] || Object.keys(SUPPORTED_LOCALES)[0],
};

// 网站基础配置
const SITE_CONFIG = {
  url: "https://fruitslash-online.com", // 修改为你的域名
  title: "Fruitslash Online - 最好玩的水果切切乐游戏", // 修改网站标题
  twitter: "@fruitslash", // 修改Twitter账号（如果有的话）
  siteName: "Fruitslash Online", // 修改网站名称
  
  // Logo 配置
  logo: {
    text: "🍎 Fruitslash Online", // 添加水果emoji和新名称
    image: "/fruitslash-logo.svg", // 修改logo路径
    height: 32,
  },
  
  // 主题主色调 - 改为水果主题色彩
  primaryColor: "#ff4757", // 水果红色
  
  // 功能开关配置
  features: {
    i18n: true, // 保持多语言支持
    themeSwitch: true, // 保持主题切换
    defaultTheme: "light", // 默认颜色模式
  },
  
  // 使用生成的 i18n 配置
  i18nConfig,
};

// sitemap URL 优先级配置 - 修改为游戏网站相关页面
const URL_PRIORITIES = [
  {
    pattern: "^/$", // 首页
    priority: 1.0,
    changefreq: "daily",
  },
  {
    pattern: "^/games/fruitslash$", // 主要游戏页面
    priority: 0.95,
    changefreq: "daily",
  },
  {
    pattern: "^/games", // 游戏相关页面
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    pattern: "^/leaderboard", // 排行榜页面
    priority: 0.85,
    changefreq: "daily",
  },
  {
    pattern: "^/guides", // 游戏指南
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    pattern: "^/about", // 关于页面
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    pattern: ".*", // 其他页面
    priority: 0.5,
    changefreq: "weekly",
  },
];

module.exports = {
  SITE_CONFIG,
  SUPPORTED_LOCALES,
  URL_PRIORITIES,
  getDefaultLocale,
};
