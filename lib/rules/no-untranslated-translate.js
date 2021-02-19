/**
 * @fileoverview disallow untranslated Translate key
 * @author Benjamin Van Ryseghem
 * @copyright 2021 Benjamin Van Ryseghem. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

let fs = require("fs");
let path = require("path");
let objectPath = require("object-path");

module.exports = function(context) {
	let languages = context.options[0].map(path => JSON.parse(fs.readFileSync(path).toString()));

	return {
		JSXElement(node) {
			let { openingElement } = node;
			if (openingElement.name.name !== "Translate") {
				return;
			}

			let key = openingElement.attributes.find(attribute => attribute.name.name === "i18nKey")
			let index = languages.findIndex((language, index) => !objectPath.has(language, key.value.value));

			if (index === -1) {
				return;
			}
			context.report(
				node,
				{
					start: openingElement.loc.start,
					end: node.closingElement.loc.end
				},
				`Untranslated key \"${key.value.value}\" in \"${path.basename(context.options[0][index])}\"`
			);
		}
	};
}

module.exports.schema = [
	{
		type: "array",
		items: { type: "string" }
	}
]
