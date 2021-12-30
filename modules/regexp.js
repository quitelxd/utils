export function email(email) {
    var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    return reg.test(email);
}

export function mobile(str) {
    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/; //手机
    return reg.test(str);
}

export function tel(str) {
    var reg = /^0[\d]{2,3}-[\d]{7,8}$/; //固话
    return reg.test(str);
}

export function idCard(str) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证
    return reg.test(str);
}

export function ip(str) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;
    return reg.test(str);
}