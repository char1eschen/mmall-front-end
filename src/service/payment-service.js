'use strict';

var _util = require('util/util.js');
var _payment = {
    // 获取支付信息
    getPaymentInfo: function(orderNumber, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/order/pay.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
    // 获取订单状态
    getPaymentStatus: function(orderNumber, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/order/query_pay_status.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
};

module.exports = _payment;
