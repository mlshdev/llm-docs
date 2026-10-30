> Pinned source for Trigger.dev v4.8.3: [docs/management/query/delete-dashboard.mdx](https://github.com/triggerdotdev/trigger.dev/blob/645cc47dd2eeb99387f604cad2c90ba2ef568680/docs/management/query/delete-dashboard.mdx)
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
