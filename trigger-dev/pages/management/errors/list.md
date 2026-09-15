> Pinned source for Trigger.dev v4.6.1: [docs/management/errors/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/4132259b9da38c0131570ab7561fca8e016162df/docs/management/errors/list.mdx)
> Canonical documentation: https://trigger.dev/docs/management/errors/list

# List errors

`GET /api/v1/errors`

**List errors**

List error groups in a specific environment. Runs that fail are grouped by a fingerprint derived from the error type, message, and stack trace. Filter by task identifier, version, status, search text, and time range.

**Authentication:** `secretKey`

**Parameters**

- `page` (query; object): Paginate the results. Specify the number of errors per page, and the ID of the error to start the page after or before. For object fields like `page`, use the "form" encoding style. For example, to get the next page, use `page[after]=error_1234`.
- `filter` (query; object): Filter the error groups. Filter by task identifier, version, status, search text, and time range. For array fields, provide multiple values as a comma-separated list. For example, to get unresolved and ignored errors, use `filter[status]=unresolved,ignored`. For the time range, use `filter[period]` (e.g. `filter[period]=7d`) or `filter[from]` / `filter[to]` with ISO timestamps.

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `data` (array)
        - `items` (object)
          - `id` (required; string): The unique ID of the error group, prefixed with `error_`
            - Example: `error_8f3b2a1c9d4e5f60`
          - `fingerprint` (required; string): The raw fingerprint the error is grouped by
          - `taskIdentifier` (required; string): The identifier of the task the error belongs to
          - `errorType` (required; string): The error type or name (e.g. `TypeError`)
          - `errorMessage` (required; string): The normalized error message
          - `status` (required; string; enum: `unresolved`, `resolved`, `ignored`)
          - `count` (required; integer): The number of occurrences within the requested time range
          - `firstSeen` (required; string; format: date-time): When the error group was first seen (global)
          - `lastSeen` (required; string; format: date-time): When the error group was last seen (global)
          - `resolvedAt` (string; format: date-time; nullable)
          - `ignoredUntil` (string; format: date-time; nullable)
      - `pagination` (object)
        - `next` (string): The error ID to start the next page after. Pass it as `page[after]`.
          - Example: `error_8f3b2a1c9d4e5f60`
        - `previous` (string): The error ID to start the previous page before. Pass it as `page[before]`.
- `400`: Invalid query parameters
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Query Error`
      - `details` (array)
        - `items` (object)
          - `code` (required; string): The error code
            - Example: `custom`
          - `message` (required; string): The error message
            - Example: `Invalid status values: FOOBAR`
          - `path` (array): The relevant path in the request
            - Example: `["filter[status]"]`
            - `items` (string)
- `401`: Unauthorized request
