> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepaymerchanttokenusageinformation/automaticreloadpaymentdetails](https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/automaticreloadpaymentdetails)

# AutomaticReloadPaymentDetails

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Usage Information API  
**Kind:** Object

Details about an automatic reload payment.

## Declaration

```
object AutomaticReloadPaymentDetails
```

## Properties

- `amount` — `CurrencyAmount`: The reload amount when the account balance reaches the threshold amount. Omit this property if the reload amount is variable, for example, to match a target account balance.
- `thresholdAmount` — `CurrencyAmount`: The balance an account reaches before the system applies the automatic reload amount.

## See Also

### Getting payment details

- [DeferredPaymentDetails](deferredpaymentdetails.md): Details about a deferred payment, such as a hotel booking or a preorder.
- [PastPayment](pastpayment.md): A past payment.
- [PaymentIssueDetails](paymentissuedetails.md): Details about a payment issue, such as a declined payment.
- [RecurringPaymentDetails](recurringpaymentdetails.md): Details about a recurring payment, typically a subscription.
- [UpcomingPayment](upcomingpayment.md): An upcoming payment.
