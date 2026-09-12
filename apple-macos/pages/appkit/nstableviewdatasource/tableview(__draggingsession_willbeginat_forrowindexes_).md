> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/tableview(_:draggingsession:willbeginat:forrowindexes:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview(_:draggingsession:willbeginat:forrowindexes:))

# tableView(\_:draggingSession:willBeginAt:forRowIndexes:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implement this method to determine when a dragging session will begin.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, draggingSession session: NSDraggingSession, willBeginAt screenPoint: NSPoint, forRowIndexes rowIndexes: IndexSet)
```

## Parameters

- `tableView`: The table view.
- `session`: The dragging session.
- `screenPoint`: The initial drag location in screen coordinates.
- `rowIndexes`: The indexes of the rows to be dragged, excluding rows that were not dragged due to [tableView(\_:pasteboardWriterForRow:)](tableview%28__pasteboardwriterforrow_%29.md) returning `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to know when the dragging session is about to begin and to potentially modify the dragging session.

The dragged item order will directly match the pasteboard writer array used to begin the dragging session with the `NSView` method [beginDraggingSession(with:event:source:)](../nsview/begindraggingsession%28with_event_source_%29.md). Hence, the order is deterministic, and can be used in [tableView(\_:acceptDrop:row:dropOperation:)](tableview%28__acceptdrop_row_dropoperation_%29.md) when enumerating the [NSDraggingInfo](../nsdragginginfo.md) pasteboard classes.

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView(\_:acceptDrop:row:dropOperation:)](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:)](tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView(\_:validateDrop:proposedRow:proposedDropOperation:)](tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView(\_:writeRowsWith:to:)](tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView(\_:updateDraggingItemsForDrag:)](tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
- [tableView(\_:draggingSession:endedAt:operation:)](tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.

# tableView:draggingSession:willBeginAtPoint:forRowIndexes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implement this method to determine when a dragging session will begin.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView draggingSession:(NSDraggingSession *) session willBeginAtPoint:(NSPoint) screenPoint forRowIndexes:(NSIndexSet *) rowIndexes;
```

## Parameters

- `tableView`: The table view.
- `session`: The dragging session.
- `screenPoint`: The initial drag location in screen coordinates.
- `rowIndexes`: The indexes of the rows to be dragged, excluding rows that were not dragged due to [tableView:pasteboardWriterForRow:](tableview%28__pasteboardwriterforrow_%29.md) returning `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to know when the dragging session is about to begin and to potentially modify the dragging session.

The dragged item order will directly match the pasteboard writer array used to begin the dragging session with the `NSView` method [beginDraggingSessionWithItems:event:source:](../nsview/begindraggingsession%28with_event_source_%29.md). Hence, the order is deterministic, and can be used in [tableView:acceptDrop:row:dropOperation:](tableview%28__acceptdrop_row_dropoperation_%29.md) when enumerating the [NSDraggingInfo](../nsdragginginfo.md) pasteboard classes.

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView:acceptDrop:row:dropOperation:](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:](tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView:validateDrop:proposedRow:proposedDropOperation:](tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView:writeRowsWithIndexes:toPasteboard:](tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView:updateDraggingItemsForDrag:](tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
- [tableView:draggingSession:endedAtPoint:operation:](tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.
