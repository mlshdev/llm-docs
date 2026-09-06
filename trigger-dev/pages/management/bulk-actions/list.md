> Release-pinned source for Trigger.dev v4.5.16: [docs/management/bulk-actions/list.mdx](https://trigger.dev/docs/management/bulk-actions/list)

# List bulk actions

`GET /api/v1/bulk-actions`

**List bulk actions**

List bulk actions in the current environment. Bulk actions are returned newest first and can be paginated with cursor pagination.

**Parameters**

- `page` (query): Use this parameter to paginate bulk actions. Pass `page[after]` or `page[before]` using the cursor returned in the previous response.

**Responses**

- `200`: Successful request
- `400`: Invalid query parameters
- `401`: Unauthorized request
