> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/error/radiodisabled](https://developer.apple.com/documentation/corenfc/cardsession/error/radiodisabled)

# CardSession.Error.radioDisabled

**Framework:** Core NFC  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The card session failed because the NFC radio is disabled.

## Declaration

```swift
case radioDisabled
```

## See Also

### Card session errors

- [CardSession.Error.invalidated](invalidated.md): The system invalidated the card session.
- [CardSession.Error.userInvalidated](userinvalidated.md): The person using the app invalidated the card session.
- [CardSession.Error.maxSessionDurationReached](maxsessiondurationreached.md): The session is no longer valid because it reached its maximum duration.
- [CardSession.Error.transmissionError](transmissionerror.md): The card session experienced a general error transmitting data.
- [CardSession.Error.systemNotAvailable](systemnotavailable.md): A system resource is currently unavailable.
- [CardSession.Error.accessNotAccepted](accessnotaccepted.md): The person using the app hasn’t yet accepted or declined your app’s request to use the NFC card emulation service.
- [CardSession.Error.systemEligibilityFailed](systemeligibilityfailed.md): The current system setting or hardware configuation isn’t eligible to use the NFC card emulation service.
- [CardSession.Error.emulationStopped](emulationstopped.md): The card emulation stopped.
