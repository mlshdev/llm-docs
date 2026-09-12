> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/isemulationinprogress](https://developer.apple.com/documentation/corenfc/cardsession/isemulationinprogress)

# isEmulationInProgress

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A Boolean value that indicates whether emulation is currently active.

## Declaration

```swift
var isEmulationInProgress: Bool { get async }
```

## See Also

### Managing card emulation

- [startEmulation()](startemulation%28%29.md): Start the card emulation and present a modal user interface to the person using the app.
- [CardSession.Error](error.md): An error type that indicates problems with a card session.
- [stopEmulation(status:)](stopemulation%28status_%29.md): Stop card emulation and display a status.
- [CardSession.EmulationUIStatus](emulationuistatus.md): The final status to show in the user interface when ending card emulation.
