const axios = require("axios");

const API_URL = `https://api.hubapi.com/cms/v3/hubdb/tables?hapikey=${process.env.api_key}`;

// Checks if axios error and handles accordingly
const formatError = (err) => ({
	body: {
		error: err.response ? err.response.data.message : err.message,
		statusCode: err.response ? err.response.status : 500,
	},
});

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
		sendResponse(formatError(error));
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
