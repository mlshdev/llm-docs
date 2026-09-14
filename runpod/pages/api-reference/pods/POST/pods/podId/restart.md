> Commit-pinned source for Runpod main: [api-reference/pods/POST/pods/podId/restart.mdx](https://docs.runpod.io/api-reference/pods/POST/pods/podId/restart)

# Restart a pod

`POST /pods/{podId}/restart`

**Restart a Pod**

Restart a Pod. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `podId` (path, required): Pod ID to restart.

**Responses**

- `400`: Invalid Pod ID.
- `401`: Unauthorized.
