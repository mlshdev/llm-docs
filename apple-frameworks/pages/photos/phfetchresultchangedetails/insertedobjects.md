> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresultchangedetails/insertedobjects](https://developer.apple.com/documentation/photos/phfetchresultchangedetails/insertedobjects)

# insertedObjects (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The new items that have been inserted in the fetch result.

## Declaration

```swift
var insertedObjects: [ObjectType] { get }
```

<a id="Discussion"></a>

## Discussion

This array can contain [PHAsset](../phasset.md), [PHAssetCollection](../phassetcollection.md), or [PHCollectionList](../phcollectionlist.md) objects, or some combination thereof.

If the [hasIncrementalChanges](hasincrementalchanges.md) property’s value is `false`, this property’s value is `nil`.

## See Also

### Getting Change Information

- [hasIncrementalChanges](hasincrementalchanges.md): A Boolean value that indicates whether changes to the fetch result can be described incrementally.
- [removedIndexes](removedindexes.md): The indexes from which objects have been removed from the fetch result.
- [removedObjects](removedobjects.md): The items that have been removed from the fetch result.
- [insertedIndexes](insertedindexes.md): The indexes where new objects have been inserted in the fetch result.
- [changedIndexes](changedindexes.md): The indexes of objects in the fetch result whose content or metadata have been updated.
- [changedObjects](changedobjects.md): The objects in the fetch result whose content or metadata have been updated.
- [hasMoves](hasmoves.md): A Boolean value that indicates whether objects have been rearranged in the fetch result.
- [enumerateMoves(\_:)](enumeratemoves%28__%29.md): Runs the specified block for each case where an object has moved from one index to another in the fetch result.

# insertedObjects (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The new items that have been inserted in the fetch result.

## Declaration

```objectivec
@property (atomic, strong, readonly) NSArray<PHObject *> * insertedObjects;
```

<a id="Discussion"></a>

## Discussion

This array can contain [PHAsset](../phasset.md), [PHAssetCollection](../phassetcollection.md), or [PHCollectionList](../phcollectionlist.md) objects, or some combination thereof.

If the [hasIncrementalChanges](hasincrementalchanges.md) property’s value is `false`, this property’s value is `nil`.

## See Also

### Getting Change Information

- [hasIncrementalChanges](hasincrementalchanges.md): A Boolean value that indicates whether changes to the fetch result can be described incrementally.
- [removedIndexes](removedindexes.md): The indexes from which objects have been removed from the fetch result.
- [removedObjects](removedobjects.md): The items that have been removed from the fetch result.
- [insertedIndexes](insertedindexes.md): The indexes where new objects have been inserted in the fetch result.
- [changedIndexes](changedindexes.md): The indexes of objects in the fetch result whose content or metadata have been updated.
- [changedObjects](changedobjects.md): The objects in the fetch result whose content or metadata have been updated.
- [hasMoves](hasmoves.md): A Boolean value that indicates whether objects have been rearranged in the fetch result.
- [enumerateMovesWithBlock:](enumeratemoves%28__%29.md): Runs the specified block for each case where an object has moved from one index to another in the fetch result.
