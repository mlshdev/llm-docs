> Pinned source for Trigger.dev v4.8.1: [docs/management/query/delete-dashboard.mdx](https://github.com/triggerdotdev/trigger.dev/blob/bd2a14e6ad83fbe056a473b0082ff4110747fa38/docs/management/query/delete-dashboard.mdx)
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
