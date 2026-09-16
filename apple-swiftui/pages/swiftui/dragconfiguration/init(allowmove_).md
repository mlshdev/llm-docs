> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/dragconfiguration/init(allowmove:)

# init(allowMove:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a drag configuration that can support drag-to-move in addition to drag-to-copy.

## Declaration

```swift
init(allowMove: Bool)
```

<a id="discussion"></a>

## Discussion

iOS supports drag-to-move operations only within an application. On macOS, an item can be dragged to move both within the app and to other apps.
