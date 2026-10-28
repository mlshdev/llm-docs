> Pinned source for Runpod main: [api-reference-v2/audit-logs/list-audit-logs.mdx](https://github.com/runpod/docs/blob/70e07c1facd0003a81dbdc548e10ae92f96e7c38/api-reference-v2/audit-logs/list-audit-logs.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/audit-logs/list-audit-logs

# List Audit Logs

List your Runpod audit trail to see who acted on each resource, with filters for actor, action, time range, and text, newest first.

`GET /v2/audit-logs`

**List audit logs**

Returns the account's audit trail, newest first, cursor-paginated; an omitted `limit` defaults to 200. Each entry records who acted (`actorId`, `email`), what they did (`action`), to which resource (`resourceType`, `resourceId`), and the details of the change (`value`). When the caller belongs to an organization the trail is the organization's, and `actorIds` narrows it to specific members; otherwise it is the trail of the account the request acts for. Filters combine with AND. Entries older than the account's audit log retention window are not returned, and an account whose plan does not include audit logs is answered 403. Follow `pagination.nextCursor` until `hasNextPage` is false.

**Authentication:** `bearerAuth`

**Parameters**

- `actorIds` (query; array): Only return entries performed by these users. Comma-separated user IDs. Available to organization accounts only; a personal or team account is answered 400.
  - Example: `["user_id_abc_123","user_id_def_456"]`
- `actions` (query; array): Only return entries whose `action` is one of these names, matched exactly as recorded. Comma-separated.
  - Example: `["create","delete"]`
- `startTime` (query; string; format: date-time): Earliest instant to include, inclusive (RFC 3339). The account's audit log retention window still applies: entries that have aged out are not returned even when this reaches further back.
  - Example: `2026-09-01T00:00:00Z`
- `endTime` (query; string; format: date-time): Latest instant to include, inclusive (RFC 3339). Must be after `startTime` when both are given; 400 otherwise.
  - Example: `2026-09-30T23:59:59Z`
- `search` (query; string; minimum length: `1`): Case-insensitive substring match against `email`, `resourceType`, `resourceId`, `action` and `value`; `actorId` is not searched. Surrounding whitespace is ignored.
  - Example: `abc123`
- `cursor` (query; string; minimum length: `1`): Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422.
  - Example: `Y3JlYXRlZEF0PTE3NDg3ODA0MDA`
- `limit` (query; integer; minimum: `1`; maximum: `200`): Page size, 1–200. Defaults to 200 when omitted.
  - Example: `50`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `auditLogs` (required; array)
        - `items` (object): One recorded action on the account.
          - `actorId` (required; nullable): ID of the user who performed the action. Null when the action was not attributable to a user.
          - `email` (required; nullable): Email of the actor when the action was recorded. Null when unknown.
          - `resourceType` (required; string): Kind of resource the action applied to, as recorded at write time. Not an enum: values are free-form, mostly lower camel case, and new kinds appear without an API version change. Current writers record values such as `pod`, `apiKey`, `sharedApiKey`, `secret`, `costCenter`, `paymentMethod`, `billingAccount`, `registryCredential`, `organization` and `group`, and `unknown` when the writer recorded no kind.
          - `resourceId` (required; string): ID of the affected resource. Empty when the action was not about one resource; a bulk action lists every affected ID, comma-separated.
          - `action` (required; string): Name of the action, as recorded at write time. Not an enum: values are free-form, mostly lower case verbs, and new actions appear without an API version change. Current writers record values such as `create`, `update`, `delete`, `rename`, `lock`, `unlock`, `start`, `reset`, `add` and `setBillingMode`.
          - `value` (required; nullable): Details of the change as a JSON-encoded string. The structure varies by action; parse it as JSON for a structured view. A bulk action split across several entries adds an `auditChunk` object with `index` and `of`. Null when the action recorded no details.
          - `timestamp` (required; string; format: date-time): When the action happened (UTC, whole seconds).
      - `pagination` (required; object): Cursor-pagination metadata, uniform across list endpoints. Every response carries it: follow `nextCursor` while `hasNextPage` is true to walk the full result set.
        - `nextCursor` (required; nullable): Pass as the `cursor` query parameter to fetch the next page. Null on the last page.
        - `hasNextPage` (required; boolean): Whether more items exist after this page.
    - Example `auditLogs`: `{"auditLogs":[{"actorId":"user_id_abc_123","email":"actor@example.com","resourceType":"pod","resourceId":"abc123","action":"delete","value":"{\"status\":\"TERMINATED\"}","timestamp":"2026-09-02T00:00:00Z"},{"actorId":"user_id_abc_123","email":"actor@example.com","resourceType":"pod","resourceId":"abc123","action":"rename","value":"{\"name\":\"training-run-7\"}","timestamp":"2026-09-01T18:30:00Z"},{"actorId":"user_id_def_456","email":"admin@example.com","resourceType":"secret","resourceId":"sec_789","action":"update","value":"{\"id\":\"sec_789\",\"name\":\"HF_TOKEN\",\"sharedWithOrganization\":true}","timestamp":"2026-09-01T09:15:00Z"}],"pagination":{"nextCursor":"eyJ0cyI6IjIwMjYtMDktMDFUMDk6MTU6MDBaIn0=","hasNextPage":true}}`
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `badRequest`: `{"title":"Bad Request","status":400,"detail":"request could not be processed"}`
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `missingBearerToken`: `{"title":"Unauthorized","status":401,"detail":"missing bearer token"}`
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `insufficientAccess`: `{"title":"Forbidden","status":403,"detail":"access denied"}`
- `413`: The response would exceed the upstream response size cap. Request fewer items and retry; on paginated operations, lower `limit`.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `responseTooLarge`: `{"title":"Request Entity Too Large","status":413,"detail":"Response too large for one request. Request fewer items and retry."}`
- `422`: The request body or parameters were syntactically valid but failed validation.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `validationFailed`: `{"title":"Unprocessable Entity","status":422,"detail":"Request validation failed."}`
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
  - Header `Retry-After` (integer): Seconds to wait before retrying, per the exceeded window.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `rateLimited`: `{"title":"Too Many Requests","status":429,"detail":"rate limit exceeded for the minute window"}`
- `default`: Error
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
