> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/reorderdifference/destination-swift.struct/position-swift.enum](https://developer.apple.com/documentation/swiftui/reorderdifference/destination-swift.struct/position-swift.enum)

# ReorderDifference.Destination.Position

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The position within the destination collection.

## Declaration

```swift
@frozen enum Position
```

## Topics

### Destination positions

- [ReorderDifference.Destination.Position.before(\_:)](position-swift.enum/before%28__%29.md): The position of the item with the associated identifier in its collection. Move source items to the index of this item.
- [ReorderDifference.Destination.Position.end](position-swift.enum/end.md): The end of the collection. Append source items to the end of the collection.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting destination details

- [collectionID](collectionid.md): The collection that contains the destination’s position.
- [position](position-swift.property.md): The identifier position in the collection where the sources should be moved to.
