const esbuild = require("esbuild");
const sassPlugin = require("esbuild-plugin-sass");
const vuePlugin = require("esbuild-plugin-vue3");

async function buildAndWatch() {
  try {
    // Buildの設定
    const context = await esbuild.context({
      entryPoints: [
        'app/javascript/application.js',
        'app/javascript/styles/application.scss',
      ],
      bundle: true,
      outdir: 'public/assets/builds',
      sourcemap: true,
      plugins: [sassPlugin(), vuePlugin()], // 必要に応じてプラグインを設定
    });

    // Watchモードを有効化
    await context.watch();

    console.log('Watching for changes...');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildAndWatch();