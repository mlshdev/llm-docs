> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardverificationrequest/reason/savecard](https://developer.apple.com/documentation/proximityreader/paymentcardverificationrequest/reason/savecard)

# PaymentCardVerificationRequest.Reason.saveCard

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

Save the card information for later.

## Declaration

```swift
case saveCard
```

<a id="discussion"></a>

## Discussion

If your application saves card data, it’s your responsibility to ensure that the customer is aware of how and why before you read their card.

## See Also

### Getting the verification reason

- [PaymentCardVerificationRequest.Reason.lookUp](lookup.md): Verify the payment card to look up a past transaction.
- [PaymentCardVerificationRequest.Reason.openTab](opentab.md): Check if the card is valid.
- [PaymentCardVerificationRequest.Reason.other](other.md): Verify the card information.
