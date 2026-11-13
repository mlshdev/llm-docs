> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /get_workergroup_workers](https://github.com/vast-ai/docs/blob/349512480817168ffb72a144bed96c2678228c5c/api-reference/openapi.yaml%23post%20/get_workergroup_workers)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/get-workergroup-workers

# get workergroup workers

`POST /get_workergroup_workers`

Retrieves the current list and status of workers for a specific workergroup.
Useful for monitoring, debugging connectivity issues, and understanding resource usage within a workergroup.

The response is a JSON object containing a `workers` array with one object per worker. To receive the same data as a push stream instead of polling, see [Streaming Worker Status](https://docs.vast.ai/guides/serverless/worker-status-websocket).

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `id` (required; integer; default: `12345`; minimum: `1`): ID of the workergroup to monitor
      - Example: `12345`

**Responses**

- `200`: Workers successfully retrieved.
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object)
          - `workers` (array): List of workers in this workergroup
            - `items` (object)
              - `id` (integer): Worker instance ID
                - Example: `67890`
              - `gpu_name` (string): GPU model of the worker's machine
                - Example: `RTX 4090`
              - `num_gpus` (integer): Number of GPUs allocated to the worker
                - Example: `1`
              - `perf` (number): Performance (load per second) the serverless engine expects from this worker when planning capacity. Unavailable and Offline workers count for a fraction of their full performance, and workers that are in Error or being destroyed count for `0`.
                - Example: `812.4`
              - `measured_perf` (number): Performance (load per second) measured on this worker. Reported as `0` until the worker has been ready at least once (`ready_ever`).
                - Example: `830.1`
              - `reliability` (number): Share of routed requests that the worker has completed, from 0 to 1. Reset to 1 each time the worker starts.
                - Example: `0.98`
              - `dlperf` (number): DLPerf score of the worker's machine
                - Example: `105.6`
              - `cur_perf` (number): Current throughput of the worker, in load per second
                - Example: `640.2`
              - `new_load` (number): Load assigned to the worker since its last status report
                - Example: `0`
              - `cur_load` (number): Load currently assigned to the worker that has not completed yet
                - Example: `1500`
              - `cur_load_rolling_avg` (number): Smoothed load per second handled by the worker
                - Example: `580.7`
              - `reqs_working` (integer): Number of requests currently assigned to the worker
                - Example: `3`
              - `loaded_at` (number): Unix timestamp (seconds) when the worker became ready after its most recent start, or `0` if it is not ready yet
                - Example: `1760000000`
              - `ready_ever` (boolean): Whether the worker has been ready at least once since it was created or since its last template update
                - Example: `true`
              - `started_at` (number): Unix timestamp (seconds) when the worker was last started
                - Example: `1759999700`
              - `disk_usage` (number): Disk space used by the worker's model, as reported by the worker
                - Example: `16.2`
              - `status` (string; enum: `pending`, `creating`, `created`, `loading`, `model_loading`, `idle`, `starting`, `stopping`, `stopped`, `rebooting`, `unavail`, `offline`, `error`, `destroying`, `update_ready`, `update_rebooting`, `update_starting`, `unknown`): Current worker state. See [Worker States](https://docs.vast.ai/guides/serverless/worker-states).
                - Example: `idle`
              - `available` (boolean): Whether the worker's machine can currently run it. An inactive worker whose GPUs are rented by someone else reports `false`.
                - Example: `true`
              - `outdated` (boolean): Whether the worker is running an older PyWorker version than the latest stable release
                - Example: `false`
              - `hidden` (boolean): Whether the worker is a replacement that is still being prepared. Hidden workers do not receive requests.
                - Example: `false`
              - `contract_end_date` (number): Unix timestamp (seconds) when the worker's rental contract ends, or `0` if it has no end date
                - Example: `0`
              - `replaces_worker_id` (integer): ID of the worker this worker is replacing before its contract ends, or `0` if it is not a replacement
                - Example: `0`
          - `active_update` (boolean): Whether a rolling update of the workergroup's workers is in progress
            - Example: `false`
        - `variant 2` (object)
          - `error_msg` (string): Returned when the workergroup does not exist or the API key does not own it
            - Example: `autogroup 12345 not found or unauthorized`
