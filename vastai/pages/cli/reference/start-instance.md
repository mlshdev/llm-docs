> Pinned source for Vast.ai main: [cli/reference/start-instance.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/start-instance.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/start-instance

# vastai start instance

Start a stopped instance

## Usage

```bash
vastai start instance ID [OPTIONS]
```

## Arguments

**Property (type: integer; required)**

ID of instance to start/restart

## Description

This command attempts to bring an instance from the "stopped" state into the "running" state. This is subject to resource availability on the machine that the instance is located on.
If your instance is stuck in the "scheduling" state for more than 30 seconds after running this, it likely means that the required resources on the machine to run your instance are currently unavailable.

## Examples

```bash
vastai start instances $(vastai show instances -q)
vastai start instance 329838
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
