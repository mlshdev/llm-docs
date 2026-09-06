> Release-pinned source for Trigger.dev v4.5.16: [docs/management/deployments/list.mdx](https://trigger.dev/docs/management/deployments/list)

# List deployments

List all deployments for the authenticated environment, ordered by most recent first.

`GET /api/v1/deployments`

**List deployments**

List deployments for the authenticated environment, ordered by most recent first.

**Parameters**

- `page[after]` (query): The deployment ID to start the search from, to get the next page.
- `page[size]` (query): The number of deployments to return (default 20, min 5, max 100).
- `status` (query): Filter deployments by status.
- `period` (query): Filter deployments created within this period (e.g. 1d, 7d, 3h).
- `from` (query): Filter deployments created on or after this date (ISO 8601).
- `to` (query): Filter deployments created on or before this date (ISO 8601). Only applied when `from` is also provided.

**Responses**

- `200`: Successful request
- `401`: Unauthorized - Access token is missing or invalid
