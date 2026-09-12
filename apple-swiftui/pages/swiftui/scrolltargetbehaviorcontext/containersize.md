> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltargetbehaviorcontext/containersize](https://developer.apple.com/documentation/swiftui/scrolltargetbehaviorcontext/containersize)

# containerSize

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The size of the container of the scrollable view.

## Declaration

```swift
var containerSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

This is the size of the bounds of the scroll view subtracting any insets applied to the scroll view (like the safe area).

## See Also

### Getting the scroll target behavior context

- [axes](axes.md): The axes in which the scrollable view is scrollable.
- [contentSize](contentsize.md): The size of the content of the scrollable view.
- [originalTarget](originaltarget.md): The original target when the scroll gesture began.
- [velocity](velocity.md): The current velocity of the scrollable view’s scroll gesture.
