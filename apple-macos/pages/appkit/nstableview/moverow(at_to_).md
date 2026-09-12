> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/moverow(at:to:)](https://developer.apple.com/documentation/appkit/nstableview/moverow(at:to:))

# moveRow(at:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Moves the specified row to the new row location using animation.

## Declaration

```swift
func moveRow(at oldIndex: Int, to newIndex: Int)
```

## Parameters

- `oldIndex`: Initial row index.
- `newIndex`: New row index.

<a id="Discussion"></a>

## Discussion

This is similar to removing a row at `oldIndex` and inserting it at `newIndex`, except the same view is used and simply has its position updated to the new location.

Changes happen incrementally as they are sent to the table, so as soon as this method is called the row can be considered moved. However the underlying view is not moved until [endUpdates()](endupdates%28%29.md) has been called.

This method can be called multiple times within the same [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md) block.

> **Note**

>  [NSCell](../nscell.md)-based table views must first call [beginUpdates()](beginupdates%28%29.md) before calling this method.

## See Also

### Updating the Table View Arrangement

- [beginUpdates()](beginupdates%28%29.md): Begins a group of updates for the table view.
- [endUpdates()](endupdates%28%29.md): Ends the group of updates for the table view.
- [insertRows(at:withAnimation:)](insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [removeRows(at:withAnimation:)](removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [row(for:)](row%28for_%29.md): Returns the index of the row for the specified view.
- [column(for:)](column%28for_%29.md): Returns the column index for the specified view.

# moveRowAtIndex:toIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Moves the specified row to the new row location using animation.

## Declaration

```objectivec
- (void) moveRowAtIndex:(NSInteger) oldIndex toIndex:(NSInteger) newIndex;
```

## Parameters

- `oldIndex`: Initial row index.
- `newIndex`: New row index.

<a id="Discussion"></a>

## Discussion

This is similar to removing a row at `oldIndex` and inserting it at `newIndex`, except the same view is used and simply has its position updated to the new location.

Changes happen incrementally as they are sent to the table, so as soon as this method is called the row can be considered moved. However the underlying view is not moved until [endUpdates](endupdates%28%29.md) has been called.

This method can be called multiple times within the same [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md) block.

> **Note**

>  [NSCell](../nscell.md)-based table views must first call [beginUpdates](beginupdates%28%29.md) before calling this method.

## See Also

### Updating the Table View Arrangement

- [beginUpdates](beginupdates%28%29.md): Begins a group of updates for the table view.
- [endUpdates](endupdates%28%29.md): Ends the group of updates for the table view.
- [insertRowsAtIndexes:withAnimation:](insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [removeRowsAtIndexes:withAnimation:](removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [rowForView:](row%28for_%29.md): Returns the index of the row for the specified view.
- [columnForView:](column%28for_%29.md): Returns the column index for the specified view.
