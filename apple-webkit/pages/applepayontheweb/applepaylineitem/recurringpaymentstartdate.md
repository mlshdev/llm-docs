> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaylineitem/recurringpaymentstartdate](https://developer.apple.com/documentation/applepayontheweb/applepaylineitem/recurringpaymentstartdate)

# recurringPaymentStartDate

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The date of the first payment.

## Declaration

```
Date recurringPaymentStartDate;
```

<a id="Discussion"></a>

## Discussion

To request the first payment as part of the initial transaction, don’t include this attribute.

## See Also

### Configuring recurring payments

- [recurringPaymentEndDate](recurringpaymentenddate.md): The date of the final payment.
- [recurringPaymentIntervalUnit](recurringpaymentintervalunit.md): The amount of time — in calendar units, such as day, month, or year — that represents a fraction of the total payment interval.
- [recurringPaymentIntervalCount](recurringpaymentintervalcount.md): The number of interval units that make up the total payment interval.
- [ApplePayRecurringPaymentDateUnit](../applepayrecurringpaymentdateunit.md): A type that indicates calendrical units, such as year, month, day, and hour.
