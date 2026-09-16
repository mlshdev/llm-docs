> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/pastpayment/summaryitems-data.dictionary

# PastPayment.SummaryItems

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Usage Information API  
**Kind:** Object

Items that summarize the total amount, such as taxes or shipping cost.

## Declaration

```
object PastPayment.SummaryItems
```

## Properties

- `label` — `string` (required): A short, localized description of the item.
- `amount` — `CurrencyAmount` (required): The summary item’s amount.
