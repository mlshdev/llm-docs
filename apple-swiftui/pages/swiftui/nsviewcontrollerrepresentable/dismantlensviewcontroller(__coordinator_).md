> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/nsviewcontrollerrepresentable/dismantlensviewcontroller(_:coordinator:)

# dismantleNSViewController(\_:coordinator:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Cleans up the presented view controller (and coordinator) in anticipation of its removal.

## Declaration

```swift
@MainActor @preconcurrency static func dismantleNSViewController(_ nsViewController: Self.NSViewControllerType, coordinator: Self.Coordinator)
```

## Parameters

- `nsViewController`: Your custom view controller object.
- `coordinator`: The custom coordinator instance you use to communicate changes back to SwiftUI. If you do not use a custom coordinator, the system provides a default instance.

<a id="discussion"></a>

## Discussion

Use this method to perform additional clean-up work related to your custom view controller. For example, you might use this method to remove observers or update other parts of your SwiftUI interface.

## Default Implementations

### NSViewControllerRepresentable Implementations

- [dismantleNSViewController(\_:coordinator:)](dismantlensviewcontroller%28__coordinator_%29-t6ob.md): Cleans up the presented `NSViewController` (and coordinator) in anticipation of their removal.
