const axios = require("axios");

const API_URL = `https://api.hubapi.com/cms/v3/hubdb/tables?hapikey=${process.env.api_key}&sort=name`;

// Checks if axios error and handles accordingly
const formatError = (err) => ({
	body: {
		error: err.response ? err.response.data.message : err.message,
		statusCode: err.response ? err.response.status : 500,
	},
});

exports.main = async (context, sendResponse) => {
	try {
		const { data } = await axios.get(API_URL);

		sendResponse({ body: { data }, statusCode: 200 });
	} catch (error) {
		sendResponse(formatError(error));
	}
};
