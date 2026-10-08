> Pinned source for Vast.ai main: [cli/reference/tfa-resend-sms.mdx](https://github.com/vast-ai/docs/blob/8629af9a05e884dd603b6a24bbb7c39826c1a10d/cli/reference/tfa-resend-sms.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/tfa-resend-sms

# vastai tfa resend-sms

Resend an SMS 2FA verification code. Use this if you didn't receive the original code or it expired.

## Usage

```bash
vastai tfa resend-sms --secret SECRET [--phone-number PHONE_NUMBER]
```

## Options

**Property (type: string; required)**

Secret token from the original `vastai tfa send-sms` request. (alias: `-s`)

**Property (type: string)**

Phone number to resend the code to in E.164 format (e.g., `+12345678901`). If omitted, uses the phone number from the original request. (alias: `-p`)

## Examples

```bash
# Resend to the same phone number as the original request
vastai tfa resend-sms --secret abc123def456

# Resend to a specific phone number
vastai tfa resend-sms --secret abc123def456 --phone-number +12345678901
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
