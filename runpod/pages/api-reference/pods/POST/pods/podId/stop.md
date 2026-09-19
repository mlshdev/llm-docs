> Pinned source for Runpod main: [api-reference/pods/POST/pods/podId/stop.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/api-reference/pods/POST/pods/podId/stop.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/pods/POST/pods/podId/stop

# Stop a Pod

`POST /pods/{podId}/stop`

**Stop a Pod**

Stop a Pod. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Authentication:** `ApiKey`

**Parameters**

- `podId` (path; required; string): Pod ID to stop.

**Responses**

- `200`: Pod successfully stopped.
- `400`: Invalid Pod ID.
- `401`: Unauthorized.
