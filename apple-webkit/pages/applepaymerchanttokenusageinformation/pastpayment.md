> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepaymerchanttokenusageinformation/pastpayment](https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/pastpayment)

# PastPayment

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Usage Information API  
**Kind:** Object

A past payment.

## Declaration

```
object PastPayment
```

## Properties

- `identifier` — `string` (required): An opaque value that uniquely identifies this payment in the usage information. The value isn’t displayed to the user.
- `lineItems` — `[PastPayment.LineItems]`: The goods or services paid for.
- `paymentDate` — `string` (required): The date, in the past, of the payment, in ISO 8601 format; time is optional.
- `summaryItems` — `[PastPayment.SummaryItems]`: Items that summarize the total amount, such as taxes or shipping cost.
- `totalAmount` — `CurrencyAmount` (required): The total amount of the payment.

## Topics

### Dictionaries

- [PastPayment.LineItems](pastpayment/lineitems-data.dictionary.md): The goods or services paid for.
- [PastPayment.SummaryItems](pastpayment/summaryitems-data.dictionary.md): Items that summarize the total amount, such as taxes or shipping cost.

## See Also

### Getting payment details

- [AutomaticReloadPaymentDetails](automaticreloadpaymentdetails.md): Details about an automatic reload payment.
- [DeferredPaymentDetails](deferredpaymentdetails.md): Details about a deferred payment, such as a hotel booking or a preorder.
- [PaymentIssueDetails](paymentissuedetails.md): Details about a payment issue, such as a declined payment.
- [RecurringPaymentDetails](recurringpaymentdetails.md): Details about a recurring payment, typically a subscription.
- [UpcomingPayment](upcomingpayment.md): An upcoming payment.
