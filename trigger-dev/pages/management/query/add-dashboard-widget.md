> Pinned source for Trigger.dev v4.8.3: [docs/management/query/add-dashboard-widget.mdx](https://github.com/triggerdotdev/trigger.dev/blob/645cc47dd2eeb99387f604cad2c90ba2ef568680/docs/management/query/add-dashboard-widget.mdx)
> Canonical documentation: https://trigger.dev/docs/management/query/add-dashboard-widget

# Add dashboard widget

`POST /api/v1/query/dashboards/{dashboardId}/widgets`

**Add a dashboard widget**

Add a widget to a custom dashboard. Without a position it is placed full width at the bottom.

**Authentication:** `secretKey`

**Parameters**

- `dashboardId` (path; required; string): The custom dashboard id, starting with `dashboard_`

**Request body** (required)

- Media type: `application/json`
  - Schema
    - allOf:
      - `variant 1` (object)
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
      - `variant 2` (object)
        - `revision` (string): The `revision` from the dashboard you last read. Send it to reject the write with a 409 if someone else changed the dashboard in the meantime.

**Responses**

- `201`: Widget added
  - Media type: `application/json`
    - Schema (object)
      - `widgetId` (string)
      - `dashboard` (object)
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
- `400`: Invalid widget, for example an invalid query
- `403`: The widget limit for your plan was reached
- `404`: Dashboard not found
- `409`: A widget with this id already exists, or the dashboard changed since `revision` was read
