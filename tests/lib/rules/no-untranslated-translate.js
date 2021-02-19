/**
 * @fileoverview disallow untranslated Translate key
 * @author Benjamin Van Ryseghem
 * @copyright 2021 Benjamin Van Ryseghem. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-untranslated-translate");
var RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
	ecmaFeatures: {
		jsx: true
	}
});

ruleTester.run("no-untranslated-translate", rule, {
	valid: [
		{
			code: "<Translate i18nKey=\"foo\">Bar</Translate>",
			options: [[__dirname + "/../../fixtures/fr.json"]]
		}
	],
	invalid: [
		{
			code: "<Translate i18nKey=\"bar\">Bar</Translate>",
			options: [[__dirname + "/../../fixtures/fr.json"]],
			errors: [
				{
					message: "Untranslated key \"bar\" in \"fr.json\"",
					type: "JSXElement"
				}
			]
		},
		{
			code: "<Translate i18nKey=\"baz\">Bar</Translate>",
			options: [[
				__dirname + "/../../fixtures/fr.json",
				__dirname + "/../../fixtures/en.json"
			]],
			errors: [
				{
					message: "Untranslated key \"baz\" in \"fr.json\"",
					type: "JSXElement"
				}
			]
		}
	]
});
