> Pinned source for Trigger.dev v4.7.4: [docs/management/runs/retrieve-trace.mdx](https://github.com/triggerdotdev/trigger.dev/blob/7bbcf0073ef3d32f0306ffbb4622cf5b5314ad43/docs/management/runs/retrieve-trace.mdx)
> Canonical documentation: https://trigger.dev/docs/management/runs/retrieve-trace

# Retrieve run trace

`GET /api/v1/runs/{runId}/trace`

**Retrieve run trace**

Returns the OTel trace subtree for the requested run — the run's span as `rootSpan`, its ancestor chain, and its descendant spans. For child or nested runs in a large trace, this is scoped to that run rather than the trace-wide root. Pass `page[size]` or `page[after]` to page the trace as flat spans instead; paging works for runs at the root of their trace.

**Authentication:** `secretKey`

**Parameters**

- `runId` (path; required; string): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.
  - Example: `run_1234`
- `page[size]` (query; integer; minimum: `1`): Turns on paging. Spans per page; values are clamped to 1,000–10,000. Defaults to 10,000 when only `page[after]` is sent.
- `page[after]` (query; string): Turns on paging. The `pagination.next` cursor from the previous page, passed back unchanged. Omit it for the first page.

**Responses**

- `200`: Successful request. Without page parameters, the nested trace tree. With them, one page of flat spans.
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object)
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
        - `variant 2` (object)
          - `data` (array): Spans on this page, in start-time order. A span can appear on two pages (in progress, then finished); keep the finished one.
            - `items` (object)
              - `id` (string)
              - `parentId` (string)
              - `runId` (string)
              - `message` (string)
              - `startTime` (string; format: date-time)
              - `duration` (number): Duration in nanoseconds.
              - `isError` (boolean)
              - `isPartial` (boolean): Still in progress.
              - `isCancelled` (boolean)
              - `level` (string; enum: `TRACE`, `DEBUG`, `LOG`, `INFO`, `WARN`, `ERROR`)
              - `attemptNumber` (number)
          - `attemptFailures` (array): Failed-attempt records on this page. A span still in progress under a failed attempt of its run counts as errored.
            - `items` (object)
              - `spanId` (string)
              - `attemptNumber` (number)
              - `runId` (string)
          - `pagination` (object)
            - `next` (string): Cursor for the next page. Absent on the last page.
            - `truncated` (boolean): Some spans or records were left out. Either paging stopped early (for example while an emergency span limit is in place) or a span had more records than one read allows; `next` is still returned in that case.
- `400`: Invalid page parameters, or page parameters on a run that isn't at the root of its trace
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Invalid or Missing API key`)
- `404`: Resource not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Run not found`, `Trace not found`)
- `501`: Paging isn't supported by this deployment's trace store
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
- `503`: The trace store is temporarily unavailable, or paging is temporarily limited to the first page. Back off and retry later (see `Retry-After`).
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)

Returns the OpenTelemetry trace subtree for the run you request. The response `trace.rootSpan` is that run's span — not necessarily the trace-wide root — with its descendant spans nested under `children`.

For a child or nested run inside a large trace, this endpoint scopes the tree to that run so you still get a useful subtree even when the full trace has more spans than the platform can return in one response.

For a finished run, spans that finish more than 7 days after the run are returned in their last recorded state.

## Page large traces

The tree response stops at a size limit. To get every span of a large trace, page it: send `page[size]` (1,000–10,000) on the first request, then pass each response's `pagination.next` back as `page[after]` until it's absent.

```ts Your backend code
const spans = [];
let after: string | undefined;

do {
  const query = new URLSearchParams({ "page[size]": "10000" });
  if (after) query.set("page[after]", after);

  const response = await fetch(`https://api.trigger.dev/api/v1/runs/run_1234/trace?${query}`, {
    headers: { Authorization: `Bearer ${process.env.TRIGGER_SECRET_KEY}` },
  });
  const page = await response.json();

  spans.push(...page.data);
  after = page.pagination.next;
} while (after);
```

- Paging works for runs at the root of their trace. Other runs return `400`; request their trace without page parameters.
- Pages contain flat spans without events or properties. Rebuild the tree from `parentId`, or use `assembleRunTracePages` from `@trigger.dev/core/v3`, which also marks unfinished spans under a cancelled or failed parent the way the tree response does.
- A span can appear on two pages, once in progress and once finished. Keep the finished one.
- `pagination.truncated` means some spans or records were left out: paging stopped early (for example while an emergency span limit is in place), or a span had more records than one read allows.
- Send `Accept-Encoding: gzip` when you call the endpoint directly.
