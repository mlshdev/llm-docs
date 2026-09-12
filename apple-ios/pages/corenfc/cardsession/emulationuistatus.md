> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/emulationuistatus](https://developer.apple.com/documentation/corenfc/cardsession/emulationuistatus)

# CardSession.EmulationUIStatus

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The final status to show in the user interface when ending card emulation.

## Declaration

```swift
enum EmulationUIStatus
```

## Topics

### Emulation statuses

- [CardSession.EmulationUIStatus.success](emulationuistatus/success.md): A status display to indicate a successful operation, such as a checkmark.
- [CardSession.EmulationUIStatus.failure](emulationuistatus/failure.md): A status display to indicate an error, such as an exclamation mark.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Managing card emulation

- [startEmulation()](startemulation%28%29.md): Start the card emulation and present a modal user interface to the person using the app.
- [CardSession.Error](error.md): An error type that indicates problems with a card session.
- [stopEmulation(status:)](stopemulation%28status_%29.md): Stop card emulation and display a status.
- [isEmulationInProgress](isemulationinprogress.md): A Boolean value that indicates whether emulation is currently active.
