> Pinned source for Vast.ai main: [cli/reference/update-endpoint.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/update-endpoint.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/update-endpoint

# vastai update endpoint

Update an existing endpoint group

## Usage

```bash
vastai update endpoint ID [OPTIONS]
```

## Arguments

**Property (type: integer; required)**

id of endpoint group to update

## Options

**Property (type: number)**

minimum floor load in perf units/s  (token/s for LLms)

**Property (type: number)**

minimum floor load in perf units/s  (token/s for LLms), but allow handling with cold workers

**Property (type: string)**

active, suspended, or stopped

**Property (type: number)**

target capacity utilization (fraction, max 1.0, default 0.9)

**Property (type: number)**

cold/stopped instance capacity target as multiple of hot capacity target (default 2.5)

**Property (type: integer)**

min number of workers to keep 'cold' when you have no load (default 5)

**Property (type: integer)**

max number of workers your endpoint group can have (default 20)

**Property (type: string)**

deployment endpoint name (allows multiple workergroups to share same deployment endpoint)

**Property (type: number)**

maximum seconds requests may be queued on each worker (default 30.0)

**Property (type: number)**

target seconds for the queue to be cleared (default 10.0)

**Property (type: integer)**

seconds of no traffic before the endpoint can scale to zero active workers

## Description

Example: vastai update endpoint 4242 `--min_load` 100 `--target_util` 0.9 `--cold_mult` 2.0 `--endpoint_name` "LLama"

## Examples

```bash
vastai update endpoint <ID>
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
