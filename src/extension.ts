// 'vscode' 包含 VS Code可扩展性 API
import * as vscode from 'vscode'; // 导入模块，并在下面的代码中使用别名 vscode 引用它

// 激活该插件时，将调用此方法
// 在插件程序第一次执行命令时，被激活
export function activate(context: vscode.ExtensionContext) {
    // 使用控制台打印    信息（console.log）    和    错误（console.error）
    console.log('恭喜，插件“win10-first”现已启动！'); // 这行代码只会在您的扩展程序激活后执行一次

    // 该命令已在package.json文件中定义
    // 现在使用 registerCommand 实现命令
    // commandId 参数必须 与 package.json 中的 command 字段匹配
    let disposable = vscode.commands.registerCommand('win10-first.helloWorld', () => {
        // 每次执行 win10-first.helloWorld 命令时都会执行您放置在此处的代码

        // 向用户显示一个消息框
        vscode.window.showInformationMessage('Hello World from win10-first!');
    });

    context.subscriptions.push(disposable);
}

// 停用您的插件程序时，将调用此方法
export function deactivate() {}
