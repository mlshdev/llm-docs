> Commit-pinned source for n8n main: [docs/build/code-in-n8n/use-built-in-shortcuts/http-node.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/build/code-in-n8n/use-built-in-shortcuts/http-node.md)

# HTTP node variables <a id="http-node-variables"></a>

Variables for working with HTTP node requests and responses when using pagination.

Refer to [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) for guidance on using the HTTP node, including configuring pagination.

Refer to [HTTP Request node cookbook | Pagination](https://docs.n8n.io/build/code-in-n8n/cookbook/http-request-node/pagination) for example pagination configurations.

> **Info**
> **HTTP node only**
>
> These variables are for use in expressions in the HTTP node. You can't use them in other nodes.

| Variable     | Description                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$pageCount` | The pagination count. Tracks how many pages the node has fetched.                                                                                                                            |
| `$request`   | The request object sent by the HTTP node.                                                                                                                                                    |
| `$response`  | The response object from the HTTP call. Includes `$response.body`, `$response.headers`, and `$response.statusCode`. The contents of `body` and `headers` depend on the data sent by the API. |
