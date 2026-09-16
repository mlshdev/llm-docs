> Pinned source for Runpod main: [api-reference/pods/DELETE/pods/podId.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference/pods/DELETE/pods/podId.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/pods/DELETE/pods/podId

# Delete a Pod

`DELETE /pods/{podId}`

**Delete a Pod**

Delete a Pod. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Authentication:** `ApiKey`

**Parameters**

- `podId` (path; required; string): Pod ID to delete.

**Responses**

- `204`: Pod successfully deleted.
- `400`: Invalid Pod ID.
- `401`: Unauthorized.
