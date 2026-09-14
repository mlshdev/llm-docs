> Pinned source for Trigger.dev v4.5.16: [docs/management/deployments/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/deployments/list.mdx)
> Canonical documentation: https://trigger.dev/docs/management/deployments/list

# List deployments

List all deployments for the authenticated environment, ordered by most recent first.

`GET /api/v1/deployments`

**List deployments**

List deployments for the authenticated environment, ordered by most recent first.

**Authentication:** `secretKey`

**Parameters**

- `page[after]` (query; string): The deployment ID to start the search from, to get the next page.
- `page[size]` (query; integer; default: `20`; minimum: `5`; maximum: `100`): The number of deployments to return (default 20, min 5, max 100).
- `status` (query; string; enum: `PENDING`, `BUILDING`, `DEPLOYING`, `DEPLOYED`, `FAILED`, `CANCELED`, `TIMED_OUT`): Filter deployments by status.
- `period` (query; string): Filter deployments created within this period (e.g. 1d, 7d, 3h).
- `from` (query; string): Filter deployments created on or after this date (ISO 8601).
- `to` (query; string): Filter deployments created on or before this date (ISO 8601). Only applied when `from` is also provided.

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `data` (array)
        - `items` (object)
          - `id` (string): The deployment ID
          - `createdAt` (string; format: date-time): When the deployment was created
          - `shortCode` (string): The short code for the deployment
          - `version` (string): The deployment version (e.g., "20250228.1")
          - `runtime` (string; nullable): The runtime used (e.g., "node")
          - `runtimeVersion` (string; nullable): The runtime version
          - `status` (string; enum: `PENDING`, `BUILDING`, `DEPLOYING`, `DEPLOYED`, `FAILED`, `CANCELED`, `TIMED_OUT`): The current status of the deployment
          - `deployedAt` (string; format: date-time; nullable): When the deployment was promoted to DEPLOYED
          - `git` (object; nullable): Git metadata associated with the deployment
          - `error` (object; nullable): Error data if the deployment failed
      - `pagination` (object)
        - `next` (string): Cursor for the next page. Pass as `page[after]` to get the next page. Omitted if there are no more results.
- `401`: Unauthorized - Access token is missing or invalid
