> Pinned source for Vast.ai main: [cli/reference/show-env-vars.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/show-env-vars.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-env-vars

# vastai show env-vars

Show user environment variables

## Usage

```bash
vastai show env-vars [-s]
```

## Options

**Property (type: boolean)**

Show the values of environment variables (alias: `--show-values`)

## Examples

```bash
vastai show env-vars
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
