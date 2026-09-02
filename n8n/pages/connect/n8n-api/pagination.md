> Commit-pinned source for n8n main: [docs/connect/n8n-api/pagination.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/connect/n8n-api/pagination.md)

# API pagination <a id="api-pagination"></a>

The default page size is 100 results. You can change the page size limit. The maximum permitted size is 250.

When a response contains more than one page, it includes a cursor, which you can use to request the next pages.

For example, say you want to get all active workflows, 150 at a time.

Get the first page:

```shell
# For a self-hosted n8n instance <a id="for-a-self-hosted-n8n-instance"></a>
curl -X 'GET' \
  '<N8N_HOST>:<N8N_PORT>/<N8N_PATH>/api/v<version-number>/workflows?active=true&limit=150' \
  -H 'accept: application/json' \
  -H 'X-N8N-API-KEY: <your-api-key>'

# For n8n Cloud <a id="for-n8n-cloud"></a>
curl -X 'GET' \
  '<your-cloud-instance>/api/v<version-number>/workflows?active=true&limit=150' \
  -H 'accept: application/json' \
  -H 'X-N8N-API-KEY: <your-api-key>'
```

The response is in JSON format, and includes a `nextCursor` value. This is an example response.

```js
{
  "data": [
    // The response contains an object for each workflow
    {
      // Workflow data
    }
  ],
  "nextCursor": "MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA"
}
```

Then to request the next page:

```bash
# For a self-hosted n8n instance <a id="for-a-self-hosted-n8n-instance"></a>
curl -X 'GET' \
  '<N8N_HOST>:<N8N_PORT>/<N8N_PATH>/api/v<version-number>/workflows?active=true&limit=150&cursor=MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA' \
  -H 'accept: application/json'

# For n8n Cloud <a id="for-n8n-cloud"></a>
curl -X 'GET' \
  '<your-cloud-instance>/api/v<version-number>/workflows?active=true&limit=150&cursor=MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA' \
  -H 'accept: application/json'
```
