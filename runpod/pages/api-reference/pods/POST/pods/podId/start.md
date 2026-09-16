> Pinned source for Runpod main: [api-reference/pods/POST/pods/podId/start.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference/pods/POST/pods/podId/start.mdx)
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
