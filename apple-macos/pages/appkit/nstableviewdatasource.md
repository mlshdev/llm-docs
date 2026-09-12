> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource](https://developer.apple.com/documentation/appkit/nstableviewdatasource)

# NSTableViewDataSource (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a table view uses to provide data to a table view and to allow the editing of the table view’s data source object.

## Declaration

```swift
protocol NSTableViewDataSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Some of the methods in this protocol, such as [tableView(\_:objectValueFor:row:)](nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md) and [numberOfRows(in:)](nstableviewdatasource/numberofrows%28in_%29.md) along with other methods that return data, are called frequently, so they must be efficient.

> **Note**

>  View-based table views must not use the [tableView(\_:setObjectValue:for:row:)](nstableviewdatasource/tableview%28__setobjectvalue_for_row_%29.md) method for setting values. Instead the views must explicitly set the values for the fields, or use Cocoa bindings. Likewise, use target/action for editing. For more information, see [NSTableView](nstableview.md).

If you’re not using Cocoa bindings to provide data to the table view, the following methods are required:

- [numberOfRows(in:)](nstableviewdatasource/numberofrows%28in_%29.md)
- [tableView(\_:objectValueFor:row:)](nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md)
- [tableView(\_:setObjectValue:for:row:)](nstableviewdatasource/tableview%28__setobjectvalue_for_row_%29.md) (cell-based tables only)

For more information, see [Cocoa Bindings](cocoa-bindings.md).

## Topics

### Getting Values

- [numberOfRows(in:)](nstableviewdatasource/numberofrows%28in_%29.md): Returns the number of records managed for `aTableView` by the data source object.
- [tableView(\_:objectValueFor:row:)](nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md): Called by the table view to return the data object associated with the specified row and column.

### Setting Values

- [tableView(\_:setObjectValue:for:row:)](nstableviewdatasource/tableview%28__setobjectvalue_for_row_%29.md): Sets the data object for an item in the specified row and column.

### Implementing Pasteboard Support

- [tableView(\_:pasteboardWriterForRow:)](nstableviewdatasource/tableview%28__pasteboardwriterforrow_%29.md): Called to allow the table to support multiple item dragging.

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView(\_:acceptDrop:row:dropOperation:)](nstableviewdatasource/tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:)](nstableviewdatasource/tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView(\_:validateDrop:proposedRow:proposedDropOperation:)](nstableviewdatasource/tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView(\_:writeRowsWith:to:)](nstableviewdatasource/tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView(\_:draggingSession:willBeginAt:forRowIndexes:)](nstableviewdatasource/tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView(\_:updateDraggingItemsForDrag:)](nstableviewdatasource/tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
- [tableView(\_:draggingSession:endedAt:operation:)](nstableviewdatasource/tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.

### Sorting

- [tableView(\_:sortDescriptorsDidChange:)](nstableviewdatasource/tableview%28__sortdescriptorsdidchange_%29.md): Called by `aTableView` to indicate that sorting may need to be done.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTableViewDiffableDataSource](nstableviewdiffabledatasource-c5gl.md)
- [NSTableViewDiffableDataSourceReference](nstableviewdiffabledatasourcereference.md)

## See Also

### Management

- [NSTableViewDelegate](nstableviewdelegate.md): A set of optional methods you implement in a table view delegate to customize the behavior of the table view.
- [NSTableViewDiffableDataSource](nstableviewdiffabledatasource-c5gl.md): The object you use to manage data and provide items for a table view.

# NSTableViewDataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a table view uses to provide data to a table view and to allow the editing of the table view’s data source object.

## Declaration

```objectivec
@protocol NSTableViewDataSource <NSObject>
```

<a id="overview"></a>

## Overview

Some of the methods in this protocol, such as [tableView:objectValueForTableColumn:row:](nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md) and [numberOfRowsInTableView:](nstableviewdatasource/numberofrows%28in_%29.md) along with other methods that return data, are called frequently, so they must be efficient.

> **Note**

>  View-based table views must not use the [tableView:setObjectValue:forTableColumn:row:](nstableviewdatasource/tableview%28__setobjectvalue_for_row_%29.md) method for setting values. Instead the views must explicitly set the values for the fields, or use Cocoa bindings. Likewise, use target/action for editing. For more information, see [NSTableView](nstableview.md).

If you’re not using Cocoa bindings to provide data to the table view, the following methods are required:

- [numberOfRowsInTableView:](nstableviewdatasource/numberofrows%28in_%29.md)
- [tableView:objectValueForTableColumn:row:](nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md)
- [tableView:setObjectValue:forTableColumn:row:](nstableviewdatasource/tableview%28__setobjectvalue_for_row_%29.md) (cell-based tables only)

For more information, see [Cocoa Bindings](cocoa-bindings.md).

## Topics

### Getting Values

- [numberOfRowsInTableView:](nstableviewdatasource/numberofrows%28in_%29.md): Returns the number of records managed for `aTableView` by the data source object.
- [tableView:objectValueForTableColumn:row:](nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md): Called by the table view to return the data object associated with the specified row and column.

### Setting Values

- [tableView:setObjectValue:forTableColumn:row:](nstableviewdatasource/tableview%28__setobjectvalue_for_row_%29.md): Sets the data object for an item in the specified row and column.

### Implementing Pasteboard Support

- [tableView:pasteboardWriterForRow:](nstableviewdatasource/tableview%28__pasteboardwriterforrow_%29.md): Called to allow the table to support multiple item dragging.

### Drag and Drop

- [Supporting Table View Drag and Drop Through File Promises](supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [tableView:acceptDrop:row:dropOperation:](nstableviewdatasource/tableview%28__acceptdrop_row_dropoperation_%29.md): Called by `aTableView` when the mouse button is released over a table view that previously decided to allow a drop.
- [tableView:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:](nstableviewdatasource/tableview%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_%29.md): Deprecated. Returns an array of filenames that represent the `indexSet` rows for a drag to `dropDestination`.
- [tableView:validateDrop:proposedRow:proposedDropOperation:](nstableviewdatasource/tableview%28__validatedrop_proposedrow_proposeddropoperation_%29.md): Used by `aTableView` to determine a valid drop target.
- [tableView:writeRowsWithIndexes:toPasteboard:](nstableviewdatasource/tableview%28__writerowswith_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
- [tableView:draggingSession:willBeginAtPoint:forRowIndexes:](nstableviewdatasource/tableview%28__draggingsession_willbeginat_forrowindexes_%29.md): Implement this method to determine when a dragging session will begin.
- [tableView:updateDraggingItemsForDrag:](nstableviewdatasource/tableview%28__updatedraggingitemsfordrag_%29.md): Implement this method to allow the table to update dragging items as they are dragged over a view.
- [tableView:draggingSession:endedAtPoint:operation:](nstableviewdatasource/tableview%28__draggingsession_endedat_operation_%29.md): Implement this method to determine when a dragging session has ended.

### Sorting

- [tableView:sortDescriptorsDidChange:](nstableviewdatasource/tableview%28__sortdescriptorsdidchange_%29.md): Called by `aTableView` to indicate that sorting may need to be done.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTableViewDiffableDataSource](nstableviewdiffabledatasourcereference.md)

## See Also

### Management

- [NSTableViewDelegate](nstableviewdelegate.md): A set of optional methods you implement in a table view delegate to customize the behavior of the table view.
- [NSTableViewDiffableDataSource](nstableviewdiffabledatasourcereference.md): The object you use to manage data and provide items for a table view.
