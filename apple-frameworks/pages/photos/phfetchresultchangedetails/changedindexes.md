> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresultchangedetails/changedindexes](https://developer.apple.com/documentation/photos/phfetchresultchangedetails/changedindexes)

# changedIndexes (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The indexes of objects in the fetch result whose content or metadata have been updated.

## Declaration

```swift
var changedIndexes: IndexSet? { get }
```

<a id="Discussion"></a>

## Discussion

Use this index set to update elements in a collection view or similar user interface that displays the contents of the fetch result. These indexes are relative to the original fetch result (the [fetchResultBeforeChanges](fetchresultbeforechanges.md) property) after you’ve applied the changes described by the [removedIndexes](removedindexes.md) and [insertedIndexes](insertedindexes.md) properties; when updating your app’s interface, apply changes after removals and insertions and before moves.

> **Warning**

>  Don’t map `changedIndexes` directly to [UICollectionView](../../uikit/uicollectionview.md) item indices in batch updates. Use these indices to reconfigure the corresponding cells after [performBatchUpdates(\_:completion:)](../../uikit/uicollectionview/performbatchupdates%28__completion_%29.md). [UICollectionView](../../uikit/uicollectionview.md) and [UITableView](../../uikit/uitableview.md) expect the `changedIndexes` to be in the *before* state, while PhotoKit provides them in the *after* state, resulting in a crash if your app performs insertions and deletions at the same time as the changes.

If the [hasIncrementalChanges](hasincrementalchanges.md) property’s value is `false`, this property’s value is `nil`.

## See Also

### Getting Change Information

- [hasIncrementalChanges](hasincrementalchanges.md): A Boolean value that indicates whether changes to the fetch result can be described incrementally.
- [removedIndexes](removedindexes.md): The indexes from which objects have been removed from the fetch result.
- [removedObjects](removedobjects.md): The items that have been removed from the fetch result.
- [insertedIndexes](insertedindexes.md): The indexes where new objects have been inserted in the fetch result.
- [insertedObjects](insertedobjects.md): The new items that have been inserted in the fetch result.
- [changedObjects](changedobjects.md): The objects in the fetch result whose content or metadata have been updated.
- [hasMoves](hasmoves.md): A Boolean value that indicates whether objects have been rearranged in the fetch result.
- [enumerateMoves(\_:)](enumeratemoves%28__%29.md): Runs the specified block for each case where an object has moved from one index to another in the fetch result.

# changedIndexes (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The indexes of objects in the fetch result whose content or metadata have been updated.

## Declaration

```objectivec
@property (atomic, strong, readonly, nullable) NSIndexSet * changedIndexes;
```

<a id="Discussion"></a>

## Discussion

Use this index set to update elements in a collection view or similar user interface that displays the contents of the fetch result. These indexes are relative to the original fetch result (the [fetchResultBeforeChanges](fetchresultbeforechanges.md) property) after you’ve applied the changes described by the [removedIndexes](removedindexes.md) and [insertedIndexes](insertedindexes.md) properties; when updating your app’s interface, apply changes after removals and insertions and before moves.

> **Warning**

>  Don’t map `changedIndexes` directly to [UICollectionView](../../uikit/uicollectionview.md) item indices in batch updates. Use these indices to reconfigure the corresponding cells after [performBatchUpdates:completion:](../../uikit/uicollectionview/performbatchupdates%28__completion_%29.md). [UICollectionView](../../uikit/uicollectionview.md) and [UITableView](../../uikit/uitableview.md) expect the `changedIndexes` to be in the *before* state, while PhotoKit provides them in the *after* state, resulting in a crash if your app performs insertions and deletions at the same time as the changes.

If the [hasIncrementalChanges](hasincrementalchanges.md) property’s value is `false`, this property’s value is `nil`.

## See Also

### Getting Change Information

- [hasIncrementalChanges](hasincrementalchanges.md): A Boolean value that indicates whether changes to the fetch result can be described incrementally.
- [removedIndexes](removedindexes.md): The indexes from which objects have been removed from the fetch result.
- [removedObjects](removedobjects.md): The items that have been removed from the fetch result.
- [insertedIndexes](insertedindexes.md): The indexes where new objects have been inserted in the fetch result.
- [insertedObjects](insertedobjects.md): The new items that have been inserted in the fetch result.
- [changedObjects](changedobjects.md): The objects in the fetch result whose content or metadata have been updated.
- [hasMoves](hasmoves.md): A Boolean value that indicates whether objects have been rearranged in the fetch result.
- [enumerateMovesWithBlock:](enumeratemoves%28__%29.md): Runs the specified block for each case where an object has moved from one index to another in the fetch result.
