> Pinned source for Runpod main: [api-reference/pods/POST/pods/podId/start.mdx](https://github.com/runpod/docs/blob/d267bc5c7b0e6ee99fe0adcc2ddd8052c44f9375/api-reference/pods/POST/pods/podId/start.mdx)
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
