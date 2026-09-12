> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/insertrows(at:withanimation:)](https://developer.apple.com/documentation/appkit/nstableview/insertrows(at:withanimation:))

# insertRows(at:withAnimation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Inserts the rows using the specified animation.

## Declaration

```swift
func insertRows(at indexes: IndexSet, withAnimation animationOptions: NSTableView.AnimationOptions = [])
```

## Parameters

- `indexes`: The final positions of the new rows to be inserted.
- `animationOptions`: The animation displayed during the insert. See [NSTableView.AnimationOptions](animationoptions.md) for the possible values that can be combined using the C bitwise OR operator.

<a id="Discussion"></a>

## Discussion

The [numberOfRows](numberofrows.md) in the table view is automatically increased by the count of `indexes`.

Calling this method multiple times within the same [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md) block is allowed, and changes are processed incrementally.

> **Note**

>  [NSCell](../nscell.md)-based table views must first call [beginUpdates()](beginupdates%28%29.md) before calling this method.

## See Also

### Updating the Table View Arrangement

- [beginUpdates()](beginupdates%28%29.md): Begins a group of updates for the table view.
- [endUpdates()](endupdates%28%29.md): Ends the group of updates for the table view.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [removeRows(at:withAnimation:)](removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [row(for:)](row%28for_%29.md): Returns the index of the row for the specified view.
- [column(for:)](column%28for_%29.md): Returns the column index for the specified view.

# insertRowsAtIndexes:withAnimation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Inserts the rows using the specified animation.

## Declaration

```objectivec
- (void) insertRowsAtIndexes:(NSIndexSet *) indexes withAnimation:(NSTableViewAnimationOptions) animationOptions;
```

## Parameters

- `indexes`: The final positions of the new rows to be inserted.
- `animationOptions`: The animation displayed during the insert. See [NSTableViewAnimationOptions](animationoptions.md) for the possible values that can be combined using the C bitwise OR operator.

<a id="Discussion"></a>

## Discussion

The [numberOfRows](numberofrows.md) in the table view is automatically increased by the count of `indexes`.

Calling this method multiple times within the same [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md) block is allowed, and changes are processed incrementally.

> **Note**

>  [NSCell](../nscell.md)-based table views must first call [beginUpdates](beginupdates%28%29.md) before calling this method.

## See Also

### Updating the Table View Arrangement

- [beginUpdates](beginupdates%28%29.md): Begins a group of updates for the table view.
- [endUpdates](endupdates%28%29.md): Ends the group of updates for the table view.
- [moveRowAtIndex:toIndex:](moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [removeRowsAtIndexes:withAnimation:](removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [rowForView:](row%28for_%29.md): Returns the index of the row for the specified view.
- [columnForView:](column%28for_%29.md): Returns the column index for the specified view.
