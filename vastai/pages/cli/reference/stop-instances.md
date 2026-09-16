> Pinned source for Vast.ai main: [cli/reference/stop-instances.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/cli/reference/stop-instances.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/stop-instances

# vastai stop instances

Stop a list of instances

## Usage

```bash
vastai stop instances [OPTIONS] ID0 ID1 ID2...
```

## Arguments

**Property (type: integer; required)**

ids of instance to stop

## Examples

```bash
vastai stop instances $(vastai show instances -q)
vastai stop instances 329838 984849
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
