> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardverificationrequest/reason/opentab](https://developer.apple.com/documentation/proximityreader/paymentcardverificationrequest/reason/opentab)

# PaymentCardVerificationRequest.Reason.openTab

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

Check if the card is valid.

## Declaration

```swift
case openTab
```

<a id="discussion"></a>

## Discussion

Choose this reason when you aren’t ready to complete the purchase yet, but want to verify that the person’s credit card information is valid.

## See Also

### Getting the verification reason

- [PaymentCardVerificationRequest.Reason.lookUp](lookup.md): Verify the payment card to look up a past transaction.
- [PaymentCardVerificationRequest.Reason.saveCard](savecard.md): Save the card information for later.
- [PaymentCardVerificationRequest.Reason.other](other.md): Verify the card information.
