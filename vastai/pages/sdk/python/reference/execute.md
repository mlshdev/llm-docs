> Pinned source for Vast.ai main: [sdk/python/reference/execute.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/execute.mdx)
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
