> Pinned source for Runpod main: [api-reference/pods/DELETE/pods/podId.mdx](https://github.com/runpod/docs/blob/674b3f2b13fbc59fb349a716b32faf18fb2fcc98/api-reference/pods/DELETE/pods/podId.mdx)
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
