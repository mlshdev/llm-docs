> Pinned source for Vast.ai main: [sdk/python/reference/execute.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/sdk/python/reference/execute.mdx)
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
