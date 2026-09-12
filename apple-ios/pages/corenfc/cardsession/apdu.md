> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/apdu](https://developer.apple.com/documentation/corenfc/cardsession/apdu)

# CardSession.APDU

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An Application Programming Data Unit (APDU) received from the NFC card reader.

## Declaration

```swift
final class APDU
```

## Topics

### Receiving data

- [payload](apdu/payload.md): The APDU data received from the NFC reader.

### Communicating with the card session

- [respond(response:)](apdu/respond%28response_%29.md): Respond to the session after receiving and processing an APDU.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Events

- [CardSession.Event.sessionStarted](event/sessionstarted.md): The card session successfully started.
- [CardSession.Event.readerDetected](event/readerdetected.md): The session detected the RF field of an external NFC reader.
- [CardSession.Event.received(\_:)](event/received%28__%29.md): The session received an Application Programming Data Unit (ADPU).
- [CardSession.Event.readerDeselected](event/readerdeselected.md): The session lost the RF link or the currently-selected Application Identifier (AID) became deselected.
- [CardSession.Event.sessionInvalidated(reason:)](event/sessioninvalidated%28reason_%29.md): The session became invalid.
