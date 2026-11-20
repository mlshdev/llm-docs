> Pinned source for Trigger.dev v4.8.7: [docs/management/query/delete-dashboard.mdx](https://github.com/triggerdotdev/trigger.dev/blob/fae01445473658369323ddc462b71eae51c790ff/docs/management/query/delete-dashboard.mdx)
> Canonical documentation: https://trigger.dev/docs/management/query/delete-dashboard

# Delete dashboard

`DELETE /api/v1/query/dashboards/{dashboardId}`

**Delete a dashboard**

Delete a custom dashboard.

**Authentication:** `secretKey`

**Parameters**

- `dashboardId` (path; required; string): The custom dashboard id, starting with `dashboard_`

**Responses**

- `200`: Dashboard deleted
  - Media type: `application/json`
    - Schema (object)
      - `id` (string)
- `404`: Dashboard not found
