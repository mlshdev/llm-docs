> Pinned source for Trigger.dev v4.5.16: [docs/management/runs/retrieve-trace.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/runs/retrieve-trace.mdx)
> Canonical documentation: https://trigger.dev/docs/management/runs/retrieve-trace

# Retrieve run trace

`GET /api/v1/runs/{runId}/trace`

**Retrieve run trace**

Returns the OTel trace subtree for the requested run — the run's span as `rootSpan`, its ancestor chain, and its descendant spans. For child or nested runs in a large trace, this is scoped to that run rather than the trace-wide root.

**Authentication:** `secretKey`

**Parameters**

- `runId` (path; required; string): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.
  - Example: `run_1234`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `trace` (object)
        - `traceId` (string): The OTel trace ID.
        - `rootSpan`: The requested run's span, with nested descendant spans as `children`. Not necessarily the trace-wide root span.
          - allOf:
            - `variant 1` (object)
              - `id` (string): The span ID.
              - `parentId` (string; nullable): The parent span ID, if any.
              - `runId` (string): The run ID this span belongs to.
              - `data` (object)
                - `message` (string): The span message.
                - `taskSlug` (string): The task identifier, if applicable.
                - `startTime` (string; format: date-time): The start time of the span.
                - `duration` (number): The duration of the span in nanoseconds.
                - `isError` (boolean)
                - `isPartial` (boolean)
                - `isCancelled` (boolean)
                - `level` (string; enum: `TRACE`, `DEBUG`, `LOG`, `INFO`, `WARN`, `ERROR`)
                - `attemptNumber` (number; nullable)
                - `properties` (object): Arbitrary OTel attributes attached to the span.
                - `events` (array): Span events (e.g. exceptions, cancellations) that occurred during this span.
                  - `items` (object)
                    - `name` (string): The event name (e.g. "exception", "cancellation", "attempt\_failed").
                    - `time` (string; format: date-time): The time the event occurred.
                    - `properties` (object): Event-specific properties.
              - `children` (array): Nested child spans. Each child has the same structure as the parent span.
                - `items` (recursive reference `#/components/schemas/SpanDetailedSummary`)
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Invalid or Missing API key`)
- `404`: Resource not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Run not found`, `Trace not found`)

Returns the OpenTelemetry trace subtree for the run you request. The response `trace.rootSpan` is that run's span — not necessarily the trace-wide root — with its descendant spans nested under `children`.

For a child or nested run inside a large trace, this endpoint scopes the tree to that run so you still get a useful subtree even when the full trace has more spans than the platform can return in one response.
