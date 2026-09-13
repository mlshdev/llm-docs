> Commit-pinned source for Vast.ai main: [cli/reference/show-instance.mdx](https://docs.vast.ai/cli/reference/show-instance)

# vastai show instance

Display user's current instances

## Usage

```bash
vastai show instance [--api-key API_KEY] [--raw]
```

## Arguments

**Property (type: integer; required)**

id of instance to get

## Description

Returns an instance object. Key status fields:

**actual\_status**, current container state:

| Value       | Meaning                                                                  |
| ----------- | ------------------------------------------------------------------------ |
| `null`      | Instance is being provisioned                                            |
| `loading`   | Docker image is downloading or container is starting up                  |
| `running`   | Container is actively executing. GPU charges apply.                      |
| `stopped`   | Container is halted. Disk charges continue; no GPU charges.              |
| `frozen`    | Container is paused with memory preserved. GPU charges apply.            |
| `exited`    | Container process exited unexpectedly                                    |
| `rebooting` | Container is restarting (transient)                                      |
| `unknown`   | No recent heartbeat from the host                                        |
| `offline`   | Host machine disconnected from Vast servers (computed, not stored in DB) |

**intended\_status**, user's desired target state: `running`, `stopped`, or `frozen`.

**cur\_state**, machine contract / hardware allocation state: `running`, `stopped`, or `unloaded` (released on destroy).

**status\_msg**, human-readable detail on the current status.

## Examples

```bash
vastai show instance <ID>
```

## Global Options

The following options are available for all commands:

| Option          | Description                                           |
| --------------- | ----------------------------------------------------- |
| `--url URL`     | Server REST API URL                                   |
| `--retry N`     | Retry limit                                           |
| `--raw`         | Output machine-readable JSON                          |
| `--explain`     | Verbose explanation of API calls                      |
| `--api-key KEY` | API key (defaults to `~/.config/vastai/vast_api_key`) |
