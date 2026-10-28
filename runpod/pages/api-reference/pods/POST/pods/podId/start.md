> Pinned source for Runpod main: [api-reference/pods/POST/pods/podId/start.mdx](https://github.com/runpod/docs/blob/70e07c1facd0003a81dbdc548e10ae92f96e7c38/api-reference/pods/POST/pods/podId/start.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/pods/POST/pods/podId/start

# Start or resume a Pod

`POST /pods/{podId}/start`

**Start or resume a Pod**

Start or resume a Pod. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Authentication:** `ApiKey`

**Parameters**

- `podId` (path; required; string): Pod ID to start.

**Responses**

- `200`: Pod successfully started.
- `400`: Invalid Pod ID.
- `401`: Unauthorized.
