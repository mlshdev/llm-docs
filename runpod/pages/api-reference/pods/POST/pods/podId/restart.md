> Pinned source for Runpod main: [api-reference/pods/POST/pods/podId/restart.mdx](https://github.com/runpod/docs/blob/9e01115256339ad17308ac8022447b7aadcf9cf6/api-reference/pods/POST/pods/podId/restart.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/pods/POST/pods/podId/restart

# Restart a pod

`POST /pods/{podId}/restart`

**Restart a Pod**

Restart a Pod. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Authentication:** `ApiKey`

**Parameters**

- `podId` (path; required; string): Pod ID to restart.

**Responses**

- `400`: Invalid Pod ID.
- `401`: Unauthorized.
