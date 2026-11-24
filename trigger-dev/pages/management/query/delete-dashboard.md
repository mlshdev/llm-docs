> Pinned source for Trigger.dev v4.8.10: [docs/management/query/delete-dashboard.mdx](https://github.com/triggerdotdev/trigger.dev/blob/523400fcb4d65f3f24303b92566862a72817907c/docs/management/query/delete-dashboard.mdx)
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
