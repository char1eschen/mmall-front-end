'use strict';

var _util = require('util/util.js');

var _prodct = {
    // 获取商品列表
    getProductList: function(listParam, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/product/list.do'),
            data: listParam,
            success: resolve,
            error: reject
        });
    },
    // 获取商品详情信息
    getProductDetail: function(productId, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/product/detail.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        });
    }
};

module.exports = _prodct;
