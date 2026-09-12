> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/tableview(_:namesofpromisedfilesdroppedatdestination:fordraggedrowswith:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview(_:namesofpromisedfilesdroppedatdestination:fordraggedrowswith:))

# tableView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.

> Use NSFilePromiseReceiver objects instead

## Declaration

```swift
optional func tableView(_ tableView: NSTableView, namesOfPromisedFilesDroppedAtDestination dropDestination: URL, forDraggedRowsWith indexSet: IndexSet) -> [String]
```

## Parameters

- `tableView`: The table view that sent the message.
- `dropDestination`: The drop location where the files are created.
- `indexSet`: The indexes of the items being dragged.

<a id="return-value"></a>

## Return Value

An array of filenames (not full paths) for the created files that the receiver promises to create.

<a id="Discussion"></a>

## Discussion

This method is called when a destination has accepted a promise drag.

For more information on file promise dragging, see documentation on the NSDraggingSource protocol and [namesOfPromisedFilesDropped(atDestination:)](../nsdragginginfo/namesofpromisedfilesdropped%28atdestination_%29.md).

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView(\_:acceptDrop:row:dropOperation:)](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView(\_:validateDrop:proposedRow:proposedDropOperation:)](tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView(\_:writeRowsWith:to:)](tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView(\_:draggingSession:willBeginAt:forRowIndexes:)](tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView(\_:updateDraggingItemsForDrag:)](tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
- [tableView(\_:draggingSession:endedAt:operation:)](tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.

# tableView:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.

> Use NSFilePromiseReceiver objects instead

## Declaration

```objectivec
- (NSArray<NSString *> *) tableView:(NSTableView *) tableView namesOfPromisedFilesDroppedAtDestination:(NSURL *) dropDestination forDraggedRowsWithIndexes:(NSIndexSet *) indexSet;
```

## Parameters

- `tableView`: The table view that sent the message.
- `dropDestination`: The drop location where the files are created.
- `indexSet`: The indexes of the items being dragged.

<a id="return-value"></a>

## Return Value

An array of filenames (not full paths) for the created files that the receiver promises to create.

<a id="Discussion"></a>

## Discussion

This method is called when a destination has accepted a promise drag.

For more information on file promise dragging, see documentation on the NSDraggingSource protocol and [namesOfPromisedFilesDroppedAtDestination:](../nsdragginginfo/namesofpromisedfilesdropped%28atdestination_%29.md).

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView:acceptDrop:row:dropOperation:](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView:validateDrop:proposedRow:proposedDropOperation:](tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView:writeRowsWithIndexes:toPasteboard:](tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView:draggingSession:willBeginAtPoint:forRowIndexes:](tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView:updateDraggingItemsForDrag:](tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
- [tableView:draggingSession:endedAtPoint:operation:](tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.
