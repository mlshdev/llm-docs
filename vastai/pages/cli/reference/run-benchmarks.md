> Pinned source for Vast.ai main: [cli/reference/run-benchmarks.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/cli/reference/run-benchmarks.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/run-benchmarks

# vastai run benchmarks

Benchmark a template against one or more GPUs and report performance per dollar.

## Usage

```bash
vastai run benchmarks [OPTIONS]
```

## Options

**Property (type: string)**

Template hash to benchmark. One of `--template_hash` or `--template_id` is required.

**Property (type: integer)**

Template ID to benchmark. Wins over `--template_hash` if both are passed. One of `--template_hash` or `--template_id` is required.

**Property (type: string)**

Comma-separated GPU names, same format as `vastai search offers` (e.g. `RTX_4090,RTX_3090`). An optional `Nx` prefix per token requests a multi-GPU configuration (e.g. `"2x RTX_4090"`). Defaults to `RTX_5090,RTX_4090,RTX_3090,RTX_A6000`.

**Property (type: integer)**

GPUs per instance for tokens without an `Nx` prefix. If omitted, the count is auto-sized from the template's `gpu_total_ram` filter so VRAM fits.

**Property (type: integer)**

Per-GPU safety ceiling in seconds. Each rental is torn down at this point even if no `measured_perf` was reported.

**Property (type: flag)**

Skip the cost confirmation prompt.

## Examples

```bash
# auto-sweep the default GPUs
vastai run benchmarks --template_hash 79ebdd2ebfb9d42cedf7a221c42d37a5

# specific GPUs
vastai run benchmarks --template_hash 393fa8572e6c73c927c8275fe4dffd53 --gpus RTX_4090,RTX_3090

# multi-GPU configurations via inline Nx prefix
vastai run benchmarks --template_hash 40ef49becc953aa910ee05bd4653b9b3 --gpus "2x RTX_4090, 2x RTX_3090"

# raw JSON output for piping into another tool
vastai run benchmarks --template_hash 40ef49becc953aa910ee05bd4653b9b3 --raw
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
