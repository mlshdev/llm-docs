> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/reorderdifference/destination-swift.struct/init(position:)](https://developer.apple.com/documentation/swiftui/reorderdifference/destination-swift.struct/init(position:))

# init(position:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initializes the destination value with the provided position and an instance of `ReorderableSingleCollectionIdentifier`.

## Declaration

```swift
init(position: ReorderDifference<ItemID, CollectionID>.Destination.Position) where CollectionID == ReorderableSingleCollectionIdentifier
```

<a id="discussion"></a>

## Discussion

- position: The position within the collection.
