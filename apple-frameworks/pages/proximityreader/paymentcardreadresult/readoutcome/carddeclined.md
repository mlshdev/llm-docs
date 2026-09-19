> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardreadresult/readoutcome/carddeclined

# PaymentCardReadResult.ReadOutcome.cardDeclined

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 17.0+

The card declined this transaction.

## Declaration

```swift
case cardDeclined
```

## See Also

### Getting the read outcome

- [PaymentCardReadResult.ReadOutcome.success](success.md): The read was successful.
- [PaymentCardReadResult.ReadOutcome.failure](failure.md): The read failed somehow, the card data may not contain all requested tags.
