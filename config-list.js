const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [

  {
    title: '斐姨所思【阿姨想知道】',
    feedID: 'fanamericantime-interview',
    homepageURL: 'https://www.youtube.com/channel/UC2VKL-DkRvXtWkfjMzkYvmw',
    itemFilters: [
      ItemFiltersPreset.between30minTo180Min,
      (item) => { return (item.title.indexOf('斐姨所思 【阿姨想知道】') > -1) }
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '蒼藍鴿聊醫學',
    feedID: 'bluepigeon0810',
    homepageURL: 'https://www.youtube.com/channel/UCUn77_F5A65HViL9OEvIpLw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '萊斯 新Game報',
    feedID: 'LiceMoo-GameNews',
    homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
    thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('《新Game報') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '大閒者 偷閒加油站',
    feedID: 'Idlers-GameNews',
    homepageURL: 'https://www.youtube.com/channel/UCU6nhA37pbvzw-JXhAB87Mg',
    thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('偷閒加油站') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: 'SHIN LI信用卡優惠',
    feedID: 'SHINLI',
    homepageURL: 'https://www.youtube.com/channel/UCK-qc_POQZwWrMg-Pr-oYtg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
    //maxItems: 2, // default 10
    options: {
      maxItems: 3
    }
  },
  {
    title: '四處觀察',
    feedID: 'sichuguancha',
    homepageURL: 'https://www.youtube.com/channel/UC6OeJCR9gHsJPVyNhXfK4tA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '我的學習筆記',
    feedID: 'mynotebooks',
    homepageURL: 'https://www.youtube.com/channel/UCAS8QqEyGGH71xYgFzNSbuw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Sky game',
    feedID: 'Sky_game',
    homepageURL: 'https://www.youtube.com/channel/UC4D6eg7KWWiXNJVTXtuyZfA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'PAPAYA 電腦教室',
    feedID: 'papayaclass',
    homepageURL: 'https://www.youtube.com/channel/UCdEpz2A4DzV__4C1x2quKLw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '老孫聊遊戲',
    feedID: 'oldsungame',
    homepageURL: 'https://www.youtube.com/channel/UCKPflKAE2Y1tm8VSi32iboQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '极客湾Geekerwan',
    feedID: 'geekerwan1024',
    homepageURL: 'https://www.youtube.com/channel/UCeUJO1H3TEXu2syfAAPjYKQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'PanSci 泛科學',
    feedID: 'PanScitw',
    homepageURL: 'https://www.youtube.com/channel/UCuHHKbwC0TWjeqxbqdO-N_g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '老K遊戲',
    feedID: 'oldk_gaming',
    homepageURL: 'https://www.youtube.com/channel/UCzwDTv787dbP0fiiS73HWHQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Watuber蛙家有個蛙土伯',
    feedID: 'wajatw',
    homepageURL: 'https://www.youtube.com/channel/UChEpXBOkRb9voZ45THsXncg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '泛科學院',
    feedID: 'panscischool',
    homepageURL: 'https://www.youtube.com/channel/UCATnB3v_NkTTd9iD_4W2A-g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '35線上賞屋',
    feedID: '35visitchannel',
    homepageURL: 'https://www.youtube.com/channel/UCnWB4yjKnm6AeW-pj4E3dQw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '超認真少年Imserious',
    feedID: 'imseriou',
    homepageURL: 'https://www.youtube.com/channel/UCckzc03-ycrpB1XIUfRhpnw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '山小日子',
    feedID: 'Samsdailyproduction',
    homepageURL: 'https://www.youtube.com/channel/UCcFEKnC141Fg-YSltWOmDaA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '钟文泽',
    feedID: 'zhongwenze',
    homepageURL: 'https://www.youtube.com/channel/UCT1YrR_CLpwosODYagzhm7Q',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '六指淵 Huber',
    feedID: 'huber0203',
    homepageURL: 'https://www.youtube.com/channel/UC7ia-A8gma8qcdC6GDcjwsQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '彼得森評3C',
    feedID: 'Petersun',
    homepageURL: 'https://www.youtube.com/channel/UCl9BPXjyEmA0q6IrQvsEazA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '好機車',
    feedID: 'HOWGG',
    homepageURL: 'https://www.youtube.com/channel/UCZzu2JGOMNNz-UYZ7TERDNg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Huan 聊3C',
    feedID: 'huan2322',
    homepageURL: 'https://www.youtube.com/channel/UCpmx8TiMv9yR1ncyldGyyVA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '希治閣【遊戲情報科】',
    feedID: 'ScaryplayTTV',
    homepageURL: 'https://www.youtube.com/channel/UCk25FUc8pLiP3A6Zniknxbg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '零度解说',
    feedID: 'lingdujieshuo',
    homepageURL: 'https://www.youtube.com/channel/UCvijahEyGtvMpmMHBu4FS2w',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '我是阿皮啊 聊 3C',
    feedID: 'user-sy2bg2vj4v',
    homepageURL: 'https://www.youtube.com/channel/UCoZ9EFEofFgyRCdh5tPM2yw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '游戲指南針',
    feedID: 'YouXiZhiNanZhen',
    homepageURL: 'https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '軒少改機頻道',
    feedID: 'HinSiu2',
    homepageURL: 'https://www.youtube.com/channel/UCSlrYjn39D7GndyrfObHljQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '懷爸瘋科技',
    feedID: 'jono_craztech',
    homepageURL: 'https://www.youtube.com/channel/UCP87m51BCpfat9lxD533Mqw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '陳寗',
    feedID: 'NingSelect',
    homepageURL: 'https://www.youtube.com/channel/UCwxkPMOdYr6MxKjyUPWCOuQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '林亦LYi 聊 3C',
    feedID: 'lyi',
    homepageURL: 'https://www.youtube.com/channel/UC4dtpugIYK56S_7btf5a-iQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '無遠弗屆教學教室',
    feedID: 'wuyuanweb',
    homepageURL: 'https://www.youtube.com/channel/UCXDP8XCQyoldEiaIRhHz-Vw',
    itemFilters: ItemFiltersPreset.between6minTo60Min,
  },
  { 
    title: '萊丘 Laichu 聊 3C',
    feedID: 'LaichuTV',
    homepageURL: 'https://www.youtube.com/channel/UCHSFWd7MUGTY7xRdiGeMALw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { 
    title: '玄离199 聊 軟體',
    feedID: 'XuanLi199',
    homepageURL: 'https://www.youtube.com/channel/UCMFDB701nr3qHVH3eYvujKA',
    itemFilters: ItemFiltersPreset.between1minTo10Min,
  },
  {
    title: 'Emmy追劇時間 看財經',
    feedID: 'emmytw',
    homepageURL: 'https://www.youtube.com/channel/UCUkwvRrpvWkocNdk9qIpRSw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  // {
  //   title: '筆吧評測室',
  //   feedID: 'Bibalaptop',
  //   homepageURL: 'https://www.youtube.com/channel/UCpIh66B9h_tWfXDcjTYlucA',
  //   itemFilters: ItemFiltersPreset.between6minTo60Min,
  // },
  // {
  //   title: '0號手稿 看ACG',
  //   feedID: 'user-soulkao_0',
  //   homepageURL: 'https://www.youtube.com/channel/UCbWIKVoPlnahOJj8OZ3kSZA',
  //   itemFilters: ItemFiltersPreset.between3minTo30Min,
  // },
  // {
  //   title: '紫骷 玩遊戲',
  //   feedID: 'Zikukirby',
  //   homepageURL: 'https://www.youtube.com/channel/UCQceikp-aRr_e5uCARuPvEQ',
  //   itemFilters: ItemFiltersPreset.between3minTo30Min,
  // },
  
  {
    title: 'AI超元域',
    feedID: 'AIsuperdomain',
    homepageURL: 'https://www.youtube.com/channel/UCIomFkAj4Vq_rGX2Jot7D8A',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'The walking fish 步行魚',
    feedID: 'the_walking_fish',
    homepageURL: 'https://www.youtube.com/channel/UCXgnKgUBxUlRABoWK7a5A5Q',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '技术爬爬虾  TechShrimp',
    feedID: 'Tech_Shrimp',
    homepageURL: 'https://www.youtube.com/channel/UCa6D2k5qhpOI9I-WT8fpd6g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'AI开发者-就爱瞎鼓捣',
    feedID: 'techdiylife',
    homepageURL: 'https://www.youtube.com/channel/UC8uOgHOAH_k-ee-bHA0GQFQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '獨角獸那麼叫',
    feedID: 'unicorn-roar',
    homepageURL: 'https://www.youtube.com/channel/UCQ3GunBqsEm0-WkiblbO7uw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'AI-最佳拍檔',
    feedID: 'AI-bestpartners',
    homepageURL: 'https://www.youtube.com/channel/UCGWYKICLOE8Wxy7q3eYXmPA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: '志祺七七 X 圖文不符',
      feedID: 'shasha77',
      homepageURL: 'https://www.youtube.com/channel/UCiWXd0nmBjlKROwzMyPV-Nw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.endsWith('｜志祺七七')) }
      ], // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
      maxItems: 3
    },
  ]
}


module.exports = feedList
