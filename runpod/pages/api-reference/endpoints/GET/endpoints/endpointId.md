> Commit-pinned source for Runpod main: [api-reference/endpoints/GET/endpoints/endpointId.mdx](https://docs.runpod.io/api-reference/endpoints/GET/endpoints/endpointId)

# Find an endpoint by ID

`GET /endpoints/{endpointId}`

**Find an endpoint by ID**

Returns a single endpoint. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `endpointId` (path, required): ID of endpoint to return.
- `includeTemplate` (query)
- `includeWorkers` (query)

**Responses**

- `200`: Successful operation.
- `400`: Invalid ID supplied.
- `404`: Endpoint not found.
