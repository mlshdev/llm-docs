> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/displaylink(action:)](https://developer.apple.com/documentation/uikit/uiwindowscene/displaylink(action:))

# displayLink(action:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
@MainActor @preconcurrency func displayLink(action: @escaping @Sendable (CADisplayLink) -> Void) -> CADisplayLink?
```
