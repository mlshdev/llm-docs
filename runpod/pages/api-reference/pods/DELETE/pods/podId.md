> Commit-pinned source for Runpod main: [api-reference/pods/DELETE/pods/podId.mdx](https://docs.runpod.io/api-reference/pods/DELETE/pods/podId)

# Delete a Pod

`DELETE /pods/{podId}`

**Delete a Pod**

Delete a Pod. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `podId` (path, required): Pod ID to delete.

**Responses**

- `204`: Pod successfully deleted.
- `400`: Invalid Pod ID.
- `401`: Unauthorized.
