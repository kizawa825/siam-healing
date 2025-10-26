# Siam Healing — アロマと余白を感じるタイ式マッサージサロンサイト

Astro で構築した架空のタイ式マッサージサロン「Siam Healing」の Web サイトです。モバイルファーストな体験設計と、Cloudflare Pages での高速デプロイを想定した構成になっています。

## プロジェクトの特徴

- 深いグリーンとサンドベージュを基調にした癒やしのビジュアルと言語設計
- 「お悩み → コース比較 → 予約」のストーリーフローで CVR 改善を狙う IA
- シナリオ別 CTA、入力ステップの可視化などモバイル UX を最優先にした導線設計
- Cloudflare Pages と Functions 連携を想定した `@astrojs/cloudflare` アダプター設定
- 多言語化を見据えたコンポーネント構造とモジュール化されたラベル

## セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーを起動 (http://localhost:4321)
npm run dev

# 本番ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## ディレクトリ構造

```
├── src
│   ├── layouts
│   │   └── BaseLayout.astro       # 全ページ共通のヘッダー、フッター、メタ設定
│   ├── pages
│   │   └── index.astro            # ランディングページ一式
│   ├── styles
│   │   └── global.css             # グローバルなデザインシステム
│   └── env.d.ts
├── public
│   └── assets/                    # 画像やアイコンの配置場所（任意）
├── astro.config.mjs               # Cloudflare アダプターを含む Astro 設定
├── package.json
└── tsconfig.json
```

## Cloudflare Pages へのデプロイ

1. Cloudflare Pages で新規プロジェクトを作成し、リポジトリを接続します。
2. **Framework preset** は *Astro* を選択、ビルドコマンドは `npm run build`、出力ディレクトリは `dist` を指定します。
3. Functions を利用する場合は `@astrojs/cloudflare` アダプターが働くように `node` バージョンを `>=18` に設定してください。
4. 環境変数や機密情報（API キーなど）が必要な場合は、Pages の「Environment variables」で管理します。

## カスタマイズのヒント

- `src/pages/index.astro` のデータ配列（コース、成果、体験フローなど）を CMS や JSON に切り出すことで、運用時の更新が容易になります。
- 予約フォームを実運用する際は Cloudflare Workers または外部のヘッドレスフォームサービスと連携すると安全です。
- 多言語対応を本実装する際は、Astro i18n ルーティングまたは URL パラメーターでの言語切り替えを組み合わせてください。

---

「深呼吸がしたくなる余白」をテーマにした、癒やしと信頼感を両立するデジタル体験をご活用ください。
