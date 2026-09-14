> Pinned source for Vast.ai main: [sdk/python/serverless/client-worker.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/serverless/client-worker.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/serverless/client-worker

# Worker

## Import

```python
from vastai.serverless.client.worker import Worker
```

## Fields

**Property (type: int)**

id

**Property (type: str)**

status

**Property (type: float)**

cur\_load

**Property (type: float)**

new\_load

**Property (type: float)**

cur\_load\_rolling\_avg

**Property (type: float)**

cur\_perf

**Property (type: float)**

perf

**Property (type: float)**

measured\_perf

**Property (type: float)**

dlperf

**Property (type: float)**

reliability

**Property (type: int)**

reqs\_working

**Property (type: float)**

disk\_usage

**Property (type: float)**

loaded\_at

**Property (type: float)**

started\_at

## Methods

### from\_dict

```python
from_dict(d: Dict[str, Any]) -> 'Worker'
```

**Property (type: Dict\[str, Any]; required)**

d
