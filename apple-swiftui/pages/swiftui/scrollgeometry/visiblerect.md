> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollgeometry/visiblerect](https://developer.apple.com/documentation/swiftui/scrollgeometry/visiblerect)

# visibleRect

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The visible rect of the scroll view.

## Declaration

```swift
var visibleRect: CGRect { get }
```

<a id="discussion"></a>

## Discussion

This value is computed from the scroll view’s content offset, content insets, and its container size.
