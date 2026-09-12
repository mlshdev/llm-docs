> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistchangerequest/insertchildcollections(_:at:)](https://developer.apple.com/documentation/photos/phcollectionlistchangerequest/insertchildcollections(_:at:))

# insertChildCollections(\_:at:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Inserts the specified collections into the collection list at the specified indexes.

## Declaration

```swift
func insertChildCollections(_ collections: any NSFastEnumeration, at indexes: IndexSet)
```

## Parameters

- `collections`: An array of [PHCollection](../phcollection.md) objects (asset collections or other collection lists) to be inserted into the collection list.
- `indexes`: The indexes at which the collections should be inserted. The count of locations in this index set must equal the count of collections.

<a id="Discussion"></a>

## Discussion

To ensure that the index set you specify is valid even if the collection list has changed since you fetched it, create a change request with a snapshot of the collection list’s contents using the [init(for:childCollections:)](init%28for_childcollections_%29.md) method before inserting child collections.

For a detailed discussion of how the index set you specify maps to insertions in the collection list, see the similar [NSMutableArray](../../foundation/nsmutablearray.md) method `insert`.

## See Also

### Managing Collections

- [addChildCollections(\_:)](addchildcollections%28__%29.md): Adds the specified collections as children of the collection list.
- [moveChildCollections(at:to:)](movechildcollections%28at_to_%29.md): Moves the child collections at the specified indexes in the collection list to a new index.
- [replaceChildCollections(at:withChildCollections:)](replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections(\_:)](removechildcollections%28__%29.md): Removes the specified child collections from the collection list.
- [removeChildCollections(at:)](removechildcollections%28at_%29.md): Removes the child collections at the specified indexes from the collection list.

# insertChildCollections:atIndexes: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Inserts the specified collections into the collection list at the specified indexes.

## Declaration

```objectivec
- (void) insertChildCollections:(id<NSFastEnumeration>) collections atIndexes:(NSIndexSet *) indexes;
```

## Parameters

- `collections`: An array of [PHCollection](../phcollection.md) objects (asset collections or other collection lists) to be inserted into the collection list.
- `indexes`: The indexes at which the collections should be inserted. The count of locations in this index set must equal the count of collections.

<a id="Discussion"></a>

## Discussion

To ensure that the index set you specify is valid even if the collection list has changed since you fetched it, create a change request with a snapshot of the collection list’s contents using the [changeRequestForCollectionList:childCollections:](init%28for_childcollections_%29.md) method before inserting child collections.

For a detailed discussion of how the index set you specify maps to insertions in the collection list, see the similar [NSMutableArray](../../foundation/nsmutablearray.md) method `insert`.

## See Also

### Managing Collections

- [addChildCollections:](addchildcollections%28__%29.md): Adds the specified collections as children of the collection list.
- [moveChildCollectionsAtIndexes:toIndex:](movechildcollections%28at_to_%29.md): Moves the child collections at the specified indexes in the collection list to a new index.
- [replaceChildCollectionsAtIndexes:withChildCollections:](replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections:](removechildcollections%28__%29.md): Removes the specified child collections from the collection list.
- [removeChildCollectionsAtIndexes:](removechildcollections%28at_%29.md): Removes the child collections at the specified indexes from the collection list.
