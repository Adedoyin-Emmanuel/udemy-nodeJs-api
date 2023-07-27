const request = require("request");
const CLIENTID = "sPvELj9EieMzpgwYZxEVncW8sWFTF8aTKub5J2gJ";
const CLIENTSECRET =
  "4xpwMapojihPVoQdDwjET9StERujuqppTvDeQGTuQLF5qHJFzDXDex69kweUe9RdxJVDnWUdHuE8CQQx5TWPHsW5617sfTbpbRT8IDOkI7Y6V0UhtmnW5l6401DTn0DY";
const apiUrl = "https://www.udemy.com/api-2.0/courses/";

const basicAuth = Buffer.from(`${CLIENTID}:${CLIENTSECRET}`).toString("base64");

const options = {
  url: apiUrl,
  headers: {
    Authorization: `Basic ${basicAuth}`,
  },
};

request.get(options, (error, response, body) => {
  if (response.statusCode === 200) {
    const data = JSON.parse(body);

    console.log(data);
  } else {
    console.log(error);
  }
});
