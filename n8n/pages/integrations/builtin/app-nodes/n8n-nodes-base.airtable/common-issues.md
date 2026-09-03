> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.airtable/common-issues.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/app-nodes/n8n-nodes-base.airtable/common-issues.md)

# Airtable node common issues <a id="airtable-node-common-issues"></a>

Here are some common errors and issues with the [Airtable node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable) and steps to resolve or troubleshoot them.

## Forbidden - perhaps check your credentials <a id="forbidden-perhaps-check-your-credentials"></a>

This error displays when trying to perform actions not permitted by your current level of access. The full text looks something like this:

```
There was a problem loading the parameter options from server: "Forbidden - perhaps check your credentials?"
```

The error most often displays when the credential you're using doesn't have the scopes it requires on the resources you're attempting to manage.

Refer to the [Airtable credentials](https://docs.n8n.io/integrations/builtin/credentials/airtable) and [Airtables scopes documentation](https://airtable.com/developers/web/api/scopes) for more information.

## Service is receiving too many requests from you <a id="service-is-receiving-too-many-requests-from-you"></a>

Airtable has a hard API limit on the number of requests generated using personal access tokens.

If you send more than five requests per second per base, you will receive a 429 error, indicating that you have sent too many requests. You will have to wait 30 seconds before resuming requests. This same limit applies for sending more than 50 requests across all bases per access token.

You can find out more in the [Airtable's rate limits documentation](https://airtable.com/developers/web/api/rate-limits). If you find yourself running into rate limits with the Airtable node, consider implementing one of the suggestions on the [handling rate limits](https://docs.n8n.io/integrations/builtin/handle-rate-limits) page.
