> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/event](https://developer.apple.com/documentation/proximityreader/paymentcardreader/event)

# PaymentCardReader.Event

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+

An event you receive indicating the state or activity of the payment card reader.

## Declaration

```swift
enum Event
```

## Topics

### Getting the event type

- [PaymentCardReader.Event.cardDetected](event/carddetected.md): An event that indicates the reader detected the presence of a card.
- [PaymentCardReader.Event.pinEntryCompleted](event/pinentrycompleted.md): An event that indicates the reader captured the card PIN successfully.
- [PaymentCardReader.Event.pinEntryRequested](event/pinentryrequested.md): An event that indicates the reader requested the card PIN.
- [PaymentCardReader.Event.readCancelled](event/readcancelled.md): An event that indicates the cancellation of the operation.
- [PaymentCardReader.Event.readCompleted](event/readcompleted.md): An event that indicates the reader completed the reading process.
- [PaymentCardReader.Event.readNotCompleted](event/readnotcompleted.md): An event that indicates the read operation didn’t finish.
- [PaymentCardReader.Event.readRetry](event/readretry.md): An event that indicates the UI triggered a retry.
- [PaymentCardReader.Event.readyForTap](event/readyfortap.md): An event that indicates the reader is ready for someone to move their card within range of the iPhone.
- [PaymentCardReader.Event.removeCard](event/removecard.md): An event that indicates the consumer can move the card away from the device.
- [PaymentCardReader.Event.updateProgress(\_:)](event/updateprogress%28__%29.md): The current update progress, specified as an integer value from 1 to 100.
- [PaymentCardReader.Event.userInterfaceDismissed](event/userinterfacedismissed.md): An event that indicates the UI has been closed.
- [PaymentCardReader.Event.notReady](event/notready.md): A reader that is not ready to perform transactions.

### Getting the event name

- [name](event/name.md): The name of the event.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing reader events

- [events](events.md): A stream of events you receive indicating the activities of the payment card reader.
