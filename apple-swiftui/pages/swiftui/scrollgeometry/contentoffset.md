> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollgeometry/contentoffset](https://developer.apple.com/documentation/swiftui/scrollgeometry/contentoffset)

# contentOffset

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The content offset of the scroll view.

## Declaration

```swift
var contentOffset: CGPoint { get set }
```

<a id="discussion"></a>

## Discussion

This is the position of the scroll view within its overall content size. This value may extend before zero or beyond the content size when the content insets of the scroll view are non-zero or when rubber banding.
