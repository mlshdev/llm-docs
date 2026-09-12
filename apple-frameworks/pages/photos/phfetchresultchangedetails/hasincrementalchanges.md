> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresultchangedetails/hasincrementalchanges](https://developer.apple.com/documentation/photos/phfetchresultchangedetails/hasincrementalchanges)

# hasIncrementalChanges (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether changes to the fetch result can be described incrementally.

## Declaration

```swift
var hasIncrementalChanges: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, use the [insertedIndexes](insertedindexes.md), [removedIndexes](removedindexes.md), and [changedIndexes](changedindexes.md) properties (or the [insertedObjects](insertedobjects.md), [removedObjects](removedobjects.md), and [changedObjects](changedobjects.md) properties) to find out which objects in the fetch result have been added, removed, or updated. You can also use the [hasMoves](hasmoves.md) property and [enumerateMoves(\_:)](enumeratemoves%28__%29.md) method to find out which objects in the fetch result have been rearranged. These properties can be useful for updating a collection view or similar interface that displays the fetch result’s contents.

If this value is `false`, the fetch result is too different from its original state for incremental change information to be meaningful. Use the [fetchResultAfterChanges](fetchresultafterchanges.md) property to get the fetch result’s current membership. (If displaying the fetch result’s contents, reload your user interface to match the new fetch result.)

## See Also

### Getting Change Information

- [removedIndexes](removedindexes.md): The indexes from which objects have been removed from the fetch result.
- [removedObjects](removedobjects.md): The items that have been removed from the fetch result.
- [insertedIndexes](insertedindexes.md): The indexes where new objects have been inserted in the fetch result.
- [insertedObjects](insertedobjects.md): The new items that have been inserted in the fetch result.
- [changedIndexes](changedindexes.md): The indexes of objects in the fetch result whose content or metadata have been updated.
- [changedObjects](changedobjects.md): The objects in the fetch result whose content or metadata have been updated.
- [hasMoves](hasmoves.md): A Boolean value that indicates whether objects have been rearranged in the fetch result.
- [enumerateMoves(\_:)](enumeratemoves%28__%29.md): Runs the specified block for each case where an object has moved from one index to another in the fetch result.

# hasIncrementalChanges (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether changes to the fetch result can be described incrementally.

## Declaration

```objectivec
@property (atomic, assign, readonly) BOOL hasIncrementalChanges;
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, use the [insertedIndexes](insertedindexes.md), [removedIndexes](removedindexes.md), and [changedIndexes](changedindexes.md) properties (or the [insertedObjects](insertedobjects.md), [removedObjects](removedobjects.md), and [changedObjects](changedobjects.md) properties) to find out which objects in the fetch result have been added, removed, or updated. You can also use the [hasMoves](hasmoves.md) property and [enumerateMovesWithBlock:](enumeratemoves%28__%29.md) method to find out which objects in the fetch result have been rearranged. These properties can be useful for updating a collection view or similar interface that displays the fetch result’s contents.

If this value is `false`, the fetch result is too different from its original state for incremental change information to be meaningful. Use the [fetchResultAfterChanges](fetchresultafterchanges.md) property to get the fetch result’s current membership. (If displaying the fetch result’s contents, reload your user interface to match the new fetch result.)

## See Also

### Getting Change Information

- [removedIndexes](removedindexes.md): The indexes from which objects have been removed from the fetch result.
- [removedObjects](removedobjects.md): The items that have been removed from the fetch result.
- [insertedIndexes](insertedindexes.md): The indexes where new objects have been inserted in the fetch result.
- [insertedObjects](insertedobjects.md): The new items that have been inserted in the fetch result.
- [changedIndexes](changedindexes.md): The indexes of objects in the fetch result whose content or metadata have been updated.
- [changedObjects](changedobjects.md): The objects in the fetch result whose content or metadata have been updated.
- [hasMoves](hasmoves.md): A Boolean value that indicates whether objects have been rearranged in the fetch result.
- [enumerateMovesWithBlock:](enumeratemoves%28__%29.md): Runs the specified block for each case where an object has moved from one index to another in the fetch result.
