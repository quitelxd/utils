export function httpToHttps(url) {
    if (url) {
        if (url.match('^http://')) {
            return url.replace(/^http:\/\//i, 'https://');
        } else {
            return url;
        }
    }
}

export function getParams(key) {
    if (!window.location.href.split("?")[1]) {
        return "";
    }
    var paramslist = window.location.href.split("?")[1].split("&");
    var params = {};
    for (var i = 0; i < paramslist.length; i++) {
        params[paramslist[i].split("=")[0]] = paramslist[i].split("=")[1];
    }
    return params[key];
}


export function getBowerType() {
    var sUA = navigator.userAgent;
    //检测IE浏览器
    if ((navigator.appName == "Microsoft Internet Explorer")) {
        //检测模拟IE浏览的OPERA。edit at 2006-11-08(ver 0.1.2)
        if (sUA.indexOf('Opera') != -1) {
            this.browseKernel = 'Presto';
            if (window.opera && document.childNodes) {
                return 'Opera 7+';
            } else {
                return 'Opera 6-';
            }
        }
        this.browseKernel = 'Trident';
        if (sUA.indexOf('Maxthon') != -1) {
            return 'Maxthon';
        }
        if (sUA.indexOf('TencentTraveler') != -1) { //ver 0.1.3
            return '腾迅TT';
        }
        if (document.getElementById) {
            return "IE5+";
        } else {
            return "IE4-";
        }
    }
    //检测Gecko浏览器
    if (sUA.indexOf('Gecko') != -1) {
        this.browseKernel = 'Gecko';
        if (navigator.vendor == "Mozilla") {
            return "Mozilla";
        }
        if (navigator.vendor == "Firebird") {
            return "Firebird";
        }
        if (navigator.vendor.indexOf('Google') != -1 || sUA.indexOf('Google') != -1) {
            return 'Google';
        }
        if (sUA.indexOf('Firefox') != -1) {
            return 'Firefox';
        }
        return "Gecko";
    }
    //Netscape浏览器
    if (sUA.indexOf('Netscape') != -1) {
        this.browseKernel = 'Gecko';
        if (document.getElementById) {
            return "Netscape 6+";
        } else {
            return 'Netscape 5-';
        }
    }
    //检测Safari浏览器
    if (sUA.indexOf('Safari') != -1) {
        this.browseKernel = 'KHTML';
        return 'Safari';
    }
    if (sUA.indexOf('konqueror') != -1) {
        this.browseKernel = 'KHTML';
        return 'Konqueror';
    }
    //目前世界公认浏览网页速度最快的浏览器，但它占用的系统资源也很大。
    if (sUA.indexOf('Opera') != -1) {
        this.browseKernel = 'Presto';
        if (window.opera && document.childNodes) {
            return 'Opera 7+';
        } else {
            return 'Opera 6-';
        }
        return 'Opera';
    }
    if ((sUA.indexOf('hotjava') != -1) && typeof (navigator.accentColorName) == 'undefined') {
        return 'HotJava';
    }
    if (document.all && document.getElementById && navigator.savePreferences && (sUA.indexOf('netfront') < 0) && navigator.appName != 'Blazer') {
        return 'Escape 5';
    }
    //Konqueror / Safari / OmniWeb 4.5+
    if (navigator.vendor == 'KDE' || (document.childNodes && (!document.all || navigator.accentColorName) && !navigator.taintEnabled)) {
        this.browseKernel = 'KHTML';
        return 'KDE';
    }
    if (navigator.__ice_version) {
        return 'ICEbrowser';
    }
    if (window.ScriptEngine && ScriptEngine().indexOf('InScript') + 1) {
        if (document.createElement) {
            return 'iCab 3+';
        } else {
            return 'iCab 2-';
        }
    }
    if (document.layers && !document.classes) {
        return 'Omniweb 4.2-';
    }
    if (document.layers && !navigator.mimeTypes['*']) {
        return 'Escape 4';
    }
    if (navigator.appName.indexOf('WebTV') + 1) {
        return 'WebTV';
    }
    if (sUA.indexOf('netgem') != -1) {
        return 'Netgem NetBox';
    }
    if (sUA.indexOf('opentv') != -1) {
        return 'OpenTV';
    }
    if (sUA.indexOf('ipanel') != -1) {
        return 'iPanel MicroBrowser';
    }
    if (document.getElementById && !document.childNodes) {
        return 'Clue browser';
    }
    if (document.getElementById && ((sUA.indexOf('netfront') != -1) || navigator.appName == 'Blazer')) {
        return 'NetFront 3+';
    }
    if ((sUA.indexOf('msie') + 1) && window.ActiveXObject) {
        return 'Pocket Internet Explorer';
    }
    return "Unknown";
}