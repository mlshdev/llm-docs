> Pinned source for Trigger.dev v4.6.4: [docs/management/deployments/promote.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/deployments/promote.mdx)
> Canonical documentation: https://trigger.dev/docs/management/deployments/promote

# Promote deployment

`POST /api/v1/deployments/{version}/promote`

**Promote deployment**

Promote a previously deployed version to be the current version for the environment. This makes the specified version active for new task runs.

**Authentication:** `secretKey`

**Parameters**

- `version` (path; required; string): The deployment version to promote (e.g., "20250228.1").

**Responses**

- `200`: Deployment promoted successfully
  - Media type: `application/json`
    - Schema (object)
      - `id` (string): The deployment ID
      - `version` (string): The deployment version (e.g., "20250228.1")
      - `shortCode` (string): The short code for the deployment
- `400`: Invalid request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
- `401`: Unauthorized - API key is missing or invalid
- `404`: Deployment not found
