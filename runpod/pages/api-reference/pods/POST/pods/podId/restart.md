> Pinned source for Runpod main: [api-reference/pods/POST/pods/podId/restart.mdx](https://github.com/runpod/docs/blob/25ec0e5ebf1cdc72fae35ed21b489444a68e9cad/api-reference/pods/POST/pods/podId/restart.mdx)
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
