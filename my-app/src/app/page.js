"use client";
import React, { Component } from "react";
import Newsbox from "./Newsbox";
import styles from "@/app/page.module.css";
export default class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Lawrence Bonk",
      title: "Venmo now lets you send crypto to other users for some reason",
      description:
        "Paypal-owned money transfer service Venmo dipped its toes into cryptocurrencies in 2021 after opening up an in-app trading platform.\r\n That was just for individuals to buy or sell crypto. Now, the company is going further into the once-heralded digital curren…",
      url: "https://www.engadget.com/venmo-now-lets-you-send-crypto-to-other-users-for-some-reason-192015694.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/LKRH31mzL9wqtcqoQ_lkjw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/835a5670-e5f4-11ed-9db6-3febf57b7a4a.cf.jpg",
      publishedAt: "2023-04-28T19:20:15Z",
      content:
        "Paypal-owned money transfer service Venmo dipped its toes into cryptocurrencies in 2021 after opening up an in-app trading platform.\r\n That was just for individuals to buy or sell crypto. Now, the co… [+1625 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Kyle Barr",
      title: "Bitcoin Pyramid Scheme Fraudster Ordered to Pay $3.4 Billion",
      description:
        "The Commodities Futures Trading Commission patted itself on the back for winning one of the largest civil cases against a crypto crook, even if most—or any—of those affected will see any of their money returned. On Thursday, a Texas judge issued a default jud…",
      url: "https://gizmodo.com/bitcoin-mlm-joe-steyn-mirror-trading-international-1850385963",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/16e5700ae24064ff50deef40ec83875d.jpg",
      publishedAt: "2023-04-28T14:35:25Z",
      content:
        "The Commodities Futures Trading Commission patted itself on the back for winning one of the largest civil cases against a crypto crook, even if mostor anyof those affected will see any of their money… [+3594 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mariella Moon",
      title:
        "White House proposes 30 percent tax on electricity used for crypto mining",
      description:
        "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a blog post on the White House website, the administration ha…",
      url: "https://www.engadget.com/white-house-proposes-30-percent-tax-on-electricity-used-for-crypto-mining-090342986.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/_0lUWxV0epaYKnRPQ1.Jxw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/5d8f2740-e97d-11ed-b4b3-dfb213c6d348.cf.jpg",
      publishedAt: "2023-05-03T09:03:42Z",
      content:
        "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a… [+3408 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Nikki Main",
      title:
        "Hacker Pleads Guilty to Hijacking Barack, Elon, and Kim K's Twitter Accounts",
      description:
        "A man accused of hacking Twitter accounts in a Bitcoin scheme pleaded guilty on Tuesday for his role in cyber stalking and computer hacking that exploited numerous high-profile social media accounts. Joseph James O’Connor, 23, was extradited to the U.S. from …",
      url: "https://gizmodo.com/hacker-twitter-joseph-james-o-connor-bitcoin-crypto-1850423510",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a51f52cfe2f928955dd8893a8efe3bbb.jpg",
      publishedAt: "2023-05-10T15:51:00Z",
      content:
        "A man accused of hacking Twitter accounts in a Bitcoin scheme pleaded guilty on Tuesday for his role in cyber stalking and computer hacking that exploited numerous high-profile social media accounts.… [+3186 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title: "Intel ends its bitcoin mining chip series - Reuters",
      description: "Intel ends its bitcoin mining chip series  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiWGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvaW50ZWwtZW5kcy1pdHMtYml0Y29pbi1taW5pbmctY2hpcC1zZXJpZXMtMjAyMy0wNC0xOC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-04-18T18:07:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Hamas armed wing announces suspension of bitcoin fundraising - Reuters",
      description:
        "Hamas armed wing announces suspension of bitcoin fundraising  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL21pZGRsZS1lYXN0L2hhbWFzLWFybWVkLXdpbmctYW5ub3VuY2VzLXN1c3BlbnNpb24tYml0Y29pbi1mdW5kcmFpc2luZy0yMDIzLTA0LTI4L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-04-28T12:36:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Bitcoin could hit $100000 by end-2024, Standard Chartered says - Reuters",
      description:
        "Bitcoin could hit $100000 by end-2024, Standard Chartered says  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvYml0Y29pbi1jb3VsZC1oaXQtMTAwMDAwLWJ5LWVuZC0yMDI0LXN0YW5kYXJkLWNoYXJ0ZXJlZC1zYXlzLTIwMjMtMDQtMjQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-04-24T13:25:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Bitcoin could hit $100000 by end-2024, Standard Chartered says - Reuters",
      description:
        "Bitcoin could hit $100000 by end-2024, Standard Chartered says  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1jb3VsZC1oaXQtMTAwMDAwLWJ5LWVuZC0yMDI0LXN0YW5kYXJkLWNoYXJ0ZXJlZC1zYXlzLTIwMjMtMDQtMjQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-04-24T09:18:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "US court orders South African firm's CEO to pay $3.4 bln for bitcoin ... - Reuters",
      description:
        "US court orders South African firm's CEO to pay $3.4 bln for bitcoin ...  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2xlZ2FsL3VzLWNvdXJ0LW9yZGVycy1zb3V0aC1hZnJpY2FuLWZpcm1zLWNlby1wYXktMzQtYmxuLWJpdGNvaW4tZnJhdWQtMjAyMy0wNC0yNy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-04-27T21:43:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Crypto stocks fall after Binance halts bitcoin withdrawals for hours - Reuters",
      description:
        "Crypto stocks fall after Binance halts bitcoin withdrawals for hours  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvLXN0b2Nrcy1mYWxsLWFmdGVyLWJpbmFuY2UtaGFsdHMtYml0Y29pbi13aXRoZHJhd2Fscy1ob3Vycy0yMDIzLTA1LTA4L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-05-08T10:36:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Liechtenstein to allow payment for certain state services in Bitcoin ... - Reuters",
      description:
        "Liechtenstein to allow payment for certain state services in Bitcoin ...  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvbGllY2h0ZW5zdGVpbi1hbGxvdy1wYXltZW50LWNlcnRhaW4tc3RhdGUtc2VydmljZXMtYml0Y29pbi1oYW5kZWxzYmxhdHQtMjAyMy0wNS0wOC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-05-08T11:43:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Cboe files with U.S. SEC for third time to list ARK 21Shares Bitcoin ... - Reuters",
      description:
        "Cboe files with U.S. SEC for third time to list ARK 21Shares Bitcoin ...  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvY2JvZS1maWxlcy13aXRoLXVzLXNlYy10aGlyZC10aW1lLWxpc3QtYXJrLTIxc2hhcmVzLWJpdGNvaW4tZXRmLTIwMjMtMDUtMDkv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-05-09T19:36:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Kyle Barr",
      title:
        "Failed Terra Founder Do Kwon, Who Avoided Police for Months, Gets Bail",
      description:
        "Former Terraform Labs CEO Do Kwon, alongside his compatriot and former chief financial officer Han Chong-joon have been on the run from international police for months. They were arrested in Montenegro for allegedly holding two fake passports. None of that wa…",
      url: "https://gizmodo.com/terra-luna-do-kwon-crypto-bitcoin-stablecoin-1850431578",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/462c69a5bb4faf493bbdeed0af3fdb8d.jpg",
      publishedAt: "2023-05-12T13:33:59Z",
      content:
        "Former Terraform Labs CEO Do Kwon, alongside his compatriot and former chief financial officer Han Chong-joon have been on the run from international police for months. They were arrested in Monteneg… [+2345 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Emma Roth",
      title:
        "‘PlugwalkJoe’ pleads guilty for the massive 2020 Twitter hack and other crimes",
      description:
        "PlugwalkJoe, aka Joseph James O’Connor, a UK citizen connected to the 2020 Twitter hack affecting many high-profile accounts, has pled guilty to cyberstalking and other crimes.",
      url: "https://www.theverge.com/2023/5/9/23717558/plugwalkjoe-pleads-guilty-twitter-hack-other-crimes-tiktok",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/drbaTsgNPxqzrT5M0V6vKOE49Ug=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/23926010/acastro_STK050_01.jpg",
      publishedAt: "2023-05-09T21:57:19Z",
      content:
        "PlugwalkJoe pleads guilty for the massive 2020 Twitter hack and other crimes\r\nPlugwalkJoe pleads guilty for the massive 2020 Twitter hack and other crimes\r\n / The hack compromised numerous high-profi… [+1865 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Erum Salam",
      title: "Bitcoin is terrible for the environment – can it ever go green?",
      description:
        "Cryptocurrency mining uses huge amounts of energy, but activists are urging for a change in its code to reduce its environmental impactOn the corner of New York’s Park Avenue and 52nd Street, curious onlookers recently stopped in front of a giant green skull …",
      url: "https://www.theguardian.com/technology/2023/apr/26/bitcoin-mining-climate-crisis-environmental-impact",
      urlToImage:
        "https://i.guim.co.uk/img/media/ce173dd8b34322b541bbcb6f3a4c9adee553fc86/0_116_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d02e45765850d5551b54c41c58ce9a34",
      publishedAt: "2023-04-26T09:00:03Z",
      content:
        "On the corner of New Yorks Park Avenue and 52nd Street, curious onlookers recently stopped in front of a giant green skull sitting in the bed of a truck parked outside the office of Fidelity Investme… [+7288 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "msmash",
      title: "Intel Discontinues Bitcoin-Mining Blockscale Chips",
      description:
        "It's been just a year since Intel officially announced its Bitcoin-mining Blockscale ASICs, but today the company announced the end of life of its first-gen Blockscale 1000-series chips without announcing any follow-up generations of the chips. From a report:…",
      url: "https://slashdot.org/story/23/04/18/1652237/intel-discontinues-bitcoin-mining-blockscale-chips",
      urlToImage: "https://a.fsdn.com/sd/topics/intel_64.png",
      publishedAt: "2023-04-18T22:00:00Z",
      content:
        "We spoke with Intel on the matter, and the company told Tom's Hardware that \"as we prioritize our investments in IDM 2.0, we have end-of-lifed the Intel Blockscale 1000 Series ASIC while we continue … [+795 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Matthew Fox",
      title:
        "Here's the outlook for bitcoin as the cryptocurrency struggles to reclaim the all-important $30,000 technical level",
      description:
        "If bitcoin can decisively clear that level, Stockton expects the cryptocurrency to trend toward its key resistance level at $35,900.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-technical-resistance-important-30000-level-upside-downside-2023-4",
      urlToImage:
        "https://i.insider.com/644a81e2edc7ea00183306ec?width=1200&format=jpeg",
      publishedAt: "2023-04-27T14:52:45Z",
      content:
        "El Salvador made bitcoin official currency. Now a new crop of bitcoin experiments wants to do the same around the world.MARVIN RECINOS / Contributor / Getty Images\r\n<ul><li>The price of bitcoin is te… [+2393 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Phil Rosen",
      title:
        "Bitcoin could more than double and hit a new record high next year as the token sees a big shakeup, blockchain exec says",
      description:
        "\"When bitcoin's halving kicks in a year from now, we'll likely be well on our way past the previous all-time high.\"",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-bank-crisis-recession-halving-fed-rate-cut-2023-5",
      urlToImage:
        "https://i.insider.com/64545b09dcb78700180cfa77?width=1200&format=jpeg",
      publishedAt: "2023-05-06T10:30:08Z",
      content:
        "Bitcoin.Photo by Getty Images\r\n<ul>\n<li>Bitcoin could hit a new record high next year, said Bob Ras, cofounder of blockchain firm Sologenic.</li>\n<li>He cited bitcoin halving, which will reduce minin… [+3236 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Filip De Mott",
      title:
        "Ray Dalio says he has a little bitcoin but prefers gold, calling it 'timeless and universal'",
      description:
        "Bitcoin moves unreliably and has a smaller valuation than mega-cap stocks like Microsoft, Dalio said on a podcast.",
      url: "https://markets.businessinsider.com/news/currencies/ray-dalio-bitcoin-gold-reserve-asset-microsoft-banking-crypto-rally-2023-4",
      urlToImage:
        "https://i.insider.com/644abf0fda6d7b0019bd80be?width=1200&format=jpeg",
      publishedAt: "2023-04-27T19:51:21Z",
      content:
        "Bridgewater founder Ray Dalio.Brendan McDermid/File Photo/Reuters\r\n<ul>\n<li>Billionaire investor Ray Dalio said he has a little bitcoin but prefers gold.</li>\n<li>On a recent podcast, he said bitcoin… [+1951 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Zinya Salfiti",
      title:
        "Bitcoin is a bubble with 'no inherent value and is terribly overpriced,' top economist Steve Hanke says",
      description:
        '"Bitcoin is a bubble. It has no inherent value and is terribly overpriced," the top economist tweeted.',
      url: "https://markets.businessinsider.com/news/currencies/steve-hanke-bitcoin-bubble-overpriced-worthless-value-rally-cryptocurrency-crypto-2023-5",
      urlToImage:
        "https://i.insider.com/646211685cd814001883cf58?width=1200&format=jpeg",
      publishedAt: "2023-05-15T14:52:27Z",
      content:
        "BitcoinYuichiro Chino/Getty Images\r\n<ul>\n<li>Top economist Steve Hanke reiterated that the world's most popular cryptocurrency is essentially worthless. </li>\n<li>He was reacting to bitcoin falling t… [+1936 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "George Glover",
      title:
        "A bitcoin thief who stole $5 million of the crypto and posed in a dollar-filled bathtub is sentenced to 4 years in prison",
      description:
        "Gary Harmon pled guilty to stealing 713 bitcoin in January. Law enforcement agents found a photo on his phone showing him posing in a tub of cash.",
      url: "https://markets.businessinsider.com/news/stocks/bitcoin-thief-5m-ohio-prison-gary-harmon-bathtub-of-money-2023-4",
      urlToImage:
        "https://i.insider.com/644b9b21da6d7b0019bd8fcf?width=1200&format=jpeg",
      publishedAt: "2023-04-28T11:22:11Z",
      content:
        "Gary Harmon posing in a bathtub of dollar bills.US District Court for the District of Columbia/Bloomberg\r\n<ul>\n<li>An Ohio man who stole more than 712 bitcoin was sentenced to four years in prison Th… [+1644 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Filip De Mott",
      title:
        "Bitcoin could jump nearly 70% if the US defaulted on its debt, Standard Chartered analyst says",
      description:
        '"So actually, the optimal trade would probably be long bitcoin, short ethereum," Standard Chartered\'s Geoff Kendrick told Insider.',
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-us-default-debt-ceiling-crisis-ethereum-price-2023-4",
      urlToImage:
        "https://i.insider.com/644ad2ac74e9330018ef7555?width=1200&format=jpeg",
      publishedAt: "2023-04-29T12:30:06Z",
      content:
        "Bitcoin.Photo by Getty Images\r\n<ul>\n<li>Bitcoin could climb by $20,000 if a US default happened, Standard Chartered's Geoff Kendrick said.</li>\n<li>Not every crypto would act similarly, with some beh… [+2744 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Phil Rosen",
      title:
        "Bitcoin's 72% rally to start 2023 helps push Michael Saylor's MicroStrategy to its first profitable quarter in over 2 years",
      description:
        "The company is the largest holder of bitcoin, and added 7,500 bitcoins in the first quarter of the year, bringing its total to 140,000 tokens.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-microstrategy-michael-saylor-bull-quarter-cryptocurrency-rally-crypto-70-2023-5",
      urlToImage:
        "https://i.insider.com/60ca262123393a00188e3872?width=1200&format=jpeg",
      publishedAt: "2023-05-02T15:43:05Z",
      content:
        "MicroStrategy CEO Michael SaylorJoe Raedle/Getty Images\r\n<ul>\n<li>Michael Saylor's MicroStrategy posted its first profit in nine quarters to start 2023.</li>\n<li>The largest holder of bitcoin added 7… [+1863 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Zinya Salfiti",
      title:
        "Bitcoin's 73% rally is fueling optimism the crypto winter is ending. Here are fresh forecasts on the token from StanChart, Matrixport and others.",
      description:
        "Bitcoin has rallied 73% this year, after a grim 2022. Some analysts are predicting this may be just the beginning of a bigger advance.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-predictions-crypto-forecasts-robert-kiyosaki-standard-chartered-matrixport-analysts-2023-5",
      urlToImage:
        "https://i.insider.com/62a76660a464ed0019584a3b?width=1200&format=jpeg",
      publishedAt: "2023-05-03T13:48:14Z",
      content:
        "Bitcoin.Getty Images\r\n<ul>\n<li>Bitcoin has rallied more than 70% this year, outperforming most other asset classes, after a dismal 2022. </li>\n<li>Some analysts are predicting this may just be the st… [+5150 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Filip De Mott,Zinya Salfiti",
      title:
        "Bitcoin's huge rally is masking a drop in liquidity as smaller trades move the market",
      description:
        "A trade of 462 bitcoins can move the price by 1% compared to more than 1,400 bitcoins in January, according to CCData.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-rally-crypto-liquidity-market-moving-small-trades-btc-2023-5",
      urlToImage:
        "https://i.insider.com/6453aacdb4a8cd00187ab9e5?width=1200&format=jpeg",
      publishedAt: "2023-05-04T15:30:28Z",
      content:
        "(Photo by Jakub Porzycki/NurPhoto via Getty Images)\r\n<ul>\n<li>Bitcoin's huge price rally this year is masking a decline in market liquidity.</li>\n<li>That means smaller bitcoin trades can have a bigg… [+1766 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "msmash",
      title: "Balaji Srinivasan Closes Out $1 Million Bitcoin Bet Early",
      description:
        "Balaji Srinivasan, the former chief technology officer of Coinbase Global, said he closed out what appeared to be a losing bet that Bitcoin would rise to $1 million within 90 days. From a report: Srinivasan said he gave $1 million to two organizations, includ…",
      url: "https://slashdot.org/story/23/05/03/1924216/balaji-srinivasan-closes-out-1-million-bitcoin-bet-early",
      urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      publishedAt: "2023-05-03T21:20:00Z",
      content:
        "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Raphael Sanis",
      title: "What is crypto, and is it making a comeback?",
      description:
        "Cryptocurrencies have been on a wild journey since bitcoin emerged in 2009. The future is still murky, as skeptics say they need to prove their worth.",
      url: "https://www.businessinsider.com/what-is-crypto-and-is-it-making-a-comeback-2023-4",
      urlToImage:
        "https://i.insider.com/643ec50e0a29b400188107b5?width=1200&format=jpeg",
      publishedAt: "2023-04-18T17:36:11Z",
      content:
        "<ul>\n<li>Cryptocurrencies had a dreadful year in 2022, with investors losing billions.</li>\n<li>Now, prices of bitcoin and ethereum are recovering.</li>\n<li>But Insider correspondent April Joyner say… [+384 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Carla Mozée",
      title:
        "People can now buy and sell real estate with crypto on what's being billed as the first US bitcoin property marketplace",
      description:
        "Texas properties are the first listed on a new platform allowing people to use bitcoin to buy residential and commercial real estate in the US.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-real-estate-crypto-marketplace-properties-buy-sell-platform-coinbase-2023-4",
      urlToImage:
        "https://i.insider.com/6442e3b6e1a96300185aa255?width=1200&format=jpeg",
      publishedAt: "2023-04-24T12:08:35Z",
      content:
        "Tricon Residential is slowing purchases in the face of higher interest rates. But it's also waiting for opportunities to buy larger portfolios at discounted prices, its CEO, Gary Berman, said. pbk-pg… [+2540 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Zahra Tayeb",
      title:
        "'Rich Dad Poor Dad' author Robert Kiyosaki says cash is trash - and touts bitcoin as 'real money' after previously slamming it as speculative play",
      description:
        '"To me, Gold, Silver, &Bitcoin are real money. To me Cash is trash," the "Rich Dad Poor Dad" author tweeted on Monday.',
      url: "https://markets.businessinsider.com/news/currencies/rich-dad-poor-dad-robert-kiyosaki-cash-is-trash-bitcoin-2023-4",
      urlToImage:
        "https://i.insider.com/5e2b330162fa813e507e2845?width=1200&format=jpeg",
      publishedAt: "2023-04-24T11:04:02Z",
      content:
        '"Rich Dad Poor Dad" author Robert Kiyosaki.Matt Carasella/Patrick McMullan/Getty Images\r\n<ul>\n<li>Personal-finance guru Robert Kiyosaki thinks cash is trash, while touting bitcoin, silver and gold as… [+1913 chars]',
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Jennifer Sor",
      title:
        "Apple will remove the bitcoin white paper from its computers in the next update to macOS, report says",
      description:
        "Apple will likely take the bitcoin white paper out of future updates, and a work ticket has already been filed to remove the paper, a source said.",
      url: "https://markets.businessinsider.com/news/currencies/apple-bitcoin-white-paper-andy-baio-remove-update-satoshi-nakamoto-2023-4",
      urlToImage:
        "https://i.insider.com/644933ca90523900196ff5e1?width=1200&format=jpeg",
      publishedAt: "2023-04-26T15:32:37Z",
      content:
        "A man walks past a backlit Apple logo during an Apple media event in San Francisco, California, September 9, 2015REUTERS/Beck Diefenbach\r\n<ul>\n<li>Apple will likely remove the bitcoin white paper fro… [+2458 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Filip De Mott",
      title:
        "Bitcoin could soar 268% to $100,000 as crypto winter is finally over, Standard Chartered says",
      description:
        '"While sources of uncertainty remain, we think the pathway to the USD 100,000 level is becoming clearer."',
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-100000-crypto-winter-bank-crisis-btc-halving-2023-4",
      urlToImage:
        "https://i.insider.com/6446a1d5101b77001857b08b?width=1200&format=jpeg",
      publishedAt: "2023-04-24T17:43:48Z",
      content:
        "Yuichiro Chino/Getty Images\r\n<ul>\n<li>Bitcoin could surge to $100,000 by the end of 2024, according to a Standard Chartered note.</li>\n<li>That's due to bank turmoil, bitcoin halving, and the expecte… [+2841 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "msmash",
      title: "The Kingdom Of Bhutan Has Been Quietly Mining Bitcoin For Years",
      description:
        "The Himalayan kingdom confirmed it has been running a bitcoin mining operation as mystery surrounds the scale of its earlier cryptocurrency investments. From a report: Beneath the Himalayas, rivers fed by ancient glaciers supply the tiny kingdom of Bhutan wit…",
      url: "https://slashdot.org/story/23/05/01/0840251/the-kingdom-of-bhutan-has-been-quietly-mining-bitcoin-for-years",
      urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      publishedAt: "2023-05-01T15:20:00Z",
      content:
        "Beneath the Himalayas, rivers fed by ancient glaciers supply the tiny kingdom of Bhutan with immense stores of hydroelectricity. The renewable resource has become an economic engine, accounting for 3… [+1495 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Morgan Chittum",
      title:
        "Bitcoin surges 9% toward key level of $30,000 as crypto market rallies amid fresh banking sector fears",
      description:
        '"[Investors are] signaling risk-on sentiment, as they anticipate a potential softer Fed policy and liquidity injections surrounding First Republic."',
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-rally-ethereum-solana-first-republic-bank-2023-4",
      urlToImage:
        "https://i.insider.com/62d8aec20c98f500195ec74f?width=1200&format=jpeg",
      publishedAt: "2023-04-26T18:35:27Z",
      content:
        "Bitcoin offices in Istanbul, Turkey on June 21, 2022.Umit Turhan Coskun/Getty Images\r\n<ul>\n<li>Bitcoin surged as much as 9% on Wednesday, nearing the important $30,000 level.</li>\n<li>The rally comes… [+2304 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Paul Ford",
      title: "So Your Kid Wants to Be a Twitch Streamer",
      description:
        "Don’t panic. Instead, teach your beloved offspring to answer the Three Questions of Streaming.",
      url: "https://www.wired.com/story/so-your-kid-wants-to-be-a-twitch-streamer-three-questions/",
      urlToImage:
        "https://media.wired.com/photos/643f0dd221515ed3833570d1/191:100/w_1280,c_limit/WIRED_TwishaP_03_YouTube-Money-web.jpg",
      publishedAt: "2023-04-25T11:00:00Z",
      content:
        "I pray that one day you will not. But look inside the can, beyond the neon-pink ichor. You want that beverage. But when you are a streamer, that beverage wants things from you. It wants you to drive … [+3027 chars]",
    },
    {
      source: {
        id: null,
        name: "Hackaday",
      },
      author: "Tom Nardi",
      title: "Home Heating With Bitcoin Miners is Now a Real Thing",
      description:
        "If you were reading this post a month ago, you could have been forgiven for thinking it was an April Fools post. But we assure you, this is no joke. A company called HeatBit has recently opened pre…",
      url: "https://hackaday.com/2023/05/13/home-heating-with-bitcoin-miners-is-now-a-real-thing/",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2023/05/heatbit_feat.jpg",
      publishedAt: "2023-05-13T20:00:39Z",
      content:
        "If you were reading this post a month ago, you could have been forgiven for thinking it was an April Fools post. But we assure you, this is no joke. A company called HeatBit has recently opened preor… [+3025 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Zahra Tayeb",
      title:
        "Ark's Cathie Wood once again hypes Tesla – expecting her darling stock to hit $2,000 in five years thanks to a robotaxi boom",
      description:
        "Cathie Wood said Tesla stock could hit $2,000 by 2027 thanks to a robotaxi boom, marking a 1,127% surge from the carmaker's current share price.",
      url: "https://markets.businessinsider.com/news/stocks/cathie-wood-tesla-outlook-stock-could-hit-2000-by-2027-2023-4",
      urlToImage:
        "https://i.insider.com/628605460fdb180018cc1a1f?width=1200&format=jpeg",
      publishedAt: "2023-04-21T09:46:58Z",
      content:
        "Ark Invest's Cathie Wood.Photo by Marco Bello/Getty Images\r\n<ul>\n<li>Famed money manager Cathie Wood has made an eye-popping prediction about Tesla, once again. </li>\n<li>The Ark Invest CEO said the … [+2162 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Pete Syme",
      title:
        "Man pleads guilty to hacking Elon Musk's and Joe Biden's Twitter accounts in bitcoin scam",
      description:
        "Joseph James O'Connor was part of a group that hijacked several high-profile Twitter accounts in 2020.",
      url: "https://www.businessinsider.com/twitter-bitcoin-scam-elon-musk-joe-biden-man-pleads-guilty-2023-5",
      urlToImage:
        "https://i.insider.com/645b5461c726bc00196aad78?width=1200&format=jpeg",
      publishedAt: "2023-05-10T10:21:25Z",
      content:
        "Elon Musk's Twitter account, and Joseph James O'Connor arrested in Spain in 2021.Matt Cardy/Getty Images; REUTERS/Jon Nazca\r\n<ul>\n<li>Several high-profile Twitter accounts were hacked as part of a bi… [+2430 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Enrique Pérez",
      title:
        "Binance ha paralizado los retiros de Bitcoin. No es puntual, la criptomoneda vive una tensión sin precedentes",
      description:
        'El exchange más grande del mundo ha decidido suspender los retiros de Bitcoin. La explicación oficial la ha proporcionado la propia Binance, quien explica que ha cerrado las retiradas debido a un "largo volumen de transacciones pendientes". No es un hecho pun…',
      url: "https://www.xataka.com/criptomonedas/binance-ha-paralizado-retiros-bitcoin-no-puntual-criptomoneda-vive-tension-precedentes",
      urlToImage: "https://i.blogs.es/33e784/binance/840_560.jpeg",
      publishedAt: "2023-05-08T09:00:33Z",
      content:
        'El exchange más grande del mundo ha decidido suspender los retiros de Bitcoin. La explicación oficial la ha proporcionado la propia Binance, quien explica que ha cerrado las retiradas debido a un "la… [+2397 chars]',
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Gabriel Erard",
      title:
        "Intel cancela su chip para minar Bitcoin, apenas un año después de anunciarlo",
      description:
        "La aventura de Intel en el mundo de las criptomonedas ha finalizado de un modo repentino. Tom's Hardware reporta que la compañía ha decidido discontinuar Blockscale, su chip dedicado a equipos para minar Bitcoin —conocidos como mineros ASIC—. La noticia sale …",
      url: "http://hipertextual.com/2023/04/intel-cancela-chip-minar-bitcoin",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2023/04/intel-scaled.jpg",
      publishedAt: "2023-04-18T18:22:13Z",
      content:
        "La aventura de Intel en el mundo de las criptomonedas ha finalizado de un modo repentino. Tom's Hardware reporta que la compañía ha decidido discontinuar Blockscale, su chip dedicado a equipos para m… [+4462 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Turkey election: Kremlin rejects accusations of interference",
      description:
        'Opposition candidate Kemal Kilicdaroglu said Russia was behind "montages and deep fake content".',
      url: "https://www.bbc.co.uk/news/world-europe-65574312",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/12071/production/_129714837_f65bd39a0593a238873aa5ccd9e05130ab0f5b290_0_5500_36671000x667.jpg",
      publishedAt: "2023-05-12T16:20:23Z",
      content:
        'The Kremlin has denied interfering in Turkey\'s elections after the opposition candidate, Kemal Kilicdaroglu, accused Russia of "meddling".\r\nSpokesman Dmitry Peskov said Russians did not interfere in … [+2330 chars]',
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mat Smith",
      title:
        "The Morning After: White House proposes a 30 percent tax on electricity used for crypto mining",
      description:
        "The Biden administration wants to impose a 30 percent tax, called the Digital Asset Mining Energy or DAME excise tax, on the electricity used for cryptocurrency mining. It explained it wants to tax crypto-mining companies because they aren't paying for the \"f…",
      url: "https://www.engadget.com/the-morning-after-white-house-proposes-a-30-percent-tax-on-electricity-used-for-crypto-mining-095933394.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/WT0rf.kcraACXJO_L1CMOg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/77b3f5d0-e9ad-11ed-b6dd-8ea4ea1b0a6b.cf.jpg",
      publishedAt: "2023-05-04T09:59:33Z",
      content:
        "The Biden administration wants to impose a 30 percent tax, called the Digital Asset Mining Energy or DAME excise tax, on the electricity used for cryptocurrency mining. It explained it wants to tax c… [+3753 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Enrique Pérez",
      title:
        "El Bitcoin necesita ayuda: su futuro pasa por las manos de cuatro programadores y cada vez están más quemados",
      description:
        "Tras más de nueve años como principal desarrollador, Van der Laan abandonó el repositorio de Bitcoin Core en Github el pasado mes de febrero. No solo fue una pérdida de gran calado, también es representación del estado actual de la red principal de Bitcoin. A…",
      url: "https://www.xataka.com/criptomonedas/bitcoin-necesita-ayuda-su-futuro-pasa-manos-cuatro-programadores-cada-vez-estan-quemados",
      urlToImage: "https://i.blogs.es/a7e1d3/bitcoin-core/840_560.jpeg",
      publishedAt: "2023-05-07T17:01:12Z",
      content:
        "Tras más de nueve años como principal desarrollador, Van der Laan abandonó el repositorio de Bitcoin Core en Github el pasado mes de febrero. No solo fue una pérdida de gran calado, también es repres… [+5298 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Max Adams",
      title:
        "Crypto is either dead in the water or about to notch new records as soon as next year - it depends on who you ask",
      description:
        "Insider breaks down some divergent views on the fate of the cryptocurrency market.",
      url: "https://www.businessinsider.com/crypto-dead-bitcoin-prediction-100000-2024-chamath-palihapitiya-cryptocurrency-podcast-2023-4",
      urlToImage:
        "https://i.insider.com/6446dda5120cd7001865ea56?width=1200&format=jpeg",
      publishedAt: "2023-04-25T10:16:07Z",
      content:
        "Good morning. I'm senior editor, Max Adams. \r\nYou don't have to be an avid follower of the media's comings and goings to know that yesterday was a momentous day for cable news. \r\nSpecifically, two of… [+5289 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Morgan Chittum",
      title:
        "Ethereum drops 7% amid wider crypto sell-off as traders assess rate uncertainty",
      description:
        "From whales unloading massive positions to broader uncertainty, crypto experts weigh in on what's causing the downside pressure.",
      url: "https://markets.businessinsider.com/news/currencies/ethereum-price-crypto-market-crash-bitcoin-doge-solana-inflation-recession-2023-4",
      urlToImage:
        "https://i.insider.com/643fdff83f6f690018de75e5?width=1200&format=jpeg",
      publishedAt: "2023-04-19T15:13:57Z",
      content:
        "(Photo illustration by Jonathan Raa/NurPhoto via Getty Images)\r\n<ul>\n<li>Ethereum fell as much as 7% and bitcoin fell 3% in under 30 minutes early Wednesday.</li>\n<li>Altcoins are taking hits too, wi… [+2555 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "George Glover",
      title:
        "Galaxy Digital will move more of its operations offshore because of a 'regulatory headache' in the US, billionaire crypto bull Mike Novogratz says",
      description:
        '"We still have a hangover … from the denting of trust that FTX and other bad actors in the space created," Novogratz told analysts on Tuesday.',
      url: "https://markets.businessinsider.com/news/currencies/billionaire-crypto-investor-mike-novogratz-galaxy-digital-offshore-bitcoin-regulation-2023-5",
      urlToImage:
        "https://i.insider.com/6138995c2534ab0018534131?width=1200&format=jpeg",
      publishedAt: "2023-05-10T11:38:28Z",
      content:
        "Galaxy Digital will move more of its crypto operations offshore, billionaire investor Mike Novogratz said Tuesday.Lucas Jackson/Reuters\r\n<ul>\n<li>Galaxy Digital will move more of its operations offsh… [+2292 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Max Zahn",
      title:
        "Bitcoin has climbed 65% this year despite crypto woes. Experts explain why.",
      description:
        "The digital currency benefited from a shift to well-known coins, experts said.",
      url: "https://abcnews.go.com/Business/bitcoin-climbed-65-year-despite-crypto-woes-experts/story?id=99252922",
      urlToImage:
        "https://s.abcnews.com/images/Business/bitcoin-1-rt-er-230511_1683820816546_hpMain_16x9_992.jpg",
      publishedAt: "2023-05-12T09:16:52Z",
      content:
        "The cryptocurrency industry, in recent months, has suffered some blows: high-profile bankruptcies, the arrest of wunderkind Sam Bankman-Fried and a regulator lawsuit against top crypto exchange Binan… [+4192 chars]",
    },
    {
      source: {
        id: null,
        name: "ReadWrite",
      },
      author: "Joel Comm",
      title: "How to Beat the Crypto Tax Crisis",
      description:
        "Clinton Donnelly has a horror story that could keep many crypto investors awake at night. The CPA, who specializes in calculating taxes on crypto profits, had a client who came to him after being arrested by the IRS. The client wasn’t a crypto trader. He hadn…",
      url: "https://readwrite.com/how-to-beat-the-crypto-tax-crisis/",
      urlToImage:
        "https://images.readwrite.com/wp-content/uploads/2022/10/Buying-and-Selling-Cryptocurrency.jpg",
      publishedAt: "2023-05-03T12:00:44Z",
      content:
        "Clinton Donnelly has a horror story that could keep many crypto investors awake at night.\r\nThe CPA, who specializes in calculating taxes on crypto profits, had a client who came to him after being ar… [+5069 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Enrique Pérez",
      title:
        "El gran secreto de Bután: han estado minando Bitcoin silenciosamente en el Himalaya durante años",
      description:
        "Bután es un reino budista con menos de 800.000 habitantes. Es uno de los países más pequeños del mundo y está oculto entre los valles y montañas que conforman el Himalaya. Su economía se basa principalmente en el turismo, pero desde hace años han estado traba…",
      url: "https://www.xataka.com/criptomonedas/gran-secreto-butan-han-estado-minando-bitcoin-silenciosamente-himalaya-durante-anos",
      urlToImage: "https://i.blogs.es/726e7b/butan-templo/840_560.jpeg",
      publishedAt: "2023-05-02T16:30:37Z",
      content:
        "Bután es un reino budista con menos de 800.000 habitantes. Es uno de los países más pequeños del mundo y está oculto entre los valles y montañas que conforman el Himalaya. Su economía se basa princip… [+2656 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Luke Taylor in Bogotá",
      title:
        "How two Colombians were ensnared in Bukele’s gang crackdown in El Salvador",
      description:
        "Hoping to find work and prosperity in tech-friendly ‘paradise’, the two men instead found ‘hell’ after being arrested and locked up in squalid prisons for three monthsJose Antonio Potes and his childhood friend Manuel Castrillón travelled to El Salvador hopin…",
      url: "https://www.theguardian.com/world/2023/may/16/how-two-colombians-were-ensnared-in-bukeles-gang-crackdown-in-el-salvador",
      urlToImage:
        "https://i.guim.co.uk/img/media/a87af6fbff20556700e82ed0c1f9ee9cbbfe982e/0_224_6720_4032/master/6720.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=10785965cd7e3426416f1e47dd68743c",
      publishedAt: "2023-05-16T09:00:05Z",
      content:
        "Jose Antonio Potes and his childhood friend Manuel Castrillón travelled to El Salvador hoping to find the safe, prosperous, tech-friendly paradise that they had heard about in Colombian media.\r\nPresi… [+6460 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "BeauHD",
      title: "OpenAI's Sam Altman Set To Raise $100 Million For Worldcoin",
      description:
        "According to the Financial Times, OpenAI CEO Sam Altman is close to raising around $100 million in funding for his Worldcoin cyrpto project. Markets Insider reports: Worldcoin is in advanced talks to raise the cash from both new and existing investors ahead o…",
      url: "https://slashdot.org/story/23/05/15/2215220/openais-sam-altman-set-to-raise-100-million-for-worldcoin",
      urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      publishedAt: "2023-05-16T00:45:00Z",
      content:
        "Worldcoin is in advanced talks to raise the cash from both new and existing investors ahead of a potential launch within the next few weeks, the Financial Times said Sunday, citing three people with … [+895 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Mark Mantel",
      title: "Blockscale: Intel gibt seine Bitcoin-Miner auf",
      description:
        "Weitere Konsolidierung bei Intel: Die Firma stellt die Entwicklung von ASICs fürs Krypto-Mining ein, schließt eine Wiederkehr aber nicht aus.",
      url: "https://www.heise.de/news/Blockscale-Intel-gibt-seine-Bitcoin-Miner-auf-8971444.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/5/4/7/2/Intel_Bitcoin-4cda2db81899e691.jpg",
      publishedAt: "2023-04-19T08:04:00Z",
      content:
        "Intel hat den Produktionsstopp seiner anwendungsspezifischen Schaltungen (ASICs) fürs Mining der Kryptowährung Bitcoin bekannt gegeben. Unternehmenskunden können Modelle aus der aktuellen Blockscale-… [+2376 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Matthew Fox",
      title:
        "US stocks trade mostly lower as fresh economic data spurs new recession fears",
      description:
        '"Recessions are like this odorless gas. They catch up on you," top economist David Rosenberg warned investors on Thursday.',
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-jobless-claims-spike-reignites-recession-fears-2023-5",
      urlToImage:
        "https://i.insider.com/61e706f67c6a200018426a8c?width=1200&format=jpeg",
      publishedAt: "2023-05-11T20:08:35Z",
      content:
        "Photo by Spencer Platt/Getty Images\r\n<ul><li>US stocks were mostly lower on Thursday after weekly jobless claims jumped to the highest level since October 2021.</li><li>Initial jobless claims surged … [+2751 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Matthew Fox",
      title:
        "US stocks dip after renewed banking concerns and rise in jobless claims",
      description:
        "So far 90% of S&P 500 companies have reported first-quarter earnings, with 77% beating profit estimates by a median of 8%.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-us-weekly-unemployment-jobless-claims-jump-2023-5",
      urlToImage:
        "https://i.insider.com/6357e18dfc29ff001a5f46dc?width=1200&format=jpeg",
      publishedAt: "2023-05-11T13:38:34Z",
      content:
        "Traders work the floor of the New York Stock Exchange during morning trading on May 05, 2022 in New York City.Michael M. Santiago/Getty\r\n<ul><li>US stocks fell on Thursday after weekly jobless claims… [+2712 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Matthew Fox",
      title:
        "US stocks trade mixed as investors weigh solid earnings against continued bank stress",
      description:
        "A poor earnings report from First Republic Bank sent the stock to new all-time lows as it failed to stem deposit outflows.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-first-republic-instability-reignites-bank-fears-2023-4",
      urlToImage:
        "https://i.insider.com/64497c9a9052390019700ee1?width=1200&format=jpeg",
      publishedAt: "2023-04-26T20:05:44Z",
      content:
        "Traders look on after trading was halted on the floor of the New York Stock Exchange (NYSE) in New York, U.S., March 18, 2020Lucas Jackson/Reuters\r\n<ul><li>US stocks were mixed on Wednesday after str… [+2598 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "George Glover",
      title:
        "What is Pepecoin? Everything you need to know about the meme token that notched a $1.6 billion market cap then crashed 70% within days",
      description:
        "Like Dogecoin and Shiba Inu, the frog-based cryptocurrency is a meme token that has no use case and trades at a fraction of a cent.",
      url: "https://markets.businessinsider.com/news/currencies/what-is-pepecoin-pepe-memecoins-dogecoin-shiba-inu-crypto-news-2023-5",
      urlToImage:
        "https://i.insider.com/6462178e11971c00188f48b1?width=1200&format=jpeg",
      publishedAt: "2023-05-15T14:08:28Z",
      content:
        'Pro-democracy protesters wearing "Pepe the Frog" masks during a march in Hong Kong.AP Photo/Kin Cheung, File\r\n<ul>\n<li>Pepecoin surged to over $1 billion in market value this month, but its price has… [+3537 chars]',
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "jsor@insider.com (Jennifer Sor)",
      title:
        "Markets are facing a black swan event with 'nowhere to hide' as the latest rally has fueled a bubble that could burst at any time, veteran technical analyst says",
      description:
        '"There\'s nowhere to hide, no diversification in this type of market. This is a black swan event," one veteran technical strategist says.',
      url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-black-swan-crash-rally-bubble-burst-earnings-2023-4",
      urlToImage:
        "https://i.insider.com/644178d3632fda001803d5c1?width=1200&format=jpeg",
      publishedAt: "2023-04-20T17:50:02Z",
      content:
        "Markets are facing a black swan event, and investors have nowhere to run as the rally across markets in 2023 has inflated a dangerous bubble, according to veteran technical analyst Jeff Bierman.\r\nBie… [+1726 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Adam Popescu",
      title:
        "heise+ | Mining für den Naturschutz: Warum ein Nationalpark im Kongo Bitcoins schürft",
      description:
        "Um seine Wälder samt Tierwelt zu schützen, hat der Nationalpark Virunga im Kongo eine Bitcoin-Mining-Farm eröffnet.",
      url: "https://www.heise.de/hintergrund/Mining-fuer-den-Naturschutz-Warum-ein-Nationalpark-im-Kongo-Bitcoins-schuerft-8244190.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/0/9/3/7/0/2/aufmacher_bitcoin_mine-0f975cce5d7a941c.jpg",
      publishedAt: "2023-04-28T12:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nDie AK-47 ist schwer, aber der Mann, der die Waffe in der Hand hält, zuckt nicht mit der Wimper, als er auf dem dicht bewaldeten Berg patrouilliert. Hier im Ostkongo kostet die Mu… [+1581 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Wesley Hilliard)",
      title: "Bitcoin whitepaper removed in macOS Ventura 13.4 beta 3",
      description:
        "Apple quietly removed the Virtual Scanner II app and, with it, the Bitcoin whitepaper in the latest macOS Ventura 13.4 beta.Apple removed the Bitcoin whitepaperThere are numerous Easter eggs and hidden files in macOS that won't appear without some kind of spe…",
      url: "https://appleinsider.com/articles/23/04/25/bitcoin-whitepaper-removed-in-macos-ventura-134-beta-3",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54152-109106-53841-108287-bitcoin-o-xl.jpg",
      publishedAt: "2023-04-25T20:44:25Z",
      content:
        "Apple removed the Bitcoin whitepaper\r\nApple quietly removed the Virtual Scanner II app and, with it, the Bitcoin whitepaper in the latest macOS Ventura 13.4 beta.\r\nThere are numerous Easter eggs and … [+1376 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Enrique Pérez",
      title:
        "Golpe sorpresa de Argentina contra las criptomonedas: ha prohibido a las billeteras ofrecerlas",
      description:
        "El Banco Central de Argentina ha tomado una decisión que pocos esperaban. A partir de hoy, las billeteras virtuales no podrán operar con criptomonedas. Un movimiento que estrecha el cerco ante este tipo de activos, ya que impide su acceso desde un gran número…",
      url: "https://www.xataka.com/criptomonedas/golpe-sorpresa-argentina-criptomonedas-ha-prohibido-a-billeteras-ofrecerlas",
      urlToImage: "https://i.blogs.es/a30291/argentina-bitcoin/840_560.jpeg",
      publishedAt: "2023-05-05T08:12:29Z",
      content:
        "El Banco Central de Argentina ha tomado una decisión que pocos esperaban. A partir de hoy, las billeteras virtuales no podrán operar con criptomonedas. Un movimiento que estrecha el cerco ante este t… [+2220 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Enrique Pérez",
      title:
        "Ethereum está recortando distancia al Bitcoin con una fórmula ganadora: ser más descentralizado que nunca",
      description:
        "El 'cripto invierno' ha quedado atrás. Si el Bitcoin lleva un 2023 muy bueno, la segunda criptomoneda más importante está teniendo un camino similar. Ethereum se encuentra en un momento crítico, pues estos días se ha completado Shapella, su actualización más …",
      url: "https://www.xataka.com/criptomonedas/ethereum-esta-recortando-distancia-al-bitcoin-formula-ganadora-ser-descentralizado-que-nunca",
      urlToImage: "https://i.blogs.es/b9c1dd/ethereum/840_560.jpeg",
      publishedAt: "2023-04-17T10:00:44Z",
      content:
        "El 'cripto invierno' ha quedado atrás. Si el Bitcoin lleva un 2023 muy bueno, la segunda criptomoneda más importante está teniendo un camino similar. Ethereum se encuentra en un momento crítico, pues… [+3126 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Bárbara Bécares",
      title:
        "Solo quedan 4 programadores encargados de los secretos del bitcoin (de los 20 que había hace una década).... y están quemados",
      description:
        "Wladimir Van der Laan fue durante 9 años el principal desarrollador del repositorio de Bitcoin Core en Github y decidió abandonar esta posición el pasado mes de febrero y sin nombrar a un sucesor en ese cargo. Antes de él, en menos de dos años, cuatro respons…",
      url: "https://www.genbeta.com/a-fondo/solo-quedan-4-programadores-encargados-secretos-bitcoin-20-que-habia-hace-decada-estan-quemados",
      urlToImage:
        "https://i.blogs.es/21f119/kanchanara-pcmwbd6ufyo-unsplash/840_560.jpeg",
      publishedAt: "2023-05-08T08:41:51Z",
      content:
        "Wladimir Van der Laan fue durante 9 años el principal desarrollador del repositorio de Bitcoin Core en Github y decidió abandonar esta posición el pasado mes de febrero y sin nombrar a un sucesor en … [+4548 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Morgan Chittum",
      title:
        "US stocks decline as traders brace for big earnings from mega-cap tech firms",
      description:
        "Tech giants Alphabet and Microsoft are set to report quarterly results after the closing bell on Tuesday.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-microsoft-alphabet-tech-earnings-season-investing-outlook-2023-4",
      urlToImage:
        "https://i.insider.com/6447c9b190523900196fcd10?width=1200&format=jpeg",
      publishedAt: "2023-04-25T13:51:06Z",
      content:
        "Traders work on the floor of the New York Stock ExchangeSpencer Platt/Getty Images\r\n<ul>\n<li>US stocks are trading lower on Tuesday as trader braces for more earnings reports. </li>\n<li>Tech giants A… [+1813 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Morgan Chittum",
      title:
        "US stocks rise as Big Tech earnings stay strong and US GDP growth slows",
      description:
        "Meta Platforms stock jumped after reporting first-quarter results that beat Wall Street's estimates.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-meta-facebook-instagram-big-tech-gdp-growth-2023-4",
      urlToImage:
        "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
      publishedAt: "2023-04-27T13:45:37Z",
      content:
        "TIMOTHY A. CLARY / Getty\r\n<ul>\n<li>US stocks rose as Big Tech earnings stayed strong while US GDP growths slowed. </li>\n<li>Meta stock jumped after reporting first-quarter results that beat Wall Stre… [+1756 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Michael Plura",
      title:
        "heise+ | Hardware-Wallets: Bitcoin und andere Kryptowährungen sicher aufbewahren",
      description:
        "Immer wieder stehlen Hacker Kryptocoins oder bekannte Börsen gehen pleite. Eine Hardware-Wallet schützt gegen den Verlust – doch welche sollte man benutzen?​​",
      url: "https://www.heise.de/tests/Anbieter-Uebersicht-Kryptocoins-mit-Hardware-Wallets-sichern-8969077.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/4/2/4/1/Titel-034ee0d559ee0fbc.JPG",
      publishedAt: "2023-04-25T10:15:00Z",
      content:
        "Inhaltsverzeichnis\r\nViele Besitzer von Kryptowährungen gehen oft erstaunlich unbedarft mit ihrem Kapital um. Auf dem PC oder noch schlimmer dem Handy lagern Kryptocoins im Wert von hunderten, tausend… [+1911 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Martin Holland",
      title:
        "USA: Geschäftsmann soll wegen Bitcoin-Betrug 3,4 Milliarden US-Dollar zahlen",
      description:
        "Weil er mit falschen Versprechen Bitcoin eingetrieben und die veruntreut hat, muss ein südafrikanischer Geschäftsmann das Geld zurück- und eine Strafe bezahlen.",
      url: "https://www.heise.de/news/USA-Geschaeftsmann-soll-wegen-Bitcoin-Betrug-3-4-Milliarden-US-Dollar-zahlen-8981637.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/5/0/9/6/8/shutterstock_1937129161-91f75b37827ffe38.jpg",
      publishedAt: "2023-04-28T06:34:00Z",
      content:
        "Der Chef einer südafrikanischen Firma ist von einem US-Gericht dazu verurteilt worden, wegen Bitcoin-Betrugs insgesamt 3,4 Milliarden US-Dollar (3,1 Milliarden Euro) zu zahlen. Das berichtet die Nach… [+2025 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Apple removes original Bitcoin whitepaper from the latest macOS Ventura beta",
      description:
        "A few weeks ago, users discovered that every copy of macOS has the original Bitcoin whitepaper hidden in its internal files. Apple never discussed the reason for this, although we believe that the existence of the file there was just a joke among Apple engine…",
      url: "https://9to5mac.com/2023/04/25/apple-removes-bitcoin-whitepaper-from-macos/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/macOS-Bitcoin-whitepaper.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T20:14:19Z",
      content:
        "A few weeks ago, users discovered that every copy of macOS has the original Bitcoin whitepaper hidden in its internal files. Apple never discussed the reason for this, although we believe that the ex… [+1585 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Peter Rothbart,Angela Fung",
      title: "Upgrade Card Reviews 2023",
      description:
        "Read our Upgrade card reviews and see why these cards are ideal for those who want the flexibility of a credit card and the predictability of a loan.",
      url: "https://www.businessinsider.com/personal-finance/upgrade-card-reviews",
      urlToImage:
        "https://i.insider.com/6453c739dcb78700180cdd87?width=1200&format=jpeg",
      publishedAt: "2023-05-04T22:10:50Z",
      content:
        "Our experts answer readers' credit card questions and write unbiased product reviews (here's how we assess credit cards). In some cases, we receive a commission from our partners; however, our opinio… [+10713 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Anushree Dave",
      title:
        "Key Words: ‘I don’t understand why people are more inclined to go to bitcoin than gold’, says hedge fund billionaire Ray Dalio",
      description:
        "Ray Dalio, billionaire and founder of Bridgewater Associates, says he still owns a little bit of bitcoin.",
      url: "https://www.marketwatch.com/story/i-dont-understand-why-people-are-more-inclined-to-go-to-bitcoin-than-gold-says-hedge-fund-billionaire-ray-dalio-5bb0c823",
      urlToImage: "https://images.mktw.net/im-715923/social",
      publishedAt: "2023-04-26T18:05:00Z",
      content:
        "Ray Dalio, billionaire and founder of Bridgewater Associates, holds a little bit of bitcoin BTCUSD, but doesnt understand why people are more inclined to go to bitcoin than gold, he said in a new pod… [+321 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Katie Rees",
      title: "What Are Bitcoin's New BRC-20 Tokens and What Do They Do?",
      description:
        "Bitcoin's BRC-20 token standard could revolutionize the Bitcoin blockchain.",
      url: "https://www.makeuseof.com/what-are-bitcoin-brc-20-tokens/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/05/btc-eth-coins.jpg",
      publishedAt: "2023-05-08T12:05:17Z",
      content:
        "If you're into Bitcoin, you probably know it's traditionally been a one-asset blockchain. BTC has long been the only cryptocurrency that the Bitcoin blockchain supports—but that is now changing with … [+6164 chars]",
    },
    {
      source: {
        id: null,
        name: "VentureBeat",
      },
      author: "Adrian Krion, Spielworks",
      title: "From battlefield to homefront: AR is bigger than the metaverse",
      description:
        "Military uses of AR and VR can trickle down to the gaming and consumer worlds, much as the government-created internet did.",
      url: "https://venturebeat.com/virtual/from-battlefield-to-homefront-ar-bigger-than-metaverse/",
      urlToImage:
        "https://venturebeat.com/wp-content/uploads/2022/03/GettyImages-1187160851.jpg?w=1200&strip=all",
      publishedAt: "2023-04-17T20:07:00Z",
      content:
        "Join top executives in San Francisco on July 11-12, to hear how leaders are integrating and optimizing AI investments for success. Learn More\r\nThroughout modern history, the military has supplemented… [+1583 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Phil Rosen",
      title:
        "Are we in a recession? Elon Musk says the pile of failed banks proves it.",
      description:
        "Insider's Phil Rosen breaks down the latest market developments and the economic outlook of top commentators.",
      url: "https://www.businessinsider.com/recession-forecast-elon-musk-tesla-larry-summers-treasury-markets-finance-2023-5",
      urlToImage:
        "https://i.insider.com/645005d674e9330018efc32f?width=1200&format=jpeg",
      publishedAt: "2023-05-02T10:16:08Z",
      content:
        "Good morning, team. I'm Phil Rosen. If you missed it Monday, regulators seized First Republic Bank and JPMorgan took over the majority of its assets. \r\nShares crashed almost 50% as markets opened and… [+4794 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "George Glover",
      title:
        "FTX could relaunch - and one of its former VC backers may lead a $250 million funding round to revive the failed exchange, report says",
      description:
        "FTX executives are still in the early stages of deciding whether reviving the failed crypto exchange would be worthwhile.",
      url: "https://markets.businessinsider.com/news/currencies/ftx-relaunch-tribe-capital-vc-crypto-crash-sam-bankman-fried-2023-4",
      urlToImage:
        "https://i.insider.com/643f9f5d632fda00180393e8?width=1200&format=jpeg",
      publishedAt: "2023-04-19T09:11:10Z",
      content:
        "The logo of FTX at the entrance of the FTX Arena in Miami, Florida.Marco Bello/Reuters\r\n<ul>\n<li>Tribe Capital may lead a $250 million funding round to reboot FTX, according to Bloomberg.</li>\n<li>Tr… [+2315 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Carla Mozée",
      title:
        "US stocks fall as investors assess latest earnings and climbing bond yields",
      description:
        "The S&P 500 was on course to fall for the first time after two straight days of gains. Morgan Stanley and Netflix shares were on the move.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-dow-nasdaq-earnings-bond-yields-banks-netflix-2023-4",
      urlToImage:
        "https://i.insider.com/62bad7662224c3001813f01e?width=1200&format=jpeg",
      publishedAt: "2023-04-19T13:44:18Z",
      content:
        "Traders on the floor of the New York Stock Exchange.Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks fell Wednesday, feeling the pinch from rising bond yields and as investors mulled earnings. </li>\n<l… [+2148 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Filip De Mott",
      title:
        "Gold jumps above stocks as Americans' preferred long-term investment while real estate plunges",
      description:
        "The share of Americans who view gold as the best long-term investment jumped to 26% this year from 15% in 2022, according to a Gallup poll.",
      url: "https://markets.businessinsider.com/news/commodities/best-long-term-investment-gold-vs-stocks-real-estate-gallup-2023-5",
      urlToImage:
        "https://i.insider.com/645e5473d391de0019bdb1f1?width=1200&format=jpeg",
      publishedAt: "2023-05-12T16:44:51Z",
      content:
        "Stocks to buy before earnings.Caspar Benson/Getty Images\r\n<ul>\n<li>Gold has jumped above stocks as Americans' preferred investment, according to a Gallup survey.</li>\n<li>The share who view gold as t… [+1903 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Jason Ma",
      title:
        "US stocks climb on strong Chinese economic growth and upbeat earnings",
      description:
        "Bank of America and Johnson & Johnson beat first-quarter earnings views, while Goldman Sachs missed.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-china-gdp-growth-goldman-sachs-earnings-2023-4",
      urlToImage:
        "https://i.insider.com/63975699a3bebb0018b40e0e?width=1200&format=jpeg",
      publishedAt: "2023-04-18T13:33:56Z",
      content:
        "Traders work on the floor of the New York Stock Exchange (NYSE) on October 27, 2022 in New York City.Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks rose Tuesday as China's first-quarter GDP growth of… [+2045 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Morgan Chittum",
      title:
        "Dogecoin has surged 24% in a month, outperforming major cryptos on Elon Musk's antics",
      description:
        "Dogecoin added to gains on Monday, spiking 6%. Elon Musk has offered a million dogecoin to whoever can prove his family owned an emerald mine.",
      url: "https://markets.businessinsider.com/news/currencies/dogecoin-price-elon-musk-twitter-crypto-market-outlook-bitcoin-ethereum-2023-4",
      urlToImage:
        "https://i.insider.com/643d3b1556f0dc0019895edc?width=1200&format=jpeg",
      publishedAt: "2023-04-17T15:37:07Z",
      content:
        "Carina Johansen/NTB/AFP via Getty Images\r\n<ul>\n<li>Dogecoin has jumped 24% in the past month, according to Messari.</li>\n<li>The token's price often fluctuates on comments from Twitter and Tesla CEO … [+1783 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Jennifer Sor",
      title:
        "US stocks fall as debt ceiling jitters rattle investors and markets brace for April inflation report",
      description:
        'Failing to raise the debt ceiling in time could result in a "catastrophe" for the US economy, Treasury Secretary Janet Yellen warned on Monday.',
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-us-debt-default-inflation-report-fed-2023-5",
      urlToImage:
        "https://i.insider.com/5ec7c331988ee341d61f6164?width=1200&format=jpeg",
      publishedAt: "2023-05-09T20:06:52Z",
      content:
        "Getty Images / Xinhua News Agency\r\n<ul>\n<li>US stocks moved lower on Tuesday amid growing fears of a US debt default.</li>\n<li>President Joe Biden was due to meet top lawmakers to discuss the debt ce… [+2285 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Phil Rosen",
      title:
        "US stocks slip ahead of debt-ceiling talks as default fears creep into markets",
      description:
        "President Joe Biden is set to meet with House Speaker Kevin McCarthy Tuesday afternoon to discuss the looming debt ceiling deadline.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-debt-ceiling-biden-congress-default-2023-5",
      urlToImage:
        "https://i.insider.com/645a427a65a21600192fbd36?width=1200&format=jpeg",
      publishedAt: "2023-05-09T13:38:07Z",
      content:
        "Joe Biden speaking at an event on September 16, 2014.AP\r\n<ul>\n<li>US stocks slipped Tuesday as investors watched for updates on the debt ceiling stalemate.</li>\n<li>President Joe Biden and House Spea… [+1952 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Morgan Chittum",
      title:
        "US stocks fall after Fed raises rates but points to possible pause on further increases",
      description:
        "Hopes for a pivot to rate cuts from the Fed were dampened after Chairman Jerome Powell expressed optimism about avoiding a recession.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-signals-future-rate-hike-pause-2023-5",
      urlToImage:
        "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
      publishedAt: "2023-05-03T20:09:56Z",
      content:
        "The central bank hiked rates by 25 basis points, as was widely expected.TIMOTHY A. CLARY / Getty\r\n<ul>\n<li>US stocks fell on Wednesday as markets digested the latest Fed rate hike of 25 basis points.… [+2212 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Morgan Chittum",
      title: "US stocks rise as markets prepare for Fed's next policy decision",
      description:
        "Wall Street will be closely watching Fed Chair Jerome Powell's comments for signals of future central bank tightening.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-powell-interest-rate-hike-inflation-2023-5",
      urlToImage:
        "https://i.insider.com/6452599df6389a0018ef4781?width=1200&format=jpeg",
      publishedAt: "2023-05-03T13:38:56Z",
      content:
        "Traders work on the floor of the New York Stock ExchangeSpencer Platt/Getty Images\r\n<ul>\n<li>US stocks rose slightly as traders brace for the Fed's next rate move.</li>\n<li>Markets are pricing in 87%… [+1973 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Jennifer Sor",
      title:
        "US stocks trade mixed as investors assess wave of earnings results from big companies",
      description:
        "Earnings season has kicked off in earnest. Investors are looking past results from the biggest banks and getting ready for big tech firms to report.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-bofa-gs-jnj-corporate-earnings-economy-2023-4",
      urlToImage:
        "https://i.insider.com/5e7cc4132d41c150481afc74?width=1200&format=jpeg",
      publishedAt: "2023-04-18T20:24:04Z",
      content:
        "Traders work on the floor of the New York Stock Exchange (NYSE) in New York, U.S., March 20, 2020Lucas Jackson/Reuters\r\n<ul>\n<li>Stocks traded mixed on Tuesday as investors digested the wave of earni… [+2430 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Morgan Chittum",
      title:
        "US stocks trade mixed as traders wait for next wave of corporate earnings reports",
      description:
        "Bank of America, Goldman Sachs, and Tesla are all expected to deliver quarterly results this week.",
      url: "https://markets.businessinsider.com/news/stocks/stock-markets-news-dow-nasdaq-corporate-quarterly-earnings-inflation-fed-2023-4",
      urlToImage:
        "https://i.insider.com/643d429556f0dc0019895fcf?width=1200&format=jpeg",
      publishedAt: "2023-04-17T13:36:54Z",
      content:
        "Stock tradersDrew Angerer/Getty Images\r\n<ul>\n<li>Moves in stock indexes were muted Monday on corporate earnings uncertainty.</li>\n<li>First-quarter earnings kicked off on Friday, with strong results … [+1847 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Morgan Chittum",
      title:
        "US stocks trade mixed as Wall Street digests slew of earnings results",
      description:
        "The S&P 500 and Dow Jones Industrial Average are headed for their worst trading week since March.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-pg-q1earnings-results-2023-4",
      urlToImage:
        "https://i.insider.com/644286d277ecc80019e5b9de?width=1200&format=jpeg",
      publishedAt: "2023-04-21T13:41:47Z",
      content:
        "Friday's inflation print shocked investors.Xinhua News Agency/Getty Images\r\n<ul>\n<li>US stocks were mixed Friday but largely flat amid more earnings reports.</li>\n<li>Over 75% of S&P 500 companies th… [+2020 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Morgan Chittum",
      title:
        "US stocks rise but close lower for the week as investors mull mixed bag of corporate earnings",
      description:
        "Mega-cap tech companies like Alphabet and Amazon are on deck to report quarterly results next week.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-mixed-earnings-reports-2023-4",
      urlToImage:
        "https://i.insider.com/6442e7c5e1a96300185aa30d?width=1200&format=jpeg",
      publishedAt: "2023-04-21T20:07:23Z",
      content:
        "Traders work on the floor of the New York Stock ExchangeMichael M. Santiago/Getty Images\r\n<ul>\n<li>US stock indices rose Friday as investors digested mixed earnings reports.</li>\n<li>However, all thr… [+1907 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Jennifer Sor",
      title:
        "US stocks tumble as investors fret over new bout of banking sector volatility",
      description:
        "Banking fears piled up on Thursday, with shares of PacWest and Western Alliance plummeting throughout the trading session.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-banking-crisis-volatility-pacwest-western-alliance-2023-5",
      urlToImage:
        "https://i.insider.com/5d7faf892e22af1a0454061d?width=1200&format=jpeg",
      publishedAt: "2023-05-04T20:22:32Z",
      content:
        "Worried traderRichard Drew/Associated Press\r\n<ul>\n<li>US stocks slid on Thursday as investors dealt with fresh volatility in bank shares.</li>\n<li>All three indexes ended the day lower, with the Dow … [+1897 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Matthew Fox",
      title:
        "US stocks jump after big-tech earnings from Microsoft don't disappoint",
      description:
        "Activision Blizzard fell 9% after a UK regulator said it would block the proposed merger between the video game company and Microsoft.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-big-tech-earnings-microsoft-alphabet-msft-2023-4",
      urlToImage:
        "https://i.insider.com/60aff56ebee0fc0019d5a090?width=1200&format=jpeg",
      publishedAt: "2023-04-26T13:34:42Z",
      content:
        "Xinhua/Wang Ying/ Getty Images\r\n<ul><li>US stocks jumped on Wednesday after strong earnings from Microsoft and Alphabet.</li><li>Microsoft surged 8% after it reported solid growth in its cloud divisi… [+1971 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Phil Rosen",
      title:
        "US stocks climb but head for a weekly loss as investors weigh debt-ceiling talks",
      description:
        "President Joe Biden and top lawmakers have postponed a meeting on the debt ceiling until next week.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-debt-ceiling-investors-biden-finance-2023-5",
      urlToImage:
        "https://i.insider.com/5f8994639e9fe40019009b41?width=1200&format=jpeg",
      publishedAt: "2023-05-12T13:38:53Z",
      content:
        "Lucas Jackson/Reuters\r\n<ul>\n<li>US stocks climbed Friday, but the major indexes remain on track for a losing week.</li>\n<li>Debt-ceiling talks drag on, and investors are weighing the implications of … [+2351 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Carla Mozée",
      title:
        "US stocks rise after CPI shows inflation rose at slowest pace in 2 years in April",
      description:
        "Stocks bounced up as April CPI data showed inflation clocked in at 4.9%, lower than what was expected by economists.",
      url: "https://markets.businessinsider.com/news/stocks/stocks-market-news-dow-inflation-cpi-nasdaq-economy-sp500-2023-5",
      urlToImage:
        "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
      publishedAt: "2023-05-10T13:38:47Z",
      content:
        "TIMOTHY A. CLARY / Getty\r\n<ul>\n<li>US stocks advanced Wednesday after the April inflation report shows further easing of consumer price pressures. </li>\n<li>Headline CPI rose to 4.9%, coming in below… [+2389 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "George Glover",
      title:
        "OpenAI chief Sam Altman is close to raising $100 million for his eyeball-scanning Worldcoin crypto project, report says",
      description:
        "Worldcoin wants to launch a new cryptocurrency that people would receive in exchange of scans of their irises.",
      url: "https://markets.businessinsider.com/news/currencies/sam-altman-chatgpt-openai-worldcoin-crypto-startup-investing-news-analysis-2023-5",
      urlToImage:
        "https://i.insider.com/6461ee9d11971c00188f461e?width=1200&format=jpeg",
      publishedAt: "2023-05-15T09:08:21Z",
      content:
        "Sam Altman is set to raise $100 million for his crypto project Worldcoin, according to the Financial Times.Lucy Nicholson/Reuters\r\n<ul>\n<li>Sam Altman is close to raising $100 million for Worldcoin, … [+2112 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Katie Rees",
      title: "The 5 Best Bitcoin Ordinal Compatible Wallets",
      description:
        "These wallets are the best choices to store your Bitcoin Ordinals.",
      url: "https://www.makeuseof.com/best-bitcoin-ordinal-compatible-wallets/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/11/crypto-wallet-pic-1.jpg",
      publishedAt: "2023-05-03T17:00:16Z",
      content:
        "Bitcoin Ordinals have amassed quite a lot of hype since their launch, so it's no surprise that users are looking for wallets in which they can store them. So, what are the best Bitcoin Ordinal-compat… [+5938 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Temitope Olatunji",
      title: "What Is Binance Auto-Invest and How Does It Work?",
      description:
        "You can now regularly buy Bitcoin and other cryptos with Binance.",
      url: "https://www.makeuseof.com/what-is-binance-auto-invest-how-does-it-work/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/a-picture-of-a-hand-carrying-a-phone-with-binance-chart.jpg",
      publishedAt: "2023-04-18T15:00:16Z",
      content:
        "Investing in cryptocurrencies requires studying price charts and spotting the right opportunities, which can sometimes be stressful depending on your strategy and what you want to achieve. But with B… [+5124 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Katie Rees",
      title: "2 Reasons Bitcoin Transaction Fees Are So High Right Now",
      description:
        "Bitcoin transaction fees are soaring once more, but what's behind the sudden rise?",
      url: "https://www.makeuseof.com/reasons-bitcoin-transaction-fees-are-so-high-right-now/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/05/btc-graph-1.jpg",
      publishedAt: "2023-05-05T17:06:17Z",
      content:
        "If you conduct a Bitcoin transaction, chances are you'll have to pay a fee. But this fee does not stay at one figure. Bitcoin transaction fees vary all the time and are affected by several factors. A… [+4563 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Dmytro Spilka",
      title:
        "What's the Difference Between a Litecoin Halving and a Bitcoin Halving?",
      description:
        "Both Bitcoin and Litecoin have halving events. But what's the difference between the two?",
      url: "https://www.makeuseof.com/litecoin-vs-bitcoin-halving/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/litecoin.jpg",
      publishedAt: "2023-04-18T12:00:17Z",
      content:
        "Often dubbed \"the silver to Bitcoin's gold,\" Litecoin shares many properties with the world's oldest and most famous cryptocurrency. Both assets have a fixed scarcity, a proof-of-work (PoW) mining sy… [+5466 chars]",
    },
    {
      source: {
        id: null,
        name: "Phandroid - News for Android",
      },
      author: "Phandroid Editors",
      title: "The Rise of Bitcoin and Cryptocurrency Scams",
      description:
        "The adoption of Bitcoin and other cryptocurrencies has significantly increased over the last few years. Unlike fiat currencies, whose usage comes with several restrictions, crypto facilitates autonomous, more secure, reliable, and low-cost transactions. While…",
      url: "https://phandroid.com/2023/04/21/the-rise-of-bitcoin-and-cryptocurrency-scams/",
      urlToImage: null,
      publishedAt: "2023-04-21T08:07:54Z",
      content:
        "The adoption of Bitcoin and other cryptocurrencies has significantly increased over the last few years. Unlike fiat currencies, whose usage comes with several restrictions, crypto facilitates autonom… [+3846 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Martin Weigel",
      title:
        "heise+ | Krypto: Wann ein privater Investor Gewinne mit Bitcoin und Co. versteuern muss",
      description:
        "Muss ein Privatmann, der Kryptowährungen verkauft oder tauscht, Gewinne versteuern? Ja, sagt der Bundesfinanzhof in einem Grundsatzurteil. Ein Überblick.",
      url: "https://www.heise.de/hintergrund/Krypto-Wann-ein-privater-Investor-Gewinne-mit-Bitcoin-und-Co-versteuern-muss-8970440.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/4/9/5/7/ct1123besteueru_124556_tig_a_online-6b679af3e430cddb.jpg",
      publishedAt: "2023-04-20T08:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nBei privaten Geschäften mit Kryptowährungen stellt sich die Frage, ob und gegebenenfalls wie Einkünfte daraus zu versteuern sind. Das Gesetz schreibt vor, was als welche Einkunfts… [+1375 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Bárbara Bécares",
      title:
        "Bután lleva años minando bitcoin en el Himalaya en secreto. Por decisión del estado...y piensa seguir",
      description:
        "Bután es un pequeño país que suena a idílico por el aura de paz y felicidad que ha vendido su monarquía al mundo, escapando del PIB o Producto Interior Bruto para medir la calidad de vida y optando por medir el bienestar de su pequeña población\r\n con un Índic…",
      url: "https://www.genbeta.com/actualidad/butan-lleva-anos-minando-bitcoin-himalaya-secreto-decision-estado-piensa-seguir",
      urlToImage:
        "https://i.blogs.es/2ac69d/aaron-santelices-zdwvvrdel8a-unsplash/840_560.jpeg",
      publishedAt: "2023-05-03T08:47:50Z",
      content:
        "Bután es un pequeño país que suena a idílico por el aura de paz y felicidad que ha vendido su monarquía al mundo, escapando del PIB o Producto Interior Bruto para medir la calidad de vida y optando p… [+3020 chars]",
    },
    {
      source: {
        id: null,
        name: "Threadreaderapp.com",
      },
      author: null,
      title:
        "BlueSky ToS gives Jack a 'perpetual' & 'irrevocable' license to all your content",
      description:
        "@ashleygjovik: BlueSky Terms of Service gives Jack a 'perpetual' & 'irrevocable' license to all your content (posts, name, likeness, pics) BlueSky can delete your account for any reason, but may refuse to delete it ...…",
      url: "https://threadreaderapp.com/thread/1651686218319425570.html",
      urlToImage:
        "https://threadreaderapp.com/images/screenshots/thread/1651686218319425570.jpg",
      publishedAt: "2023-04-29T18:11:00Z",
      content:
        "Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]",
    },
    {
      source: {
        id: null,
        name: "Everstrike.io",
      },
      author: "Andreas Krom",
      title:
        "How An Obscure OTC-Traded Derivative From The 80s Took Over Crypto",
      description:
        "This is the story of the perpetual future - a financial derivative that went from being an obscure OTC-traded derivative that nobody cared about - to being the largest and most successful derivative in the crypto space, trading more than $18T annually.\n\n\nThe …",
      url: "https://blog.everstrike.io/how-an-obscure-otc-traded-derivative-took-over-crypto/",
      urlToImage:
        "https://blog.everstrike.io/content/images/2023/05/Screenshot-from-2023-05-05-23-56-21-2.png",
      publishedAt: "2023-05-13T20:46:15Z",
      content:
        "This is the story of the perpetual future - a financial derivative that went from being an obscure OTC-traded derivative that nobody cared about - to being the largest and most successful derivative … [+9349 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Wasay Ali",
      title: "What Is Crypto Unit Bias? How to Avoid Being Tricked By It",
      description: "Don't get fooled by the units. Look at the bigger picture.",
      url: "https://www.makeuseof.com/what-is-crypto-unit-bias/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/inserting-a-coin-in-a-black-piggy-bank.jpg",
      publishedAt: "2023-05-04T11:15:17Z",
      content:
        "Crypto unit bias is a common phenomenon that describes how investors are more likely to invest in whole units of a cryptocurrency rather than fractional ones due to a psychological tendency to prefer… [+7240 chars]",
    },
    {
      source: {
        id: "die-zeit",
        name: "Die Zeit",
      },
      author: "ZEIT ONLINE: News -",
      title: "Digitalwährungen: Bitcoin bleibt nach Rally unter Druck",
      description: "",
      url: "https://www.zeit.de/zustimmung?url=https%3A%2F%2Fwww.zeit.de%2Fnews%2F2023-04%2F21%2Fbitcoin-bleibt-nach-rally-unter-druck",
      urlToImage: null,
      publishedAt: "2023-04-21T07:57:11Z",
      content:
        "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=8a5ec1c1430a4a2585d2f0c4a6cdd60b&page=1pageSize=10";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  handleBackClick = async () => {
    console.log("back");
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=8a5ec1c1430a4a2585d2f0c4a6cdd60b
        &page=${this.state.page - 1}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("next");
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=8a5ec1c1430a4a2585d2f0c4a6cdd60b
        &page=${this.state.page + 1}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <>
        <h1>News Updater - for daily updates</h1>

        <div className={styles.r}>
          <div className={styles.flex}>
            {this.state.articles.map((element) => {
              return (
                <div className="" key={element.url}>
                  <Newsbox
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description ? element.description.slice(0, 60) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <button type="button" disabled={this.state.page <= 1} className={styles.btn} onClick={this.handleBackClick}>&laquo; Back</button>
        <button type="button" className={styles.btn} onClick={this.handleNextClick}>Next &raquo;</button>
      </>
    );
  }
}
