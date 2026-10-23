> Pinned source for Trigger.dev v4.8.1: [docs/management/runs/replay.mdx](https://github.com/triggerdotdev/trigger.dev/blob/bd2a14e6ad83fbe056a473b0082ff4110747fa38/docs/management/runs/replay.mdx)
> Canonical documentation: https://trigger.dev/docs/management/runs/replay

# Replay run

`POST /api/v1/runs/{runId}/replay`

**Replay a run**

Creates a new run with the same payload and options as the original run, in the same environment. Send a body to override the payload, metadata, or trigger options for the new run. The body is optional; an empty body replays the run unchanged.

**Authentication:** `secretKey`

**Parameters**

- `runId` (path; required; string): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.
  - Example: `run_1234`

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `payload`: The payload for the new run. Omit it to reuse the original run's payload.
    - `payloadType` (string; enum: `application/json`, `application/super+json`): How `payload` is encoded. Defaults to `application/json`. With `application/super+json`, `payload` must be a SuperJSON string, which keeps types like `Date` and `BigInt`. The SDK sends this automatically.
    - `metadata` (object): Metadata for the new run. Omit it to reuse the original run's metadata.
    - `tags`: Tags for the new run. Replaces the original run's tags.
      - allOf:
        - `variant 1`: One or more tags to attach to a run. Runs can have a maximum of 10 tags.
          - oneOf:
            - `variant 1` (string; maximum length: `128`): A single run tag. Must be less than 128 characters.
              - Example: `user_123456`
            - `variant 2` (array; maximum items: `10`; unique items)
              - Example: `["user_123456","product_4629101"]`
              - `items` (string; maximum length: `128`): A single run tag. Must be less than 128 characters.
                - Example: `user_123456`
    - `queue` (string): The name of an existing queue in the environment to run on.
    - `concurrencyKey` (string): The concurrency key for the new run.
    - `machine` (string; enum: `micro`, `small-1x`, `small-2x`, `medium-1x`, `medium-2x`, `large-1x`, `large-2x`): The machine preset for the new run.
      - Example: `small-2x`
    - `version` (string): Lock the new run to this deployed version, for example `20250101.1`. Defaults to the current version.
    - `region` (string): The region to run in. Defaults to the original run's region.
    - `delay` (string): Delay the new run, as a duration (`1h30m`) or an ISO 8601 date.
    - `ttl`: How long the new run can stay queued before it expires, as a duration string (`10m`) or a number of seconds.
      - oneOf:
        - `variant 1` (string)
        - `variant 2` (integer)
    - `idempotencyKey` (string; maximum length: `2048`): An idempotency key for the new run. A repeated request with the same key returns the same run.
    - `idempotencyKeyTTL` (string): How long the idempotency key is valid, as a duration (`1h`).
    - `maxAttempts` (integer; minimum: `1`): The maximum number of attempts for the new run.
    - `maxDuration` (number): The maximum duration of the new run in seconds.
    - `priority` (number): Priority offset in seconds. Higher values are dequeued sooner.
  - Example: `{"payload":{"userId":"user_456"},"tags":["replayed"],"delay":"10m"}`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (string): The ID of the new run.
- `400`: Invalid request, for example an unknown body field, an unknown queue, or a version that is not deployed to the environment.
  - Media type: `application/json`
    - Schema (object)
      - `error` (string): What was wrong with the request.
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Invalid or Missing API key`)
- `403`: The credentials can't trigger the run's task. A replay starts a new run, so it needs permission to trigger the task as well as write access to the run.
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
- `404`: Resource not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Run not found`)
- `413`: The request body is larger than the maximum payload size.
