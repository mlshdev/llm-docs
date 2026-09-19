> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwindowscene/displaylink(action:)

# displayLink(action:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
@MainActor @preconcurrency func displayLink(action: @escaping @Sendable (CADisplayLink) -> Void) -> CADisplayLink?
```
