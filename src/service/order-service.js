'use strict';

var _util = require('util/util.js');

var _order = {
    // 获取商品列表
    getProductList: function(resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/order/get_order_product_list.do'),
            success: resolve,
            error: reject
        });
    },
    // 提交订单
    creatOrder: function(orderInfo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/order/creat.do'),
            data: orderInfo,
            success: resolve,
            error: reject
        });
    },
    // 获取订单列表
    getOrderList: function(listParam, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/order/list.do'),
            data: listParam,
            success: resolve,
            error: reject
        });
    },
    // 获取订单详情
    getOrderDetail: function(orderNumber, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/order/detail.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
    // 取消订单
    cancelOrder: function(orderNumber, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/order/cancel.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
};

module.exports = _order;
