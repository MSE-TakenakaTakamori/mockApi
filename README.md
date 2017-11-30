# Apiary用のmarkdownファイルを生成するツール

srcディレクトリに `.md`, `.json` の書式で作ったデータを `ejs形式` で結合します。


## 環境構築

1. node.jsをインストール  
コンソールで `npm` コマンドが動けば大丈夫です。

2. 管理者権限のコンソールで以下をライブラリをインストール
```
npm install -g windows-build-tools
npm install -g node-gyp
```

3. package.json のあるディレクトリで必要なライブラリをインストール
```
npm install
```

## ビルド実行

* ソースをビルド  
`dest` ディレクトリに `結合されたmarkdownファイル` と `api blueprint` が生成されます。

```
npm start
```

* ソース更新時に自動ビルド

```
npm run watch
```

* `apiary.apib` の生成
apiary環境にソースを反映する際に実行します。

```
npm run build
```