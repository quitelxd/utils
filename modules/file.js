export function getFileNameExt(fileName) {
    if (fileName.lastIndexOf(".") == -1)
        return fileName;
    var pos = fileName.lastIndexOf(".") + 1;
    return fileName.substring(pos, fileName.length).toLowerCase();
}

export function getFileName(fileName) {
    var pos = fileName.lastIndexOf(".");
    if (pos == -1) {
        return fileName;
    } else {
        return fileName.substring(pos, fileName.length);
    }
}

export function isImageType(fileName) {
    return /(gif|jpg|jpeg|png|GIF|JPG|PNG)$/ig.test(fileName);
}

export function isVideoType(fileName) {
    return /(mp4|mp3|flv|wav)$/ig.test(fileName);
}