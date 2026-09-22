> Pinned source for Trigger.dev v4.6.4: [docs/management/bulk-actions/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/bulk-actions/list.mdx)
> Canonical documentation: https://trigger.dev/docs/management/bulk-actions/list

# List bulk actions

`GET /api/v1/bulk-actions`

**List bulk actions**

List bulk actions in the current environment. Bulk actions are returned newest first and can be paginated with cursor pagination.

**Authentication:** `secretKey`

**Parameters**

- `page` (query; object): Use this parameter to paginate bulk actions. Pass `page[after]` or `page[before]` using the cursor returned in the previous response.

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `data` (required; array)
        - `items` (object)
          - `id` (required; string): The bulk action ID, prefixed with `bulk_`.
            - Example: `bulk_1234`
          - `name` (string): The name provided when the bulk action was created.
          - `type` (required; string; enum: `CANCEL`, `REPLAY`)
          - `status` (required; string; enum: `PENDING`, `COMPLETED`, `ABORTED`)
          - `counts` (required; object)
            - `total` (required; integer): The number of runs selected when the bulk action was created.
            - `success` (required; integer): The number of runs processed successfully.
            - `failure` (required; integer): The number of runs that could not be processed.
          - `createdAt` (required; string; format: date-time)
          - `completedAt` (string; format: date-time)
      - `pagination` (required; object)
        - `next` (string): Pass this cursor as `page[after]` to retrieve the next page.
        - `previous` (string): Pass this cursor as `page[before]` to retrieve the previous page.
- `400`: Invalid query parameters
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `401`: Unauthorized request
