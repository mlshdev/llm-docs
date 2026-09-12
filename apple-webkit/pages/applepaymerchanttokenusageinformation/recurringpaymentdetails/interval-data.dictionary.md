> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepaymerchanttokenusageinformation/recurringpaymentdetails/interval-data.dictionary](https://developer.apple.com/documentation/applepaymerchanttokenusageinformation/recurringpaymentdetails/interval-data.dictionary)

# RecurringPaymentDetails.Interval

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Usage Information API  
**Kind:** Object

The payment interval.

## Declaration

```
object RecurringPaymentDetails.Interval
```

## Properties

- `count` — `number`: The number of units that make up the total payment interval. The default value is `1`.
  **Minimum:** `1`
- `unit` — `string` (required): The amount of time — in calendar units, such as day, month, or year — that represents a fraction of the total payment interval.
  **Allowed values:** `minute`, `hour`, `day`, `week`, `month`, `year`
