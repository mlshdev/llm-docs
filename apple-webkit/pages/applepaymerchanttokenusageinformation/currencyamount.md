> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepaymerchanttokenusageinformation/currencyamount](https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/currencyamount)

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
