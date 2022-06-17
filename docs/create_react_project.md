## nodenvのインストール

node.jsのバージョンを管理するツールです。

```shell
$ git clone https://github.com/nodenv/nodenv.git ~/.nodenv
$ cd ~/.nodenv
$ src/configure && make -C src
```

Pathを通します。

```shell
$ echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.zshrc
$ echo 'eval "$(nodenv init -)"' >> ~/.zshrc
```

反映後バージョンを確認します。

```shell
$ exec $SHELL -l
$ nodenv -v
nodenv 1.4.0+3.631d0b6
```

プラグイン（nodenv-build）をインストールします。

```shell
$ mkdir -p $(nodenv root)/plugins
$ git clone https://github.com/nodenv/node-build.git "$(nodenv root)"/plugins/node-build
$ nodenv rehash
```

## node.jsのインストール

nodenvの上にnode.jsをインストールします。

```shell
## インストール
$ nodenv install 16.13.0

## 有効化
$ nodenv global 16.13.0

## nodenvで有効になっているバージョンを確認(有効化したところに*がついていればOK)
$ nodenv versions
  system
* 16.13.0 (set by /Users/user_name/.nodenv/version)

## node.jsのバージョンを確認
$ node -v
v16.13.0
```

## yarnのインストール

npmでインストールします。(brewでも可能です)

```shell
$ npm install -g yarn
# brewを使う場合
$ brew install yarn
```

## プロジェクトを作成

```shell
$ yarn create react-app sample-app
```

これを実行すると、sample-appという名前のプロジェクトが作成されます。
プロジェクトに必要なパッケージや.jsファイルなどが自動でインストールされます。

次に、サーバーを起動します。

```shell
$  yarn run start

You can now view my-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.2.117:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

webpack compiled successfully


```

これで、この状態でブラウザから、`http://localhost:3000`または`On Your Network:`に記載されているURLにアクセスするとReactのページが確認できます。