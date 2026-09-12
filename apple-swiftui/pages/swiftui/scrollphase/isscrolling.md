> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollphase/isscrolling](https://developer.apple.com/documentation/swiftui/scrollphase/isscrolling)

# isScrolling

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Whether the scroll view is actively scrolling.

## Declaration

```swift
var isScrolling: Bool { get }
```

<a id="discussion"></a>

## Discussion

This convenience is equivalent to `phase != .idle`.
