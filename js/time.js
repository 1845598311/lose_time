Date.prototype.toLocaleString = function () {
    let Date_day = this.getDate()-1,
        Date_hours = this.getHours()-8;
    return this.getFullYear()-1970 + "年" + (this.getMonth()) + "月" + Date_day + "日 " +Date_hours + "小时" + this.getMinutes() + "分" + this.getSeconds() + "秒";
};
//转换毫秒到标准时间

let meet = 1620611363000;
//2021-5-10 9:49:23
let now = 0;
setInterval(function () {
    now = new Date().getTime()-meet;
    $("h2").html(new Date(now).toLocaleString());
}, 60);
