"use strict";
var common_vendor = require("../../common/vendor.js");
var assets_util = require("../../assets/util.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const title = common_vendor.ref("");
    const active = common_vendor.ref(0);
    const shouldList = common_vendor.ref([]);
    const helpList = common_vendor.ref([]);
    const jkje = common_vendor.ref(0);
    const bhje = common_vendor.ref(null);
    const jkrq = common_vendor.ref("");
    const done = common_vendor.ref(false);
    const scrollTop = common_vendor.reactive({
      old: 0,
      current: 0
    });
    const onBack = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const onScroll = (e) => {
      scrollTop.old = e.detail.scrollTop;
    };
    const onTabChange = (index) => {
      active.value = index;
      scrollTop.current = scrollTop.old;
      common_vendor.nextTick(() => {
        scrollTop.current = 0;
      });
    };
    const formatData = (id) => {
      const findItem = assets_util.billList.find((el) => el.id == id);
      title.value = findItem.label;
      jkje.value = findItem["jkje"];
      bhje.value = findItem["bhje"];
      jkrq.value = findItem["jkrq"];
      done.value = findItem["done"];
      shouldList.value = findItem["hklb"];
      helpList.value = findItem["bhlb"];
      console.log("findItem:", findItem);
    };
    common_vendor.onLoad((param) => {
      const {
        id
      } = param;
      formatData(id);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(title.value),
        b: common_vendor.o(onBack),
        c: common_vendor.p({
          ["status-bar"]: true,
          border: false,
          leftWidth: "30px",
          backgroundColor: "transparent",
          color: "white",
          ["left-icon"]: "left",
          leftText: "\u8FD4\u56DE"
        }),
        d: common_vendor.t(jkje.value),
        e: common_vendor.t(bhje.value ? `\uFFE5${bhje.value}` : "-"),
        f: common_vendor.t(jkrq.value),
        g: common_vendor.n(done.value ? "cuIcon-roundcheckfill" : "cuIcon-roundclosefill"),
        h: common_vendor.n(active.value == 0 ? "text-green cur" : ""),
        i: common_vendor.o(($event) => onTabChange(0)),
        j: common_vendor.n(active.value == 1 ? "text-green cur" : ""),
        k: common_vendor.o(($event) => onTabChange(1)),
        l: active.value == 0
      }, active.value == 0 ? {
        m: common_vendor.f(shouldList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.day),
            b: common_vendor.t(item.count),
            c: common_vendor.t(item.desc),
            d: item.day
          };
        })
      } : {}, {
        n: active.value == 1
      }, active.value == 1 ? {
        o: common_vendor.f(helpList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.day),
            b: common_vendor.f(item.list, (_item, _index, i1) => {
              return {
                a: common_vendor.t(_item.count),
                b: common_vendor.t(_item.desc),
                c: _index
              };
            }),
            c: item.day
          };
        })
      } : {}, {
        p: scrollTop.current,
        q: common_vendor.o(onScroll)
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3e159eb4"], ["__file", "D:/project/uniapp-debt/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
