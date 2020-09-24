# AGESTOCK公式サイト Github 使い方

## 初期設定･基本的な使い方

以下のサイトを参考にしてください
[【Windows】Gitの環境構築をしよう！ | プログラミングの入門なら基礎から学べるProgate[プロゲート]](https://prog-8.com/docs/git-env-win)
[【Mac】Gitの環境構築をしよう！ | プログラミングの入門なら基礎から学べるProgate[プロゲート]](https://prog-8.com/docs/git-env)
[GitHubの無料チュートリアル - Git：はじめてのGitとGitHub | Udemy](https://www.udemy.com/course/intro_git/)

## clone

初めにGithubのレポジトリを自分のパソコンにダウンロードします。
作業したいディレクトリに`cd`コマンドで移動し、その後`clone`します。

```bash
$ cd パス名
$ git clone https://github.com/YuyaImanari/AGESTOCK-HP.git
```

`cd`コマンドについての詳細は以下の参考サイトで確認してください。
[作業ディレクトリを移動するcdコマンドの詳細まとめました【Linuxコマンド集】](https://eng-entrance.com/linux-command-cd)

## checkout 

自分の担当するブランチ(branch)に移動します。一度チェックアウトするとブランチは保存されるので初回のみ行ってください。不安な人は毎回作業前に行ってください。

```bash
$ git checkout ブランチ名
# ブランチの確認方法は
$ git branch
```

## pull

毎回の作業前に行ってください。リモートリポジトリ(インターネット上のデータ)を自分の手元のデータに反映させます。他人が編集する可能性があるので必ず行ってください。
ブランチ名を間違えたら電話くださいお願いします。

```bash
$ cd パス名
# ↑作業ディレクトリに移動 / 移動済みの場合不要
$ git pull origin ブランチ名
```

## add･commit･push

毎回の作業後に行ってください。自分の最新の状態をリモートリポジトリに反映させます。他人が後でpullする可能性があるので必ず行ってください。
pushするときのコミットメッセージの内容は、何をどう編集したか、わかりやすく端的に記載してください。
ブランチ名を間違えたら電話くださいお願いします。

```bash
$ cd パス名
# ↑作業ディレクトリに移動 / 移動済みの場合不要
$ git add .
$ git commit -m "コミットメッセージ"
$ git push origin ブランチ名
```

## その他

それ以外の作業はこちらでやるので気にしないでください。
