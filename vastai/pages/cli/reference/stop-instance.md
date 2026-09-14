> Pinned source for Vast.ai main: [cli/reference/stop-instance.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/stop-instance.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/stop-instance

# vastai stop instance

Stop a running instance

## Usage

```bash
vastai stop instance ID [OPTIONS]
```

## Arguments

**Property (type: integer; required)**

id of instance to stop

## Description

This command brings an instance from the "running" state into the "stopped" state. When an instance is "stopped" all of your data on the instance is preserved,
and you can resume use of your instance by starting it again. Once stopped, starting an instance is subject to resource availability on the machine that the instance is located on.
There are ways to move data off of a stopped instance, which are described here: <https://vast.ai/docs/gpu-instances/data-movement>

## Examples

```bash
vastai stop instance <ID>
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
