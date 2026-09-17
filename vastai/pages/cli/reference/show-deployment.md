> Pinned source for Vast.ai main: [cli/reference/show-deployment.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/show-deployment.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-deployment

# vastai show deployment

Display details of a single deployment

## Usage

```bash
vastai show deployment ID
```

## Arguments

**Property (type: integer; required)**

id of deployment to show

## Description

Example: vastai show deployment 1234

## Examples

```bash
vastai show deployment <ID>
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
