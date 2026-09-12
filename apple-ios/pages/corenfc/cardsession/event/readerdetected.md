> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/event/readerdetected](https://developer.apple.com/documentation/corenfc/cardsession/event/readerdetected)

# CardSession.Event.readerDetected

**Framework:** Core NFC  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The session detected the RF field of an external NFC reader.

## Declaration

```swift
case readerDetected
```

## See Also

### Events

- [CardSession.Event.sessionStarted](sessionstarted.md): The card session successfully started.
- [CardSession.Event.received(\_:)](received%28__%29.md): The session received an Application Programming Data Unit (ADPU).
- [CardSession.APDU](../apdu.md): An Application Programming Data Unit (APDU) received from the NFC card reader.
- [CardSession.Event.readerDeselected](readerdeselected.md): The session lost the RF link or the currently-selected Application Identifier (AID) became deselected.
- [CardSession.Event.sessionInvalidated(reason:)](sessioninvalidated%28reason_%29.md): The session became invalid.
