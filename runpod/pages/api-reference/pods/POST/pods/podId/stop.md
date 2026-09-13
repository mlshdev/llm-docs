> Commit-pinned source for Runpod main: [api-reference/pods/POST/pods/podId/stop.mdx](https://docs.runpod.io/api-reference/pods/POST/pods/podId/stop)

# Stop a Pod

`POST /pods/{podId}/stop`

**Stop a Pod**

Stop a Pod. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `podId` (path, required): Pod ID to stop.

**Responses**

- `200`: Pod successfully stopped.
- `400`: Invalid Pod ID.
- `401`: Unauthorized.
