> Commit-pinned source for Vast.ai main: [cli/reference/start-instances.mdx](https://docs.vast.ai/cli/reference/start-instances)

# vastai start instances

Start a list of instances

## Usage

```bash
vastai start instances [OPTIONS] ID0 ID1 ID2...
```

## Arguments

**Property (type: integer; required)**

ids of instance to start

## Examples

```bash
vastai start instances <IDS>
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
