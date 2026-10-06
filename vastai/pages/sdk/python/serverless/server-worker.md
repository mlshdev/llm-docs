> Pinned source for Vast.ai main: [sdk/python/serverless/server-worker.mdx](https://github.com/vast-ai/docs/blob/991b8e4d53bf7be656511c50cb6c7e8d32b3c0c8/sdk/python/serverless/server-worker.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/serverless/server-worker

# Worker

This class provides a simple to use abstraction over the pyworker backend.
All custom implementations of pyworker can be created by configuring a Worker object.
The pyworker starts by calling Worker.run()

## Import

```python
from vastai import Worker
```

## Constructor

```python
Worker(config: WorkerConfig)
```

**Property (type: WorkerConfig; required)**

config

## Methods

### run\_async

```python
async run_async()
```

### run

```python
run()
```
