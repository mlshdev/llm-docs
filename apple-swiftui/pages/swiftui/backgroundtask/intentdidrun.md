> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/backgroundtask/intentdidrun

# intentDidRun

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** watchOS 9.0+

A background task used to update your app after a SiriKit intent runs.

## Declaration

```swift
static var intentDidRun: BackgroundTask<Void, Void> { get }
```

## See Also

### Updating intents and shortcuts

- [relevantShortcut](relevantshortcut.md): A background task used to periodically donate relevant Siri shortcuts.
