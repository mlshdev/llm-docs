> Pinned source for Vast.ai main: [cli/reference/tfa-activate.mdx](https://github.com/vast-ai/docs/blob/8629af9a05e884dd603b6a24bbb7c39826c1a10d/cli/reference/tfa-activate.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/tfa-activate

# vastai tfa activate

Activate a new 2FA method by verifying the code. Run `vastai tfa auth-new` before this command to authorize adding a new method.

## Usage

```bash
vastai tfa activate CODE --secret SECRET [--method-type METHOD_TYPE] [--phone-number PHONE_NUMBER] [--label LABEL]
```

## Arguments

**Property (type: string; required)**

6-digit verification code from SMS or Authenticator app.

## Options

**Property (type: string; required)**

Secret token from the setup process. For TOTP, obtained from `vastai tfa totp-setup`. For SMS, obtained from `vastai tfa send-sms`.

**Property (type: string)**

New 2FA method type to activate. Choices: `sms`, `totp`. Treated as `totp` when neither this flag nor `--phone-number` is supplied. (alias: `-t`)

**Property (type: string)**

Phone number for SMS method in E.164 format (e.g., `+12345678901`). Required when activating an SMS method.

**Property (type: string)**

Friendly label for the new 2FA method (e.g., "Work Authenticator"). (alias: `-l`)

## Examples

```bash
# Activate TOTP (Authenticator app)
vastai tfa activate --method-type totp --secret abc123def456 123456

# Activate SMS
vastai tfa activate --method-type sms --secret abc123def456 --phone-number +12345678901 123456

# Activate SMS with a label
vastai tfa activate --method-type sms --secret abc123def456 --phone-number +12345678901 --label "Work Phone" 123456
```

If this is your **first** 2FA method, backup codes are generated and displayed after activation. Save them in a secure location.

## Global Options

The following options are available for all commands:

| Option          | Description                                           |
| --------------- | ----------------------------------------------------- |
| `--url URL`     | Server REST API URL                                   |
| `--retry N`     | Retry limit                                           |
| `--raw`         | Output machine-readable JSON                          |
| `--explain`     | Verbose explanation of API calls                      |
| `--api-key KEY` | API key (defaults to `~/.config/vastai/vast_api_key`) |
