> Release-pinned source for Trigger.dev v4.5.16: [docs/management/query/schema.mdx](https://trigger.dev/docs/management/query/schema)

# Get query schema

`GET /api/v1/query/schema`

**Get query schema**

Get the schema for TRQL queries, including all available tables, their columns, data types, descriptions, and allowed values.

**Responses**

- `200`: Schema retrieved successfully
- `401`: Unauthorized - API key is missing or invalid
