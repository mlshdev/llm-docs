> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/removerows(at:withanimation:)](https://developer.apple.com/documentation/appkit/nstableview/removerows(at:withanimation:))

# removeRows(at:withAnimation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Removes the rows using the specified animation.

## Declaration

```swift
func removeRows(at indexes: IndexSet, withAnimation animationOptions: NSTableView.AnimationOptions = [])
```

## Parameters

- `indexes`: An index set containing the rows to remove.
- `animationOptions`: The animation displayed during the insert. See [NSTableView.AnimationOptions](animationoptions.md) for the possible values that can be combined using the C bitwise OR operator.

<a id="Discussion"></a>

## Discussion

This method deletes from the table the rows represented at `indexes` and automatically decreases [numberOfRows](numberofrows.md) by the count of `indexes`.

The row indexes should be with respect to the current state displayed in the table view, and not the final state, because the specified rows do not exist in the final state.

Calling this method multiple times within the same [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md) block is allowed, and changes are processed incrementally.

Changes are processed incrementally as the [insertRows(at:withAnimation:)](insertrows%28at_withanimation_%29.md), [removeRows(at:withAnimation:)](removerows%28at_withanimation_%29.md), and the [moveRow(at:to:)](moverow%28at_to_%29.md) methods are called. It is acceptable to delete row `0` multiple times, as long as there is still a row available.

> **Note**

>  [NSCell](../nscell.md)-based table views must first call [beginUpdates()](beginupdates%28%29.md) before calling this method.

## See Also

### Updating the Table View Arrangement

- [beginUpdates()](beginupdates%28%29.md): Begins a group of updates for the table view.
- [endUpdates()](endupdates%28%29.md): Ends the group of updates for the table view.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [insertRows(at:withAnimation:)](insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [row(for:)](row%28for_%29.md): Returns the index of the row for the specified view.
- [column(for:)](column%28for_%29.md): Returns the column index for the specified view.

# removeRowsAtIndexes:withAnimation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Removes the rows using the specified animation.

## Declaration

```objectivec
- (void) removeRowsAtIndexes:(NSIndexSet *) indexes withAnimation:(NSTableViewAnimationOptions) animationOptions;
```

## Parameters

- `indexes`: An index set containing the rows to remove.
- `animationOptions`: The animation displayed during the insert. See [NSTableViewAnimationOptions](animationoptions.md) for the possible values that can be combined using the C bitwise OR operator.

<a id="Discussion"></a>

## Discussion

This method deletes from the table the rows represented at `indexes` and automatically decreases [numberOfRows](numberofrows.md) by the count of `indexes`.

The row indexes should be with respect to the current state displayed in the table view, and not the final state, because the specified rows do not exist in the final state.

Calling this method multiple times within the same [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md) block is allowed, and changes are processed incrementally.

Changes are processed incrementally as the [insertRowsAtIndexes:withAnimation:](insertrows%28at_withanimation_%29.md), [removeRowsAtIndexes:withAnimation:](removerows%28at_withanimation_%29.md), and the [moveRowAtIndex:toIndex:](moverow%28at_to_%29.md) methods are called. It is acceptable to delete row `0` multiple times, as long as there is still a row available.

> **Note**

>  [NSCell](../nscell.md)-based table views must first call [beginUpdates](beginupdates%28%29.md) before calling this method.

## See Also

### Updating the Table View Arrangement

- [beginUpdates](beginupdates%28%29.md): Begins a group of updates for the table view.
- [endUpdates](endupdates%28%29.md): Ends the group of updates for the table view.
- [moveRowAtIndex:toIndex:](moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [insertRowsAtIndexes:withAnimation:](insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [rowForView:](row%28for_%29.md): Returns the index of the row for the specified view.
- [columnForView:](column%28for_%29.md): Returns the column index for the specified view.
