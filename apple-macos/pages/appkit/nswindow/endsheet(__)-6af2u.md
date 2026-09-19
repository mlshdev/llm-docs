> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswindow/endsheet(_:)-6af2u

# endSheet(\_:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Ends a SwiftUI hosted sheet presentation.

## Declaration

```swift
@MainActor @preconcurrency func endSheet<V>(_ host: NSWindow.HostingSheetRepresentation<V>) where V : View
```

<a id="discussion"></a>

## Discussion

If the hosting sheet representation was invalid or no longer presented, no effect happens.
