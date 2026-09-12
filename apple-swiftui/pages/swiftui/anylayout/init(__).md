> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anylayout/init(_:)](https://developer.apple.com/documentation/swiftui/anylayout/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a type-erased value that wraps the specified layout.

## Declaration

```swift
init<L>(_ layout: L) where L : Layout
```

<a id="discussion"></a>

## Discussion

You can switch between type-erased layouts without losing the state of the subviews.
