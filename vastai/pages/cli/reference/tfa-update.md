> Pinned source for Vast.ai main: [cli/reference/tfa-update.mdx](https://github.com/vast-ai/docs/blob/8629af9a05e884dd603b6a24bbb7c39826c1a10d/cli/reference/tfa-update.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/tfa-update

# vastai tfa update

Update a 2FA method's label or primary status.

## Usage

```bash
vastai tfa update METHOD_ID [--label LABEL] [--set-primary {t|true|f|false}]
```

## Arguments

**Property (type: integer; required)**

ID of the 2FA method to update. Get the ID from `vastai tfa status`.

## Options

**Property (type: string)**

New friendly name for this 2FA method (e.g., "Work Authenticator", "Personal Phone"). (alias: `-l`)

**Property (type: string)**

Set this method as the primary/default 2FA method. Accepts `t` or `true` to enable, `f` or `false` to disable. (alias: `-p`)

## Examples

```bash
# Rename a method
vastai tfa update 123 --label "Personal Phone"

# Set as primary/default method
vastai tfa update 123 --set-primary t

# Rename and set as primary in one command
vastai tfa update 789 --label "Backup Authenticator" --set-primary t
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
