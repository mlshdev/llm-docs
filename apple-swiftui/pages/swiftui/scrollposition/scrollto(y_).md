> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollposition/scrollto(y:)](https://developer.apple.com/documentation/swiftui/scrollposition/scrollto(y:))

# scrollTo(y:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Scrolls the position of the scroll view to the y value you provide.

## Declaration

```swift
mutating func scrollTo(y: CGFloat)
```

<a id="discussion"></a>

## Discussion

The scroll view chooses the x value based on the content insets of the scroll view and will clamp this value to only scroll to the size of its actual content.
