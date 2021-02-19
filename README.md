# eslint-plugin-i18n-translated

Eslint plugin to ensure i18n translation are translated

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-i18n-translated`:

```
$ npm install eslint-plugin-i18n-translated --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-i18n-translated` globally.

## Usage

Add `i18n-translated` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "i18n-translated"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "i18n-translated/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





