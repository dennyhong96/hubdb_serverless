const axios = require("axios");

const API_URL = `https://api.hubapi.com/cms/v3/hubdb/tables?hapikey=${process.env.api_key}`;

exports.main = async (context, sendResponse) => {
	try {
		const { data } = await axios.post(API_URL, context.body);

		// context.params
		// context.body
		// context.accountId
		// context.limits

		// secrets created using the CLI are available in the environment variables.
		// process.env.secretName

		sendResponse({ body: { data }, statusCode: 200 });
	} catch (error) {
		sendResponse({ body: { error: error.message }, statusCode: 500 });
	}
};

// JSON Body:
/*
{
	"dynamicMetaTags": {},
	"allowPublicApiAccess": true,
	"useForPages": false,
	"columns": [
			{
					"name": "salary",
					"label": "Salary",
					"archived": false,
					"type": "TEXT"
			}
	],
	"name": "employee",
	"enableChildTablePages": false,
	"label": "Employee",
	"allowChildTables": false
}
*/
