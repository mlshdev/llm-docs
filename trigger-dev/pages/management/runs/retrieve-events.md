> Pinned source for Trigger.dev v4.5.16: [docs/management/runs/retrieve-events.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/runs/retrieve-events.mdx)
> Canonical documentation: https://trigger.dev/docs/management/runs/retrieve-events

# Retrieve run events

`GET /api/v1/runs/{runId}/events`

**Retrieve run events**

Returns all OTel span events for a run. Useful for debugging and observability.

**Authentication:** `secretKey`

**Parameters**

- `runId` (path; required; string): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.
  - Example: `run_1234`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `events` (array)
        - `items` (object)
          - `spanId` (string): The span ID of the event.
          - `parentId` (string; nullable): The parent span ID, if any.
          - `runId` (string; nullable): The run ID associated with this event.
          - `message` (string): The event message.
          - `startTime` (string): The start time of the event as a bigint string (nanoseconds since epoch).
          - `duration` (number): The duration of the event in nanoseconds.
          - `isError` (boolean): Whether this event represents an error.
          - `isPartial` (boolean): Whether this event is partial (still in progress).
          - `isCancelled` (boolean): Whether this event was cancelled.
          - `level` (string; enum: `TRACE`, `DEBUG`, `LOG`, `INFO`, `WARN`, `ERROR`): The log level of the event.
          - `kind` (string; enum: `UNSPECIFIED`, `INTERNAL`, `SERVER`, `CLIENT`, `PRODUCER`, `CONSUMER`, `UNRECOGNIZED`, `LOG`): The kind of span event.
          - `attemptNumber` (number; nullable): The attempt number this event belongs to.
          - `taskSlug` (string): The task identifier.
          - `events` (array): Span events (e.g. exceptions, cancellations) that occurred during this event.
            - `items` (object)
              - `name` (string): The event name (e.g. "exception", "cancellation", "attempt\_failed").
              - `time` (string; format: date-time): The time the event occurred.
              - `properties` (object): Event-specific properties.
          - `style` (object): Display style metadata for the event.
            - `icon` (string): Icon identifier for display.
            - `variant` (string): Visual variant (e.g. "success", "failure").
            - `accessory` (object): Accessory display element.
              - `text` (string)
              - `style` (string; enum: `codepath`)
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Invalid or Missing API key`)
- `404`: Resource not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Run not found`)
