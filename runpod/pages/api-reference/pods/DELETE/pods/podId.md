> Pinned source for Runpod main: [api-reference/pods/DELETE/pods/podId.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/api-reference/pods/DELETE/pods/podId.mdx)
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
