> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardreadresult/readoutcome/success

# PaymentCardReadResult.ReadOutcome.success

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 17.0+

The read was successful.

## Declaration

```swift
case success
```

## See Also

### Getting the read outcome

- [PaymentCardReadResult.ReadOutcome.failure](failure.md): The read failed somehow, the card data may not contain all requested tags.
- [PaymentCardReadResult.ReadOutcome.cardDeclined](carddeclined.md): The card declined this transaction.
