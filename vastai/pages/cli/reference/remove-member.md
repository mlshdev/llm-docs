> Pinned source for Vast.ai main: [cli/reference/remove-member.mdx](https://github.com/vast-ai/docs/blob/d157814df41bf9eb85ed0ef988b9a83b851710d7/cli/reference/remove-member.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/remove-member

# vastai remove member

Remove a team member

## Usage

```bash
vastai remove member ID
```

## Arguments

**Property (type: integer; required)**

id of user to remove

## Examples

```bash
vastai remove member <ID>
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
