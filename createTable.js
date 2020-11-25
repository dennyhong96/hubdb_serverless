const axios = require("axios");

const API_URL = `https://api.hubapi.com/cms/v3/hubdb/tables?hapikey=${process.env.api_key}`;

exports.main = async (context, sendResponse) => {
	try {
		const headers = {
			accept: "application/json",
			"content-type": "application/json",
		};

		const { data } = await axios.post(API_URL, context.body, { headers });

		sendResponse({ body: { data }, statusCode: 200 });
	} catch (error) {
		sendResponse({ body: { message: error.message }, statusCode: 400 });
	}
};
