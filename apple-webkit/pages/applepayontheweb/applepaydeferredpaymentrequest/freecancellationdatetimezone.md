> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaydeferredpaymentrequest/freecancellationdatetimezone](https://developer.apple.com/documentation/applepayontheweb/applepaydeferredpaymentrequest/freecancellationdatetimezone)

# freeCancellationDateTimeZone

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The time zone at the destination location of the payment.

## Declaration

```
DOMString freeCancellationDateTimeZone;
```

<a id="Discussion"></a>

## Discussion

For a hotel booking, for example, this refers to the local time zone of the hotel. On the payment sheet, this is the time zone the framework uses to format the cancellation date. If you set the `freeCancellationDateTimeZone` date, you need to set [freeCancellationDate](freecancellationdate.md) as well.

## See Also

### Describing a deferred payment

- [billingAgreement](billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [paymentDescription](paymentdescription.md): A description of the deferred payment.
- [freeCancellationDate](freecancellationdate.md): The time zone at the destination location of the payment.
