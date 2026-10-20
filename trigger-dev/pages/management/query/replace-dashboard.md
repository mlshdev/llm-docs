> Pinned source for Trigger.dev v4.7.6: [docs/management/query/replace-dashboard.mdx](https://github.com/triggerdotdev/trigger.dev/blob/166db1ca0781345894af115bc877081a9546a44c/docs/management/query/replace-dashboard.mdx)
> Canonical documentation: https://trigger.dev/docs/management/query/replace-dashboard

# Replace dashboard widgets

`PUT /api/v1/query/dashboards/{dashboardId}`

**Replace a dashboard's widgets**

Replace every widget on a custom dashboard, and optionally its title and description. A widget that already exists keeps its position unless you pass a new one; new widgets without a position are stacked full width below the others, in order.

**Authentication:** `secretKey`

**Parameters**

- `dashboardId` (path; required; string): The custom dashboard id, starting with `dashboard_`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `title` (string; maximum length: `200`)
    - `description` (string; maximum length: `2000`)
    - `widgets` (required; array)
      - `items` (object)
        - `id` (string): Omit to generate one. Letters, numbers, `_` and `-`, unique within the dashboard.
        - `title` (required; string; maximum length: `200`)
        - `query` (string): A TRQL query. Required unless the display type is `title`.
        - `display` (required): How the widget renders its query results.
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
        - `fillGaps` (boolean): Fill empty time buckets, carrying gauges forward and zero-filling counters.
        - `position` (object): A position on the dashboard's 12-column grid.
          - `x` (required; integer; minimum: `0`; maximum: `11`)
          - `y` (required; integer; minimum: `0`)
          - `w` (required; integer; minimum: `1`; maximum: `12`)
          - `h` (required; integer; minimum: `1`)
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
- `400`: Invalid request, for example an invalid widget query or a duplicate widget id
- `403`: The widget limit for your plan was reached
- `404`: Dashboard not found
- `409`: The dashboard changed since `revision` was read
