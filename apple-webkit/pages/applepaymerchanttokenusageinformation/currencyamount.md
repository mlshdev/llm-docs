> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/currencyamount

# CurrencyAmount

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Usage Information API  
**Kind:** Object

An amount of money.

## Declaration

```
object CurrencyAmount
```

## Properties

- `amount` — `string` (required): The monetary amount associated with the currency.
- `currency` — `string` (required): The ISO 4217 currency code that applies to the monetary amount.
  **Minimum length:** `3`  
  **Maximum length:** `3`
