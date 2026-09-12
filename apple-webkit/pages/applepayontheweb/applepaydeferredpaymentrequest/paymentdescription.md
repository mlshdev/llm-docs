> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaydeferredpaymentrequest/paymentdescription](https://developer.apple.com/documentation/applepayontheweb/applepaydeferredpaymentrequest/paymentdescription)

# paymentDescription

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A description of the deferred payment.

## Declaration

```
required DOMString paymentDescription;
```

<a id="Discussion"></a>

## Discussion

Use a plain language description that explains what the payment is for, for example “Hotel stay, 2 nights.”

## See Also

### Describing a deferred payment

- [billingAgreement](billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [freeCancellationDate](freecancellationdate.md): The time zone at the destination location of the payment.
- [freeCancellationDateTimeZone](freecancellationdatetimezone.md): The time zone at the destination location of the payment.
