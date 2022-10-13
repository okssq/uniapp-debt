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
  __name: "index",
  setup(__props) {
    const viewItem = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/detail/detail?id=${item.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["status-bar"]: true,
          backgroundColor: "transparent",
          color: "white",
          leftWidth: "100%"
        }),
        b: common_vendor.f(common_vendor.unref(assets_util.billList), (item, index, i0) => {
          return {
            a: common_vendor.n(item.done ? "text-olive cuIcon-roundcheckfill" : "text-red cuIcon-roundclosefill"),
            b: common_vendor.t(item.label),
            c: common_vendor.t(item.jkje),
            d: common_vendor.n(item.done ? "bg-olive" : "bg-red"),
            e: index,
            f: common_vendor.o(($event) => viewItem(item), index)
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "D:/project/uniapp-debt/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
