> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistchangerequest/movechildcollections(at:to:)](https://developer.apple.com/documentation/photos/phcollectionlistchangerequest/movechildcollections(at:to:))

# moveChildCollections(at:to:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Moves the child collections at the specified indexes in the collection list to a new index.

## Declaration

```swift
func moveChildCollections(at indexes: IndexSet, to toIndex: Int)
```

## Parameters

- `indexes`: The indexes of the child collections to be moved in the collection list.
- `toIndex`: The index at which to place the moved child collections, relative to the collection list’s ordering after removing the items at `indexes`.

<a id="Discussion"></a>

## Discussion

When you call this method, Photos first removes the items in the `indexes` parameter from the collection, and then inserts them at the location specified by the `toIndex` parameter.

To ensure that the index set you specify is valid even if the collection list has changed since you fetched it, create a change request with a snapshot of the collection list’s contents using the [init(for:childCollections:)](init%28for_childcollections_%29.md) method before rearranging child collections.

## See Also

### Managing Collections

- [addChildCollections(\_:)](addchildcollections%28__%29.md): Adds the specified collections as children of the collection list.
- [insertChildCollections(\_:at:)](insertchildcollections%28__at_%29.md): Inserts the specified collections into the collection list at the specified indexes.
- [replaceChildCollections(at:withChildCollections:)](replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections(\_:)](removechildcollections%28__%29.md): Removes the specified child collections from the collection list.
- [removeChildCollections(at:)](removechildcollections%28at_%29.md): Removes the child collections at the specified indexes from the collection list.

# moveChildCollectionsAtIndexes:toIndex: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Moves the child collections at the specified indexes in the collection list to a new index.

## Declaration

```objectivec
- (void) moveChildCollectionsAtIndexes:(NSIndexSet *) indexes toIndex:(NSUInteger) toIndex;
```

## Parameters

- `indexes`: The indexes of the child collections to be moved in the collection list.
- `toIndex`: The index at which to place the moved child collections, relative to the collection list’s ordering after removing the items at `indexes`.

<a id="Discussion"></a>

## Discussion

When you call this method, Photos first removes the items in the `indexes` parameter from the collection, and then inserts them at the location specified by the `toIndex` parameter.

To ensure that the index set you specify is valid even if the collection list has changed since you fetched it, create a change request with a snapshot of the collection list’s contents using the [changeRequestForCollectionList:childCollections:](init%28for_childcollections_%29.md) method before rearranging child collections.

## See Also

### Managing Collections

- [addChildCollections:](addchildcollections%28__%29.md): Adds the specified collections as children of the collection list.
- [insertChildCollections:atIndexes:](insertchildcollections%28__at_%29.md): Inserts the specified collections into the collection list at the specified indexes.
- [replaceChildCollectionsAtIndexes:withChildCollections:](replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections:](removechildcollections%28__%29.md): Removes the specified child collections from the collection list.
- [removeChildCollectionsAtIndexes:](removechildcollections%28at_%29.md): Removes the child collections at the specified indexes from the collection list.
