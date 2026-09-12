> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/event/readcancelled](https://developer.apple.com/documentation/proximityreader/paymentcardreader/event/readcancelled)

# PaymentCardReader.Event.readCancelled

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+

An event that indicates the cancellation of the operation.

## Declaration

```swift
case readCancelled
```

## See Also

### Getting the event type

- [PaymentCardReader.Event.cardDetected](carddetected.md): An event that indicates the reader detected the presence of a card.
- [PaymentCardReader.Event.pinEntryCompleted](pinentrycompleted.md): An event that indicates the reader captured the card PIN successfully.
- [PaymentCardReader.Event.pinEntryRequested](pinentryrequested.md): An event that indicates the reader requested the card PIN.
- [PaymentCardReader.Event.readCompleted](readcompleted.md): An event that indicates the reader completed the reading process.
- [PaymentCardReader.Event.readNotCompleted](readnotcompleted.md): An event that indicates the read operation didn’t finish.
- [PaymentCardReader.Event.readRetry](readretry.md): An event that indicates the UI triggered a retry.
- [PaymentCardReader.Event.readyForTap](readyfortap.md): An event that indicates the reader is ready for someone to move their card within range of the iPhone.
- [PaymentCardReader.Event.removeCard](removecard.md): An event that indicates the consumer can move the card away from the device.
- [PaymentCardReader.Event.updateProgress(\_:)](updateprogress%28__%29.md): The current update progress, specified as an integer value from 1 to 100.
- [PaymentCardReader.Event.userInterfaceDismissed](userinterfacedismissed.md): An event that indicates the UI has been closed.
- [PaymentCardReader.Event.notReady](notready.md): A reader that is not ready to perform transactions.
