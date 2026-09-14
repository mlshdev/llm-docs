> Pinned source for Vast.ai main: [cli/reference/show-earnings.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/show-earnings.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-earnings

# vastai show earnings

Get machine earning history reports

## Usage

```bash
vastai show earnings [OPTIONS]
```

## Options

**Property (type: boolean)**

only display numeric ids (alias: `--quiet`)

**Property (type: string)**

start date and time for report. Many formats accepted (alias: `--start_date`)

**Property (type: string)**

end date and time for report. Many formats accepted  (alias: `--end_date`)

**Property (type: integer)**

Machine id (optional) (alias: `--machine_id`)

## Examples

```bash
vastai show earnings
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
