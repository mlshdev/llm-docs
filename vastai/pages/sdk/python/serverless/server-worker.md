> Pinned source for Vast.ai main: [sdk/python/serverless/server-worker.mdx](https://github.com/vast-ai/docs/blob/a70abe2c977eb9c4264b544c4d4f876089be70e6/sdk/python/serverless/server-worker.mdx)
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
