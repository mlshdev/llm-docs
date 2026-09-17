> Pinned source for Vast.ai main: [cli/reference/self-test-machine.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/self-test-machine.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/self-test-machine

# vastai self-test machine

Host command

Perform a self-test on the specified machine

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai self-test machine <machine_id> [--debugging] [--explain] [--api_key API_KEY] [--url URL] [--retry RETRY] [--raw] [--ignore-requirements]
```

## Arguments

**Property (type: string; required)**

Machine ID

## Options

**Property (type: boolean)**

Enable debugging output

**Property (type: boolean)**

Ignore the minimum system requirements and run the self test regardless

## Description

This command tests if a machine meets specific requirements and
runs a series of tests to ensure it's functioning correctly.

## Examples

```bash
vast self-test machine 12345
 vast self-test machine 12345 --debugging
 vast self-test machine 12345 --explain
 vast self-test machine 12345 --api_key <YOUR_API_KEY>
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
