> Pinned source for Vast.ai main: [cli/reference/delete-deployment.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/delete-deployment.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/delete-deployment

# vastai delete deployment

Delete a deployment by id, or by name and optional tag

## Usage

```bash
vastai delete deployment [ID | --name NAME [--tag TAG]]
```

## Arguments

**Property (type: integer; required)**

id of deployment to delete

## Options

**Property (type: string)**

name of deployment to delete (deletes all tags unless `--tag` is specified)

**Property (type: string)**

tag to filter by when deleting by name

## Examples

```bash
vastai delete deployment 1234
vastai delete deployment --name my-deployment
vastai delete deployment --name my-deployment --tag prod
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
