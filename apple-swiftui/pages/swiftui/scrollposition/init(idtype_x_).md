> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollposition/init(idtype:x:)](https://developer.apple.com/documentation/swiftui/scrollposition/init(idtype:x:))

# init(idType:x:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new scroll position to be scrolled to the provided y value.

## Declaration

```swift
init(idType: (some Hashable & Sendable).Type = Never.self, x: CGFloat)
```

<a id="discussion"></a>

## Discussion

You can provide a type to the scroll position. This type should match the type of IDs associated to views in a scroll target layout. The scroll view will look for those views to update the value of the scroll position with.
