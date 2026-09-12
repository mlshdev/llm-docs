> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/tableview(_:updatedraggingitemsfordrag:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview(_:updatedraggingitemsfordrag:))

# tableView(\_:updateDraggingItemsForDrag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implement this method to allow the table to update dragging items as they are dragged over a view.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, updateDraggingItemsForDrag draggingInfo: any NSDraggingInfo)
```

## Parameters

- `tableView`: The table view.
- `draggingInfo`: The dragging information.

<a id="Discussion"></a>

## Discussion

Required for multi-image dragging. Typically this will involve invoking [enumerateDraggingItems(options:for:classes:searchOptions:using:)](../nsdragginginfo/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md) on the `draggingInfo` parameter value and setting the `draggingItem` object’s [imageComponentsProvider](../nsdraggingitem/imagecomponentsprovider.md) to a proper image based on the content.

For view-based table views, you can use the `NSTableCellView` method [draggingImageComponents](../nstablecellview/draggingimagecomponents.md). For cell-based tables, use the `NSCell` method [draggingImageComponents(withFrame:in:)](../nscell/draggingimagecomponents%28withframe_in_%29.md).

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView(\_:acceptDrop:row:dropOperation:)](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:)](tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView(\_:validateDrop:proposedRow:proposedDropOperation:)](tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView(\_:writeRowsWith:to:)](tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView(\_:draggingSession:willBeginAt:forRowIndexes:)](tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView(\_:draggingSession:endedAt:operation:)](tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.

# tableView:updateDraggingItemsForDrag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implement this method to allow the table to update dragging items as they are dragged over a view.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView updateDraggingItemsForDrag:(id<NSDraggingInfo>) draggingInfo;
```

## Parameters

- `tableView`: The table view.
- `draggingInfo`: The dragging information.

<a id="Discussion"></a>

## Discussion

Required for multi-image dragging. Typically this will involve invoking [enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:](../nsdragginginfo/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md) on the `draggingInfo` parameter value and setting the `draggingItem` object’s [imageComponentsProvider](../nsdraggingitem/imagecomponentsprovider.md) to a proper image based on the content.

For view-based table views, you can use the `NSTableCellView` method [draggingImageComponents](../nstablecellview/draggingimagecomponents.md). For cell-based tables, use the `NSCell` method [draggingImageComponentsWithFrame:inView:](../nscell/draggingimagecomponents%28withframe_in_%29.md).

## See Also

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](../supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView:acceptDrop:row:dropOperation:](tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:](tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView:validateDrop:proposedRow:proposedDropOperation:](tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView:writeRowsWithIndexes:toPasteboard:](tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView:draggingSession:willBeginAtPoint:forRowIndexes:](tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView:draggingSession:endedAtPoint:operation:](tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.
