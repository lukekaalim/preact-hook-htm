dist-files := dist/preact-hook-htm.cjs.js dist/preact-hook-htm.umd.js dist/preact-hook-htm.esm.js
source-files := $(wildcard src/*.js)

$(dist-files): $(source-files) package.json rollup.config.js
	node_modules/.bin/rollup -c