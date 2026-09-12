> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepaymerchanttokenusageinformation/upcomingpayment](https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/upcomingpayment)

# UpcomingPayment

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Usage Information API  
**Kind:** Object

An upcoming payment.

## Declaration

```
object UpcomingPayment
```

## Properties

- `automaticReloadPaymentDetails` — `AutomaticReloadPaymentDetails`: The details about an automatic reload payment. Required if `paymentType` is `automaticReload`.
- `deferredPaymentDetails` — `DeferredPaymentDetails`: The details about a deferred payment. Required if `paymentType` is `deferred`.
- `identifier` — `string` (required): An opaque value that uniquely identifies the payment in the usage information. The value isn’t displayed to the user.
- `imageName` — `string`: The name of an image that represents the payment.
- `label` — `string` (required): A short, localized description of the payment, such as the service name.
- `paymentType` — `string` (required): The payment’s type.
  **Allowed values:** `recurring`, `deferred`, `automaticReload`
- `paymentIssueDetails` — `PaymentIssueDetails`: Details about a payment issue. Present when the payment has an issue, such as a declined payment.
- `recurringPaymentDetails` — `RecurringPaymentDetails`: Details about a recurring payment. Required if `paymentType` is `recurring`.

## See Also

### Getting payment details

- [AutomaticReloadPaymentDetails](automaticreloadpaymentdetails.md): Details about an automatic reload payment.
- [DeferredPaymentDetails](deferredpaymentdetails.md): Details about a deferred payment, such as a hotel booking or a preorder.
- [PastPayment](pastpayment.md): A past payment.
- [PaymentIssueDetails](paymentissuedetails.md): Details about a payment issue, such as a declined payment.
- [RecurringPaymentDetails](recurringpaymentdetails.md): Details about a recurring payment, typically a subscription.
