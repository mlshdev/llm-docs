> Pinned source for Vast.ai main: [cli/reference/create-template.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/cli/reference/create-template.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/create-template

# vastai create template

Create a new template

## Usage

```bash
vastai create template
```

## Options

**Property (type: string)**

name of the template

**Property (type: string)**

docker container image to launch

**Property (type: string)**

docker image tag (can also be appended to end of image\_path)

**Property (type: string)**

link you want to provide

**Property (type: string)**

link to repository

**Property (type: string)**

docker login arguments for private repo authentication, surround with ''

**Property (type: string)**

Contents of the 'Docker options' field

**Property (type: boolean)**

Launch as an ssh instance type

**Property (type: boolean)**

Launch as a jupyter instance instead of an ssh instance

**Property (type: boolean)**

Use (faster) direct connections for jupyter & ssh

**Property (type: string)**

For runtype 'jupyter', directory in instance to use to launch jupyter. Defaults to image's working directory

**Property (type: boolean)**

For runtype 'jupyter', Launch instance with jupyter lab

**Property (type: string)**

contents of onstart script as single argument

**Property (type: string)**

search offers filters

**Property (type: boolean)**

Disable default search param query args (alias: `--no-default`)

**Property (type: string)**

disk storage space, in GB

**Property (type: string)**

readme string

**Property (type: boolean)**

hide the readme from users

**Property (type: string)**

description string

**Property (type: boolean)**

make template available to public

## Description

Create a template that can be used to create instances with

## Examples

```bash
vastai create template --name "tgi-llama2-7B-quantized" --image "ghcr.io/huggingface/text-generation-inference:1.0.3"
                            --env "-p 3000:3000 -e MODEL_ARGS='--model-id TheBloke/Llama-2-7B-chat-GPTQ --quantize gptq'"
                            --onstart-cmd 'wget -O - https://raw.githubusercontent.com/vast-ai/vast-pyworker/main/scripts/launch_tgi.sh | bash'
                            --search_params "gpu_ram>=23 num_gpus=1 gpu_name=RTX_3090 inet_down>128 direct_port_count>3 disk_space>=192 driver_version>=535086005 rented=False"
                            --disk_space 8.0 --ssh --direct
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
