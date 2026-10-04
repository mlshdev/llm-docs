> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/nsviewcontrollerrepresentable/dismantlensviewcontroller(_:coordinator:)-t6ob

# dismantleNSViewController(\_:coordinator:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Cleans up the presented `NSViewController` (and coordinator) in anticipation of their removal.

## Declaration

```swift
@MainActor @preconcurrency static func dismantleNSViewController(_ nsViewController: Self.NSViewControllerType, coordinator: Self.Coordinator)
```
