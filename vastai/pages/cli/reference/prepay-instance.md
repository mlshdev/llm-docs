> Pinned source for Vast.ai main: [cli/reference/prepay-instance.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/prepay-instance.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/prepay-instance

# vastai prepay instance

Deposit credits into reserved instance

## Usage

```bash
vastai prepay instance ID AMOUNT
```

## Arguments

**Property (type: integer; required)**

id of instance to prepay for

**Property (type: number; required)**

amount of instance credit prepayment (default discount func of 0.2 for 1 month, 0.3 for 3 months)

## Examples

```bash
vastai prepay instance <ID> <AMOUNT>
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
