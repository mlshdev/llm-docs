> Commit-pinned source for Runpod main: [api-reference/pods/GET/pods/podId.mdx](https://docs.runpod.io/api-reference/pods/GET/pods/podId)

# Find a Pod by ID

`GET /pods/{podId}`

**Find a Pod by ID**

Returns a single Pod. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `includeMachine` (query)
- `includeNetworkVolume` (query)
- `includeSavingsPlans` (query)
- `includeTemplate` (query)
- `includeWorkers` (query)
- `podId` (path, required): ID of Pod to return.

**Responses**

- `200`: Successful operation.
- `400`: Invalid ID supplied.
- `404`: Pod not found.
