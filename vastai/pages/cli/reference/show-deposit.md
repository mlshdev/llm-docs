> Pinned source for Vast.ai main: [cli/reference/show-deposit.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/cli/reference/show-deposit.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-deposit

# vastai show deposit

Display reserve deposit info for an instance

## Usage

```bash
vastai show deposit ID [options]
```

## Arguments

**Property (type: integer; required)**

id of instance to get info for

## Examples

```bash
vastai show deposit <ID>
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
