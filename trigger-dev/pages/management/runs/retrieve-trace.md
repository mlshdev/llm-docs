> Release-pinned source for Trigger.dev v4.5.16: [docs/management/runs/retrieve-trace.mdx](https://trigger.dev/docs/management/runs/retrieve-trace)

# Retrieve run trace

`GET /api/v1/runs/{runId}/trace`

**Retrieve run trace**

Returns the OTel trace subtree for the requested run — the run's span as `rootSpan`, its ancestor chain, and its descendant spans. For child or nested runs in a large trace, this is scoped to that run rather than the trace-wide root.

**Parameters**

- `runId` (path, required): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Resource not found

Returns the OpenTelemetry trace subtree for the run you request. The response `trace.rootSpan` is that run's span — not necessarily the trace-wide root — with its descendant spans nested under `children`.

For a child or nested run inside a large trace, this endpoint scopes the tree to that run so you still get a useful subtree even when the full trace has more spans than the platform can return in one response.
