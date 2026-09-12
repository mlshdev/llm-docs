> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/tableview(_:writerowswith:to:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview(_:writerowswith:to:))

# tableView(\_:writeRowsWith:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a Boolean value that indicates whether a drag operation is allowed.

> Use -tableView:pasteboardWriterForRow: instead

## Declaration

```swift
optional func tableView(_ tableView: NSTableView, writeRowsWith rowIndexes: IndexSet, to pboard: NSPasteboard) -> Bool
```

## Parameters

- `tableView`: The table view that sent the message.
- `rowIndexes`: An index set of row numbers that will be participating in the drag.
- `pboard`: The pasteboard to which to write the drag data.

<a id="return-value"></a>

## Return Value

`YES` if the drag operation is allowed, `NO` otherwise.

<a id="Discussion"></a>

## Discussion

Called by `aTableView` after it has been determined that a drag should begin, but before the drag has been started.

To refuse the drag, return [false](https://developer.apple.com/documentation/swift/false). To start a drag, return [true](https://developer.apple.com/documentation/swift/true) and place the drag data onto `pboard` (data, owner, and so on). The drag image and other drag-related information will be set up and provided by the table view once this call returns with [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView(\_:acceptDrop:row:dropOperation:)](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:)](tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView(\_:validateDrop:proposedRow:proposedDropOperation:)](tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView(\_:draggingSession:willBeginAt:forRowIndexes:)](tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView(\_:updateDraggingItemsForDrag:)](tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
- [tableView(\_:draggingSession:endedAt:operation:)](tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.

# tableView:writeRowsWithIndexes:toPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a Boolean value that indicates whether a drag operation is allowed.

> Use -tableView:pasteboardWriterForRow: instead

## Declaration

```objectivec
- (BOOL) tableView:(NSTableView *) tableView writeRowsWithIndexes:(NSIndexSet *) rowIndexes toPasteboard:(NSPasteboard *) pboard;
```

## Parameters

- `tableView`: The table view that sent the message.
- `rowIndexes`: An index set of row numbers that will be participating in the drag.
- `pboard`: The pasteboard to which to write the drag data.

<a id="return-value"></a>

## Return Value

`YES` if the drag operation is allowed, `NO` otherwise.

<a id="Discussion"></a>

## Discussion

Called by `aTableView` after it has been determined that a drag should begin, but before the drag has been started.

To refuse the drag, return [false](https://developer.apple.com/documentation/swift/false). To start a drag, return [true](https://developer.apple.com/documentation/swift/true) and place the drag data onto `pboard` (data, owner, and so on). The drag image and other drag-related information will be set up and provided by the table view once this call returns with [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView:acceptDrop:row:dropOperation:](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:](tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView:validateDrop:proposedRow:proposedDropOperation:](tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView:draggingSession:willBeginAtPoint:forRowIndexes:](tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView:updateDraggingItemsForDrag:](tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
- [tableView:draggingSession:endedAtPoint:operation:](tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.
