"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tabbar-1",
  setup(__props) {
    const title = common_vendor.ref("nihao");
    common_vendor.onLoad(() => {
      console.log("nihao");
    });
    let list = common_vendor.reactive([
      { name: "aa", num: 11 },
      { name: "bb", num: 22 }
    ]);
    const handle = () => {
      list.forEach((item) => {
        item.num++;
      });
    };
    const total = common_vendor.computed(() => {
      return list.reduce((total2, cur) => total2 + cur.num, 0);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o(handle),
        c: common_vendor.t(common_vendor.unref(total)),
        d: common_vendor.f(common_vendor.unref(list), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.num),
            c: item.name
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/作业/毕业设计/3.3/assistant/pages/tabbar/tabbar-1/tabbar-1.vue"]]);
wx.createPage(MiniProgramPage);
