> Pinned source for Runpod main: [api-reference-v2/billing/get-cluster-billing-history.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/api-reference-v2/billing/get-cluster-billing-history.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/billing/get-cluster-billing-history

# Get Cluster Billing History

Retrieve time-bucketed Runpod Cluster billing history, including GPU compute, disk, inter-node networking, and total costs.

`GET /v2/billing/clusters`

**Get cluster billing history**

Returns Cluster billing history for the authenticated user, split into time buckets by startTime/endTime with bucketSize or by lastN recent buckets. Use clusterId to filter to one cluster; without it, records are emitted per cluster per bucket. Each record includes GPU compute, disk, inter-node networking, and total amounts. Clusters are GPU-only, so no CPU cost component is returned.

**Authentication:** `bearerAuth`

**Parameters**

- `startTime` (query; string; format: date-time): Start of the billing period (RFC 3339). Defaults to 30 days ago. Snapped down to the start of its bucketSize bucket so the window aligns with the returned records; provide a boundary-aligned value (e.g. midnight for bucketSize=day) to avoid widening.
  - Example: `2026-05-01T00:00:00Z`
- `endTime` (query; string; format: date-time): End of the billing period (RFC 3339), exclusive. Defaults to now. Snapped up to the end of the bucketSize bucket it lands in (unless already on a boundary) so the window aligns with the returned records.
  - Example: `2026-06-01T00:00:00Z`
- `bucketSize` (query; string; enum: `hour`, `day`, `week`, `month`, `year`; default: `day`): Length of each billing time bucket. Defaults to day.
- `lastN` (query; integer; minimum: `1`): Return the last N buckets of bucketSize, ending with the current (in-progress) bucket — e.g. lastN=100 with bucketSize=day is "last 100 days". The resolved window is aligned to bucket boundaries: startTime is the start of the earliest bucket (e.g. midnight of the earliest day) and endTime is the end of the current bucket. Mutually exclusive with startTime/endTime; provide one or the other, not both.
  - Example: `30`
- `clusterId` (query; string): Filter to a specific cluster.
  - Example: `cluster_abc123`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object): Time-bucketed Cluster billing records plus metadata for the resolved query, record count, distinct cluster count, and compute totals.
      - `records` (required; array)
        - `items`: A single time-bucketed cluster billing record; clusters are GPU-only (no CPU component). Returned by GET /v2/billing/clusters.
          - allOf:
            - `variant 1` (object): Half-open time range \[startTime, endTime) in RFC 3339. On a record it is the time bucket; on a query echo it is the resolved window.
              - `startTime` (required; string; format: date-time): Start of the range, inclusive (RFC 3339).
              - `endTime` (required; string; format: date-time): End of the range, exclusive (RFC 3339).
            - `variant 2` (object): Cluster cost components (GPU-only, no CPU). Backs a record's amounts and the metadata totals.
              - `totalAmount` (required; number; format: double): Total Instant Cluster cost in USD for the bucket.
              - `gpuAmount` (required; number; format: double): Cluster GPU compute cost in USD for the bucket.
              - `diskAmount` (required; number; format: double): Cluster disk cost in USD for the bucket.
              - `networkingAmount` (required; number; format: double): Cluster inter-node networking cost in USD for the bucket.
            - `variant 3` (object)
              - `clusterId` (required; string): The cluster this record bills. When the clusterId filter is set every record carries that id; otherwise one record is emitted per cluster per bucket.
      - `metadata` (required; object)
        - `query` (required)
          - allOf:
            - `variant 1`: Resolved query window and granularity (routes without a filter).
              - allOf:
                - `variant 1` (object): Half-open time range \[startTime, endTime) in RFC 3339. On a record it is the time bucket; on a query echo it is the resolved window.
                  - `startTime` (required; string; format: date-time): Start of the range, inclusive (RFC 3339).
                  - `endTime` (required; string; format: date-time): End of the range, exclusive (RFC 3339).
                - `variant 2` (object)
                  - `bucketSize` (required; string; enum: `hour`, `day`, `week`, `month`, `year`; default: `day`): Length of each billing time bucket.
            - `variant 2` (object)
              - `clusterId` (nullable): The clusterId filter applied, if any.
        - `recordCount` (required; integer): Number of records returned (buckets times distinct clusters).
        - `uniqueClusterCount` (required; integer): Number of distinct clusters the records span.
        - `totals` (required; object): Cluster cost components (GPU-only, no CPU). Backs a record's amounts and the metadata totals.
          - `totalAmount` (required; number; format: double): Total Instant Cluster cost in USD for the bucket.
          - `gpuAmount` (required; number; format: double): Cluster GPU compute cost in USD for the bucket.
          - `diskAmount` (required; number; format: double): Cluster disk cost in USD for the bucket.
          - `networkingAmount` (required; number; format: double): Cluster inter-node networking cost in USD for the bucket.
    - Example `clusterBilling`: `{"records":[{"startTime":"2026-06-01T00:00:00Z","endTime":"2026-06-02T00:00:00Z","clusterId":"5c2n8m4q","totalAmount":99,"gpuAmount":95,"diskAmount":3,"networkingAmount":1}],"metadata":{"query":{"startTime":"2026-06-01T00:00:00Z","endTime":"2026-06-02T00:00:00Z","bucketSize":"day","clusterId":"5c2n8m4q"},"recordCount":1,"totals":{"totalAmount":99,"gpuAmount":95,"diskAmount":3,"networkingAmount":1},"uniqueClusterCount":1}}`
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
