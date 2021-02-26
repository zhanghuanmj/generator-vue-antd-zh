const Generator = require('yeoman-generator')
const fileList = [
    'mock/examples/index.js',
    'mock/test/index.js',
    'mock/index.js',
    'public/config.js',
    'public/favicon.ico',
    'public/img.jpeg',
    'public/index.html',
    'src/apis/common.js',
    'src/apis/examples.js',
    'src/apis/test.js',
    'src/assets/common/logo.png',
    'src/assets/exception/KpnpchXsobRgLElEozzI.svg',
    'src/assets/exception/RVRUAYdCGeYNBWoKiIwB.svg',
    'src/assets/exception/wZcnGqRDyhPOEYFcZDnb.svg',
    'src/assets/test/test.png',
    'src/components/common/MidModal.vue',
    'src/components/common/RightDrawer.vue',
    'src/components/common/SingleImgUpload.vue',
    'src/components/common/SingleVideoUpload.vue',
    'src/components/test/Test.vue',
    'src/mixins/ListMixin.js',
    'src/router/examples.js',
    'src/router/exception.js',
    'src/router/index.js',
    'src/router/test.js',
    'src/store/index.js',
    'src/style/base.less',
    'src/style/common.less',
    'src/utils/axios.js',
    'src/views/examples/modules/TeacherModal.vue',
    'src/views/examples/SearchTable.vue',
    'src/views/exception/403.vue',
    'src/views/exception/404.vue',
    'src/views/exception/500.vue',
    'src/views/exception/ExceptionPage.vue',
    'src/views/exception/type.js',
    'src/views/test/Test.vue',
    'src/antdImport.js',
    'src/App.vue',
    'src/defaultSettings.js',
    'src/main.js',
    '.browserslistrc',
    '.eslintrc.js',
    'babel.config.js',
    'package.json',
    'README.md',
    'vue.config.js',
    'yarn.lock',
]
module.exports = class extends Generator {
    prompting() {
        return this.prompt(([
            {
                type: 'input',
                name: 'title',
                message: 'project name ?', // 例：my-app
                default: this.appname, // 项目生成名称
            }
        ])).then(answers => {
            this.answers = answers
        })
    }

    writing() {
        fileList.forEach(file => {
            const tpl = this.templatePath(file)
            const output = this.destinationPath(file)
            const context = this.answers

            this.fs.copyTpl(tpl, output, context)
        })
    }
}