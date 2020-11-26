const axios = require("axios");

// Checks if axios error and handles accordingly
const formatError = (err) => ({
	body: {
		error: err.response ? err.response.data.message : err.message,
		statusCode: err.response ? err.response.status : 500,
	},
});

exports.main = async (context, sendResponse) => {
	try {
		const { table_name } = context.params;
		if (!table_name) throw new Error("table_name query parameter is required.");

		const apiUrl = `https://api.hubapi.com/cms/v3/hubdb/tables/${table_name}?hapikey=${process.env.api_key}`;

		const { data } = await axios.get(apiUrl);
		sendResponse({ body: { data }, statusCode: 200 });
	} catch (error) {
		sendResponse(formatError(error));
	}
};
