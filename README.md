# win10-first README

-----------------------------------------------------------------------------------------------------------
├── .gitignore                  // 配置不需要加入版本管理的文件
├── .vscode                     // VS Code的整合
│   ├── launch.json
│   ├── settings.json
│   └── tasks.json
├── .vscodeignore               // 配置不需要加入最终发布到插件中的文件
├── README.md
├── src                         // 源文件
│   └── extension.ts        // 使用 ts 来开发插件
├── test                        // test 文件夹
│   ├── extension.test.ts 
│   └── index.ts
├── node_modules
│   ├── vscode                  // vscode 对 typescript 的语言支持。
│   └── typescript              // TypeScript 的编译器
├── out                         // 编译之后的输出文件夹(只有 TypeScript开发插件时 需要，JS开发插件的话就无需)
│   ├── src
│   |   ├── extension.js
│   |   └── extension.js.map
│   └── test
│       ├── extension.test.js
│       ├── extension.test.js.map
│       ├── index.js
│       └── index.js.map
├── package.json                // 该插件的依赖配置文件
├── tsconfig.json
├── typings                     // 类型定义文件夹
│   ├── node.d.ts               // 和 Node.js 关联的类型定义
│   └── vscode-typings.d.ts     // 和 VS Code 关联的类型定义
└── vsc-extension-quickstart.md 
-----------------------------------------------------------------------------------------------------------

**Enjoy!**
