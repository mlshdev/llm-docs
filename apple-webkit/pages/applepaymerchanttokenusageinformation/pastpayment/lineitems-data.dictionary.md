> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/pastpayment/lineitems-data.dictionary

# PastPayment.LineItems

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Usage Information API  
**Kind:** Object

The goods or services paid for.

## Declaration

```
object PastPayment.LineItems
```

## Properties

- `amount` — `CurrencyAmount` (required): The line item’s amount.
- `imageName` — `string`: The name of an image that represents the item.
- `label` — `string` (required): A short, localized description of the item.
