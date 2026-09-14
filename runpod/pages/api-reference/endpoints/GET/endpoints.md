> Commit-pinned source for Runpod main: [api-reference/endpoints/GET/endpoints.mdx](https://docs.runpod.io/api-reference/endpoints/GET/endpoints)

# List endpoints

`GET /endpoints`

**List endpoints**

Returns a list of endpoints. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Parameters**

- `includeTemplate` (query)
- `includeWorkers` (query)

**Responses**

- `200`: Successful operation.
- `400`: Invalid ID supplied.
- `404`: Endpoint not found.
