> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepaymerchanttokenusageinformation/deferredpaymentdetails](https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/deferredpaymentdetails)

# DeferredPaymentDetails

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Usage Information API  
**Kind:** Object

Details about a deferred payment, such as a hotel booking or a preorder.

## Declaration

```
object DeferredPaymentDetails
```

## Properties

- `amount` — `CurrencyAmount`: The amount to be charged. Omit if the amount isn’t yet known, for example, for mini-bar charges at a hotel.
- `paymentDate` — `date`: The date, in the future, of the payment, in ISO 8601 format, with the time ignored. Omit if the payment date isn’t yet known, for example, for goods yet to be produced.

## See Also

### Getting payment details

- [AutomaticReloadPaymentDetails](automaticreloadpaymentdetails.md): Details about an automatic reload payment.
- [PastPayment](pastpayment.md): A past payment.
- [PaymentIssueDetails](paymentissuedetails.md): Details about a payment issue, such as a declined payment.
- [RecurringPaymentDetails](recurringpaymentdetails.md): Details about a recurring payment, typically a subscription.
- [UpcomingPayment](upcomingpayment.md): An upcoming payment.
