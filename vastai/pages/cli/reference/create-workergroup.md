> Pinned source for Vast.ai main: [cli/reference/create-workergroup.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/create-workergroup.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/create-workergroup

# vastai create workergroup

Create a new autoscale group

## Usage

```bash
vastai create workergroup [OPTIONS]
```

## Options

**Property (type: string)**

template hash (required, but **Note**: if you use this field, you can skip search\_params, as they are automatically inferred from the template)

**Property (type: integer)**

template id (optional)

**Property (type: boolean)**

Disable default search param query args (alias: `--no-default`)

**Property (type: string)**

launch args  string for create instance  ex: "`--onstart` onstart\_wget.sh  `--env` '-e ONSTART\_PATH=<https://s3.amazonaws.com/vast.ai/onstart_OOBA.sh>' `--image` atinoda/text-generation-webui:default-nightly `--disk` 64"

**Property (type: string)**

deployment endpoint name (allows multiple workergroups to share same deployment endpoint)

**Property (type: integer)**

deployment endpoint id (allows multiple workergroups to share same deployment endpoint)

**Property (type: number)**

estimated GPU RAM req  (independent of search string)

**Property (type: string)**

search param string for search offers    ex: "gpu\_ram>=23 num\_gpus=2 gpu\_name=RTX\_4090 inet\_down>200 direct\_port\_count>2 disk\_space>=64"

## Description

Create a new autoscaling group to manage a pool of worker instances.

Example: vastai create workergroup `--template_hash` HASH  `--endpoint_name` "LLama"

## Examples

```bash
vastai create workergroup
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
