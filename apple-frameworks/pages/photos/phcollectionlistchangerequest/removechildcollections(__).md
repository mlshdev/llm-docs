> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistchangerequest/removechildcollections(_:)](https://developer.apple.com/documentation/photos/phcollectionlistchangerequest/removechildcollections(_:))

# removeChildCollections(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Removes the specified child collections from the collection list.

## Declaration

```swift
func removeChildCollections(_ collections: any NSFastEnumeration)
```

## Parameters

- `collections`: An array of [PHCollection](../phcollection.md) objects (asset collections or other collection lists) to be removed from the collection list.

<a id="Discussion"></a>

## Discussion

This method removes child collections from the collection list based on their identity (determined by the [localIdentifier](../phobject/localidentifier.md) property of each collection). To remove objects at specified indexes, use the [removeChildCollections(at:)](removechildcollections%28at_%29.md) method.

## See Also

### Managing Collections

- [addChildCollections(\_:)](addchildcollections%28__%29.md): Adds the specified collections as children of the collection list.
- [insertChildCollections(\_:at:)](insertchildcollections%28__at_%29.md): Inserts the specified collections into the collection list at the specified indexes.
- [moveChildCollections(at:to:)](movechildcollections%28at_to_%29.md): Moves the child collections at the specified indexes in the collection list to a new index.
- [replaceChildCollections(at:withChildCollections:)](replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections(at:)](removechildcollections%28at_%29.md): Removes the child collections at the specified indexes from the collection list.

# removeChildCollections: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Removes the specified child collections from the collection list.

## Declaration

```objectivec
- (void) removeChildCollections:(id<NSFastEnumeration>) collections;
```

## Parameters

- `collections`: An array of [PHCollection](../phcollection.md) objects (asset collections or other collection lists) to be removed from the collection list.

<a id="Discussion"></a>

## Discussion

This method removes child collections from the collection list based on their identity (determined by the [localIdentifier](../phobject/localidentifier.md) property of each collection). To remove objects at specified indexes, use the [removeChildCollectionsAtIndexes:](removechildcollections%28at_%29.md) method.

## See Also

### Managing Collections

- [addChildCollections:](addchildcollections%28__%29.md): Adds the specified collections as children of the collection list.
- [insertChildCollections:atIndexes:](insertchildcollections%28__at_%29.md): Inserts the specified collections into the collection list at the specified indexes.
- [moveChildCollectionsAtIndexes:toIndex:](movechildcollections%28at_to_%29.md): Moves the child collections at the specified indexes in the collection list to a new index.
- [replaceChildCollectionsAtIndexes:withChildCollections:](replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollectionsAtIndexes:](removechildcollections%28at_%29.md): Removes the child collections at the specified indexes from the collection list.
