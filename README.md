# cssortie

CSS sorting rules. Good friend with [postcss-sorting](https://github.com/hudochenkov/postcss-sorting).

The rules base on [bootstrap V4 PropertySortOrder](https://github.com/twbs/bootstrap/blob/v4-dev/scss/.scss-lint.yml).

## Installation

`$ npm install --save-dev cssortie`

## Usage
Firstly, you have to install postcss and postcss-sorting.

Next, set postcss options:

```
var sorting = require('postcss-sorting')

postcss([
  sorting({ 'sort-order': require('cssortie') })
]))
```

## License

MIT