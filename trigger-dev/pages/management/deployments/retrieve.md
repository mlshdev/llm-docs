> Pinned source for Trigger.dev v4.6.0: [docs/management/deployments/retrieve.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/deployments/retrieve.mdx)
> Canonical documentation: https://trigger.dev/docs/management/deployments/retrieve

# Get deployment

`GET /api/v1/deployments/{deploymentId}`

**Get deployment**

Retrieve information about a specific deployment by its ID.

**Authentication:** `secretKey`

**Parameters**

- `deploymentId` (path; required; string): The deployment ID.

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
      - `imagePlatform` (string): Platform of the deployment image
      - `externalId` (string): The external deployment id this deployment was deployed under (`--external-id`), used by version skew protection to pin runs. Absent if the deployment was deployed without one
      - `externalBuildData` (object; nullable): External build data if applicable
      - `errorData` (object; nullable): Error data if the deployment failed
      - `worker` (object; nullable): Worker information if available
        - `id` (string)
        - `version` (string)
        - `tasks` (array)
          - `items` (object)
            - `id` (string)
            - `slug` (string)
            - `filePath` (string)
            - `exportName` (string)
- `401`: Unauthorized - Access token is missing or invalid
- `404`: Deployment not found
