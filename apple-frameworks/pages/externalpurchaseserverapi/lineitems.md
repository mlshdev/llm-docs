> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/lineitems](https://developer.apple.com/documentation/externalpurchaseserverapi/lineitems)

# Line item fields

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** API Collection

Properties that describe a single transaction or correction in an external purchase report.

## Topics

### Identifying the line item

- [lineItemId](lineitemid.md): A unique identifier for the line item, that you determine.

### Providing transaction info

- [creationDate](creationdate.md): The UNIX date, in milliseconds, that the customer authorized the transaction.
- [eventType](eventtype.md): The type of transaction the line item reports, whether it’s a buy or refund.
- [referenceLineItemId](referencelineitemid.md): The line item identifier of another transaction, that the report references.

### Providing product info

- [productIdentifier](productidentifier.md): A string that identifies the product.
- [productType](producttype.md): The type of product in the transaction, whether it’s a one-time buy, or a subscription.
- [quantity](quantity.md): The quantity of the product the customer purchased in a single transaction.

### Specifying amounts and currency

- [amountTaxExclusive](amounttaxexclusive.md): The amount, in milli-units, that the customer paid or was refunded, excluding taxes.
- [amountTaxInclusive](amounttaxinclusive.md): The amount, in milli-units, that the customer paid, including taxes.
- [netAmountTaxExclusive](netamounttaxexclusive.md): The net amount, in milli-units, that you charged the customer, pre-tax, and after deducting all refunds.
- [taxAmount](taxamount.md): The amount, in milli-units, that the customer paid in taxes.
- [taxCountry](taxcountry.md): The three-letter country code of the country that collects the taxes for the transaction.
- [pricingCurrency](pricingcurrency.md): The currency used in the transaction to bill or refund the customer.
- [reportingCurrency](reportingcurrency.md): The currency the line item uses to report all amount values.
- [exchangeRate](exchangerate.md): A decimal value that is the exchange rate you use to convert the pricing currency to the reporting currency, when the two currencies differ.

### Supplying subscription info

- [subscriptionDaysOfPaidService](subscriptiondaysofpaidservice.md): The total number of days of paid service for the subscription.
- [subscriptionEndDate](subscriptionenddate.md): The UNIX date, in milli-seconds, the subscription renewal cycle ends.
- [subscriptionEvent](subscriptionevent.md): The event in the subscription’s life cycle that the transaction represents.
- [subscriptionStartDate](subscriptionstartdate.md): The UNIX date, in milli-seconds, of the start of the subscription renewal period.
- [referenceLineItemId](referencelineitemid.md): The line item identifier of another transaction, that the report references.

### Submitting corrections

- [erroneouslySubmitted](erroneouslysubmitted.md): A Boolean value that indicates whether a line item was submitted in error.
- [restatement](restatement.md): A Boolean value that indicates a line item contains a correction.

## See Also

### External purchase report transactions

- [Reporting tokens with transactions](reportwithtransactions.md): Create reports for external purchase tokens that result in completed transactions, including one-time charges, subscriptions and renewals, and refunds.
- [Reporting corrections](reportcorrections.md): Submit a report with corrections if you find errors in, or have adjustments to, a successfully submitted transaction.
- [OneTimeBuyLineItem](onetimebuylineitem.md): The line item that indicates a one-time charge transaction.
- [RefundLineItem](refundlineitem.md): The line item that indicates a refund transaction.
- [SubscriptionBuyLineItem](subscriptionbuylineitem.md): The line item that indicates a subscription-related event or transaction.
