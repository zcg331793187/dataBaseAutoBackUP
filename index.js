/**
 * Created by zhoucaiguang on 2017/3/15.
 */
"use strict";
// let schedule = require('node-schedule');
var schedule = require('node-schedule');
var child_process = require('child_process');
var configs_1 = require('./configs');
var exec = child_process.exec;
// let date = new Date(2017, 11, 21, 5, 30, 0);
var rule = new schedule.RecurrenceRule();
for (var i in configs_1.configs.times) {
    if (configs_1.configs.times[i]) {
        rule[i] = configs_1.configs.times[i];
    }
}
var j = schedule.scheduleJob(rule, function () {
    exec(configs_1.configs.exec, function (error, stdout, stderr) {
        console.log('执行了');
        if (error) {
            console.error("exec error: " + error);
            return;
        }
        console.log("" + stdout);
        console.log("stderr: " + stderr);
    });
});
