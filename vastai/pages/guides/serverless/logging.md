> Pinned source for Vast.ai main: [guides/serverless/logging.mdx](https://github.com/vast-ai/docs/blob/349512480817168ffb72a144bed96c2678228c5c/guides/serverless/logging.mdx)
> Canonical documentation: https://docs.vast.ai/guides/serverless/logging

# Endpoint and Worker Logs

Learn how to access Vast serverless logs

Endpoint and worker logs provide real-time visibility into the behavior of your serverless infrastructure. These logs are primarily intended for debugging issues with endpoints, workergroups, and individual workers.

## Endpoint Logs

Endpoint logs are available under the **"All Workergroups"** tab in the Serverless endpoint, within the Vast console UI.

![Endpoint Log](https://raw.githubusercontent.com/vast-ai/docs/349512480817168ffb72a144bed96c2678228c5c/images/endpoint-log.webp)

These logs include low-level details about scaling decisions made by the serverless engine. They are useful for understanding how the system responds to traffic and workload changes, and include:

- Worker creation, starts, stops, and destruction
- Worker state changes and the reason for each change, for example `Worker 67890: model_loading -> idle (received loadtime)`
- The error reason when a worker enters the Error state, and any stack trace reported by the PyWorker
- Notices when a worker is replaced because its machine's rental contract is ending
- Summarized performance for all workers and workergroups
- Measured and estimated performance and worker load
- Marketplace offer details used in worker recruitment

## Worker Logs

Worker logs are accessible on a per-worker basis. To view worker logs, navigate to the serverless endpoint in question and click on this icon next to the worker.

![Worker Log](https://raw.githubusercontent.com/vast-ai/docs/349512480817168ffb72a144bed96c2678228c5c/images/worker-log.webp)

Worker logs provide detailed runtime output for individual workers, helping you debug model loading, request handling, container behavior, and other worker-specific events.

## Log Characteristics and Retention

- Logs are **streaming outputs**, typically only a few seconds behind real-time.
- Logs are **not permanently maintained** and are intended for near real-time debugging of issues. Each endpoint and workergroup keeps up to about 16 MB of recent history per log level.
- Users who need longer retention should **periodically download logs** to store them externally.

## Accessing Logs Through the CLI

In addition to accessing these logs through the UI, you can use the vastai CLI to check endpoint and worker group logs at different log levels:

| Level | Log   | Contents                                                                              |
| ----- | ----- | ------------------------------------------------------------------------------------- |
| `0`   | User  | Worker lifecycle events, state changes, and errors. Shown as **User** in the console. |
| `1`   | Info  | The user log plus additional scaling details. Shown as **Info** in the console.       |
| `2`   | Trace | Everything the serverless engine logs. The most detailed level.                       |
| `3`   | Debug | Everything except trace-level messages                                                |

Use `--tail` to set how many bytes to return from the end of the log. The default is 10,000 bytes. The same logs are available from the [get endpoint logs](https://docs.vast.ai/api-reference/serverless/get-endpoint-logs) and [get workergroup logs](https://docs.vast.ai/api-reference/serverless/get-workergroup-logs) APIs.

## Endpoint logs

```cli CLI Command
vastai get endpt-logs <endpoint_id> --level (0-3)
```

## Workergroup logs

```cli CLI Command
vastai get wrkgrp-logs <worker_group_id> --level (0-3)
```
