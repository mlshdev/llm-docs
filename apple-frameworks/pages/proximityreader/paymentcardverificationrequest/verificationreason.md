> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardverificationrequest/verificationreason](https://developer.apple.com/documentation/proximityreader/paymentcardverificationrequest/verificationreason)

# verificationReason

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The reason you asked to verify someone’s card.

## Declaration

```swift
let verificationReason: PaymentCardVerificationRequest.Reason
```

<a id="discussion"></a>

## Discussion

The system uses the supplied reason to display an appropriate message in the system UI about why they need to present their card.

## See Also

### Getting the request details

- [currencyCode](currencycode.md): The ISO 4217 code that indicates the currency type.
- [PaymentCardVerificationRequest.Reason](reason.md): The reason for the verification request.
