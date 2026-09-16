> Pinned source for Vast.ai main: [cli/reference/create-subaccount.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/cli/reference/create-subaccount.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/create-subaccount

# vastai create subaccount

Create a subaccount

## Usage

```bash
vastai create subaccount --email EMAIL --username USERNAME --password PASSWORD --type TYPE
```

## Options

**Property (type: string)**

email address to use for login

**Property (type: string)**

username to use for login

**Property (type: string)**

password to use for login

**Property (type: string)**

host/client

## Description

Creates a new account that is considered a child of your current account as defined via the API key.

vastai create subaccount `--email` <bob@gmail.com> `--username` bob `--password` password `--type` host

vastai create subaccount `--email` <vast@gmail.com> `--username` vast `--password` password `--type` host

## Examples

```bash
vastai create subaccount
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
