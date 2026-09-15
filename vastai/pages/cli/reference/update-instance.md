> Pinned source for Vast.ai main: [cli/reference/update-instance.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/update-instance.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/update-instance

# vastai update instance

Update recreate an instance from a new/updated template

## Usage

```bash
vastai update instance ID [OPTIONS]
```

## Arguments

**Property (type: integer; required)**

id of instance to update

## Options

**Property (type: integer)**

new template ID to associate with the instance

**Property (type: string)**

new template hash ID to associate with the instance

**Property (type: string)**

new image UUID for the instance

**Property (type: string)**

new arguments for the instance

**Property (type: object)**

new environment variables for the instance

**Property (type: string)**

new onstart script for the instance

## Description

Example: vastai update instance 1234 `--template_hash_id` 661d064bbda1f2a133816b6d55da07c3

## Examples

```bash
vastai update instance <ID>
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
