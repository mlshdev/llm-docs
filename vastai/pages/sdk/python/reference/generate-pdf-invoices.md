> Pinned source for Vast.ai main: [sdk/python/reference/generate-pdf-invoices.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/generate-pdf-invoices.mdx)
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
