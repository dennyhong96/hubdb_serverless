const axios = require("axios");

const API_URL = `https://api.hubapi.com/cms/v3/hubdb/tables?hapikey=${process.env.api_key}&sort=name`;

exports.main = async (context, sendResponse) => {
	try {
		const { data } = await axios.get(API_URL);

		sendResponse({ body: { data }, statusCode: 200 });
	} catch (error) {
		sendResponse({ body: { error: error.message }, statusCode: 500 });
	}
};
