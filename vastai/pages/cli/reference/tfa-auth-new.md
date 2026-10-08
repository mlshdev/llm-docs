> Pinned source for Vast.ai main: [cli/reference/tfa-auth-new.mdx](https://github.com/vast-ai/docs/blob/8629af9a05e884dd603b6a24bbb7c39826c1a10d/cli/reference/tfa-auth-new.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/tfa-auth-new

# vastai tfa auth-new

Authorize your account to add a new 2FA method. This step is required before running `vastai tfa activate`. For your first method, verification defaults to email. For subsequent methods, use an existing 2FA method.

## Usage

```bash
vastai tfa auth-new {[--method-type METHOD_TYPE | --method-id ID | --backup-code BACKUP_CODE] | [--secret SECRET --code CODE]}
```

## Options

**Property (type: string)**

2FA method type to use for authorization. Choices: `email`, `sms`, `totp`. Defaults to `email`. Only use when you have exactly one method of this type. (alias: `-t`)

**Property (type: string)**

2FA method ID to use if you have more than one of the same type. Get the ID from `vastai tfa status`. (alias: `-id`)

**Property (type: string)**

One-time backup code. Using a backup code immediately authorizes without an interactive code prompt. (alias: `-bc`)

**Property (type: string)**

Secret token from a previous incomplete authorization attempt. Use with `--code` to resume. (alias: `-s`)

**Property (type: string)**

2FA code from a previous incomplete authorization attempt. Use with `--secret` to resume. (alias: `-c`)

## Examples

```bash
# Default: authorize via email (use for first 2FA method)
vastai tfa auth-new

# Authorize via TOTP (existing Authenticator app)
vastai tfa auth-new --method-type totp

# Authorize via SMS
vastai tfa auth-new -t sms

# Authorize using a specific method ID
vastai tfa auth-new --method-id 456

# Authorize with backup code (no interactive prompt)
vastai tfa auth-new --backup-code ABCD-EFGH-IJKL

# Resume a previous incomplete authorization
vastai tfa auth-new --secret abc123def456 --code 123456
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
