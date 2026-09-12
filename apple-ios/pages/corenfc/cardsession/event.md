> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/event](https://developer.apple.com/documentation/corenfc/cardsession/event)

# CardSession.Event

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A type that enumerates events produced by a card session.

## Declaration

```swift
enum Event
```

## Topics

### Events

- [CardSession.Event.sessionStarted](event/sessionstarted.md): The card session successfully started.
- [CardSession.Event.readerDetected](event/readerdetected.md): The session detected the RF field of an external NFC reader.
- [CardSession.Event.received(\_:)](event/received%28__%29.md): The session received an Application Programming Data Unit (ADPU).
- [CardSession.APDU](apdu.md): An Application Programming Data Unit (APDU) received from the NFC card reader.
- [CardSession.Event.readerDeselected](event/readerdeselected.md): The session lost the RF link or the currently-selected Application Identifier (AID) became deselected.
- [CardSession.Event.sessionInvalidated(reason:)](event/sessioninvalidated%28reason_%29.md): The session became invalid.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling card events

- [eventStream](eventstream-swift.property.md): An asynchronous sequence of events from the card session.
- [CardSession.EventStream](eventstream-swift.class.md): An asynchronous sequence of events produced by a card session.
