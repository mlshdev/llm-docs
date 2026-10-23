> Pinned source for Trigger.dev v4.8.1: [docs/management/query/retrieve-dashboard.mdx](https://github.com/triggerdotdev/trigger.dev/blob/bd2a14e6ad83fbe056a473b0082ff4110747fa38/docs/management/query/retrieve-dashboard.mdx)
> Canonical documentation: https://trigger.dev/docs/management/query/retrieve-dashboard

# Retrieve dashboard

`GET /api/v1/query/dashboards/{dashboardId}`

**Retrieve a dashboard**

Retrieve a custom dashboard with every widget, its query, display and grid position.

**Authentication:** `secretKey`

**Parameters**

- `dashboardId` (path; required; string): The custom dashboard id, starting with `dashboard_`

**Responses**

- `200`: The dashboard
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
