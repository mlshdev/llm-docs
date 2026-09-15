> Pinned source for Vast.ai main: [sdk/python/reference/execute.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/execute.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/execute

# VastAI.execute

Execute a command on an instance.

## Signature

```python
VastAI.execute(
    id: int,
    command: str
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance to execute on

**Property (type: str; required)**

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.execute(id=12345, command="value")
print(result)
```
