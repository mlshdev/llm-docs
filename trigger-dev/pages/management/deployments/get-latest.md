> Pinned source for Trigger.dev v4.6.0: [docs/management/deployments/get-latest.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/deployments/get-latest.mdx)
> Canonical documentation: https://trigger.dev/docs/management/deployments/get-latest

# Get latest deployment

`GET /api/v1/deployments/latest`

**Get latest deployment**

Retrieve information about the latest unmanaged deployment for the authenticated project.

**Authentication:** `secretKey`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (string): The deployment ID
      - `status` (string; enum: `PENDING`, `INSTALLING`, `BUILDING`, `DEPLOYING`, `DEPLOYED`, `FAILED`, `CANCELED`, `TIMED_OUT`): The current status of the deployment
      - `contentHash` (string): Hash of the deployment content
      - `shortCode` (string): The short code for the deployment
      - `version` (string): The deployment version (e.g., "20250228.1")
      - `imageReference` (string; nullable): Reference to the deployment image
      - `errorData` (object; nullable): Error data if the deployment failed
- `401`: Unauthorized - API key is missing or invalid
- `404`: No deployment found

> **Warning**
>
> This endpoint only returns **unmanaged** deployments, which are used in self-hosted setups. It
> will return `404` for standard CLI deployments made against Trigger.dev Cloud.
>
> If you're using the CLI to deploy, use the [list deployments](https://trigger.dev/docs/management/deployments/list) endpoint instead.
