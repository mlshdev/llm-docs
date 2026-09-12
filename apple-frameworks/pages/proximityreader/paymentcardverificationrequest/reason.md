> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardverificationrequest/reason](https://developer.apple.com/documentation/proximityreader/paymentcardverificationrequest/reason)

# PaymentCardVerificationRequest.Reason

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The reason for the verification request.

## Declaration

```swift
enum Reason
```

## Topics

### Getting the verification reason

- [PaymentCardVerificationRequest.Reason.lookUp](reason/lookup.md): Verify the payment card to look up a past transaction.
- [PaymentCardVerificationRequest.Reason.openTab](reason/opentab.md): Check if the card is valid.
- [PaymentCardVerificationRequest.Reason.saveCard](reason/savecard.md): Save the card information for later.
- [PaymentCardVerificationRequest.Reason.other](reason/other.md): Verify the card information.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the request details

- [currencyCode](currencycode.md): The ISO 4217 code that indicates the currency type.
- [verificationReason](verificationreason.md): The reason you asked to verify someone’s card.
