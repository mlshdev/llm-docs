> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/event/sessioninvalidated(reason:)](https://developer.apple.com/documentation/corenfc/cardsession/event/sessioninvalidated(reason:))

# CardSession.Event.sessionInvalidated(reason:)

**Framework:** Core NFC  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The session became invalid.

## Declaration

```swift
case sessionInvalidated(reason: CardSession.Error)
```

## Parameters

- `reason`: The reason the session became invalid.

<a id="Discussion"></a>

## Discussion

This is the last event produced by the event stream before the stream finishes. The reason can be any [CardSession.Error](../error.md) except [CardSession.Error.transmissionError](../error/transmissionerror.md).

## See Also

### Events

- [CardSession.Event.sessionStarted](sessionstarted.md): The card session successfully started.
- [CardSession.Event.readerDetected](readerdetected.md): The session detected the RF field of an external NFC reader.
- [CardSession.Event.received(\_:)](received%28__%29.md): The session received an Application Programming Data Unit (ADPU).
- [CardSession.APDU](../apdu.md): An Application Programming Data Unit (APDU) received from the NFC card reader.
- [CardSession.Event.readerDeselected](readerdeselected.md): The session lost the RF link or the currently-selected Application Identifier (AID) became deselected.
