var extend = require('util')._extend;

var mapSingleObject = function (_row) {
    var row = extend({}, _row)
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

var mapArray = function (_rows) {
    var rows = null
    if (_rows) {
        rows = []
    }
    for (var i in _rows) {
        var row = _rows[i];
        rows.push(mapSingleObject(row))
    }
    return rows;
}

module.exports = function (obj) {
    if (!Array.isArray(obj)) {
        return mapSingleObject(obj)
    }
    else {
        return mapArray(obj)
    }
}
