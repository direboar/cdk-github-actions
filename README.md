# AWS CDKでaws-serverless-expressを使ったExpressをデプロイする例。

## 使い方

### アプリケーションの開発
- appプロジェクトで開発をする。
- 通常は、npx nodemonで起動。
- npm run buildで、Lambdaにアップロードする形態にコンパイルする。

### LambdaへのDeploy
- cdkプロジェクトで開発する。
- cdkプロジェクトで、npm run buildAndDeployを実行すると、アプリ側のnpm run buildを実行後、cdkのbuild、synth、deployまで一括で実施する。

### GithubAtionによるCICD
- masterブランチにpushをすると、それをきっかけにアプリケーションのビルド～cdkのdeployまで実行される。
- 実現方式は、以下のURLを参照。 https://dev.classmethod.jp/articles/cdk-github-actions/
