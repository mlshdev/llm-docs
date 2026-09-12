> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/beginupdates()](https://developer.apple.com/documentation/appkit/nstableview/beginupdates())

# beginUpdates() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Begins a group of updates for the table view.

## Declaration

```swift
func beginUpdates()
```

<a id="Discussion"></a>

## Discussion

For [NSView](../nsview.md)-based table views, multiple row changes—that is, insertions, deletions, and moves—are animated simultaneously by surrounding calls to those method calls with [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md). These methods are nestable.

The selected rows are maintained during the series of insertions, deletions, moves, and scrolling. If a selected row is deleted, a selection changed notification occurs after [removeRows(at:withAnimation:)](removerows%28at_withanimation_%29.md) is called.

It is not necessary to call [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md) if only one insertion, deletion, or move is occurring and the table view is an [NSView](../nsview.md)-based table view. When using an [NSCell](../nscell.md)-based table view, you must surround any insertion, deletion, or move in an update block for animations to occur.

The main reason for doing a batch update of changes to a table view is to avoid having the table animate unnecessarily.

Note that these methods should be called to reflect changes in your model; they do not make any underlying model changes.

> **Note**

>  For [NSCell](../nscell.md)-based table views, it is required to call [beginUpdates()](beginupdates%28%29.md) if you want to animate the [insertRows(at:withAnimation:)](insertrows%28at_withanimation_%29.md), [removeRows(at:withAnimation:)](removerows%28at_withanimation_%29.md), and [moveRow(at:to:)](moverow%28at_to_%29.md).

## See Also

### Related Documentation

- [removeTableColumn(\_:)](removetablecolumn%28__%29.md): Removes the specified column from the table view.

### Updating the Table View Arrangement

- [endUpdates()](endupdates%28%29.md): Ends the group of updates for the table view.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [insertRows(at:withAnimation:)](insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [removeRows(at:withAnimation:)](removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [row(for:)](row%28for_%29.md): Returns the index of the row for the specified view.
- [column(for:)](column%28for_%29.md): Returns the column index for the specified view.

# beginUpdates (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Begins a group of updates for the table view.

## Declaration

```objectivec
- (void) beginUpdates;
```

<a id="Discussion"></a>

## Discussion

For [NSView](../nsview.md)-based table views, multiple row changes—that is, insertions, deletions, and moves—are animated simultaneously by surrounding calls to those method calls with [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md). These methods are nestable.

The selected rows are maintained during the series of insertions, deletions, moves, and scrolling. If a selected row is deleted, a selection changed notification occurs after [removeRowsAtIndexes:withAnimation:](removerows%28at_withanimation_%29.md) is called.

It is not necessary to call [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md) if only one insertion, deletion, or move is occurring and the table view is an [NSView](../nsview.md)-based table view. When using an [NSCell](../nscell.md)-based table view, you must surround any insertion, deletion, or move in an update block for animations to occur.

The main reason for doing a batch update of changes to a table view is to avoid having the table animate unnecessarily.

Note that these methods should be called to reflect changes in your model; they do not make any underlying model changes.

> **Note**

>  For [NSCell](../nscell.md)-based table views, it is required to call [beginUpdates](beginupdates%28%29.md) if you want to animate the [insertRowsAtIndexes:withAnimation:](insertrows%28at_withanimation_%29.md), [removeRowsAtIndexes:withAnimation:](removerows%28at_withanimation_%29.md), and [moveRowAtIndex:toIndex:](moverow%28at_to_%29.md).

## See Also

### Related Documentation

- [removeTableColumn:](removetablecolumn%28__%29.md): Removes the specified column from the table view.

### Updating the Table View Arrangement

- [endUpdates](endupdates%28%29.md): Ends the group of updates for the table view.
- [moveRowAtIndex:toIndex:](moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [insertRowsAtIndexes:withAnimation:](insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [removeRowsAtIndexes:withAnimation:](removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [rowForView:](row%28for_%29.md): Returns the index of the row for the specified view.
- [columnForView:](column%28for_%29.md): Returns the column index for the specified view.
