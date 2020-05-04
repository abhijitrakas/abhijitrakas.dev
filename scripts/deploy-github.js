const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
	'public',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/abhijitrakas/abhijitrakas.dev.git',
	},
	() => {
		console.log('Deploy Complete!')
	}
)
