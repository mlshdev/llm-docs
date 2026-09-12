> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/error](https://developer.apple.com/documentation/corenfc/cardsession/error)

# CardSession.Error

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An error type that indicates problems with a card session.

## Declaration

```swift
enum Error
```

## Topics

### Card session errors

- [CardSession.Error.invalidated](error/invalidated.md): The system invalidated the card session.
- [CardSession.Error.userInvalidated](error/userinvalidated.md): The person using the app invalidated the card session.
- [CardSession.Error.maxSessionDurationReached](error/maxsessiondurationreached.md): The session is no longer valid because it reached its maximum duration.
- [CardSession.Error.transmissionError](error/transmissionerror.md): The card session experienced a general error transmitting data.
- [CardSession.Error.systemNotAvailable](error/systemnotavailable.md): A system resource is currently unavailable.
- [CardSession.Error.accessNotAccepted](error/accessnotaccepted.md): The person using the app hasn’t yet accepted or declined your app’s request to use the NFC card emulation service.
- [CardSession.Error.systemEligibilityFailed](error/systemeligibilityfailed.md): The current system setting or hardware configuation isn’t eligible to use the NFC card emulation service.
- [CardSession.Error.emulationStopped](error/emulationstopped.md): The card emulation stopped.
- [CardSession.Error.radioDisabled](error/radiodisabled.md): The card session failed because the NFC radio is disabled.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a card session

- [init()](init%28%29.md): Creates a contactless card session.
