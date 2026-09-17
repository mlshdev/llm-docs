> Pinned source for Trigger.dev v4.6.3: [docs/management/query/schema.mdx](https://github.com/triggerdotdev/trigger.dev/blob/2d03fee2e3ff368128302ed4c783ba4e32d1cb00/docs/management/query/schema.mdx)
> Canonical documentation: https://trigger.dev/docs/management/query/schema

# Get query schema

`GET /api/v1/query/schema`

**Get query schema**

Get the schema for TRQL queries, including all available tables, their columns, data types, descriptions, and allowed values.

**Authentication:** `secretKey`

**Responses**

- `200`: Schema retrieved successfully
  - Media type: `application/json`
    - Schema (object)
      - `tables` (array)
        - `items` (object)
          - `name` (string): Table name used in TRQL queries
          - `description` (string): Description of the table
          - `timeColumn` (string): The primary time column for this table
          - `columns` (array)
            - `items` (object)
              - `name` (string): Column name
              - `type` (string): ClickHouse data type
              - `description` (string): Column description
              - `example` (string): Example value
              - `allowedValues` (array): Allowed values for enum-like columns
                - `items` (string)
              - `coreColumn` (boolean): Whether this is a core column included in default queries
- `401`: Unauthorized - API key is missing or invalid
