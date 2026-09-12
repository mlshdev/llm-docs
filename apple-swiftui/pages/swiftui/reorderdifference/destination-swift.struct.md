> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/reorderdifference/destination-swift.struct](https://developer.apple.com/documentation/swiftui/reorderdifference/destination-swift.struct)

# ReorderDifference.Destination

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The destination value of a reordering operation.

## Declaration

```swift
struct Destination
```

## Topics

### Getting destination details

- [collectionID](destination-swift.struct/collectionid.md): The collection that contains the destination’s position.
- [position](destination-swift.struct/position-swift.property.md): The identifier position in the collection where the sources should be moved to.
- [ReorderDifference.Destination.Position](destination-swift.struct/position-swift.enum.md): The position within the destination collection.

### Initializers

- [init(position:)](destination-swift.struct/init%28position_%29.md): Initializes the destination value with the provided position and an instance of `ReorderableSingleCollectionIdentifier`.
- [init(position:collectionID:)](destination-swift.struct/init%28position_collectionid_%29.md): Initializes the destination value with the provided position and collectionID.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting changes

- [destination](destination-swift.property.md): The end position of items to move during a reordering operation.
- [sources](sources.md): The identifiers of items to move during a reordering operation.
