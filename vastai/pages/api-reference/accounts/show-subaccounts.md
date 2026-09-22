> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/subaccounts](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23get%20/api/v0/subaccounts)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/show-subaccounts

# show subaccounts

`GET /api/v0/subaccounts`

Retrieve a list of subaccounts associated with the authenticated user's account.

CLI Usage: `vastai show subaccounts`

**Authentication:** `BearerAuth`

**Responses**

- `200`: A list of subaccounts.
  - Media type: `application/json`
    - Schema (object)
      - `users` (array)
        - `items` (object)
          - `id` (integer): The unique identifier of the subaccount.
          - `parent_id` (integer): The ID of the parent account.
          - `key_id` (integer): The API key ID associated with the subaccount.
          - `created_at` (string; format: date-time): The timestamp when the subaccount was created.
          - `deleted_at` (format: date-time; nullable): The timestamp when the subaccount was deleted, if applicable.
- `401`: Unauthorized access due to invalid or missing authentication token.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=2.1`
