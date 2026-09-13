> Commit-pinned source for Runpod main: [api-reference/pods/POST/pods/podId/reset.mdx](https://docs.runpod.io/api-reference/pods/POST/pods/podId/reset)

# Reset a Pod

`POST /pods/{podId}/reset`

**Reset a Pod**

Reset a Pod. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `podId` (path, required): Pod ID to reset.

**Responses**

- `200`: Pod successfully reset.
- `400`: Invalid Pod ID.
- `401`: Unauthorized.
