> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadresult/readoutcome/failure](https://developer.apple.com/documentation/proximityreader/paymentcardreadresult/readoutcome/failure)

# PaymentCardReadResult.ReadOutcome.failure

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 17.0+

The read failed somehow, the card data may not contain all requested tags.

## Declaration

```swift
case failure
```

## See Also

### Getting the read outcome

- [PaymentCardReadResult.ReadOutcome.success](success.md): The read was successful.
- [PaymentCardReadResult.ReadOutcome.cardDeclined](carddeclined.md): The card declined this transaction.
