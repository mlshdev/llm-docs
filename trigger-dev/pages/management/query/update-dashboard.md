> Pinned source for Trigger.dev v4.7.7: [docs/management/query/update-dashboard.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ffc950ee0d4fb2bdfbc0d368bba8d6e25e8d6e72/docs/management/query/update-dashboard.mdx)
> Canonical documentation: https://trigger.dev/docs/management/query/update-dashboard

# Update dashboard

`PATCH /api/v1/query/dashboards/{dashboardId}`

**Update a dashboard**

Rename a custom dashboard or change its description.

**Authentication:** `secretKey`

**Parameters**

- `dashboardId` (path; required; string): The custom dashboard id, starting with `dashboard_`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `title` (string; maximum length: `200`)
    - `description` (string; maximum length: `2000`)
    - `revision` (string): The `revision` from the dashboard you last read. Send it to reject the write with a 409 if someone else changed the dashboard in the meantime.

**Responses**

- `200`: The updated dashboard
  - Media type: `application/json`
    - Schema (object)
      - `id` (string): The dashboard id, starting with `dashboard_`
      - `title` (string)
      - `description` (string)
      - `revision` (string): The `revision` from the dashboard you last read. Send it to reject the write with a 409 if someone else changed the dashboard in the meantime.
      - `createdAt` (string; format: date-time)
      - `updatedAt` (string; format: date-time)
      - `widgets` (array): Widgets in grid order, top to bottom then left to right.
        - `items` (object)
          - `id` (string)
          - `title` (string)
          - `query` (string)
          - `display`: How the widget renders its query results.
            - oneOf:
              - `variant 1` (object)
                - `type` (required; string; enum: `table`)
                - `prettyFormatting` (boolean; default: `true`)
                - `sorting` (array)
                  - `items` (object)
                    - `id` (string)
                    - `desc` (boolean)
              - `variant 2` (object)
                - `type` (required; string; enum: `chart`)
                - `chartType` (required; string; enum: `bar`, `line`)
                - `xAxisColumn` (required; string; nullable)
                - `yAxisColumns` (required; array)
                  - `items` (string)
                - `groupByColumn` (required; string; nullable)
                - `stacked` (required; boolean)
                - `sortByColumn` (required; string; nullable)
                - `sortDirection` (required; string; enum: `asc`, `desc`)
                - `aggregation` (required; string; enum: `sum`, `avg`, `count`, `min`, `max`)
                - `seriesColors` (object)
                  - `additional properties` (string)
              - `variant 3` (object)
                - `type` (required; string; enum: `bignumber`)
                - `column` (required; string)
                - `aggregation` (required; string; enum: `sum`, `avg`, `count`, `min`, `max`, `first`, `last`)
                - `sortDirection` (string; enum: `asc`, `desc`)
                - `abbreviate` (boolean; default: `false`)
                - `prefix` (string)
                - `suffix` (string)
              - `variant 4` (object)
                - `type` (required; string; enum: `title`)
          - `fillGaps` (boolean)
          - `position` (object): A position on the dashboard's 12-column grid.
            - `x` (required; integer; minimum: `0`; maximum: `11`)
            - `y` (required; integer; minimum: `0`)
            - `w` (required; integer; minimum: `1`; maximum: `12`)
            - `h` (required; integer; minimum: `1`)
- `404`: Dashboard not found
- `409`: The dashboard changed since `revision` was read
