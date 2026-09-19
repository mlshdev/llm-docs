> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardreadresult/readoutcome

# PaymentCardReadResult.ReadOutcome

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 17.0+

Values that describe the outcome of a read request.

## Declaration

```swift
enum ReadOutcome
```

## Topics

### Getting the read outcome

- [PaymentCardReadResult.ReadOutcome.success](readoutcome/success.md): The read was successful.
- [PaymentCardReadResult.ReadOutcome.failure](readoutcome/failure.md): The read failed somehow, the card data may not contain all requested tags.
- [PaymentCardReadResult.ReadOutcome.cardDeclined](readoutcome/carddeclined.md): The card declined this transaction.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking the read outcome

- [outcome](outcome.md): The outcome of the transaction.
