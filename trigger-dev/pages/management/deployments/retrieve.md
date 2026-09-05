> Release-pinned source for Trigger.dev v4.5.16: [docs/management/deployments/retrieve.mdx](https://trigger.dev/docs/management/deployments/retrieve)

# Get deployment

`GET /api/v1/deployments/{deploymentId}`

**Get deployment**

Retrieve information about a specific deployment by its ID.

**Parameters**

- `deploymentId` (path, required): The deployment ID.

**Responses**

- `200`: Successful request
- `401`: Unauthorized - Access token is missing or invalid
- `404`: Deployment not found
