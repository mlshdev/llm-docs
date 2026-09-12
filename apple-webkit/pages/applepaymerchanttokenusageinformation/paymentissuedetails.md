> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepaymerchanttokenusageinformation/paymentissuedetails](https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/paymentissuedetails)

# PaymentIssueDetails

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Usage Information API  
**Kind:** Object

Details about a payment issue, such as a declined payment.

## Declaration

```
object PaymentIssueDetails
```

## Properties

- `issueKind` — `string` (required): The kind of payment issue.
  **Allowed values:** `paymentDeclined`
- `issueDate` — `date` (required): The date of the payment issue in ISO 8601 format.

## See Also

### Getting payment details

- [AutomaticReloadPaymentDetails](automaticreloadpaymentdetails.md): Details about an automatic reload payment.
- [DeferredPaymentDetails](deferredpaymentdetails.md): Details about a deferred payment, such as a hotel booking or a preorder.
- [PastPayment](pastpayment.md): A past payment.
- [RecurringPaymentDetails](recurringpaymentdetails.md): Details about a recurring payment, typically a subscription.
- [UpcomingPayment](upcomingpayment.md): An upcoming payment.
