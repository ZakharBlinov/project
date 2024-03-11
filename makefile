install:
	npm ci

menu-game:
	node bin/menu-game.js

brain-scm:
	node bin/brain-scm.js

brain-progression:
	node bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .


lint-fix:
	npx eslint --fix .