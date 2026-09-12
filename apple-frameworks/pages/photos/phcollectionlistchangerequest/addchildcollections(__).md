> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistchangerequest/addchildcollections(_:)](https://developer.apple.com/documentation/photos/phcollectionlistchangerequest/addchildcollections(_:))

# addChildCollections(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified collections as children of the collection list.

## Declaration

```swift
func addChildCollections(_ collections: any NSFastEnumeration)
```

## Parameters

- `collections`: An array of [PHCollection](../phcollection.md) objects (asset collections or other collection lists) to be added to the collection list.

<a id="Discussion"></a>

## Discussion

If you created the change request with a snapshot of the collection list’s contents using the [init(for:childCollections:)](init%28for_childcollections_%29.md) method, Photos inserts the new children after the existing child collections in the collection list. Otherwise, the arrangement of the new children relative to others in the collection is undefined.

## See Also

### Managing Collections

- [insertChildCollections(\_:at:)](insertchildcollections%28__at_%29.md): Inserts the specified collections into the collection list at the specified indexes.
- [moveChildCollections(at:to:)](movechildcollections%28at_to_%29.md): Moves the child collections at the specified indexes in the collection list to a new index.
- [replaceChildCollections(at:withChildCollections:)](replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections(\_:)](removechildcollections%28__%29.md): Removes the specified child collections from the collection list.
- [removeChildCollections(at:)](removechildcollections%28at_%29.md): Removes the child collections at the specified indexes from the collection list.

# addChildCollections: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified collections as children of the collection list.

## Declaration

```objectivec
- (void) addChildCollections:(id<NSFastEnumeration>) collections;
```

## Parameters

- `collections`: An array of [PHCollection](../phcollection.md) objects (asset collections or other collection lists) to be added to the collection list.

<a id="Discussion"></a>

## Discussion

If you created the change request with a snapshot of the collection list’s contents using the [changeRequestForCollectionList:childCollections:](init%28for_childcollections_%29.md) method, Photos inserts the new children after the existing child collections in the collection list. Otherwise, the arrangement of the new children relative to others in the collection is undefined.

## See Also

### Managing Collections

- [insertChildCollections:atIndexes:](insertchildcollections%28__at_%29.md): Inserts the specified collections into the collection list at the specified indexes.
- [moveChildCollectionsAtIndexes:toIndex:](movechildcollections%28at_to_%29.md): Moves the child collections at the specified indexes in the collection list to a new index.
- [replaceChildCollectionsAtIndexes:withChildCollections:](replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections:](removechildcollections%28__%29.md): Removes the specified child collections from the collection list.
- [removeChildCollectionsAtIndexes:](removechildcollections%28at_%29.md): Removes the child collections at the specified indexes from the collection list.
