> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadersession/event](https://developer.apple.com/documentation/proximityreader/paymentcardreadersession/event)

# PaymentCardReaderSession.Event

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ (deprecated in 16.0) · iPadOS 15.4+ (deprecated in 16.0) · Mac Catalyst 17.0+ (deprecated in 17.0)

Optional events you can observe during the card-reading process.

> Use PaymentCardReader.Event

## Declaration

```swift
enum Event
```

<a id="overview"></a>

## Overview

If you supply an event handler when reading a card, the session delivers appropriate events to your handler. Use them to update your UI or perform other app-specific tasks. You can also use them to provide accessibility-related feedback.

## Topics

### Getting the event type

- [PaymentCardReaderSession.Event.cardDetected](event/carddetected.md): Deprecated. An event that indicates the reader detected the presence of a card.
- [PaymentCardReaderSession.Event.completed](event/completed.md): Deprecated. An event that indicates the reader completed the reading process.
- [PaymentCardReaderSession.Event.readCancelled](event/readcancelled.md): Deprecated. An event that indicates the cancellation of the operation.
- [PaymentCardReaderSession.Event.readNotCompleted](event/readnotcompleted.md): Deprecated. An event that indicates the read operation didn’t finish.
- [PaymentCardReaderSession.Event.readyForTap](event/readyfortap.md): Deprecated. An event that indicates the reader is ready for someone to move their card within range of the iPhone.
- [PaymentCardReaderSession.Event.removeCard](event/removecard.md): Deprecated. An event that indicates the consumer can move the card away from the device.
- [PaymentCardReaderSession.Event.retry](event/retry.md): Deprecated. An event that indicates the UI triggered a retry.

### Getting the event name

- [name](event/name.md): Deprecated. The name of the event.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [readPaymentCard(\_:eventHandler:)](readpaymentcard%28__eventhandler_%29-2zgwn.md): Deprecated. Presents a sheet to read a contactless payment card for a purchase or a refund, and returns the encrypted card data.
- [readPaymentCard(\_:eventHandler:)](readpaymentcard%28__eventhandler_%29-20e1w.md): Deprecated. Presents a sheet to verify a contactless payment card, and returns the card data.
- [readPaymentCard(\_:vasRequest:stopOnVASResult:eventHandler:)](readpaymentcard%28__vasrequest_stoponvasresult_eventhandler_%29.md): Deprecated. Presents a sheet to read both contactless payments and loyalty cards for a purchase or refund, and returns the relevant card data.
- [readVAS(\_:eventHandler:)](readvas%28__eventhandler_%29.md): Deprecated. Presents a sheet to read a loyalty card for Value Added Services (VAS), and returns the loyalty card data.
- [id](id.md): Deprecated. A unique identifier for this object.
