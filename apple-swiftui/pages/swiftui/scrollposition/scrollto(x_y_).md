> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollposition/scrollto(x:y:)](https://developer.apple.com/documentation/swiftui/scrollposition/scrollto(x:y:))

# scrollTo(x:y:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Scrolls the position of the scroll view to the x and y value you provide.

## Declaration

```swift
mutating func scrollTo(x: CGFloat, y: CGFloat)
```

<a id="discussion"></a>

## Discussion

The scroll view will clamp this value to only scroll to the size of its actual content.
