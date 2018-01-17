var { defineSupportCode } = require('cucumber')
var json2csv = require('json2csv');
let path = require('path')
let fs = require('fs')


function getRootPath() {
    let rootpath = path.join(__dirname)
    while (rootpath) {
        if (fs.existsSync(rootpath + '/package.json')) {
            break;
        }
        rootpath = rootpath.substring(0, rootpath.lastIndexOf(path.sep))
    }
    return rootpath;
}
let csvfilepath = path.join(getRootPath(), 'data.csv');
defineSupportCode(function ({ Given, When, Then }) {

    let csvfilepath = path.join(getRootPath(), 'data.csv');

    let fields = []
    Given(/^帮我创建一个csv文件$/, async function () {
        return true
    });

    When(/^title为如下字段$/, async function (table) {
        let titles = table.rawTable
        fields = titles[0]
        console.log(fields)
    });

    Then(/^请自动帮我生成(\d+)条随机数据$/, async function (arg1) {
        let datas = []
        console.log(arg1)
        for (let i = 0; i < arg1; i++) {
            let tmp = {};
            for (let j = 0; j < fields.length; j++) {
                tmp[fields[j]] = ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
            }
            datas.push(tmp)
        }

        var csv = json2csv({ data: datas, fields: fields });
        return fs.writeFileSync(csvfilepath,csv)
    });
})