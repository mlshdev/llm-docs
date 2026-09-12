> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/taxcountry](https://developer.apple.com/documentation/externalpurchaseserverapi/taxcountry)

# taxCountry

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

The three-letter country code of the country that collects the taxes for the transaction.

## Declaration

```
string taxCountry
```

<a id="Discussion"></a>

## Discussion

Use three-letter ISO 3166-1 Alpha-3 country codes.

## See Also

### Specifying amounts and currency

- [amountTaxExclusive](amounttaxexclusive.md): The amount, in milli-units, that the customer paid or was refunded, excluding taxes.
- [amountTaxInclusive](amounttaxinclusive.md): The amount, in milli-units, that the customer paid, including taxes.
- [netAmountTaxExclusive](netamounttaxexclusive.md): The net amount, in milli-units, that you charged the customer, pre-tax, and after deducting all refunds.
- [taxAmount](taxamount.md): The amount, in milli-units, that the customer paid in taxes.
- [pricingCurrency](pricingcurrency.md): The currency used in the transaction to bill or refund the customer.
- [reportingCurrency](reportingcurrency.md): The currency the line item uses to report all amount values.
- [exchangeRate](exchangerate.md): A decimal value that is the exchange rate you use to convert the pricing currency to the reporting currency, when the two currencies differ.
