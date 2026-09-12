> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollposition/ispositionedbyuser](https://developer.apple.com/documentation/swiftui/scrollposition/ispositionedbyuser)

# isPositionedByUser

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Whether the scroll view has been positioned by the user.

## Declaration

```swift
var isPositionedByUser: Bool { get set }
```

<a id="discussion"></a>

## Discussion

You can write to this property to control whether the scroll view acts as if it has been positioned by the user. If the position had a non-nil edge / point value, that value will become nil when setting this property to true.
