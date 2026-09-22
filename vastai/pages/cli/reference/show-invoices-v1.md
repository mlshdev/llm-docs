> Pinned source for Vast.ai main: [cli/reference/show-invoices-v1.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/show-invoices-v1.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-invoices-v1

# vastai show invoices-v1

Get billing (invoices/charges) history reports with advanced filtering and pagination

## Usage

```bash
vastai show invoices-v1 [OPTIONS]
```

## Options

**Property (type: boolean)**

Show invoices instead of charges (alias: `--invoices`)

**Property (type: string)**

Filter which types of invoices to show (alias: `--invoice-type`). Choices: `transfers`, `stripe`, `bitpay`, `coinbase`, `crypto.com`, `reserved`, `payout_paypal`, `payout_wise`

**Property (type: boolean)**

Show charges instead of invoices (alias: `--charges`)

**Property (type: string)**

Filter which types of charges to show (alias: `--charge-type`). Choices: `instance`, `volume`, `serverless`, `i`, `v`, `s`

**Property (type: string)**

Start date (YYYY-MM-DD or timestamp) (alias: `--start-date`)

**Property (type: string)**

End date (YYYY-MM-DD or timestamp) (alias: `--end-date`)

**Property (type: integer)**

Number of results per page (default: 20, max: 100) (alias: `--limit`)

**Property (type: string)**

Pagination token for next page (alias: `--next-token`)

**Property (type: string)**

Output format for charges (default: table) (alias: `--format`) Choices: `table`, `tree`

**Property (type: boolean)**

Include full Instance Charge details and Invoice Metadata (tree view only) (alias: `--verbose`)

**Property (type: boolean)**

Sort by latest first

## Description

This command supports colored output and rich formatting if the 'rich' python module is installed!

## Examples

```bash
# Show the first 20 invoices in the last week (default window is a 7 day period ending today)
vastai show invoices-v1 --invoices

# Show the first 50 charges over a 7 day period starting from 2025-11-30 in tree format
vastai show invoices-v1 --charges -s 2025-11-30 -f tree -l 50

# Show the first 20 invoices of specific types for the month of November 2025
vastai show invoices-v1 -i -it stripe bitpay transfers --start-date 2025-11-01 --end-date 2025-11-30

# Show the first 20 charges for only volumes and serverless instances between two dates, including all details and metadata
vastai show invoices-v1 -c --charge-type v s -s 2025-11-01 -e 2025-11-05 --format tree --verbose

# Get the next page of paginated invoices, limit to 50 per page (type/date filters MUST match previous request)
vastai show invoices-v1 --invoices --limit 50 --next-token eyJ2YWx1ZXMiOiB7ImlkIjogMjUwNzgyMzR9LCAib3NfcGFnZSI6IDB9

# Show the last 10 instance charges over a 7 day period ending 2025-12-25, sorted latest first
vastai show invoices-v1 --charges -ct instance --end-date 2025-12-25 -l 10 --latest-first
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
