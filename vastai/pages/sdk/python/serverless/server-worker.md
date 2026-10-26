> Pinned source for Vast.ai main: [sdk/python/serverless/server-worker.mdx](https://github.com/vast-ai/docs/blob/2b2d9a04e7cb542f3305c0c148c2395b0cfab86e/sdk/python/serverless/server-worker.mdx)
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
