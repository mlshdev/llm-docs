> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/tableview(_:draggingsession:endedat:operation:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview(_:draggingsession:endedat:operation:))

# tableView(\_:draggingSession:endedAt:operation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implement this method to determine when a dragging session has ended.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, draggingSession session: NSDraggingSession, endedAt screenPoint: NSPoint, operation: NSDragOperation)
```

## Parameters

- `tableView`: The table view.
- `session`: The dragging session.
- `screenPoint`: The ending drag location in screen coordinates.
- `operation`: The drag operation. See [NSDragOperation](../nsdragoperation.md) for supported values.

<a id="Discussion"></a>

## Discussion

This delegate method can be used to determine when the dragging source operation ended at a specific location, such as the trash, by checking for an operation of [delete](../nsdragoperation/delete.md).

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView(\_:acceptDrop:row:dropOperation:)](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:)](tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView(\_:validateDrop:proposedRow:proposedDropOperation:)](tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView(\_:writeRowsWith:to:)](tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView(\_:draggingSession:willBeginAt:forRowIndexes:)](tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView(\_:updateDraggingItemsForDrag:)](tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.

# tableView:draggingSession:endedAtPoint:operation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implement this method to determine when a dragging session has ended.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView draggingSession:(NSDraggingSession *) session endedAtPoint:(NSPoint) screenPoint operation:(NSDragOperation) operation;
```

## Parameters

- `tableView`: The table view.
- `session`: The dragging session.
- `screenPoint`: The ending drag location in screen coordinates.
- `operation`: The drag operation. See [NSDragOperation](../nsdragoperation.md) for supported values.

<a id="Discussion"></a>

## Discussion

This delegate method can be used to determine when the dragging source operation ended at a specific location, such as the trash, by checking for an operation of [NSDragOperationDelete](../nsdragoperation/delete.md).

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView:acceptDrop:row:dropOperation:](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:](tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView:validateDrop:proposedRow:proposedDropOperation:](tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView:writeRowsWithIndexes:toPasteboard:](tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView:draggingSession:willBeginAtPoint:forRowIndexes:](tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView:updateDraggingItemsForDrag:](tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
