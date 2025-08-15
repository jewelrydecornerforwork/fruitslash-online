const config = {
  logo: <span>🍎 Fruitslash Online</span>,
  project: {
    link: 'https://github.com/jewelrydecornerforwork/fruitslash-online'
  },
  chat: {
    link: 'https://discord.gg/fruitslash' // Optional: if you have Discord
  },
  docsRepositoryBase: 'https://github.com/jewelrydecornerforwork/fruitslash-online',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © <a href="https://fruitslash-online.com" target="_blank">Fruitslash Online</a> - The Ultimate Fruit Slashing Game Platform
      </span>
    )
  },
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Fruitslash Online - Play the most addictive fruit slashing game. Multiple game modes, leaderboards, and endless fun!" />
      <meta name="og:description" content="Fruitslash Online - Play the most addictive fruit slashing game. Multiple game modes, leaderboards, and endless fun!" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://fruitslash-online.com/og-image.png" />
      <meta name="og:title" content="Fruitslash Online - Ultimate Fruit Slashing Game" />
      <meta name="og:image" content="https://fruitslash-online.com/og-image.png" />
      <meta name="apple-mobile-web-app-title" content="Fruitslash Online" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: {
    component: false // We'll add custom search later
  },
  primaryHue: 30, // Orange theme for fruits
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark'
  }
}

export default config
