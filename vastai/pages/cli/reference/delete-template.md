> Pinned source for Vast.ai main: [cli/reference/delete-template.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/delete-template.mdx)
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
