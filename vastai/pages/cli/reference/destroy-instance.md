> Pinned source for Vast.ai main: [cli/reference/destroy-instance.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/destroy-instance.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/destroy-instance

# vastai destroy instance

Destroy an instance (irreversible, deletes data)

## Usage

```bash
vastai destroy instance id [-h] [--api-key API_KEY] [--raw]
```

## Arguments

**Property (type: integer; required)**

id of instance to delete

## Description

Perfoms the same action as pressing the "DESTROY" button on the website at <https://console.vast.ai/instances/>
Example: vastai destroy instance 4242

## Examples

```bash
vastai destroy instance <ID>
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
