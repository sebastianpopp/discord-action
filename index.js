const core = require('@actions/core');
const axios = require('axios');

try {
  const webhook = core.getInput('webhook');
  const message = core.getInput('message');

  const options = {
    method: 'POST',
    url: webhook,
    headers: {'Content-Type': 'application/json'},
    data: {content: message}
  };

  axios
    .request(options)
    .then(() => {
      core.info('Message was sent successfully');
    });
} catch (error) {
  core.setFailed(error.message);
}
