> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/event/sessionstarted](https://developer.apple.com/documentation/corenfc/cardsession/event/sessionstarted)

# CardSession.Event.sessionStarted

**Framework:** Core NFC  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The card session successfully started.

## Declaration

```swift
case sessionStarted
```

## See Also

### Events

- [CardSession.Event.readerDetected](readerdetected.md): The session detected the RF field of an external NFC reader.
- [CardSession.Event.received(\_:)](received%28__%29.md): The session received an Application Programming Data Unit (ADPU).
- [CardSession.APDU](../apdu.md): An Application Programming Data Unit (APDU) received from the NFC card reader.
- [CardSession.Event.readerDeselected](readerdeselected.md): The session lost the RF link or the currently-selected Application Identifier (AID) became deselected.
- [CardSession.Event.sessionInvalidated(reason:)](sessioninvalidated%28reason_%29.md): The session became invalid.
