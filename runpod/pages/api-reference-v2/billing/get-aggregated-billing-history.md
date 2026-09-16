> Pinned source for Runpod main: [api-reference-v2/billing/get-aggregated-billing-history.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference-v2/billing/get-aggregated-billing-history.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/billing/get-aggregated-billing-history

# Get Aggregated Billing History

Retrieve time-bucketed total Runpod spend across Pods, Serverless, storage, Public Endpoints, and Clusters for the authenticated account.

`GET /v2/billing`

**Get aggregated billing history**

Returns time-bucketed total spend across all billable Runpod resources for the authenticated user. Use startTime/endTime with bucketSize for an explicit range, or lastN with bucketSize for the most recent buckets. Each record reports one bucket's total plus pod, serverless, storage, public endpoint, and Instant Cluster cost components. The metadata block echoes the resolved query window, record count, and totals across all returned buckets.

**Authentication:** `bearerAuth`

**Parameters**

- `startTime` (query; string; format: date-time): Start of the billing period (RFC 3339). Defaults to 30 days ago. Snapped down to the start of its bucketSize bucket so the window aligns with the returned records; provide a boundary-aligned value (e.g. midnight for bucketSize=day) to avoid widening.
  - Example: `2026-05-01T00:00:00Z`
- `endTime` (query; string; format: date-time): End of the billing period (RFC 3339), exclusive. Defaults to now. Snapped up to the end of the bucketSize bucket it lands in (unless already on a boundary) so the window aligns with the returned records.
  - Example: `2026-06-01T00:00:00Z`
- `bucketSize` (query; string; enum: `hour`, `day`, `week`, `month`, `year`; default: `day`): Length of each billing time bucket. Defaults to day.
- `lastN` (query; integer; minimum: `1`): Return the last N buckets of bucketSize, ending with the current (in-progress) bucket — e.g. lastN=100 with bucketSize=day is "last 100 days". The resolved window is aligned to bucket boundaries: startTime is the start of the earliest bucket (e.g. midnight of the earliest day) and endTime is the end of the current bucket. Mutually exclusive with startTime/endTime; provide one or the other, not both.
  - Example: `30`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object): Aggregated billing records across all Runpod resources.
      - `records` (required; array)
        - `items`: A single time-bucketed record of total spend across all billable Runpod resources, with each cost component broken out. Returned by GET /v2/billing.
          - allOf:
            - `variant 1` (object): Half-open time range \[startTime, endTime) in RFC 3339. On a record it is the time bucket; on a query echo it is the resolved window.
              - `startTime` (required; string; format: date-time): Start of the range, inclusive (RFC 3339).
              - `endTime` (required; string; format: date-time): End of the range, exclusive (RFC 3339).
            - `variant 2` (object): Total spend across all billable Runpod resources with each cost component broken out, fully prefixed by resource. Backs the aggregate record's amounts and the metadata totals.
              - `totalAmount` (required; number; format: double): Total cost in USD for the bucket across all resources.
              - `podGpuAmount` (required; number; format: double): GPU pod compute cost in USD for the bucket.
              - `podCpuAmount` (required; number; format: double): CPU pod compute cost in USD for the bucket.
              - `podDiskAmount` (required; number; format: double): Pod disk cost in USD for the bucket.
              - `serverlessGpuAmount` (required; number; format: double): Serverless GPU compute cost in USD for the bucket.
              - `serverlessCpuAmount` (required; number; format: double): Serverless CPU compute cost in USD for the bucket.
              - `serverlessDiskAmount` (required; number; format: double): Serverless disk cost in USD for the bucket.
              - `serverlessFeeAmount` (required; number; format: double): Serverless platform fee in USD for the bucket.
              - `storageStandardAmount` (required; number; format: double): Standard network volume storage cost in USD for the bucket.
              - `storageHighPerformanceAmount` (required; number; format: double): High-performance network volume storage cost in USD for the bucket.
              - `endpointAmount` (required; number; format: double): Runpod public endpoint cost in USD for the bucket.
              - `clusterGpuAmount` (required; number; format: double): Cluster GPU compute cost in USD for the bucket.
              - `clusterDiskAmount` (required; number; format: double): Cluster disk cost in USD for the bucket.
              - `clusterNetworkingAmount` (required; number; format: double): Cluster inter-node networking cost in USD for the bucket.
      - `metadata` (required; object)
        - `query` (required): Resolved query window and granularity (routes without a filter).
          - allOf:
            - `variant 1` (object): Half-open time range \[startTime, endTime) in RFC 3339. On a record it is the time bucket; on a query echo it is the resolved window.
              - `startTime` (required; string; format: date-time): Start of the range, inclusive (RFC 3339).
              - `endTime` (required; string; format: date-time): End of the range, exclusive (RFC 3339).
            - `variant 2` (object)
              - `bucketSize` (required; string; enum: `hour`, `day`, `week`, `month`, `year`; default: `day`): Length of each billing time bucket.
        - `recordCount` (required; integer): Number of records returned.
        - `totals` (required; object): Total spend across all billable Runpod resources with each cost component broken out, fully prefixed by resource. Backs the aggregate record's amounts and the metadata totals.
          - `totalAmount` (required; number; format: double): Total cost in USD for the bucket across all resources.
          - `podGpuAmount` (required; number; format: double): GPU pod compute cost in USD for the bucket.
          - `podCpuAmount` (required; number; format: double): CPU pod compute cost in USD for the bucket.
          - `podDiskAmount` (required; number; format: double): Pod disk cost in USD for the bucket.
          - `serverlessGpuAmount` (required; number; format: double): Serverless GPU compute cost in USD for the bucket.
          - `serverlessCpuAmount` (required; number; format: double): Serverless CPU compute cost in USD for the bucket.
          - `serverlessDiskAmount` (required; number; format: double): Serverless disk cost in USD for the bucket.
          - `serverlessFeeAmount` (required; number; format: double): Serverless platform fee in USD for the bucket.
          - `storageStandardAmount` (required; number; format: double): Standard network volume storage cost in USD for the bucket.
          - `storageHighPerformanceAmount` (required; number; format: double): High-performance network volume storage cost in USD for the bucket.
          - `endpointAmount` (required; number; format: double): Runpod public endpoint cost in USD for the bucket.
          - `clusterGpuAmount` (required; number; format: double): Cluster GPU compute cost in USD for the bucket.
          - `clusterDiskAmount` (required; number; format: double): Cluster disk cost in USD for the bucket.
          - `clusterNetworkingAmount` (required; number; format: double): Cluster inter-node networking cost in USD for the bucket.
    - Example `billing`: `{"records":[{"startTime":"2026-06-01T00:00:00Z","endTime":"2026-06-02T00:00:00Z","totalAmount":42.34,"podGpuAmount":18.2,"podCpuAmount":0,"podDiskAmount":1.1,"serverlessGpuAmount":12.6,"serverlessCpuAmount":0,"serverlessDiskAmount":0.44,"serverlessFeeAmount":1.25,"storageStandardAmount":0,"storageHighPerformanceAmount":2.5,"endpointAmount":3.21,"clusterGpuAmount":2.5,"clusterDiskAmount":0.3,"clusterNetworkingAmount":0.24}],"metadata":{"query":{"startTime":"2026-06-01T00:00:00Z","endTime":"2026-06-02T00:00:00Z","bucketSize":"day"},"recordCount":1,"totals":{"totalAmount":42.34,"podGpuAmount":18.2,"podCpuAmount":0,"podDiskAmount":1.1,"serverlessGpuAmount":12.6,"serverlessCpuAmount":0,"serverlessDiskAmount":0.44,"serverlessFeeAmount":1.25,"storageStandardAmount":0,"storageHighPerformanceAmount":2.5,"endpointAmount":3.21,"clusterGpuAmount":2.5,"clusterDiskAmount":0.3,"clusterNetworkingAmount":0.24}}}`
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
