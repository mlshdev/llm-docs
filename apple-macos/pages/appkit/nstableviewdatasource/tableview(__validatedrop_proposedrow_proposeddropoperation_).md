> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/tableview(_:validatedrop:proposedrow:proposeddropoperation:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview(_:validatedrop:proposedrow:proposeddropoperation:))

# tableView(\_:validateDrop:proposedRow:proposedDropOperation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Used by `aTableView` to determine a valid drop target.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, validateDrop info: any NSDraggingInfo, proposedRow row: Int, proposedDropOperation dropOperation: NSTableView.DropOperation) -> NSDragOperation
```

## Parameters

- `tableView`: The table view that sent the message.
- `info`: An object that contains more information about this dragging operation.
- `row`: The index of the proposed target row.
- `dropOperation`: The type of dragging operation proposed.

<a id="return-value"></a>

## Return Value

The dragging operation the data source will perform.

<a id="Discussion"></a>

## Discussion

The data source may retarget a drop by calling [setDropRow(\_:dropOperation:)](../nstableview/setdroprow%28__dropoperation_%29.md) and returning something other than `NSDragOperationNone`. A data source might retarget for various reasons, such as to provide better visual feedback when inserting into a sorted position.

To propose a drop on the second row, `row` would be 2 and `operation` would be `NSTableViewDropOn`. To propose a drop below the last row, `row` would be `[aTableView numberOfRows]` and `operation` would be `NSTableViewDropAbove`.

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView(\_:acceptDrop:row:dropOperation:)](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:)](tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView(\_:writeRowsWith:to:)](tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView(\_:draggingSession:willBeginAt:forRowIndexes:)](tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView(\_:updateDraggingItemsForDrag:)](tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
- [tableView(\_:draggingSession:endedAt:operation:)](tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.

# tableView:validateDrop:proposedRow:proposedDropOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Used by `aTableView` to determine a valid drop target.

## Declaration

```objectivec
- (NSDragOperation) tableView:(NSTableView *) tableView validateDrop:(id<NSDraggingInfo>) info proposedRow:(NSInteger) row proposedDropOperation:(NSTableViewDropOperation) dropOperation;
```

## Parameters

- `tableView`: The table view that sent the message.
- `info`: An object that contains more information about this dragging operation.
- `row`: The index of the proposed target row.
- `dropOperation`: The type of dragging operation proposed.

<a id="return-value"></a>

## Return Value

The dragging operation the data source will perform.

<a id="Discussion"></a>

## Discussion

The data source may retarget a drop by calling [setDropRow:dropOperation:](../nstableview/setdroprow%28__dropoperation_%29.md) and returning something other than `NSDragOperationNone`. A data source might retarget for various reasons, such as to provide better visual feedback when inserting into a sorted position.

To propose a drop on the second row, `row` would be 2 and `operation` would be `NSTableViewDropOn`. To propose a drop below the last row, `row` would be `[aTableView numberOfRows]` and `operation` would be `NSTableViewDropAbove`.

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView:acceptDrop:row:dropOperation:](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:](tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView:writeRowsWithIndexes:toPasteboard:](tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView:draggingSession:willBeginAtPoint:forRowIndexes:](tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView:updateDraggingItemsForDrag:](tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
- [tableView:draggingSession:endedAtPoint:operation:](tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.
