const core = require('@actions/core');

async function run() {
  const webhook = core.getInput('webhook', { required: true });
  const message = core.getInput('message', { required: true });

  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: message })
  });

  if (!response.ok) {
    throw new Error(`Discord webhook request failed with status ${response.status}: ${await response.text()}`);
  }

  core.info('Message was sent successfully');
}

run().catch((error) => core.setFailed(error.message));
