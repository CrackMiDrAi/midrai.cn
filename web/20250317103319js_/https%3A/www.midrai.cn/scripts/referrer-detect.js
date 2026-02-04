var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
;'use strict';

(() =>
{
    const referrer = document.referrer.toLowerCase();
    const searchEngineReg = /^https?:\/\/([\da-zA-Z\-]*)\.?(sogou|soso|baidu|google|youdao|yahoo|bing|118114|biso|gougou|ifeng|ivc|sooule|niuhu|biso|so|haosou|sm)\.(.{2,})/;
    const originReg = /^https:\/\/([\da-zA-Z\-]*)\.?midrai\.cn/;
    const localHostReg = /^https?:\/\/((localhost|127\.0\.0\.1)(:\d{1,5}))?/;

    if (!referrer || referrer == '') return;
    if (referrer.indexOf('http://web.archive.org/web/20241227080518/https://github.com/crackmidrai') === 0) return;
    if (searchEngineReg.test(referrer)) return;
    if (originReg.test(referrer)) return;
    if (localHostReg.test(referrer)) return;

    return new Promise((res) =>
    {
        alert('检测到您是来自第三方网站的游客。\r\n\r\n本组从未授权给任何第三方个人/团体宣传、使用、挂名本组及本组劳动成果的权利，请您注意辨别。\r\n\r\n如果对方涉及金钱交易，请立刻尝试退款举报并不遗余力地曝光 TA！');
        res(true);
    });
})();
}

/*
     FILE ARCHIVED ON 08:05:18 Dec 27, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:33:10 Feb 04, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.447
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 80.348
  LoadShardBlock: 414.09 (3)
  PetaboxLoader3.resolve: 375.857 (4)
  PetaboxLoader3.datanode: 134.548 (4)
  load_resource: 109.892
*/