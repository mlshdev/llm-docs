> Commit-pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_bench.yaml](https://github.com/docker/docs/blob/c596433b17b6e062376dcd24395336f316e1714a/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_bench.yaml)

# docker model bench

Benchmark a model's performance at different concurrency levels

**Usage:** `docker model bench MODEL`

## Description

Benchmark a model's performance showing tokens per second at different concurrency levels.

This command runs a series of benchmarks with 1, 2, 4, and 8 concurrent requests by default,
measuring the tokens per second (TPS) that the model can generate.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--concurrency` | `[1,2,4,8]` | Concurrency levels to test |
| `--duration` | `30s` | Duration to run each concurrency test |
| `--json` |  | Output results in JSON format |
| `--prompt` | `Write a comprehensive 100 word summary on whales and their impact on society.` | Prompt to use for benchmarking |
| `--timeout` | `5m0s` | Timeout for each individual request |
