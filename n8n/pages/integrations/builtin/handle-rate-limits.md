> Commit-pinned source for n8n main: [docs/integrations/builtin/handle-rate-limits.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/handle-rate-limits.md)

# Handle rate limits

API[^1] rate limits are restrictions on request frequency. For example, an API may limit the number of requests you can make per minute, or per day.

APIs can also limits how much data you can send in one request, or how much data the API sends in a single response.

## Identify rate limit issues <a id="identify-rate-limit-issues"></a>

When an n8n node hits a rate limit, it errors. n8n displays the error message in the node output panel. This includes the error message from the service.

If n8n received error 429 (too many requests) from the service, the error message is **The service is receiving too many requests from you**.

To check the rate limits for the service you're using, refer to the API documentation for the service.

## Handle rate limits for integrations <a id="handle-rate-limits-for-integrations"></a>

There are two ways to handle rate limits in n8n's integrations: using the Retry On Fail setting, or using a combination of the [Loop Over Items](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches) and [Wait](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait) nodes:

- Retry On Fail adds a pause between API request attempts.
- With Loop Over Items and Wait you can break you request data into smaller chunks, as well as pausing between requests.

### Enable Retry On Fail <a id="enable-retry-on-fail"></a>

When you enable Retry On Fail, the node automatically tries the request again if it fails the first time.

1. Open the node.
2. Select **Settings**.
3. Enable the **Retry On Fail** toggle.
4. Configure the retry settings: if using this to work around rate limits, set **Wait Between Tries (ms)** to more than the rate limit. For example, if the API you're using allows one request per second, set **Wait Between Tries (ms)** to `1000` to allow a 1 second wait.

### Use Loop Over Items and Wait <a id="use-loop-over-items-and-wait"></a>

Use the Loop Over Items node to batch the input items, and the Wait node to introduce a pause between each request.

1. Add the Loop Over Items node before the node that calls the API. Refer to [Loop Over Items](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches) for information on how to configure the node.
2. Add the Wait node after the node that calls the API, and connect it back to the Loop Over Items node. Refer to [Wait](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait) for information on how to configure the node.

For example, to handle rate limits when using OpenAI:

![Workflow using Loop Over Items and Wait nodes to pace requests to the OpenAI API](https://raw.githubusercontent.com/n8n-io/n8n-docs/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/.gitbook/assets/loop-wait.png)

## Handle rate limits in the HTTP Request node <a id="handle-rate-limits-in-the-http-request-node"></a>

The HTTP Request node has built-in settings for handling rate limits and large amounts of data.

### Batch requests <a id="batch-requests"></a>

Use the Batching option to send more than one request, reducing the request size, and introducing a pause between requests. This is the equivalent of using Loop Over Items and Wait.

1. In the HTTP Request node, select **Add Option** > **Batching**.
2. Set **Items per Batch**: this is the number of input items to include in each request.
3. Set **Batch Interval (ms)** to introduce a delay between requests. For example, if the API you're using allows one request per second, set **Wait Between Tries (ms)** to `1000` to allow a 1 second wait.

### Paginate results <a id="paginate-results"></a>

APIs paginate their results when they need to send more data than they can handle in a single response. For more information on pagination in the HTTP Request node, refer to [HTTP Request node | Pagination](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest#pagination).

[^1]: APIs, or application programming interfaces, offer programmatic access to a service's data and functionality. APIs make it easier for software to interact with external systems. They're often offered as an alternative to traditional user-focused interfaces accessed through web browsers or UI.
