Date.prototype.toLocaleString = function () {
    let Date_day = this.getDate()-1,
        Date_hours = this.getHours()-8;
    if (Date_day<0){
        Date_day = Math.abs(Date_day);
    }
    if (Date_hours<0){
        Date_hours = Math.abs(Date_hours);
    }
    return this.getFullYear()-1970 + "年" + (this.getMonth()) + "月" + Date_day + "天 " +Date_hours + "小时" + this.getMinutes() + "分" + this.getSeconds() + "秒";
};
//转换毫秒到标准时间

let meet = 1620611363000;
//2021-5-10 9:49:23
//设置的时间

let now = 0;
setInterval(function () {
    now = new Date().getTime()-meet;
    //减去过去的时间
    $("h2").html(new Date(now).toLocaleString());
    //转化为时间
}, 60);
//60ms运行一次
