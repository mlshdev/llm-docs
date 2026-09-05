> Release-pinned source for Trigger.dev v4.5.16: [docs/management/query/execute.mdx](https://trigger.dev/docs/management/query/execute)

# Execute a query

`POST /api/v1/query`

**Execute a TRQL query**

Execute a TRQL (Trigger.dev Query Language) query against your run data. TRQL is a SQL-style query language that allows you to analyze runs, calculate metrics, and export data.

**Request body**

**Responses**

- `200`: Query executed successfully
- `400`: Invalid query or request parameters
- `401`: Unauthorized - API key is missing or invalid
- `429`: Query service is busy or rate limited - retry shortly
- `500`: Internal server error during query execution

See the [Query documentation](https://trigger.dev/docs/observability/query#example-queries) for comprehensive examples including:

- Failed runs analysis
- Task success rates over time
- Cost tracking and optimization
- Performance metrics and percentiles
