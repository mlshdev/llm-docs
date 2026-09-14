> Pinned source for Trigger.dev v4.5.16: [docs/management/errors/resolve.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/errors/resolve.mdx)
> Canonical documentation: https://trigger.dev/docs/management/errors/resolve

# Resolve an error

`POST /api/v1/errors/{errorId}/resolve`

**Resolve an error**

Mark an error group as resolved. Optionally record the worker version that resolved it. Send a JSON body (use `{}` when you have no fields to set).

**Authentication:** `secretKey`

**Parameters**

- `errorId` (path; required; string): The ID of an error group, starts with `error_`.
  - Example: `error_8f3b2a1c9d4e5f60`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `resolvedInVersion` (string): The worker version the error was resolved in.
      - Example: `20240101.1`

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
