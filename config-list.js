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
    title: '瘋狂老爹',
    feedID: 'kenzx1990',
    homepageURL: 'https://www.youtube.com/channel/UCO0S5GZgbF5NVZ3IsKLZ2bA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  // 滿了！！！
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
