> Pinned source for Runpod main: [api-reference/endpoints/DELETE/endpoints/endpointId.mdx](https://github.com/runpod/docs/blob/d267bc5c7b0e6ee99fe0adcc2ddd8052c44f9375/api-reference/endpoints/DELETE/endpoints/endpointId.mdx)
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
