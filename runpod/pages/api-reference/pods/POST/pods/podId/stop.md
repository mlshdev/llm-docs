> Pinned source for Runpod main: [api-reference/pods/POST/pods/podId/stop.mdx](https://github.com/runpod/docs/blob/f2481a71841afde6db66b886a32d287d2e3ac0c9/api-reference/pods/POST/pods/podId/stop.mdx)
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
