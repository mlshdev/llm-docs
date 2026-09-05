> Release-pinned source for Trigger.dev v4.5.16: [docs/management/deployments/promote.mdx](https://trigger.dev/docs/management/deployments/promote)

# Promote deployment

`POST /api/v1/deployments/{version}/promote`

**Promote deployment**

Promote a previously deployed version to be the current version for the environment. This makes the specified version active for new task runs.

**Parameters**

- `version` (path, required): The deployment version to promote (e.g., "20250228.1").

**Responses**

- `200`: Deployment promoted successfully
- `400`: Invalid request
- `401`: Unauthorized - API key is missing or invalid
- `404`: Deployment not found
