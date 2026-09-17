> Pinned source for Runpod main: [api-reference/endpoints/DELETE/endpoints/endpointId.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/api-reference/endpoints/DELETE/endpoints/endpointId.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/endpoints/DELETE/endpoints/endpointId

# Delete an endpoint

`DELETE /endpoints/{endpointId}`

**Delete an endpoint**

Delete an endpoint. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Authentication:** `ApiKey`

**Parameters**

- `endpointId` (path; required; string): Endpoint ID to delete.

**Responses**

- `204`: Endpoint successfully deleted.
- `400`: Invalid endpoint ID.
- `401`: Unauthorized.
