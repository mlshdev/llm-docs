> Commit-pinned source for Runpod main: [api-reference/pods/POST/pods/podId/start.mdx](https://docs.runpod.io/api-reference/pods/POST/pods/podId/start)

# Start or resume a Pod

`POST /pods/{podId}/start`

**Start or resume a Pod**

Start or resume a Pod. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `podId` (path, required): Pod ID to start.

**Responses**

- `200`: Pod successfully started.
- `400`: Invalid Pod ID.
- `401`: Unauthorized.
