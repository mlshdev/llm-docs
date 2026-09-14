> Commit-pinned source for Vast.ai main: [cli/reference/update-workergroup.mdx](https://docs.vast.ai/cli/reference/update-workergroup)

# vastai update workergroup

Update an existing autoscale group

## Usage

```bash
vastai update workergroup WORKERGROUP_ID --endpoint_id ENDPOINT_ID [options]
```

## Arguments

**Property (type: integer; required)**

id of autoscale group to update

## Options

**Property (type: number)**

estimated GPU RAM req  (independent of search string)

**Property (type: string)**

template hash (**Note**: if you use this field, you can skip search\_params, as they are automatically inferred from the template)

**Property (type: integer)**

template id

**Property (type: string)**

search param string for search offers    ex: "gpu\_ram>=23 num\_gpus=2 gpu\_name=RTX\_4090 inet\_down>200 direct\_port\_count>2 disk\_space>=64"

**Property (type: boolean)**

Disable default search param query args (alias: `--no-default`)

**Property (type: string)**

launch args  string for create instance  ex: "`--onstart` onstart\_wget.sh  `--env` '-e ONSTART\_PATH=<https://s3.amazonaws.com/public.vast.ai/onstart_OOBA.sh>' `--image` atinoda/text-generation-webui:default-nightly `--disk` 64"

**Property (type: string)**

deployment endpoint name (allows multiple workergroups to share same deployment endpoint)

**Property (type: integer)**

deployment endpoint id (allows multiple workergroups to share same deployment endpoint)

## Description

Example: vastai update workergroup 4242 `--search_params` "gpu\_ram>=23 num\_gpus=2 gpu\_name=RTX\_4090 inet\_down>200 direct\_port\_count>2 disk\_space>=64" `--launch_args` "`--onstart` onstart\_wget.sh  `--env` '-e ONSTART\_PATH=<https://s3.amazonaws.com/public.vast.ai/onstart_OOBA.sh>' `--image` atinoda/text-generation-webui:default-nightly `--disk` 64" `--gpu_ram` 32.0 `--endpoint_name` "LLama" `--endpoint_id` 2

## Examples

```bash
vastai update workergroup <ID>
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
