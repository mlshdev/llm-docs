> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataqueryupdateremoveditemskey](https://developer.apple.com/documentation/foundation/nsmetadataqueryupdateremoveditemskey)

# NSMetadataQueryUpdateRemovedItemsKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key for retrieving an array of items removed from the query result. By default, this array contains [NSMetadataItem](nsmetadataitem.md) objects, representing the query’s results; however, the query’s delegate can substitute these objects with instances of a different class.

## Declaration

```swift
let NSMetadataQueryUpdateRemovedItemsKey: String
```

## See Also

### Constants

- [NSMetadataQueryUpdateAddedItemsKey](nsmetadataqueryupdateaddeditemskey.md): The key for retrieving an array of items added to the query result. By default, this array contains [NSMetadataItem](nsmetadataitem.md) objects, representing the query’s results; however, the query’s delegate can substitute these objects with instances of a different class.
- [NSMetadataQueryUpdateChangedItemsKey](nsmetadataqueryupdatechangeditemskey.md): The key for retrieving an array of items that have changed in the query result. By default, this array contains [NSMetadataItem](nsmetadataitem.md) objects, representing the query’s results; however, the query’s delegate can substitute these objects with instances of a different class.

# NSMetadataQueryUpdateRemovedItemsKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key for retrieving an array of items removed from the query result. By default, this array contains [NSMetadataItem](nsmetadataitem.md) objects, representing the query’s results; however, the query’s delegate can substitute these objects with instances of a different class.

## Declaration

```objectivec
extern NSString * const NSMetadataQueryUpdateRemovedItemsKey;
```

## See Also

### Constants

- [NSMetadataQueryUpdateAddedItemsKey](nsmetadataqueryupdateaddeditemskey.md): The key for retrieving an array of items added to the query result. By default, this array contains [NSMetadataItem](nsmetadataitem.md) objects, representing the query’s results; however, the query’s delegate can substitute these objects with instances of a different class.
- [NSMetadataQueryUpdateChangedItemsKey](nsmetadataqueryupdatechangeditemskey.md): The key for retrieving an array of items that have changed in the query result. By default, this array contains [NSMetadataItem](nsmetadataitem.md) objects, representing the query’s results; however, the query’s delegate can substitute these objects with instances of a different class.
