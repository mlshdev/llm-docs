> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/bundles](https://docs.vast.ai/api-reference/search/search-offers)

# search offers

`POST /api/v0/bundles`

Search for available GPU machine offers with advanced filtering and sorting.

Each filter parameter (such as `verified`, `gpu_name`, `num_gpus`, etc.) should be an object specifying the operator and value you want to match.

**Filter operators:**

| Operator | Meaning                | Example                        |
|:---------|:-----------------------|:-------------------------------|
| `eq`     | Equal to               | `{ "eq": true }`               |
| `neq`    | Not equal to           | `{ "neq": false }`             |
| `gt`     | Greater than           | `{ "gt": 0.99 }`               |
| `lt`     | Less than              | `{ "lt": 10000 }`              |
| `gte`    | Greater than or equal  | `{ "gte": 4 }`                 |
| `lte`    | Less than or equal     | `{ "lte": 8 }`                 |
| `in`     | Value is in a list     | `{ "in": ["RTX_3090", "RTX_4090"] }` |
| `notin`  | Value is not in a list | `{ "notin": ["TW", "SE"] }`    |

CLI Usage: `vastai search offers 'reliability > 0.99 num_gpus>=4' --order=dph_total`

**Request body**

**Responses**

- `200`: Successful search response
- `400`: Bad request - invalid query parameters
- `404`: Unauthorized - invalid or missing API key
