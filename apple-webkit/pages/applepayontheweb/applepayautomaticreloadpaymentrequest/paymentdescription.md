> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applepayontheweb/applepayautomaticreloadpaymentrequest/paymentdescription

# paymentDescription

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A description of the automatic reload payment that Apple Pay displays in the payment sheet.

## Declaration

```
required DOMString paymentDescription;
```

<a id="Discussion"></a>

## Discussion

Provide a display name for the automatic reload, for example, “Gift Card Reload”.

## See Also

### Describing an automatic reload payment

- [billingAgreement](billingagreement.md): A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.
