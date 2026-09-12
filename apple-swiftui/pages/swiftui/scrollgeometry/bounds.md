> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollgeometry/bounds](https://developer.apple.com/documentation/swiftui/scrollgeometry/bounds)

# bounds

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The bounds rect of the scroll view.

## Declaration

```swift
var bounds: CGRect { get }
```

<a id="discussion"></a>

## Discussion

Unlike the visible rect, this value is within the content insets of the scroll view.
