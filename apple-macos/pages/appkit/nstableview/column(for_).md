> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/column(for:)](https://developer.apple.com/documentation/appkit/nstableview/column(for:))

# column(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the column index for the specified view.

## Declaration

```swift
func column(for view: NSView) -> Int
```

## Parameters

- `view`: The view for which to retrieve the column.

<a id="return-value"></a>

## Return Value

The index of the column containing `view` in the [tableColumns](tablecolumns.md) array. This method returns `-1` if the view is not in the table view. This method may also return `-1` if the row containing the view is being animated away, such as during the deletion of a row.

<a id="Discussion"></a>

## Discussion

This method is typically called in the action method of an `NSButton` (or `NSControl`) to find out what row (and column) the action should be performed on.

The implementation is `O(n)` where *n* is the number of visible rows, so this method should generally not be called within a loop.

## See Also

### Updating the Table View Arrangement

- [beginUpdates()](beginupdates%28%29.md): Begins a group of updates for the table view.
- [endUpdates()](endupdates%28%29.md): Ends the group of updates for the table view.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [insertRows(at:withAnimation:)](insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [removeRows(at:withAnimation:)](removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [row(for:)](row%28for_%29.md): Returns the index of the row for the specified view.

# columnForView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the column index for the specified view.

## Declaration

```objectivec
- (NSInteger) columnForView:(NSView *) view;
```

## Parameters

- `view`: The view for which to retrieve the column.

<a id="return-value"></a>

## Return Value

The index of the column containing `view` in the [tableColumns](tablecolumns.md) array. This method returns `-1` if the view is not in the table view. This method may also return `-1` if the row containing the view is being animated away, such as during the deletion of a row.

<a id="Discussion"></a>

## Discussion

This method is typically called in the action method of an `NSButton` (or `NSControl`) to find out what row (and column) the action should be performed on.

The implementation is `O(n)` where *n* is the number of visible rows, so this method should generally not be called within a loop.

## See Also

### Updating the Table View Arrangement

- [beginUpdates](beginupdates%28%29.md): Begins a group of updates for the table view.
- [endUpdates](endupdates%28%29.md): Ends the group of updates for the table view.
- [moveRowAtIndex:toIndex:](moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [insertRowsAtIndexes:withAnimation:](insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [removeRowsAtIndexes:withAnimation:](removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [rowForView:](row%28for_%29.md): Returns the index of the row for the specified view.
