> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaydeferredpaymentrequest/freecancellationdate](https://developer.apple.com/documentation/applepayontheweb/applepaydeferredpaymentrequest/freecancellationdate)

# freeCancellationDate

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The time zone at the destination location of the payment.

## Declaration

```
Date freeCancellationDate;
```

<a id="Discussion"></a>

## Discussion

If you set `freeCancellationDate`, you need to set [freeCancellationDateTimeZone](freecancellationdatetimezone.md) as well.

## See Also

### Describing a deferred payment

- [billingAgreement](billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [paymentDescription](paymentdescription.md): A description of the deferred payment.
- [freeCancellationDateTimeZone](freecancellationdatetimezone.md): The time zone at the destination location of the payment.
