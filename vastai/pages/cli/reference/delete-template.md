> Pinned source for Vast.ai main: [cli/reference/delete-template.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/delete-template.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/delete-template

# vastai delete template

Delete a Template

## Usage

```bash
vastai delete template --template-id <id>
```

## Options

**Property (type: integer)**

Template ID of Template to Delete

## Description

Deleting a template only removes the user's relationship to the template; it is not destroyed.

## Examples

```bash
vastai delete template --template-id 12345
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
