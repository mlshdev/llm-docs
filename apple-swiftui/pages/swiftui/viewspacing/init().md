> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/viewspacing/init()](https://developer.apple.com/documentation/swiftui/viewspacing/init())

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes an instance with default spacing values.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Use this initializer to create a spacing preferences instance with default values. Then use [formUnion(\_:edges:)](formunion%28__edges_%29.md) to combine preferences from other views with the new instance. You typically do this in a custom layout’s implementation of the [spacing(subviews:cache:)](../layout/spacing%28subviews_cache_%29.md) method.

## See Also

### Creating spacing instances

- [zero](zero.md): A view spacing instance that contains zero on all edges.
