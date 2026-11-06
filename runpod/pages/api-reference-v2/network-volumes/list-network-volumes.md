> Pinned source for Runpod main: [api-reference-v2/network-volumes/list-network-volumes.mdx](https://github.com/runpod/docs/blob/f4691b442d8e51b3762dff5669f9a517aef85350/api-reference-v2/network-volumes/list-network-volumes.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/network-volumes/list-network-volumes

# List Network Volumes

List all network volumes owned by the authenticated Runpod user, including each volume's size, data center, and storage tier.

`GET /v2/network-volumes`

**List network volumes**

Returns network volumes owned by the authenticated user,
cursor-paginated newest-first; an omitted `limit` defaults to 1000.
Follow `pagination.nextCursor` until `hasNextPage` is false.

**Authentication:** `bearerAuth`

**Parameters**

- `filters` (query): Only return resources matching these filters, as URL-encoded JSON. The filters apply before the page is cut, so send the same value with each `cursor` to keep walking the filtered list.
  - Media type: `application/json`
    - Schema (object): An empty object, or an empty `tags` array, filters nothing.
      - `tags` (array; maximum items: `25`): Conditions on the resource's tags. A resource must match every condition; repeating a key adds a condition rather than widening the first one. At most 25, the most tags one resource can carry.
        - `items` (object)
          - `key` (required; string; minimum length: `1`; maximum length: `191`; pattern: `[^\t-\r  - ]`): Tag key, 1–191 characters as sent, with at least one that is not whitespace. Leading and trailing whitespace is ignored. Keys under the reserved `runpod:` prefix, in any letter case, are rejected.
          - `values` (array; maximum items: `100`): Matches a tag under `key` with any one of these values, compared exactly. Omitted or empty, the condition only requires the key to be present. `""` matches a tag whose value is empty. At most 100.
            - `items` (string; maximum length: `191`)
    - Example: `{"tags":[{"key":"env","values":["dev","prod"]},{"key":"team"}]}`
- `cursor` (query; string; minimum length: `1`): Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422.
  - Example: `Y3JlYXRlZEF0PTE3NDg3ODA0MDA`
- `limit` (query; integer; minimum: `1`; maximum: `1000`): Page size, 1–1000. Defaults to 1000 when omitted.
  - Example: `50`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object)
      - `networkVolumes` (required; array)
        - `items` (object)
          - `costCenter`: Cost center this resource's spend is attributed to. Absent when the resource is not attributed to a cost center, or when the caller lacks permission to view cost centers. Managed through `/v2/cost-centers`.
            - allOf:
              - `variant 1` (object)
                - `id` (required; string)
                - `value` (required; string): Cost center name exactly as stored, so it matches billing breakdowns.
          - `tags` (array): The tags on this resource that are visible to the caller. Keys and values are returned exactly as stored. Tags under the reserved `runpod:` prefix, such as the cost center, are never listed here. Absent when the resource's tags are unavailable to the caller; an empty array means none are visible.
            - `items` (object)
              - `id` (required; string): ID of the tag itself, shared by every resource it is attached to.
              - `key` (required; string)
              - `value` (required; string): May be empty.
          - `id` (required; string): Unique network volume identifier
          - `name` (required; string): Human-readable name (not required to be unique)
          - `size` (required; integer; minimum: `10`; maximum: `4096`): Allocated storage in GB
          - `dataCenter` (required; string): Data center location; immutable after creation
          - `type` (required): Storage tier of this volume. Set at creation and immutable.
            - allOf:
              - `variant 1` (string; enum: `STANDARD`, `HIGH_PERFORMANCE`): Data center network volume storage type.
      - `pagination` (required; object): Cursor-pagination metadata, uniform across list endpoints. Every response carries it: follow `nextCursor` while `hasNextPage` is true to walk the full result set.
        - `nextCursor` (required; nullable): Pass as the `cursor` query parameter to fetch the next page. Null on the last page.
        - `hasNextPage` (required; boolean): Whether more items exist after this page.
    - Example `networkVolumes`: `{"networkVolumes":[{"id":"2q9m7x4c","name":"training-dataset","size":100,"dataCenter":"US-KS-2","type":"HIGH_PERFORMANCE"}],"pagination":{"nextCursor":null,"hasNextPage":false}}`
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
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `insufficientAccess`: `{"title":"Forbidden","status":403,"detail":"access denied"}`
- `413`: The response would exceed the response size cap. Request fewer items and retry; on paginated operations, lower `limit`.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `responseTooLarge`: `{"title":"Request Entity Too Large","status":413,"detail":"Response too large for one request. Request fewer items and retry."}`
- `422`: The request body or parameters were syntactically valid but failed validation.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
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
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `rateLimited`: `{"title":"Too Many Requests","status":429,"detail":"rate limit exceeded for the minute window"}`
- `default`: Error
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
