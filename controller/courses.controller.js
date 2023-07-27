/**
 *Courses Controller
 * BTW, I saw this code structure in @Benrobo NodeJs repo
 *@see https://github.com/benrobo
 */

class CourseController {
  constructor() {
    this.getCourse = async (req, res) => {
      const CLIENTID = "sPvELj9EieMzpgwYZxEVncW8sWFTF8aTKub5J2gJ";
      const CLIENTSECRET =
        "4xpwMapojihPVoQdDwjET9StERujuqppTvDeQGTuQLF5qHJFzDXDex69kweUe9RdxJVDnWUdHuE8CQQx5TWPHsW5617sfTbpbRT8IDOkI7Y6V0UhtmnW5l6401DTn0DY";
      const apiUrl = "https://www.udemy.com/api-2.0/courses/";
      const basicAuth = Buffer.from(`${CLIENTID}:${CLIENTSECRET}`).toString(
        "base64"
      );
      const options = {
        headers: {
          Authorization: `Basic ${basicAuth}`,
        },
      };

      try {
        const response = await fetch(apiUrl, options);

        if (response.ok) {
          const data = response.json();
          console.log(data);

          return res.status(200).json(data);
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          error: error,
          message: "Internal server error",
        });
      }
    };
  }
}
