/**
 * Created by zhoucaiguang on 2017/3/15.
 */
"use strict";
exports.configs = {
    task: "mysql",
    exec: 'mysqldump -u root -p147258369 --databases Nodejs >/backup/Nodejs_`date +%F`.sql',
    times: {
        // dayOfWeek:0,//每周的哪一天
        // month:0,//每月
        hour: 6,
    }
};
