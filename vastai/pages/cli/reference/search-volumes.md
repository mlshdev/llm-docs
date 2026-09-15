> Pinned source for Vast.ai main: [cli/reference/search-volumes.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/search-volumes.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/search-volumes

# vastai search volumes

Search for volume offers using custom query

## Usage

```bash
vastai search volumes [--help] [--api-key API_KEY] [--raw] <query>
```

## Arguments

**Property (type: string; required)**

Query to search for. default: 'external=false verified=true disk\_space>=1', pass -n to ignore default

## Options

**Property (type: boolean)**

Disable default query (alias: `--no-default`)

**Property (type: integer)**

**Property (type: number)**

Amount of storage to use for pricing, in GiB. default=1.0GiB

**Property (type: string)**

Comma-separated list of fields to sort on. postfix field with - to sort desc. ex: -o 'disk\_space,inet\_up-'.  default='score-' (alias: `--order`)

## Description

**Query syntax**

```
query      = comparison comparison...
comparison = field op value
field      = <name of a field>
op         = one of: <, <=, ==, !=, >=, >, in, notin
value      = <bool, int, float, string> | 'any' | [value0, value1, ...]
bool       = True | False
```

- Wrap `>` and `<` in quotes on the command line
- For string values (e.g. `gpu_name`), replace spaces with underscores: `RTX_3090` not `RTX 3090`

## Examples

```bash
# search for volumes with greater than 50GB of available storage and greater than 500 Mb/s upload and download speed
vastai search volumes "disk_space>50 inet_up>500 inet_down>500"
```

## Available Fields

| Field            | Type   | Description                                                                                           |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `cpu_arch`       | string | host machine cpu architecture (e.g. amd64, arm64)                                                     |
| `cuda_vers`      | float  | machine max supported cuda version (based on driver version)                                          |
| `datacenter`     | bool   | show only datacenter offers                                                                           |
| `disk_bw`        | float  | disk read bandwidth, in MB/s                                                                          |
| `disk_space`     | float  | disk storage space, in GB                                                                             |
| `driver_version` | string | machine's nvidia/amd driver version as 3 digit string ex. "535.86.05"                                 |
| `duration`       | float  | max rental duration in days                                                                           |
| `geolocation`    | string | Two letter country code. Works with operators =, !=, in, notin (e.g. geolocation not in \['XV','XZ']) |
| `gpu_arch`       | string | host machine gpu architecture (e.g. nvidia, amd)                                                      |
| `gpu_name`       | string | GPU model name (no quotes, replace spaces with underscores, ie: RTX\_3090 rather than 'RTX 3090')     |
| `has_avx`        | bool   | CPU supports AVX instruction set                                                                      |
| `id`             | int    | volume offer unique ID                                                                                |
| `inet_down`      | float  | internet download speed in Mb/s                                                                       |
| `inet_up`        | float  | internet upload speed in Mb/s                                                                         |
| `machine_id`     | int    | machine id of volume offer                                                                            |
| `pci_gen`        | float  | PCIE generation                                                                                       |
| `pcie_bw`        | float  | PCIE bandwidth (CPU to GPU)                                                                           |
| `reliability`    | float  | machine reliability score (see FAQ for explanation)                                                   |
| `storage_cost`   | float  | storage cost in $/GB/month                                                                            |
| `static_ip`      | bool   | is the IP addr static/stable                                                                          |
| `total_flops`    | float  | total TFLOPs from all GPUs                                                                            |
| `ubuntu_version` | string | host machine ubuntu OS version                                                                        |
| `verified`       | bool   | is the machine verified                                                                               |

## Global Options

The following options are available for all commands:

| Option          | Description                                           |
| --------------- | ----------------------------------------------------- |
| `--url URL`     | Server REST API URL                                   |
| `--retry N`     | Retry limit                                           |
| `--raw`         | Output machine-readable JSON                          |
| `--explain`     | Verbose explanation of API calls                      |
| `--api-key KEY` | API key (defaults to `~/.config/vastai/vast_api_key`) |
