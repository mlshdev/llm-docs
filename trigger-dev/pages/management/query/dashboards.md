> Pinned source for Trigger.dev v4.8.1: [docs/management/query/dashboards.mdx](https://github.com/triggerdotdev/trigger.dev/blob/bd2a14e6ad83fbe056a473b0082ff4110747fa38/docs/management/query/dashboards.mdx)
> Canonical documentation: https://trigger.dev/docs/management/query/dashboards

# List dashboards

`GET /api/v1/query/dashboards`

**List dashboards**

List the built-in dashboards and your organization's custom dashboards, with their widgets. Built-in dashboards contain pre-built TRQL queries for common metrics like run success rates, costs, and LLM usage.

**Authentication:** `secretKey`

**Responses**

- `200`: Dashboards listed successfully
  - Media type: `application/json`
    - Schema (object)
      - `dashboards` (array)
        - `items` (object)
          - `key` (string): Dashboard identifier. Built-in dashboards use a key like "overview" or "llm"; custom dashboards use their id.
          - `title` (string): Dashboard display title
          - `type` (string; enum: `builtIn`, `custom`): Built-in dashboards are read-only. Custom dashboards can be changed with the endpoints below.
          - `description` (string): The dashboard description (custom dashboards only)
          - `widgets` (array)
            - `items` (object)
              - `id` (string): Widget identifier
              - `title` (string): Widget display title
              - `query` (string): The TRQL query this widget executes
              - `type` (string; enum: `bignumber`, `chart`, `table`): Widget display type
- `401`: Unauthorized - API key is missing or invalid
