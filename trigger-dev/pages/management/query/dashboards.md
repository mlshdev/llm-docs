> Release-pinned source for Trigger.dev v4.5.16: [docs/management/query/dashboards.mdx](https://trigger.dev/docs/management/query/dashboards)

# List dashboards

`GET /api/v1/query/dashboards`

**List built-in dashboards**

List available built-in dashboards with their widgets. Each dashboard contains pre-built TRQL queries for common metrics like run success rates, costs, and LLM usage.

**Responses**

- `200`: Dashboards listed successfully
- `401`: Unauthorized - API key is missing or invalid
