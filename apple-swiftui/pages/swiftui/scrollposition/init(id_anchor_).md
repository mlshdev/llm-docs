> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollposition/init(id:anchor:)](https://developer.apple.com/documentation/swiftui/scrollposition/init(id:anchor:))

# init(id:anchor:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new scroll position to a view with a provided identity value.

## Declaration

```swift
init(id: some Hashable & Sendable, anchor: UnitPoint? = nil)
```

<a id="discussion"></a>

## Discussion

The type of the ID indicates the type of ID of views within a scroll target layout the scroll view should look for.
