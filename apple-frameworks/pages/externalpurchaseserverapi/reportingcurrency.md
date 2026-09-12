> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/reportingcurrency](https://developer.apple.com/documentation/externalpurchaseserverapi/reportingcurrency)

# reportingCurrency

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

The currency the line item uses to report all amount values.

## Declaration

```
string reportingCurrency
```

<a id="Discussion"></a>

## Discussion

Allowed values: `CLP`, `EUR`, `QAR`, `COP`, `VND`, `EGP`, `THB`, `HKD`, `NOK`, `BRL`, `GBP`, `AUD`, `SEK`, `INR`, `BGN`, `ZAR`, `KZT`, `NGN`, `TWD`, `MXN`, `CHF`, `PEN`, `DKK`, `AED`, `ILS`, `KRW`, `PHP`, `TZS`, `PKR`, `HUF`, `IDR`, `CNY`, `MYR`, `RUB`, `RON`, `SGD`, `TRY`, `CZK`, `SAR`, `USD`, `NZD`, `PLN`, `JPY`, `CAD`

The list of allowed values shows the currency codes of currencies that Apple supports.

The reporting currency is the currency you use to report all of the amount values in a line item, including:

- [amountTaxExclusive](amounttaxexclusive.md)
- [amountTaxInclusive](amounttaxinclusive.md)
- [netAmountTaxExclusive](netamounttaxexclusive.md)
- [taxAmount](taxamount.md)

<a id="Determine-your-reporting-currency"></a>

### Determine your reporting currency

Your reporting currency depends on your [pricingCurrency](pricingcurrency.md), as follows:

- If your `pricingCurrency` is on the list of allowed values for `reportingCurrency`, then you must use the same currency to report transaction amounts. Set the `reportingCurrency` field to match the `pricingCurrency` field, and don’t include an [exchangeRate](exchangerate.md) field in the line item.
- If your `pricingCurrency` isn’t on the list of allowed values for `reportingCurrency`, then you must use EUR or USD as the reporting currency. Use an exchange rate to convert the line item amounts from the pricing currency to the reporting currency, and include the exchange rate in the [exchangeRate](exchangerate.md) field. For more information, see [exchangeRate](exchangerate.md).

## See Also

### Specifying amounts and currency

- [amountTaxExclusive](amounttaxexclusive.md): The amount, in milli-units, that the customer paid or was refunded, excluding taxes.
- [amountTaxInclusive](amounttaxinclusive.md): The amount, in milli-units, that the customer paid, including taxes.
- [netAmountTaxExclusive](netamounttaxexclusive.md): The net amount, in milli-units, that you charged the customer, pre-tax, and after deducting all refunds.
- [taxAmount](taxamount.md): The amount, in milli-units, that the customer paid in taxes.
- [taxCountry](taxcountry.md): The three-letter country code of the country that collects the taxes for the transaction.
- [pricingCurrency](pricingcurrency.md): The currency used in the transaction to bill or refund the customer.
- [exchangeRate](exchangerate.md): A decimal value that is the exchange rate you use to convert the pricing currency to the reporting currency, when the two currencies differ.
