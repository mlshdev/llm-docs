> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresultchangedetails/insertedindexes](https://developer.apple.com/documentation/photos/phfetchresultchangedetails/insertedindexes)

# insertedIndexes (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The indexes where new objects have been inserted in the fetch result.

## Declaration

```swift
var insertedIndexes: IndexSet? { get }
```

<a id="Discussion"></a>

## Discussion

Use this index set can to insert elements in a collection view or similar user interface that displays the contents of the fetch result. These indexes are relative to the original fetch result (the [fetchResultBeforeChanges](fetchresultbeforechanges.md) property) after you’ve applied the changes described by the [removedIndexes](removedindexes.md) property; when updating your app’s interface, apply insertions after removals and before changes and moves.

If the [hasIncrementalChanges](hasincrementalchanges.md) property’s value is `false`, this property’s value is `nil`.

## See Also

### Getting Change Information

- [hasIncrementalChanges](hasincrementalchanges.md): A Boolean value that indicates whether changes to the fetch result can be described incrementally.
- [removedIndexes](removedindexes.md): The indexes from which objects have been removed from the fetch result.
- [removedObjects](removedobjects.md): The items that have been removed from the fetch result.
- [insertedObjects](insertedobjects.md): The new items that have been inserted in the fetch result.
- [changedIndexes](changedindexes.md): The indexes of objects in the fetch result whose content or metadata have been updated.
- [changedObjects](changedobjects.md): The objects in the fetch result whose content or metadata have been updated.
- [hasMoves](hasmoves.md): A Boolean value that indicates whether objects have been rearranged in the fetch result.
- [enumerateMoves(\_:)](enumeratemoves%28__%29.md): Runs the specified block for each case where an object has moved from one index to another in the fetch result.

# insertedIndexes (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The indexes where new objects have been inserted in the fetch result.

## Declaration

```objectivec
@property (atomic, strong, readonly, nullable) NSIndexSet * insertedIndexes;
```

<a id="Discussion"></a>

## Discussion

Use this index set can to insert elements in a collection view or similar user interface that displays the contents of the fetch result. These indexes are relative to the original fetch result (the [fetchResultBeforeChanges](fetchresultbeforechanges.md) property) after you’ve applied the changes described by the [removedIndexes](removedindexes.md) property; when updating your app’s interface, apply insertions after removals and before changes and moves.

If the [hasIncrementalChanges](hasincrementalchanges.md) property’s value is `false`, this property’s value is `nil`.

## See Also

### Getting Change Information

- [hasIncrementalChanges](hasincrementalchanges.md): A Boolean value that indicates whether changes to the fetch result can be described incrementally.
- [removedIndexes](removedindexes.md): The indexes from which objects have been removed from the fetch result.
- [removedObjects](removedobjects.md): The items that have been removed from the fetch result.
- [insertedObjects](insertedobjects.md): The new items that have been inserted in the fetch result.
- [changedIndexes](changedindexes.md): The indexes of objects in the fetch result whose content or metadata have been updated.
- [changedObjects](changedobjects.md): The objects in the fetch result whose content or metadata have been updated.
- [hasMoves](hasmoves.md): A Boolean value that indicates whether objects have been rearranged in the fetch result.
- [enumerateMovesWithBlock:](enumeratemoves%28__%29.md): Runs the specified block for each case where an object has moved from one index to another in the fetch result.
