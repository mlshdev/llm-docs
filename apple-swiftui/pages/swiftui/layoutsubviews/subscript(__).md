> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutsubviews/subscript(_:)](https://developer.apple.com/documentation/swiftui/layoutsubviews/subscript(_:))

# subscript(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Gets the subview proxies in the specified range.

## Declaration

```swift
subscript(bounds: Range<Int>) -> LayoutSubviews { get }
```

## See Also

### Accessing subviews

- [startIndex](startindex.md): The index of the first subview.
- [endIndex](endindex.md): An index that’s one higher than the last subview.
- [LayoutSubviews.Element](element.md): A type that contains a proxy value.
- [LayoutSubviews.Index](index.md): A type that you can use to index proxy values.
- [LayoutSubviews.SubSequence](subsequence.md): A type that contains a subsequence of proxy values.
