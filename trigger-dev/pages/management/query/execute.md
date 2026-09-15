> Pinned source for Trigger.dev v4.6.1: [docs/management/query/execute.mdx](https://github.com/triggerdotdev/trigger.dev/blob/4132259b9da38c0131570ab7561fca8e016162df/docs/management/query/execute.mdx)
> Canonical documentation: https://trigger.dev/docs/management/query/execute

# Execute a query

`POST /api/v1/query`

**Execute a TRQL query**

Execute a TRQL (Trigger.dev Query Language) query against your run data. TRQL is a SQL-style query language that allows you to analyze runs, calculate metrics, and export data.

**Authentication:** `secretKey`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `query` (required; string): The TRQL query to execute
      - Example: `SELECT run_id, status, triggered_at FROM runs WHERE status = 'Failed' LIMIT 10`
    - `scope` (string; enum: `environment`, `project`, `organization`; default: `environment`): The scope of data to query - environment (default), project, or organization
    - `period` (string; nullable): Time period shorthand (e.g., "7d", "30d", "1h"). Cannot be used with from/to.
      - Example: `7d`
    - `from` (string; format: date-time; nullable): Start of time range as ISO 8601 timestamp. Must be used with 'to'.
      - Example: `2024-01-01T00:00:00Z`
    - `to` (string; format: date-time; nullable): End of time range as ISO 8601 timestamp. Must be used with 'from'.
      - Example: `2024-01-31T23:59:59Z`
    - `format` (string; enum: `json`, `csv`; default: `json`): Response format - "json" returns structured data (default), "csv" returns CSV string

**Responses**

- `200`: Query executed successfully
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object): JSON format response
          - `format` (string; enum: `json`)
          - `results` (array): Array of result rows
            - `items` (object)
        - `variant 2` (object): CSV format response
          - `format` (string; enum: `csv`)
          - `results` (string): CSV-formatted results
- `400`: Invalid query or request parameters
  - Media type: `application/json`
    - Schema (object)
      - `error` (string): Error message describing the query error
- `401`: Unauthorized - API key is missing or invalid
- `429`: Query service is busy or rate limited - retry shortly
  - Media type: `application/json`
    - Schema (object)
      - `error` (string): Error message describing why the query was turned away
- `500`: Internal server error during query execution

See the [Query documentation](https://trigger.dev/docs/observability/query#example-queries) for comprehensive examples including:

- Failed runs analysis
- Task success rates over time
- Cost tracking and optimization
- Performance metrics and percentiles
