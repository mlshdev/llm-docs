> Pinned source for Trigger.dev v4.6.3: [docs/management/query/dashboards.mdx](https://github.com/triggerdotdev/trigger.dev/blob/2d03fee2e3ff368128302ed4c783ba4e32d1cb00/docs/management/query/dashboards.mdx)
> Canonical documentation: https://trigger.dev/docs/management/query/dashboards

# List dashboards

`GET /api/v1/query/dashboards`

**List built-in dashboards**

List available built-in dashboards with their widgets. Each dashboard contains pre-built TRQL queries for common metrics like run success rates, costs, and LLM usage.

**Authentication:** `secretKey`

**Responses**

- `200`: Dashboards listed successfully
  - Media type: `application/json`
    - Schema (object)
      - `dashboards` (array)
        - `items` (object)
          - `key` (string): Dashboard identifier (e.g. "overview", "llm")
          - `title` (string): Dashboard display title
          - `widgets` (array)
            - `items` (object)
              - `id` (string): Widget identifier
              - `title` (string): Widget display title
              - `query` (string): The TRQL query this widget executes
              - `type` (string; enum: `bignumber`, `chart`, `table`): Widget display type
- `401`: Unauthorized - API key is missing or invalid
