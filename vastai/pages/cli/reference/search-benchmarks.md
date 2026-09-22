> Pinned source for Vast.ai main: [cli/reference/search-benchmarks.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/search-benchmarks.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/search-benchmarks

# vastai search benchmarks

Search for benchmark results using custom query

## Usage

```bash
vastai search benchmarks [--help] [--api-key API_KEY] [--raw] <query>
```

## Arguments

**Property (type: string; required)**

Search query in simple query syntax (see below)

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
# search for benchmarks with score > 100 for llama2_70B model on 2 specific machines
vastai search benchmarks 'score > 100.0  model=llama2_70B  machine_id in [302,402]'
```

## Available Fields

| Field         | Type   | Description                                 |
| ------------- | ------ | ------------------------------------------- |
| `contract_id` | int    | ID of instance/contract reporting benchmark |
| `id`          | int    | benchmark unique ID                         |
| `image`       | string | image used for benchmark                    |
| `last_update` | float  | date of benchmark                           |
| `machine_id`  | int    | id of machine benchmarked                   |
| `model`       | string | name of model used in benchmark             |
| `name`        | string | name of benchmark                           |
| `num_gpus`    | int    | number of gpus used in benchmark            |
| `score`       | float  | benchmark score result                      |

## Global Options

The following options are available for all commands:

| Option          | Description                                           |
| --------------- | ----------------------------------------------------- |
| `--url URL`     | Server REST API URL                                   |
| `--retry N`     | Retry limit                                           |
| `--raw`         | Output machine-readable JSON                          |
| `--explain`     | Verbose explanation of API calls                      |
| `--api-key KEY` | API key (defaults to `~/.config/vastai/vast_api_key`) |
