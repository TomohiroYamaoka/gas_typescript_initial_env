# gas_typescript_initial_env

##  package.jsonを作成
$ npm init -y

##  claspのパッケージとtypescriptのlintを追加
$ npm install @google/clasp tslint -D  

## gasの型定義パッケージ
$ npm install @types/google-apps-script -S  

## tslint.jsonを作成
$ tslint --init 

## prettier
tslint-config-prettierはTSLintの設定のうちPrettierと衝突するものを無効化するパッケージ。tslint-plugin-prettier はTSLintの設定のコードチェック時にPrettierのルールもチェックしてフォーマットしてくれます。(Prettierのルールを優先する)
$ npm install prettier tslint-config-prettier tslint-plugin-prettier -D

## gasテンプレート
https://docs.google.com/spreadsheets/d/1HfMtX8krr4pixm6FDLuM6N4WW_SGgS4EJw8buF9FZAM/edit?usp=sharing

## 参考
https://kosa3.medium.com/gas%E3%82%92clasp%E3%81%A8typescript%E3%81%A7%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E9%96%8B%E7%99%BA%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F-e7835d1763ed