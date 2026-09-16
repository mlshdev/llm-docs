> Pinned source for Vast.ai main: [sdk/python/serverless/server-worker.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/serverless/server-worker.mdx)
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
