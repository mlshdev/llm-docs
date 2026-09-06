> Release-pinned source for Trigger.dev v4.5.16: [docs/management/deployments/get-latest.mdx](https://trigger.dev/docs/management/deployments/get-latest)

# Get latest deployment

`GET /api/v1/deployments/latest`

**Get latest deployment**

Retrieve information about the latest unmanaged deployment for the authenticated project.

**Responses**

- `200`: Successful request
- `401`: Unauthorized - API key is missing or invalid
- `404`: No deployment found

> **Warning**
>
> This endpoint only returns **unmanaged** deployments, which are used in self-hosted setups. It
> will return `404` for standard CLI deployments made against Trigger.dev Cloud.
>
> If you're using the CLI to deploy, use the [list deployments](https://trigger.dev/docs/management/deployments/list) endpoint instead.
