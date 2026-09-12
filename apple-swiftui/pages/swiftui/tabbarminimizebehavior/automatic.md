> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabbarminimizebehavior/automatic](https://developer.apple.com/documentation/swiftui/tabbarminimizebehavior/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Determine the behavior automatically based on the surrounding context.

## Declaration

```swift
static let automatic: TabBarMinimizeBehavior
```

<a id="discussion"></a>

## Discussion

The depends on the platform:

- On iOS, iPadOS, tvOS, and watchOS, the tab bar does not minimize.
- On visionOS, the tab bar minimizes when people look away from it.
- On macOS, the tab bar minimizes when the window has reduced space.
