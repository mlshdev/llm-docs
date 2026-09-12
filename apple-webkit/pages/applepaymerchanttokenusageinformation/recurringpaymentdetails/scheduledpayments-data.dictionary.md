> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepaymerchanttokenusageinformation/recurringpaymentdetails/scheduledpayments-data.dictionary](https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/recurringpaymentdetails/scheduledpayments-data.dictionary)

# RecurringPaymentDetails.ScheduledPayments

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Usage Information API  
**Kind:** Object

Future occurrences of the recurring payment.

## Declaration

```
object RecurringPaymentDetails.ScheduledPayments
```

## Properties

- `amount` — `CurrencyAmount`: The amount to be charged. Omit if the amount isn’t yet known, for example, in usage-based billing.
- `paymentDate` — `date` (required): The date, in the future, of the payment, in ISO 8601 format. This property ignores the time.

<a id="Discussion"></a>

## Discussion

For installments, include all payments of the plan.
