> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewrepresentable/dismantlensview(_:coordinator:)](https://developer.apple.com/documentation/swiftui/nsviewrepresentable/dismantlensview(_:coordinator:))

# dismantleNSView(\_:coordinator:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Cleans up the presented AppKit view (and coordinator) in anticipation of their removal.

## Declaration

```swift
@MainActor @preconcurrency static func dismantleNSView(_ nsView: Self.NSViewType, coordinator: Self.Coordinator)
```

## Parameters

- `nsView`: Your custom view object.
- `coordinator`: The custom coordinator you use to communicate changes back to SwiftUI. If you do not use a custom coordinator instance, the system provides a default instance.

<a id="discussion"></a>

## Discussion

Use this method to perform additional clean-up work related to your custom view. For example, you might use this method to remove observers or update other parts of your SwiftUI interface.

## Default Implementations

### NSViewRepresentable Implementations

- [dismantleNSView(\_:coordinator:)](dismantlensview%28__coordinator_%29-21agq.md): Cleans up the presented AppKit view (and coordinator) in anticipation of their removal.
