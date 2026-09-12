> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaydeferredpaymentrequest/billingagreement](https://developer.apple.com/documentation/applepayontheweb/applepaydeferredpaymentrequest/billingagreement)

# billingAgreement

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The localized billing agreement the framework displays to the user prior to payment authorization.

## Declaration

```
DOMString billingAgreement;
```

<a id="Discussion"></a>

## Discussion

This may include additional details about the cancellation period or penalties for late cancellation. This value is optional.

## See Also

### Describing a deferred payment

- [paymentDescription](paymentdescription.md): A description of the deferred payment.
- [freeCancellationDate](freecancellationdate.md): The time zone at the destination location of the payment.
- [freeCancellationDateTimeZone](freecancellationdatetimezone.md): The time zone at the destination location of the payment.
