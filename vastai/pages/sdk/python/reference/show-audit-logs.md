> Pinned source for Vast.ai main: [sdk/python/reference/show-audit-logs.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/show-audit-logs.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-audit-logs

# VastAI.show_audit_logs

Display account audit logs.

## Signature

```python
VastAI.show_audit_logs() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_audit_logs()
print(result)
```
