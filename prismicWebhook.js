const axios = require('axios');

const prismicSecret = process.env.PRISMIC_SECRET;
const githubUser = process.env.GITHUB_USER;
const githubRepo = process.env.GITHUB_REPO;
const githubToken = process.env.GITHUB_TOKEN;

module.exports.handler = async (event) => {
    const body = JSON.parse(event.body || '{}');

    if (body.secret !== prismicSecret) {
        return {
            statusCode: 403,
        };
    }

    response = await axios.post(`https://api.github.com/repos/${githubUser}/${githubRepo}/dispatches`, {
        event_type: 'prismic-webhook-build',
    }, {
        auth: {
            username: githubUser,
            password: githubToken,
        }
    });
    console.log('GitHub response: ', response.status, response.data);

    return {
        statusCode: 200,
    };
};
