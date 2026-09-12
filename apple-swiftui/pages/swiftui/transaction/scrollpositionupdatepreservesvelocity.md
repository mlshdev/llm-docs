> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transaction/scrollpositionupdatepreservesvelocity](https://developer.apple.com/documentation/swiftui/transaction/scrollpositionupdatepreservesvelocity)

# scrollPositionUpdatePreservesVelocity

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Whether a programmatic update to the scroll position of a scroll view preserves the current velocity of any active scroll of the scroll view.

## Declaration

```swift
var scrollPositionUpdatePreservesVelocity: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default, when a scroll view sees a programmatic update to its scroll position, it will stop any active scrolls for unanimated scrolls. If a programmatic update is animated, this property is ignored.
