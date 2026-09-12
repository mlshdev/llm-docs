> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/stopemulation(status:)](https://developer.apple.com/documentation/corenfc/cardsession/stopemulation(status:))

# stopEmulation(status:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Stop card emulation and display a status.

## Declaration

```swift
func stopEmulation(status: CardSession.EmulationUIStatus) async
```

## Parameters

- `status`: The final status to display.

## See Also

### Managing card emulation

- [startEmulation()](startemulation%28%29.md): Start the card emulation and present a modal user interface to the person using the app.
- [CardSession.Error](error.md): An error type that indicates problems with a card session.
- [CardSession.EmulationUIStatus](emulationuistatus.md): The final status to show in the user interface when ending card emulation.
- [isEmulationInProgress](isemulationinprogress.md): A Boolean value that indicates whether emulation is currently active.
