"use strict";
const billList = [
  {
    id: 1,
    label: "SSQ\u501F\u5457-1",
    jkrq: "2021/04/07",
    jkje: 2e4,
    bhje: "21155.36",
    hkfs: "\u5148\u606F\u540E\u672C",
    done: true,
    hklb: [
      {
        day: "2021/05/05",
        count: 180,
        desc: "\u7B2C1\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F180.00"
      },
      {
        day: "2021/06/05",
        count: 180,
        desc: "\u7B2C2\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F180.00"
      },
      {
        day: "2021/07/05",
        count: 180,
        desc: "\u7B2C3\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F180.00"
      },
      {
        day: "2021/08/05",
        count: 180,
        desc: "\u7B2C4\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F180.00"
      },
      {
        day: "2021/09/05",
        count: 180,
        desc: "\u7B2C5\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F180.00"
      },
      {
        day: "2021/10/05",
        count: 180,
        desc: "\u7B2C6\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F180.00"
      },
      {
        day: "2021/11/05",
        count: 180,
        desc: "\u7B2C7\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F180.00"
      },
      {
        day: "2021/12/05",
        count: 180,
        desc: "\u7B2C8\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F180.00"
      },
      {
        day: "2022/01/05",
        count: 186,
        desc: "\u7B2C9\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F186.00"
      },
      {
        day: "2022/02/05",
        count: 186,
        desc: "\u7B2C10\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F186.00"
      },
      {
        day: "2022/03/05",
        count: 168,
        desc: "\u7B2C11\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F168.00"
      },
      {
        day: "2022/04/05",
        count: 20186,
        desc: "\u7B2C12\u671F\u8D26\u5355,\u542B\u672C\u91D120000.00 + \u5229\u606F186.00"
      }
    ],
    bhlb: [
      {
        day: "2022/01/05",
        list: [{
          count: 186,
          desc: "\u7B2C9\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/03/08",
        list: [{
          count: 356.81,
          desc: "\u7B2C10\u300111\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/04",
        list: [
          {
            count: 120.9
          },
          {
            count: 199.03
          }
        ]
      },
      {
        day: "2022/05",
        list: [
          {
            count: 14854.62
          },
          {
            count: 3194
          },
          {
            count: 165
          },
          {
            count: 294
          },
          {
            count: 1730
          },
          {
            count: 55
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: "SSQ\u501F\u5457-2",
    jkrq: "2021/11/07",
    jkje: 13e3,
    bhje: 14309,
    hkfs: "\u5148\u606F\u540E\u672C",
    done: false,
    hklb: [
      {
        day: "2021/12/05",
        count: 110,
        desc: "\u7B2C1\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F110.00"
      },
      {
        day: "2022/01/05",
        count: 121,
        desc: "\u7B2C2\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F121.00"
      },
      {
        day: "2022/02/05",
        count: 121,
        desc: "\u7B2C3\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F121.00"
      },
      {
        day: "2022/03/05",
        count: 110,
        desc: "\u7B2C4\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F110.00"
      },
      {
        day: "2022/04/05",
        count: 121,
        desc: "\u7B2C5\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F121.00"
      },
      {
        day: "2022/05/05",
        count: 117,
        desc: "\u7B2C6\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F117.00"
      },
      {
        day: "2022/06/05",
        count: 121,
        desc: "\u7B2C7\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F121.00"
      },
      {
        day: "2022/07/05",
        count: 117,
        desc: "\u7B2C8\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F117.00"
      },
      {
        day: "2022/08/05",
        count: 121,
        desc: "\u7B2C9\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F121.00"
      },
      {
        day: "2022/09/05",
        count: 121,
        desc: "\u7B2C10\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F121.00"
      },
      {
        day: "2022/10/05",
        count: 117,
        desc: "\u7B2C11\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F117.00"
      },
      {
        day: "2022/11/05",
        count: 13121,
        desc: "\u7B2C12\u671F\u8D26\u5355,\u542B\u672C\u91D113000.00 + \u5229\u606F121.00"
      }
    ],
    bhlb: [
      {
        day: "2022/01/05",
        list: [{
          count: 121
        }]
      },
      {
        day: "2022/03/08",
        list: [{
          count: 232,
          desc: "\u7B2C5\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/05",
        list: [{
          count: 238
        }]
      },
      {
        day: "2022/06/05",
        list: [{
          count: 121
        }]
      },
      {
        day: "2022/07/05",
        list: [{
          count: 117
        }]
      },
      {
        day: "2022/08/05",
        list: [{
          count: 121
        }]
      },
      {
        day: "2022/09/05",
        list: [{
          count: 121
        }]
      },
      {
        day: "2022/10/05",
        list: [{
          count: 117
        }]
      },
      {
        day: "2022/11/05",
        list: [{
          count: 13121
        }]
      }
    ]
  },
  {
    id: 4,
    label: "\u58EE\u58EE\u501F\u5457-1",
    jkrq: "2021/11/22",
    jkje: 4e4,
    bhje: 45360,
    hkfs: "\u5148\u606F\u540E\u672C",
    done: false,
    hklb: [
      {
        day: "2021/12/09",
        count: 272,
        desc: "\u7B2C1\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F272.00"
      },
      {
        day: "2022/01/09",
        count: 496,
        desc: "\u7B2C2\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
      },
      {
        day: "2022/02/09",
        count: 496,
        desc: "\u7B2C3\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
      },
      {
        day: "2022/03/09",
        count: 448,
        desc: "\u7B2C4\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F448.00"
      },
      {
        day: "2022/04/09",
        count: 496,
        desc: "\u7B2C5\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
      },
      {
        day: "2022/05/09",
        count: 480,
        desc: "\u7B2C6\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F480.00"
      },
      {
        day: "2022/06/09",
        count: 496,
        desc: "\u7B2C7\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
      },
      {
        day: "2022/07/09",
        count: 480,
        desc: "\u7B2C8\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F480.00"
      },
      {
        day: "2022/08/09",
        count: 496,
        desc: "\u7B2C9\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
      },
      {
        day: "2022/09/09",
        count: 496,
        desc: "\u7B2C10\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
      },
      {
        day: "2022/10/09",
        count: 480,
        desc: "\u7B2C11\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F480.00"
      },
      {
        day: "2022/11/09",
        count: 40496,
        desc: "\u7B2C12\u671F\u8D26\u5355,\u542B\u672C\u91D140000.00 + \u5229\u606F496.00"
      }
    ],
    bhlb: [
      {
        day: "2022/01/09",
        list: [{
          count: 496,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
        }]
      },
      {
        day: "2022/02/09",
        list: [{
          count: 496,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
        }]
      },
      {
        day: "2022/03/09",
        list: [{
          count: 448,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F448.00"
        }]
      },
      {
        day: "2022/04/09",
        list: [{
          count: 496,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
        }]
      },
      {
        day: "2022/05/09",
        list: [{
          count: 480,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F480.00"
        }]
      },
      {
        day: "2022/06/09",
        list: [{
          count: 496,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
        }]
      },
      {
        day: "2022/07/09",
        list: [{
          count: 480,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F480.00"
        }]
      },
      {
        day: "2022/08/09",
        list: [{
          count: 496,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
        }]
      },
      {
        day: "2022/09/09",
        list: [{
          count: 496,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F496.00"
        }]
      },
      {
        day: "2022/10/09",
        list: [{
          count: 480,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F480.00"
        }]
      },
      {
        day: "2022/11/09",
        list: [{
          count: 40496,
          desc: "\u542B\u672C\u91D140000.00 + \u5229\u606F496.00"
        }]
      }
    ]
  },
  {
    id: 5,
    label: "\u58EE\u58EE\u501F\u5457-2",
    jkrq: "2021/11/22",
    jkje: 2e4,
    bhje: 22680,
    hkfs: "\u5148\u606F\u540E\u672C",
    done: false,
    hklb: [
      {
        day: "2021/12/09",
        count: 136,
        desc: "\u7B2C1\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F136.00"
      },
      {
        day: "2022/01/09",
        count: 248,
        desc: "\u7B2C2\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
      },
      {
        day: "2022/02/09",
        count: 248,
        desc: "\u7B2C3\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
      },
      {
        day: "2022/03/09",
        count: 224,
        desc: "\u7B2C4\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F224.00"
      },
      {
        day: "2022/04/09",
        count: 248,
        desc: "\u7B2C5\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
      },
      {
        day: "2022/05/09",
        count: 240,
        desc: "\u7B2C6\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F240.00"
      },
      {
        day: "2022/06/09",
        count: 248,
        desc: "\u7B2C7\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
      },
      {
        day: "2022/07/09",
        count: 240,
        desc: "\u7B2C8\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F240.00"
      },
      {
        day: "2022/08/09",
        count: 248,
        desc: "\u7B2C9\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
      },
      {
        day: "2022/09/09",
        count: 248,
        desc: "\u7B2C10\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
      },
      {
        day: "2022/10/09",
        count: 240,
        desc: "\u7B2C11\u671F\u8D26\u5355,\u542B\u672C\u91D10.00 + \u5229\u606F240.00"
      },
      {
        day: "2022/11/09",
        count: 20248,
        desc: "\u7B2C12\u671F\u8D26\u5355,\u542B\u672C\u91D120000.00 + \u5229\u606F248.00"
      }
    ],
    bhlb: [
      {
        day: "2022/01/09",
        list: [{
          count: 248,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
        }]
      },
      {
        day: "2022/02/09",
        list: [{
          count: 248,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
        }]
      },
      {
        day: "2022/03/09",
        list: [{
          count: 224,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F224.00"
        }]
      },
      {
        day: "2022/04/09",
        list: [{
          count: 248,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
        }]
      },
      {
        day: "2022/05/09",
        list: [{
          count: 240,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F240.00"
        }]
      },
      {
        day: "2022/06/09",
        list: [{
          count: 248,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
        }]
      },
      {
        day: "2022/07/09",
        list: [{
          count: 240,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F240.00"
        }]
      },
      {
        day: "2022/08/09",
        list: [{
          count: 248,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
        }]
      },
      {
        day: "2022/09/09",
        list: [{
          count: 248,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F248.00"
        }]
      },
      {
        day: "2022/10/09",
        list: [{
          count: 240,
          desc: "\u542B\u672C\u91D10.00 + \u5229\u606F240.00"
        }]
      },
      {
        day: "2022/11/09",
        list: [{
          count: 20248,
          desc: "\u542B\u672C\u91D120000.00 + \u5229\u606F248.00"
        }]
      }
    ]
  },
  {
    id: 3,
    label: "\u82B1\u5457\u5206\u671F",
    jkrq: "2021/10/27",
    jkje: 1e4,
    bhje: 10926.89,
    hkfs: "\u7B49\u989D\u672C\u606F",
    done: false,
    bhlb: [
      {
        day: "2021/12/20",
        list: [{
          count: 906.71,
          desc: "\u7B2C1\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/03/25",
        list: [{
          count: 2766.9,
          desc: "\u7B2C2\u30013\u30014\u671F\u8D26\u5355,\u903E\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/04/10",
        list: [{
          count: 906.66,
          desc: "\u7B2C5\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/05/21",
        list: [{
          count: 906.66,
          desc: "\u7B2C6\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/06/20",
        list: [{
          count: 906.66,
          desc: "\u7B2C7\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/07/20",
        list: [{
          count: 906.66,
          desc: "\u7B2C8\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/08/11",
        list: [{
          count: 906.66,
          desc: "\u7B2C9\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/09/20",
        list: [{
          count: 906.66,
          desc: "\u7B2C10\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/10/20",
        list: [{
          count: 906.66,
          desc: "\u7B2C11\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/11/20",
        list: [{
          count: 906.66,
          desc: "\u7B2C12\u671F\u8D26\u5355"
        }]
      }
    ],
    hklb: [
      {
        day: "2021/12/20",
        count: 906.66,
        desc: "\u7B2C1\u671F\u8D26\u5355,"
      },
      {
        day: "2022/01/20",
        count: 906.66,
        desc: "\u7B2C2\u671F\u8D26\u5355,"
      },
      {
        day: "2022/02/20",
        count: 906.66,
        desc: "\u7B2C3\u671F\u8D26\u5355,"
      },
      {
        day: "2022/03/20",
        count: 906.66,
        desc: "\u7B2C4\u671F\u8D26\u5355,"
      },
      {
        day: "2022/04/20",
        count: 906.66,
        desc: "\u7B2C5\u671F\u8D26\u5355,"
      },
      {
        day: "2022/05/20",
        count: 906.66,
        desc: "\u7B2C6\u671F\u8D26\u5355,"
      },
      {
        day: "2022/06/20",
        count: 906.66,
        desc: "\u7B2C7\u671F\u8D26\u5355,"
      },
      {
        day: "2022/07/20",
        count: 906.66,
        desc: "\u7B2C8\u671F\u8D26\u5355,"
      },
      {
        day: "2022/08/20",
        count: 906.66,
        desc: "\u7B2C9\u671F\u8D26\u5355,"
      },
      {
        day: "2022/09/20",
        count: 906.66,
        desc: "\u7B2C10\u671F\u8D26\u5355,"
      },
      {
        day: "2022/10/20",
        count: 906.66,
        desc: "\u7B2C11\u671F\u8D26\u5355,"
      },
      {
        day: "2022/11/20",
        count: 906.66,
        desc: "\u7B2C12\u671F\u8D26\u5355,"
      }
    ]
  },
  {
    id: 6,
    label: "\u5FAE\u4FE1\u5FAE\u7C92\u8D37-1",
    jkrq: "2021/07/21",
    jkje: 4e4,
    hkfs: "\u7B49\u989D\u672C\u91D1",
    done: true,
    hklb: [
      {
        day: "2021/08/25",
        count: 4700,
        desc: "\u542B\u672C\u91D14000.00 + \u5229\u606F700.00"
      },
      {
        day: "2021/09/25",
        count: 4558,
        desc: "\u542B\u672C\u91D14000.00 + \u5229\u606F558.00"
      },
      {
        day: "2021/10/25",
        count: 4480,
        desc: "\u542B\u672C\u91D14000.00 + \u5229\u606F480.00"
      },
      {
        day: "2021/11/25",
        count: 4430,
        desc: "\u542B\u672C\u91D14000.00 + \u5229\u606F430.00"
      },
      {
        day: "2021/12/25",
        count: 4360,
        desc: "\u542B\u672C\u91D14000.00 + \u5229\u606F360.00"
      },
      {
        day: "2022/01/25",
        count: 4310,
        desc: "\u542B\u672C\u91D14000.00 + \u5229\u606F310.00"
      },
      {
        day: "2022/02/25",
        count: 4248,
        desc: "\u542B\u672C\u91D14000.00 + \u5229\u606F248.00"
      },
      {
        day: "2022/03/25",
        count: 4168,
        desc: "\u542B\u672C\u91D14000.00 + \u5229\u606F168.00"
      },
      {
        day: "2022/04/25",
        count: 4124,
        desc: "\u542B\u672C\u91D14000.00 + \u5229\u606F124.00"
      },
      {
        day: "2022/05/25",
        count: 4060,
        desc: "\u542B\u672C\u91D14000.00 + \u5229\u606F60.00"
      }
    ],
    bhje: 25311,
    bhlb: [
      {
        day: "2021/12/25",
        list: [{
          count: 4366,
          desc: "\u7B2C5\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/01/25",
        list: [{
          count: 4454,
          desc: "\u7B2C6\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/02/25",
        list: [{
          count: 4299,
          desc: "\u7B2C7\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/03/25",
        list: [{
          count: 4168,
          desc: "\u7B2C8\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/03/31",
        list: [{
          count: 8024,
          desc: "\u63D0\u524D\u8FD8\u6E05"
        }]
      }
    ]
  },
  {
    id: 11,
    label: "\u5FAE\u4FE1\u5FAE\u7C92\u8D37-2",
    jkrq: "2021/12/14",
    jkje: 4e3,
    hkfs: "\u7B49\u672C\u7B49\u606F",
    done: true,
    hklb: [
      {
        day: "2022/01/25",
        count: 284,
        desc: "\u542B\u672C\u91D1284.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/02/25",
        count: 259,
        desc: "\u542B\u672C\u91D1259.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/03/25",
        count: 251,
        desc: "\u542B\u672C\u91D1251.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/04/25",
        count: 253,
        desc: "\u542B\u672C\u91D1253.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/05/25",
        count: 248,
        desc: "\u542B\u672C\u91D1248.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/06/25",
        count: 247,
        desc: "\u542B\u672C\u91D1247.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/07/25",
        count: 242,
        desc: "\u542B\u672C\u91D1242.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/08/25",
        count: 241,
        desc: "\u542B\u672C\u91D1241.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/09/25",
        count: 238,
        desc: "\u542B\u672C\u91D1238.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/10/25",
        count: 233,
        desc: "\u542B\u672C\u91D1233.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/11/25",
        count: 231,
        desc: "\u542B\u672C\u91D1231.00 + \u5229\u606F00.00"
      },
      {
        day: "2022/12/25",
        count: 227,
        desc: "\u542B\u672C\u91D1227.00 + \u5229\u606F00.00"
      },
      {
        day: "2023/01/25",
        count: 225,
        desc: "\u542B\u672C\u91D1225.00 + \u5229\u606F00.00"
      },
      {
        day: "2023/02/25",
        count: 222,
        desc: "\u542B\u672C\u91D1222.00 + \u5229\u606F00.00"
      },
      {
        day: "2023/03/25",
        count: 217,
        desc: "\u542B\u672C\u91D1217.00 + \u5229\u606F00.00"
      },
      {
        day: "2023/04/25",
        count: 216,
        desc: "\u542B\u672C\u91D1216.00 + \u5229\u606F00.00"
      },
      {
        day: "2023/05/25",
        count: 212,
        desc: "\u542B\u672C\u91D1212.00 + \u5229\u606F00.00"
      },
      {
        day: "2023/06/25",
        count: 210,
        desc: "\u542B\u672C\u91D1210.00 + \u5229\u606F00.00"
      },
      {
        day: "2023/07/25",
        count: 206,
        desc: "\u542B\u672C\u91D1206.00 + \u5229\u606F00.00"
      },
      {
        day: "2023/08/25",
        count: 204,
        desc: "\u542B\u672C\u91D1204.00 + \u5229\u606F00.00"
      }
    ],
    bhje: 4249,
    bhlb: [
      {
        day: "2022/01/25",
        list: [{
          count: 287,
          desc: "\u7B2C1\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/02/25",
        list: [{
          count: 258.9,
          desc: "\u7B2C2\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/03/25",
        list: [{
          count: 250.4,
          desc: "\u7B2C3\u671F\u8D26\u5355"
        }]
      },
      {
        day: "2022/04/25",
        list: [
          {
            count: 252.7,
            desc: "\u7B2C4\u671F\u8D26\u5355"
          },
          {
            count: 3200,
            desc: "\u63D0\u524D\u8FD8\u6E05"
          }
        ]
      }
    ]
  },
  {
    id: 7,
    label: "\u5C0F\u7C73\u8D37\u6B3E-360\u501F\u6761",
    jkrq: "2021/10/31",
    jkje: 8e3,
    hkfs: "\u7B49\u672C\u7B49\u606F",
    done: true,
    hklb: [
      {
        day: "2021/11/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2021/12/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2022/01/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2022/02/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2022/03/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2022/04/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2022/05/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2022/06/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2022/07/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2022/08/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2022/09/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      },
      {
        day: "2022/10/28",
        count: 757,
        desc: "\u542B\u672C\u91D1666.67 + \u5229\u606F89.60"
      }
    ],
    bhje: 8271.41,
    bhlb: [
      {
        day: "2021/12/31",
        list: [{
          count: 756.27,
          desc: "12\u6708\u4EFD\u8D26\u5355"
        }]
      },
      {
        day: "2022/03/08",
        list: [{
          count: 1543.56,
          desc: "1\u30012\u6708\u4EFD\u8D26\u5355"
        }]
      },
      {
        day: "2022/03/31",
        list: [
          {
            count: 756.27,
            desc: "3\u6708\u4EFD\u8D26\u5355"
          },
          {
            count: 5215.31,
            desc: "\u5269\u4F59\u6708\u4EFD\u8D26\u5355"
          }
        ]
      }
    ]
  },
  {
    id: 8,
    label: "\u7F8E\u56E2\u751F\u6D3B\u8D39",
    jkrq: "2021/07/27",
    jkje: 14e3,
    bhje: 11343.39,
    hkfs: "\u7B49\u989D\u672C\u606F",
    done: true,
    hklb: [
      {
        day: "2021/09/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11073.52 + \u5229\u606F336.00"
      },
      {
        day: "2021/10/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11089.62 + \u5229\u606F193.90"
      },
      {
        day: "2021/11/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11015.97 + \u5229\u606F177.55"
      },
      {
        day: "2021/12/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11122.56 + \u5229\u606F160.96"
      },
      {
        day: "2022/01/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11139.40 + \u5229\u606F144.12"
      },
      {
        day: "2022/02/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11156.49 + \u5229\u606F127.03"
      },
      {
        day: "2022/03/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11173.83 + \u5229\u606F106.69"
      },
      {
        day: "2022/04/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11191.44 + \u5229\u606F92.08"
      },
      {
        day: "2022/05/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11209.31 + \u5229\u606F74.21"
      },
      {
        day: "2022/06/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11227.45 + \u5229\u606F56.07"
      },
      {
        day: "2022/07/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11245.86 + \u5229\u606F37.66"
      },
      {
        day: "2022/08/14",
        count: 1284,
        desc: "\u542B\u672C\u91D11264.55 + \u5229\u606F18.97"
      }
    ],
    bhlb: [
      {
        day: "2021/12/14",
        list: [{
          count: 1283.52,
          desc: "\u542B\u672C\u91D11122.56 + \u5229\u606F160.96"
        }]
      },
      {
        day: "2022/01/14",
        list: [{
          count: 1330.27,
          desc: "\u542B\u672C\u91D11139.4 + \u5229\u606F144.12+\u7F5A\u606F46.75"
        }]
      },
      {
        day: "2022/02/14",
        list: [{
          count: 1304.4,
          desc: "\u542B\u672C\u91D11156.49 + \u5229\u606F127.03+\u7F5A\u606F20.88"
        }]
      },
      {
        day: "2022/03/14",
        list: [
          {
            count: 1283.52,
            desc: "\u542B\u672C\u91D11173.83 + \u5229\u606F109.69"
          },
          {
            count: 6141.68,
            desc: "\u542B\u672C\u91D16138.61 + \u5229\u606F3.07"
          }
        ]
      }
    ]
  },
  {
    id: 9,
    label: "\u7F8E\u56E2\u6C27\u6C14\u8D37",
    jkrq: "2021/10/31",
    jkje: 9e3,
    bhje: 8679,
    hkfs: "\u7B49\u989D\u672C\u606F",
    done: true,
    hklb: [
      {
        day: "2021/11/30",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2021/12/31",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2022/01/31",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2022/02/28",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2022/03/31",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2022/04/30",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2022/05/31",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2022/06/30",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2022/07/31",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2022/08/31",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2022/09/30",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      },
      {
        day: "2022/10/31",
        count: 789,
        desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
      }
    ],
    bhlb: [
      {
        day: "2021/12/31",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      },
      {
        day: "2022/01/31",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      },
      {
        day: "2022/02/28",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      },
      {
        day: "2022/03/31",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      },
      {
        day: "2022/04/30",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      },
      {
        day: "2022/05/31",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      },
      {
        day: "2022/06/30",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      },
      {
        day: "2022/07/31",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      },
      {
        day: "2022/08/31",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      },
      {
        day: "2022/09/30",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      },
      {
        day: "2022/10/31",
        list: [{
          count: 789,
          desc: "\u542B\u672C\u91D1750.00 + \u5229\u606F38.70"
        }]
      }
    ]
  },
  {
    id: 10,
    label: "\u4EAC\u4E1C\u91D1\u878D\u767D\u6761",
    jkrq: "2021/10/31",
    jkje: 36e3,
    bhje: 36364.02,
    hkfs: "\u7B49\u672C\u7B49\u606F",
    done: true,
    hklb: [
      {
        day: "2021/11/30",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2021/12/31",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2022/01/31",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2022/02/28",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2022/03/31",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2022/04/30",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2022/05/31",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2022/06/30",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2022/07/31",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2022/08/31",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2022/09/30",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      },
      {
        day: "2022/10/31",
        count: 3e3,
        desc: "\u6309\u65E5\u8BA1\u606F \u5177\u4F53\u67E5\u770BAPP\u3002"
      }
    ],
    bhlb: [
      {
        day: "2022/03/14",
        list: [
          {
            count: 5132.82,
            desc: "2/12\u671F\u672C\u91D13000,\u5229\u606F549.45,\u8FDD\u7EA6\u91D11583.37"
          },
          {
            count: 3e3,
            desc: "3/12\u671F\u672C\u91D13000"
          },
          {
            count: 3e3,
            desc: "4/12\u671F\u672C\u91D13000"
          }
        ]
      },
      {
        day: "2022/03/31",
        list: [{
          count: 3183.6,
          desc: "5/12\u671F\u672C\u91D13000,\u5229\u606F183.6"
        }]
      },
      {
        day: "2022/04/27",
        list: [{
          count: 3255.15,
          desc: "6/12\u671F\u672C\u91D13000,\u5229\u606F255.15"
        }]
      },
      {
        day: "2022/05/31",
        list: [{
          count: 3275.4,
          desc: "7/12\u671F\u672C\u91D13000,\u5229\u606F275.4"
        }]
      },
      {
        day: "2022/06/26",
        list: [{
          count: 3175.5,
          desc: "8/12\u671F\u672C\u91D13000,\u5229\u606F175.5"
        }]
      },
      {
        day: "2022/07/28",
        list: [{
          count: 3172.8,
          desc: "9/12\u671F\u672C\u91D13000,\u5229\u606F172.8"
        }]
      },
      {
        day: "2022/08/25",
        list: [{
          count: 3113.4,
          desc: "10/12\u671F\u672C\u91D13000,\u5229\u606F113.4"
        }]
      },
      {
        day: "2022/09/03",
        list: [{
          count: 3024.3,
          desc: "11/12\u671F\u672C\u91D13000,\u5229\u606F24.3"
        }]
      },
      {
        day: "2022/09/26",
        list: [{
          count: 3031.05,
          desc: "12/12\u671F\u672C\u91D13000,\u5229\u606F31.05"
        }]
      }
    ]
  }
];
exports.billList = billList;
