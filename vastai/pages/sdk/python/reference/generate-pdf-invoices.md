> Pinned source for Vast.ai main: [sdk/python/reference/generate-pdf-invoices.mdx](https://github.com/vast-ai/docs/blob/8629af9a05e884dd603b6a24bbb7c39826c1a10d/sdk/python/reference/generate-pdf-invoices.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/generate-pdf-invoices

# VastAI.generate_pdf_invoices

Generate PDF invoices based on filters.

## Signature

```python
VastAI.generate_pdf_invoices()
```

## Returns

`Any`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.generate_pdf_invoices()
print(result)
```
