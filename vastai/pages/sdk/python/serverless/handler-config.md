> Pinned source for Vast.ai main: [sdk/python/serverless/handler-config.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/serverless/handler-config.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/serverless/handler-config

# HandlerConfig

Configuration for defining handlers

## Import

```python
from vastai import HandlerConfig
```

## Fields

**Property (type: str)**

route

**Property (type: Optional\[str])**

healthcheck

**Property (type: bool)**

allow\_parallel\_requests

**Property (type: Optional\[float])**

max\_queue\_time

**Property (type: Optional\[BenchmarkConfig])**

benchmark\_config

**Property (type: Optional\[Type\[EndpointHandler]])**

handler\_class

**Property (type: Optional\[Type\[ApiPayload]])**

payload\_class

**Property (type: Optional\[RequestPayloadParser])**

request\_parser

**Property (type: Optional\[ClientResponseGenerator])**

response\_generator

**Property (type: Optional\[WorkloadCalculator])**

workload\_calculator

**Property (type: Optional\[Callable])**

remote\_function
