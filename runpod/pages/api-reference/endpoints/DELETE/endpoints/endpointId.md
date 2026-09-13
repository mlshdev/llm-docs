> Commit-pinned source for Runpod main: [api-reference/endpoints/DELETE/endpoints/endpointId.mdx](https://docs.runpod.io/api-reference/endpoints/DELETE/endpoints/endpointId)

# Delete an endpoint

`DELETE /endpoints/{endpointId}`

**Delete an endpoint**

Delete an endpoint. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `endpointId` (path, required): Endpoint ID to delete.

**Responses**

- `204`: Endpoint successfully deleted.
- `400`: Invalid endpoint ID.
- `401`: Unauthorized.
