> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/foreachsubviewcollection](https://developer.apple.com/documentation/swiftui/foreachsubviewcollection)

# ForEachSubviewCollection

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A collection which allows a view to be treated as a collection of its subviews in a for each loop.

## Declaration

```swift
struct ForEachSubviewCollection<Content> where Content : View
```

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Iterating over dynamic data

- [ForEach](foreach.md): A structure that computes views on demand from an underlying collection of identified data.
- [ForEachSectionCollection](foreachsectioncollection.md): A collection which allows a view to be treated as a collection of its sections in a for each loop.
- [DynamicViewContent](dynamicviewcontent.md): A type of view that generates views from an underlying collection of data.
