> Pinned source for Vast.ai main: [cli/reference/delete-endpoint.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/cli/reference/delete-endpoint.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/delete-endpoint

# vastai delete endpoint

Delete an endpoint group

## Usage

```bash
vastai delete endpoint ID
```

## Arguments

**Property (type: integer; required)**

id of endpoint group to delete

## Description

Example: vastai delete endpoint 4242

## Examples

```bash
vastai delete endpoint <ID>
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
