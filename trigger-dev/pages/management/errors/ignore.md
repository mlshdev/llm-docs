> Pinned source for Trigger.dev v4.6.4: [docs/management/errors/ignore.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/errors/ignore.mdx)
> Canonical documentation: https://trigger.dev/docs/management/errors/ignore

# Ignore an error

`POST /api/v1/errors/{errorId}/ignore`

**Ignore an error**

Mark an error group as ignored. Provide a `duration` to ignore it for a fixed window, and/or thresholds that re-surface the error when exceeded. Send a JSON body (use `{}` to ignore indefinitely).

**Authentication:** `secretKey`

**Parameters**

- `errorId` (path; required; string): The ID of an error group, starts with `error_`.
  - Example: `error_8f3b2a1c9d4e5f60`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `duration` (integer): How long to ignore the error for, in milliseconds.
      - Example: `86400000`
    - `occurrenceRate` (number): Re-surface the error if its occurrence rate exceeds this many occurrences per minute.
    - `totalOccurrences` (integer): Re-surface the error once it accrues this many new occurrences after being ignored.
    - `reason` (string): An optional human-readable reason for ignoring the error.

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The unique ID of the error group, prefixed with `error_`
        - Example: `error_8f3b2a1c9d4e5f60`
      - `fingerprint` (required; string): The raw fingerprint the error is grouped by
      - `taskIdentifier` (required; string): The identifier of the task the error belongs to
      - `errorType` (required; string): The error type or name (e.g. `TypeError`)
      - `errorMessage` (required; string): The normalized error message
      - `count` (required; integer): The total number of occurrences of this error group
      - `firstSeen` (required; string; format: date-time)
      - `lastSeen` (required; string; format: date-time)
      - `affectedVersions` (required; array): The most recent worker versions the error has occurred in (up to five)
        - `items` (string)
      - `status` (required; string; enum: `unresolved`, `resolved`, `ignored`)
      - `resolvedAt` (string; format: date-time; nullable)
      - `resolvedInVersion` (string; nullable)
      - `resolvedBy` (string; nullable): The ID of the user who resolved the error, when attributable
      - `ignoredAt` (string; format: date-time; nullable)
      - `ignoredUntil` (string; format: date-time; nullable)
      - `ignoredReason` (string; nullable)
      - `ignoredByUserId` (string; nullable)
      - `ignoredUntilOccurrenceRate` (number; nullable)
      - `ignoredUntilTotalOccurrences` (integer; nullable)
- `401`: Unauthorized request
- `404`: Error not found
