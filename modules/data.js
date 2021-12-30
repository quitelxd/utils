// 格式化成树形结构数据
export function treeDataformatter(data, id = 'id', pid = 'pid', children = 'children') {
    // 删除 所有 children,以防止多次调用
    data.forEach(function (item) {
        delete item.children;
    });
    // 将数据存储为 以 id 为 KEY 的 map 索引数据列
    var map = {};
    data.forEach(function (item) {
        map[item[id]] = item;
    });
    var val = [];
    data.forEach(function (item) {
        // 以当前遍历项，的pid,去map对象中找到索引的id
        var parent = map[item[pid]];
        // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
        if (parent) {
            (parent[children] || (parent[children] = [])).push(item);
        } else {
            //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
            val.push(item);
        }
    });
    return val;
}

export function orderBy(array, sortFlag) {
    var $arr = array;
    if (sortFlag == 'asc') {
        $arr.sort((a, b) => { return a - b });
    } else if (sortFlag == 'desc') {
        $arr.sort(this._numDescSort);
    } else {
        $arr.sort((a, b) => { return a - b });
    }
    return $arr;
}

// 求两个集合的并集
export function union(a, b) {
    var newArr = a.concat(b);
    return deleteSame(newArr);
}

//去重数组，基本类型的
export function deleteSame(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length;) {
            if (arr[j] == arr[i]) {
                arr.splice(j, 1);
            } else {
                j++;
            }
        }
    }
    return arr;
}

export function deleteSameByObj(arr) {
    var result = [],
        hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}