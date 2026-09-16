> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/nsviewcontrollerrepresentable/makecoordinator()-72re2

# makeCoordinator()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates an object to coordinate with the AppKit view controller.

## Declaration

```swift
@MainActor @preconcurrency func makeCoordinator() -> Self.Coordinator
```

<a id="discussion"></a>

## Discussion

`Coordinator` can be accessed via `Context`.
