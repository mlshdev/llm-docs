> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/nsviewrepresentable/dismantlensview(_:coordinator:)-21agq

# dismantleNSView(\_:coordinator:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Cleans up the presented AppKit view (and coordinator) in anticipation of their removal.

## Declaration

```swift
@MainActor @preconcurrency static func dismantleNSView(_ nsView: Self.NSViewType, coordinator: Self.Coordinator)
```
