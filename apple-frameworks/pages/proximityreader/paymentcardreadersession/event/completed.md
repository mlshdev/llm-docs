> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadersession/event/completed](https://developer.apple.com/documentation/proximityreader/paymentcardreadersession/event/completed)

# PaymentCardReaderSession.Event.completed

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 15.4+ (deprecated in 16.0) · iPadOS 15.4+ (deprecated in 16.0) · Mac Catalyst 17.0+ (deprecated in 17.0)

An event that indicates the reader completed the reading process.

> Use PaymentCardReader.Event

## Declaration

```swift
case completed
```

## See Also

### Getting the event type

- [PaymentCardReaderSession.Event.cardDetected](carddetected.md): Deprecated. An event that indicates the reader detected the presence of a card.
- [PaymentCardReaderSession.Event.readCancelled](readcancelled.md): Deprecated. An event that indicates the cancellation of the operation.
- [PaymentCardReaderSession.Event.readNotCompleted](readnotcompleted.md): Deprecated. An event that indicates the read operation didn’t finish.
- [PaymentCardReaderSession.Event.readyForTap](readyfortap.md): Deprecated. An event that indicates the reader is ready for someone to move their card within range of the iPhone.
- [PaymentCardReaderSession.Event.removeCard](removecard.md): Deprecated. An event that indicates the consumer can move the card away from the device.
- [PaymentCardReaderSession.Event.retry](retry.md): Deprecated. An event that indicates the UI triggered a retry.
