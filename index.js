var mapSingleObject = function (row) {
    for (var key in row) {
        if (key.indexOf('.') > -1) {
            var arr = key.split('.');
            if (!row[arr[0]]) {
                row[arr[0]] = {};
            }
            row[arr[0]][arr[1]] = row[key];
            delete row[key];
        }
    }
    return row;
}

var mapArray = function (rows) {
    for (i in rows) {
        var row = rows[i];
        rows[i] = mapSingleObject(row)
    }
}

module.exports = function (obj) {
    if (!Array.isArray(obj)) {
        return mapSingleObject(obj)
    }
    else {
        return mapArray(obj)
    }
}
