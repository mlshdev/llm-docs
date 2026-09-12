> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistchangerequest/removechildcollections(at:)](https://developer.apple.com/documentation/photos/phcollectionlistchangerequest/removechildcollections(at:))

# removeChildCollections(at:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Removes the child collections at the specified indexes from the collection list.

## Declaration

```swift
func removeChildCollections(at indexes: IndexSet)
```

## Parameters

- `indexes`: The indexes of the child collections to be removed from the collection list.

<a id="Discussion"></a>

## Discussion

To ensure that the index set you specify is valid even if the collection list has changed since you fetched it, create a change request with a snapshot of the collection list’s contents using the [init(for:childCollections:)](init%28for_childcollections_%29.md) method before removing child collections. To remove objects based on their identities (without regard to their indexes in the collection), use the [removeChildCollections(\_:)](removechildcollections%28__%29.md) method.

## See Also

### Managing Collections

- [addChildCollections(\_:)](addchildcollections%28__%29.md): Adds the specified collections as children of the collection list.
- [insertChildCollections(\_:at:)](insertchildcollections%28__at_%29.md): Inserts the specified collections into the collection list at the specified indexes.
- [moveChildCollections(at:to:)](movechildcollections%28at_to_%29.md): Moves the child collections at the specified indexes in the collection list to a new index.
- [replaceChildCollections(at:withChildCollections:)](replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections(\_:)](removechildcollections%28__%29.md): Removes the specified child collections from the collection list.

# removeChildCollectionsAtIndexes: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Removes the child collections at the specified indexes from the collection list.

## Declaration

```objectivec
- (void) removeChildCollectionsAtIndexes:(NSIndexSet *) indexes;
```

## Parameters

- `indexes`: The indexes of the child collections to be removed from the collection list.

<a id="Discussion"></a>

## Discussion

To ensure that the index set you specify is valid even if the collection list has changed since you fetched it, create a change request with a snapshot of the collection list’s contents using the [changeRequestForCollectionList:childCollections:](init%28for_childcollections_%29.md) method before removing child collections. To remove objects based on their identities (without regard to their indexes in the collection), use the [removeChildCollections:](removechildcollections%28__%29.md) method.

## See Also

### Managing Collections

- [addChildCollections:](addchildcollections%28__%29.md): Adds the specified collections as children of the collection list.
- [insertChildCollections:atIndexes:](insertchildcollections%28__at_%29.md): Inserts the specified collections into the collection list at the specified indexes.
- [moveChildCollectionsAtIndexes:toIndex:](movechildcollections%28at_to_%29.md): Moves the child collections at the specified indexes in the collection list to a new index.
- [replaceChildCollectionsAtIndexes:withChildCollections:](replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections:](removechildcollections%28__%29.md): Removes the specified child collections from the collection list.
