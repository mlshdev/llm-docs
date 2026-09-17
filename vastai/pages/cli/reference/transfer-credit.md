> Pinned source for Vast.ai main: [cli/reference/transfer-credit.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/transfer-credit.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/transfer-credit

# vastai transfer credit

Transfer credits to another account

## Usage

```bash
vastai transfer credit RECIPIENT AMOUNT
```

## Arguments

**Property (type: string; required)**

email (or id) of recipient account

**Property (type: number; required)**

$dollars of credit to transfer

## Options

**Property (type: boolean)**

skip confirmation

## Description

Transfer (amount) credits to account with email (recipient).

## Examples

```bash
vastai transfer credit <RECIPIENT> <AMOUNT>
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
