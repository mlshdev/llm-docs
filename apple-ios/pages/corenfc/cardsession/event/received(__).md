> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/event/received(_:)](https://developer.apple.com/documentation/corenfc/cardsession/event/received(_:))

# CardSession.Event.received(\_:)

**Framework:** Core NFC  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The session received an Application Programming Data Unit (ADPU).

## Declaration

```swift
case received(CardSession.APDU)
```

## Parameters

- `CardSession.APDU`: The ADPU received from the session.

## See Also

### Events

- [CardSession.Event.sessionStarted](sessionstarted.md): The card session successfully started.
- [CardSession.Event.readerDetected](readerdetected.md): The session detected the RF field of an external NFC reader.
- [CardSession.APDU](../apdu.md): An Application Programming Data Unit (APDU) received from the NFC card reader.
- [CardSession.Event.readerDeselected](readerdeselected.md): The session lost the RF link or the currently-selected Application Identifier (AID) became deselected.
- [CardSession.Event.sessionInvalidated(reason:)](sessioninvalidated%28reason_%29.md): The session became invalid.
