> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/amounttaxexclusive](https://developer.apple.com/documentation/externalpurchaseserverapi/amounttaxexclusive)

# amountTaxExclusive

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

The amount, in milli-units, that the customer paid or was refunded, excluding taxes.

## Declaration

```
int64 amountTaxExclusive
```

<a id="Discussion"></a>

## Discussion

This value must equal [amountTaxInclusive](amounttaxinclusive.md) minus [taxAmount](taxamount.md). The `amountTaxExclusive` value is the amount in milli-units that the user paid, excluding taxes. For refunds, it is the amount in milli-units of the refund, excluding taxes.

Provide all amount field values in milli-units of the currency you state in the [reportingCurrency](reportingcurrency.md) field. One unit of the currency equals 1000 milli-units. For example, if the amount is `€2.99`, the amount in milli-units is `2990`.

## See Also

### Specifying amounts and currency

- [amountTaxInclusive](amounttaxinclusive.md): The amount, in milli-units, that the customer paid, including taxes.
- [netAmountTaxExclusive](netamounttaxexclusive.md): The net amount, in milli-units, that you charged the customer, pre-tax, and after deducting all refunds.
- [taxAmount](taxamount.md): The amount, in milli-units, that the customer paid in taxes.
- [taxCountry](taxcountry.md): The three-letter country code of the country that collects the taxes for the transaction.
- [pricingCurrency](pricingcurrency.md): The currency used in the transaction to bill or refund the customer.
- [reportingCurrency](reportingcurrency.md): The currency the line item uses to report all amount values.
- [exchangeRate](exchangerate.md): A decimal value that is the exchange rate you use to convert the pricing currency to the reporting currency, when the two currencies differ.
