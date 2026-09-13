> Commit-pinned source for Vast.ai main: [host/cli/set-defjob.mdx](https://docs.vast.ai/host/cli/set-defjob)

# vastai set defjob

Host command

Create default jobs for a machine

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai set defjob id [--api-key API_KEY] [--price_gpu PRICE_GPU] [--price_inetu PRICE_INETU] [--price_inetd PRICE_INETD] [--image IMAGE] [--args ...]
```

## Arguments

**Property (type: integer; required)**

id of machine to launch default instance on

## Options

**Property (type: number)**

per gpu rental price in $/hour

**Property (type: number)**

price for internet upload bandwidth in $/GB

**Property (type: number)**

price for internet download bandwidth in $/GB

**Property (type: string)**

docker container image to launch

**Property (type: string)**

list of arguments passed to container launch

## Description

Performs the same action as creating a background job at <https://cloud.vast.ai/host/create>.

## Examples

```bash
vastai set defjob <ID>
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
