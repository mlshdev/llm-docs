> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview](https://developer.apple.com/documentation/appkit/nstableview)

# NSTableView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A set of related records, displayed in rows that represent individual records and columns that represent the attributes of those records.

## Declaration

```swift
class NSTableView
```

<a id="overview"></a>

## Overview

Table views are displayed in scroll views. Beginning with macOS v10.7, you can use [NSView](nsview.md) objects (most commonly customized [NSTableCellView](nstablecellview.md) objects) instead of cells for specifying rows and columns. You can still use [NSCell](nscell.md) objects for each row and column item if you prefer.

A table view does not store its own data; it retrieves data values as needed from a data source to which it has a weak reference. You should not, therefore, directly set data values programmatically in the table view; instead, modify the values in the data source and allow the changes to be reflected in the table view. To learn about the methods that an `NSTableView` object uses to provide and access the contents of its data source object, see [NSTableViewDataSource](nstableviewdatasource.md).

To customize a table view’s behavior without subclassing `NSTableView`, use the methods defined by the `NSTableViewDelegate` protocol. For example, the delegate supports table column management, type-to-select functionality, row selection and editing, custom tracking, and custom views for individual columns and rows. To learn more about the table view delegate, see [NSTableViewDelegate](nstableviewdelegate.md).

> **Important**

>  It’s possible that your data source methods for populating the table view may be called before [awakeFromNib()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakefromnib%28%29) is called if the data source is specified in Interface Builder. You should defend against this by having the data source’s [numberOfRows(in:)](nstableviewdatasource/numberofrows%28in_%29.md) method return `0` for the number of rows when the data source has not yet been configured. In [awakeFromNib()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakefromnib%28%29), when the data source is initialized you should always call `reloadData` on the table view.

<a id="Subclassing"></a>

### Subclassing

Subclassing `NSTableView` is usually not necessary. Instead, you customize the table view using a delegate object (an object conforming to the [NSTableViewDelegate](nstableviewdelegate.md) protocol) and a data source object (conforming to the [NSTableViewDataSource](nstableviewdatasource.md) protocol), or by subclassing one of the following subcomponents: cells (when using [NSCell](nscell.md)-based table views), the row cell view or the row view (when using [NSView](nsview.md)-based table views), the table column class, or table column header classes.

<a id="Enabling-the-Table-View"></a>

### Enabling the Table View

Use the [isEnabled](nscontrol/isenabled.md) property to enable or disable the table view, which the view inherits from [NSControl](nscontrol.md). This property affects the visual appearance of the table view differently depending on whether you use a view- or a cell-based table view. When you change the property’s value for a cell-based table view, the system manages the visual appearance of that table view’s rows, and updates them to a state that reflects the value. Because view-based table views permit complex items in their cells, it’s the developer’s responsibility to update each cell’s appearance as appropriate.

## Topics

### Creating a Table

- [init(coder:)](nstableview/init%28coder_%29.md)
- [init(frame:)](nstableview/init%28frame_%29.md)

### Managing the Table’s Data

- [dataSource](nstableview/datasource.md): The object that provides the data displayed by the table view.
- [usesStaticContents](nstableview/usesstaticcontents.md): A Boolean value indicating whether the table uses static data.
- [reloadData()](nstableview/reloaddata%28%29.md): Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.
- [reloadData(forRowIndexes:columnIndexes:)](nstableview/reloaddata%28forrowindexes_columnindexes_%29.md): Reloads the data for only the specified rows and columns.

### Creating Views to Display

- [makeView(withIdentifier:owner:)](nstableview/makeview%28withidentifier_owner_%29.md): Returns a new or existing view with the specified identifier.
- [rowView(atRow:makeIfNecessary:)](nstableview/rowview%28atrow_makeifnecessary_%29.md): Returns a row view at the specified index, creating one if necessary.
- [view(atColumn:row:makeIfNecessary:)](nstableview/view%28atcolumn_row_makeifnecessary_%29.md): Returns a view at the specified row and column indexes, creating one if necessary.
- [NSUserInterfaceItemIdentifier](nsuserinterfaceitemidentifier.md)

### Updating the Table View Arrangement

- [beginUpdates()](nstableview/beginupdates%28%29.md): Begins a group of updates for the table view.
- [endUpdates()](nstableview/endupdates%28%29.md): Ends the group of updates for the table view.
- [moveRow(at:to:)](nstableview/moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [insertRows(at:withAnimation:)](nstableview/insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [removeRows(at:withAnimation:)](nstableview/removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [row(for:)](nstableview/row%28for_%29.md): Returns the index of the row for the specified view.
- [column(for:)](nstableview/column%28for_%29.md): Returns the column index for the specified view.

### NSView-Based Table Nib File Registration

- [register(\_:forIdentifier:)](nstableview/register%28__foridentifier_%29.md): Registers a NIB for the specified identifier, so that view-based table views can use it to instantiate views.
- [registeredNibsByIdentifier](nstableview/registerednibsbyidentifier.md): The dictionary of all registered nib files for view-based table view identifiers.

### Target-action Behavior

- [doubleAction](nstableview/doubleaction.md): The message sent to the table view’s target when the user double-clicks a cell or column header.
- [clickedColumn](nstableview/clickedcolumn.md): The index of the column the user clicked.
- [clickedRow](nstableview/clickedrow.md): The index of the row the user clicked.

### Configuring Behavior

- [allowsColumnReordering](nstableview/allowscolumnreordering.md): A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.
- [allowsColumnResizing](nstableview/allowscolumnresizing.md): A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.
- [allowsMultipleSelection](nstableview/allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [allowsEmptySelection](nstableview/allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.
- [allowsColumnSelection](nstableview/allowscolumnselection.md): A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.
- [usesAutomaticRowHeights](nstableview/usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.

### Setting Display Attributes

- [intercellSpacing](nstableview/intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](nstableview/rowheight.md): The height of each row in the table.
- [backgroundColor](nstableview/backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](nstableview/usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](nstableview/style-swift.property.md): The style that the table view uses.
- [effectiveStyle](nstableview/effectivestyle.md): The effective style that the table uses.
- [NSTableView.Style](nstableview/style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](nstableview/selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](nstableview/gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](nstableview/gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImage(in:)](nstableview/indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage(\_:in:)](nstableview/setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.

### Getting and Setting Row Size Styles

- [effectiveRowSizeStyle](nstableview/effectiverowsizestyle.md): The effective row size style for the table.
- [rowSizeStyle](nstableview/rowsizestyle-swift.property.md): The row size style (small, medium, large, or custom) used by the table view.

### Column Management

- [addTableColumn(\_:)](nstableview/addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [removeTableColumn(\_:)](nstableview/removetablecolumn%28__%29.md): Removes the specified column from the table view.
- [moveColumn(\_:toColumn:)](nstableview/movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.
- [tableColumns](nstableview/tablecolumns.md): An array containing the current table column objects.
- [column(withIdentifier:)](nstableview/column%28withidentifier_%29.md): Returns the index of the first column in the table view whose identifier is equal to the specified identifier.
- [tableColumn(withIdentifier:)](nstableview/tablecolumn%28withidentifier_%29.md): Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.

### Selecting Columns and Rows

- [selectColumnIndexes(\_:byExtendingSelection:)](nstableview/selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectedColumn](nstableview/selectedcolumn.md): The index of the last selected column (or the last column added to the selection).
- [selectedColumnIndexes](nstableview/selectedcolumnindexes.md): An index set containing the indexes of the selected columns.
- [deselectColumn(\_:)](nstableview/deselectcolumn%28__%29.md): Deselects the column at the specified index if it’s selected.
- [numberOfSelectedColumns](nstableview/numberofselectedcolumns.md): The number of selected columns.
- [isColumnSelected(\_:)](nstableview/iscolumnselected%28__%29.md): Returns a Boolean value that indicates whether the column at the specified index is selected.
- [selectRowIndexes(\_:byExtendingSelection:)](nstableview/selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.
- [selectedRow](nstableview/selectedrow.md): The index of the last selected row (or the last row added to the selection).
- [selectedRowIndexes](nstableview/selectedrowindexes.md): An index set containing the indexes of the selected rows.
- [deselectRow(\_:)](nstableview/deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [numberOfSelectedRows](nstableview/numberofselectedrows.md): The number of selected rows.
- [isRowSelected(\_:)](nstableview/isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [selectAll(\_:)](nstableview/selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll(\_:)](nstableview/deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.

### Enumerating Table Rows

- [enumerateAvailableRowViews(\_:)](nstableview/enumerateavailablerowviews%28__%29.md): Allows the enumeration of all the table rows that are known to the table view.

### Managing Type Select

- [allowsTypeSelect](nstableview/allowstypeselect.md): A Boolean value indicating whether the table view allows the user to type characters to select rows.

### Table Dimensions

- [numberOfColumns](nstableview/numberofcolumns.md): The number of columns in the table.
- [numberOfRows](nstableview/numberofrows.md): The number of rows in the table.

### Getting and Setting Floating Rows

- [floatsGroupRows](nstableview/floatsgrouprows.md): A Boolean value indicating whether the table view draws grouped rows as if they are floating.

### Editing Cells

- [editColumn(\_:row:with:select:)](nstableview/editcolumn%28__row_with_select_%29.md): Edits the cell at the specified column and row using the specified event and selection behavior.
- [editedColumn](nstableview/editedcolumn.md): The index of the column being edited.
- [editedRow](nstableview/editedrow.md): The index of the row being edited.

### Adding and Deleting Row Views

- [didAdd(\_:forRow:)](nstableview/didadd%28__forrow_%29.md): Invoked when a row view is added to the table.
- [didRemove(\_:forRow:)](nstableview/didremove%28__forrow_%29.md): Invoked when a row view is removed from the table.

### Setting Auxiliary Views

- [headerView](nstableview/headerview.md): The view object used to draw headers over columns.
- [cornerView](nstableview/cornerview.md): The view used to draw the area to the right of the column headers and above the vertical scroller of the enclosing scroll view.

### Layout Support

- [userInterfaceLayoutDirection](nstableview/userinterfacelayoutdirection.md): The layout direction of the user interface.
- [rect(ofColumn:)](nstableview/rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.
- [rect(ofRow:)](nstableview/rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.
- [rows(in:)](nstableview/rows%28in_%29.md): Returns a range of indexes for the rows that lie wholly or partially within the vertical boundaries of the specified rectangle.
- [columnIndexes(in:)](nstableview/columnindexes%28in_%29.md): Returns the indexes of the table view’s columns that intersect the specified rectangle.
- [column(at:)](nstableview/column%28at_%29.md): Returns the index of the column the specified point lies in.
- [row(at:)](nstableview/row%28at_%29.md): Returns the index of the row the specified point lies in.
- [frameOfCell(atColumn:row:)](nstableview/frameofcell%28atcolumn_row_%29.md): Returns a rectangle locating the cell that lies at the intersection of the specified column and row.
- [columnAutoresizingStyle](nstableview/columnautoresizingstyle-swift.property.md): The table view’s column autoresizing style.
- [sizeLastColumnToFit()](nstableview/sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.
- [noteNumberOfRowsChanged()](nstableview/notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [tile()](nstableview/tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit()](nstableview/sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRows(withIndexesChanged:)](nstableview/noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.

### Drawing

- [drawRow(\_:clipRect:)](nstableview/drawrow%28__cliprect_%29.md): Draws the cells for the row at `rowIndex` in the columns that intersect `clipRect`.
- [drawGrid(inClipRect:)](nstableview/drawgrid%28incliprect_%29.md): Draws the grid lines within the supplied rectangle.
- [highlightSelection(inClipRect:)](nstableview/highlightselection%28incliprect_%29.md): Highlights the region of the table view in the specified rectangle.
- [drawBackground(inClipRect:)](nstableview/drawbackground%28incliprect_%29.md): Draws the background of the table view in the clip rect specified by the rectangle.

### Scrolling

- [scrollRowToVisible(\_:)](nstableview/scrollrowtovisible%28__%29.md): Scrolls the view so the specified row is visible.
- [scrollColumnToVisible(\_:)](nstableview/scrollcolumntovisible%28__%29.md): Scrolls the view so the specified column is visible.

### Table Column State Persistence

- [autosaveTableColumns](nstableview/autosavetablecolumns.md): A Boolean value indicating whether the order and width of the table view’s columns are automatically saved.
- [autosaveName](nstableview/autosavename-swift.property.md): The name under which table information is automatically saved.
- [NSTableView.AutosaveName](nstableview/autosavename-swift.typealias.md)

### Accessing the Delegate

- [delegate](nstableview/delegate.md): The table view’s delegate.

### Highlightable Column Headers

- [highlightedTableColumn](nstableview/highlightedtablecolumn.md): The column highlighted in the table.

### Dragging

- [dragImageForRows(with:tableColumns:event:offset:)](nstableview/dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [canDragRows(with:at:)](nstableview/candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [setDraggingSourceOperationMask(\_:forLocal:)](nstableview/setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [verticalMotionCanBeginDrag](nstableview/verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [draggingDestinationFeedbackStyle](nstableview/draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
- [setDropRow(\_:dropOperation:)](nstableview/setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.

### Sorting

- [sortDescriptors](nstableview/sortdescriptors.md): The table view’s sort descriptors.

### Row Actions

- [rowActionsVisible](nstableview/rowactionsvisible.md): A Boolean value indicating whether a table row’s actions are visible.

### Hiding and Showing Table Rows

- [hideRows(at:withAnimation:)](nstableview/hiderows%28at_withanimation_%29.md): Hides the specified table rows.
- [unhideRows(at:withAnimation:)](nstableview/unhiderows%28at_withanimation_%29.md): Unhides the specified table rows.
- [hiddenRowIndexes](nstableview/hiddenrowindexes.md): The indexes of all hidden table rows.

### Deprecated Methods

- [focusedColumn()](nstableview/focusedcolumn%28%29.md): Deprecated. Returns the currently focused column.
- [setFocusedColumn(\_:)](nstableview/setfocusedcolumn%28__%29.md): Deprecated. Sets the currently focused column to the specified index.
- [shouldFocusCell(\_:atColumn:row:)](nstableview/shouldfocuscell%28__atcolumn_row_%29.md): Deprecated. Returns whether the fully prepared cell at the specified row and column can be made the focused cell.
- [performClickOnCell(atColumn:row:)](nstableview/performclickoncell%28atcolumn_row_%29.md): Deprecated. Performs a click action on the cell at the specified row and column.
- [preparedCell(atColumn:row:)](nstableview/preparedcell%28atcolumn_row_%29.md): Deprecated. Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.

### Constants

- [Specifying a Custom Row View in a Nib File](specifying-a-custom-row-view-in-a-nib-file.md): View-based table view instances use `NSTableViewRowKey` to identify the nib file containing the template row view. You can specify a custom row view (without any code) by associating this key with the appropriate nib name in Interface Builder.
- [NSTableView.DraggingDestinationFeedbackStyle](nstableview/draggingdestinationfeedbackstyle-swift.enum.md): These constants specify the drag styles displayed by the table view. They’re used by [draggingDestinationFeedbackStyle](nstableview/draggingdestinationfeedbackstyle-swift.property.md).
- [NSTableView.DropOperation](nstableview/dropoperation.md): `NSTableView` defines these constants to specify drop operations.
- [NSTableView.GridLineStyle](nstableview/gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](nstableview/gridstylemask.md) property. The mask can be either [NSTableViewGridNone](nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableView.ColumnAutoresizingStyle](nstableview/columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](nstableview/columnautoresizingstyle-swift.property.md) property.
- [NSTableView.SelectionHighlightStyle](nstableview/selectionhighlightstyle-swift.enum.md): The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](nstableview/selectionhighlightstyle-swift.property.md) property.
- [NSTableView.AnimationOptions](nstableview/animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [NSTableView.RowSizeStyle](nstableview/rowsizestyle-swift.enum.md): The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](nstableview/effectiverowsizestyle.md) and [rowSizeStyle](nstableview/rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](nstablecellview.md) class’ property [rowSizeStyle](nstablecellview/rowsizestyle.md).
- [NSTableView.RowActionEdge](nstableview/rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.

### Notifications

- [columnDidMoveNotification](nstableview/columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSTableView` object.
- [columnDidResizeNotification](nstableview/columndidresizenotification.md): Posted whenever a column is resized in an `NSTableView` object.
- [selectionDidChangeNotification](nstableview/selectiondidchangenotification.md): Posted after an `NSTableView` object’s selection changes.
- [selectionIsChangingNotification](nstableview/selectionischangingnotification.md): Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).

### Structures

- [NSTableView.ColumnDidMoveMessage](nstableview/columndidmovemessage.md)
- [NSTableView.ColumnDidResizeMessage](nstableview/columndidresizemessage.md)
- [NSTableView.SelectionDidChangeMessage](nstableview/selectiondidchangemessage.md)
- [NSTableView.SelectionIsChangingMessage](nstableview/selectionischangingmessage.md)

### Instance Properties

- [appIntentsDataSource](nstableview/appintentsdatasource.md): The object acting as the table view’s data source for app entity identifiers that make a cell’s content discoverable by Apple Intelligence and Siri.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Inherited By

- [NSOutlineView](nsoutlineview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityGroup](nsaccessibilitygroup.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAccessibilityTable](nsaccessibilitytable.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSDraggingSource](nsdraggingsource.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTextDelegate](nstextdelegate.md)
- [NSTextViewDelegate](nstextviewdelegate.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Views

- [NSTableCellView](nstablecellview.md): A reusable container view shown for a particular cell in a table view that uses rows for content.

# NSTableView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A set of related records, displayed in rows that represent individual records and columns that represent the attributes of those records.

## Declaration

```objectivec
@interface NSTableView : NSControl
```

<a id="overview"></a>

## Overview

Table views are displayed in scroll views. Beginning with macOS v10.7, you can use [NSView](nsview.md) objects (most commonly customized [NSTableCellView](nstablecellview.md) objects) instead of cells for specifying rows and columns. You can still use [NSCell](nscell.md) objects for each row and column item if you prefer.

A table view does not store its own data; it retrieves data values as needed from a data source to which it has a weak reference. You should not, therefore, directly set data values programmatically in the table view; instead, modify the values in the data source and allow the changes to be reflected in the table view. To learn about the methods that an `NSTableView` object uses to provide and access the contents of its data source object, see [NSTableViewDataSource](nstableviewdatasource.md).

To customize a table view’s behavior without subclassing `NSTableView`, use the methods defined by the `NSTableViewDelegate` protocol. For example, the delegate supports table column management, type-to-select functionality, row selection and editing, custom tracking, and custom views for individual columns and rows. To learn more about the table view delegate, see [NSTableViewDelegate](nstableviewdelegate.md).

> **Important**

>  It’s possible that your data source methods for populating the table view may be called before [awakeFromNib](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakefromnib%28%29) is called if the data source is specified in Interface Builder. You should defend against this by having the data source’s [numberOfRowsInTableView:](nstableviewdatasource/numberofrows%28in_%29.md) method return `0` for the number of rows when the data source has not yet been configured. In [awakeFromNib](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakefromnib%28%29), when the data source is initialized you should always call `reloadData` on the table view.

<a id="Subclassing"></a>

### Subclassing

Subclassing `NSTableView` is usually not necessary. Instead, you customize the table view using a delegate object (an object conforming to the [NSTableViewDelegate](nstableviewdelegate.md) protocol) and a data source object (conforming to the [NSTableViewDataSource](nstableviewdatasource.md) protocol), or by subclassing one of the following subcomponents: cells (when using [NSCell](nscell.md)-based table views), the row cell view or the row view (when using [NSView](nsview.md)-based table views), the table column class, or table column header classes.

<a id="Enabling-the-Table-View"></a>

### Enabling the Table View

Use the [enabled](nscontrol/isenabled.md) property to enable or disable the table view, which the view inherits from [NSControl](nscontrol.md). This property affects the visual appearance of the table view differently depending on whether you use a view- or a cell-based table view. When you change the property’s value for a cell-based table view, the system manages the visual appearance of that table view’s rows, and updates them to a state that reflects the value. Because view-based table views permit complex items in their cells, it’s the developer’s responsibility to update each cell’s appearance as appropriate.

## Topics

### Creating a Table

- [initWithCoder:](nstableview/init%28coder_%29.md)
- [initWithFrame:](nstableview/init%28frame_%29.md)

### Managing the Table’s Data

- [dataSource](nstableview/datasource.md): The object that provides the data displayed by the table view.
- [usesStaticContents](nstableview/usesstaticcontents.md): A Boolean value indicating whether the table uses static data.
- [reloadData](nstableview/reloaddata%28%29.md): Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.
- [reloadDataForRowIndexes:columnIndexes:](nstableview/reloaddata%28forrowindexes_columnindexes_%29.md): Reloads the data for only the specified rows and columns.

### Creating Views to Display

- [makeViewWithIdentifier:owner:](nstableview/makeview%28withidentifier_owner_%29.md): Returns a new or existing view with the specified identifier.
- [rowViewAtRow:makeIfNecessary:](nstableview/rowview%28atrow_makeifnecessary_%29.md): Returns a row view at the specified index, creating one if necessary.
- [viewAtColumn:row:makeIfNecessary:](nstableview/view%28atcolumn_row_makeifnecessary_%29.md): Returns a view at the specified row and column indexes, creating one if necessary.
- [NSUserInterfaceItemIdentifier](nsuserinterfaceitemidentifier.md)

### Updating the Table View Arrangement

- [beginUpdates](nstableview/beginupdates%28%29.md): Begins a group of updates for the table view.
- [endUpdates](nstableview/endupdates%28%29.md): Ends the group of updates for the table view.
- [moveRowAtIndex:toIndex:](nstableview/moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [insertRowsAtIndexes:withAnimation:](nstableview/insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [removeRowsAtIndexes:withAnimation:](nstableview/removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [rowForView:](nstableview/row%28for_%29.md): Returns the index of the row for the specified view.
- [columnForView:](nstableview/column%28for_%29.md): Returns the column index for the specified view.

### NSView-Based Table Nib File Registration

- [registerNib:forIdentifier:](nstableview/register%28__foridentifier_%29.md): Registers a NIB for the specified identifier, so that view-based table views can use it to instantiate views.
- [registeredNibsByIdentifier](nstableview/registerednibsbyidentifier.md): The dictionary of all registered nib files for view-based table view identifiers.

### Target-action Behavior

- [doubleAction](nstableview/doubleaction.md): The message sent to the table view’s target when the user double-clicks a cell or column header.
- [clickedColumn](nstableview/clickedcolumn.md): The index of the column the user clicked.
- [clickedRow](nstableview/clickedrow.md): The index of the row the user clicked.

### Configuring Behavior

- [allowsColumnReordering](nstableview/allowscolumnreordering.md): A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.
- [allowsColumnResizing](nstableview/allowscolumnresizing.md): A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.
- [allowsMultipleSelection](nstableview/allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [allowsEmptySelection](nstableview/allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.
- [allowsColumnSelection](nstableview/allowscolumnselection.md): A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.
- [usesAutomaticRowHeights](nstableview/usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.

### Setting Display Attributes

- [intercellSpacing](nstableview/intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](nstableview/rowheight.md): The height of each row in the table.
- [backgroundColor](nstableview/backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](nstableview/usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](nstableview/style-swift.property.md): The style that the table view uses.
- [effectiveStyle](nstableview/effectivestyle.md): The effective style that the table uses.
- [NSTableViewStyle](nstableview/style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](nstableview/selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](nstableview/gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](nstableview/gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImageInTableColumn:](nstableview/indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage:inTableColumn:](nstableview/setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.

### Getting and Setting Row Size Styles

- [effectiveRowSizeStyle](nstableview/effectiverowsizestyle.md): The effective row size style for the table.
- [rowSizeStyle](nstableview/rowsizestyle-swift.property.md): The row size style (small, medium, large, or custom) used by the table view.

### Column Management

- [addTableColumn:](nstableview/addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [removeTableColumn:](nstableview/removetablecolumn%28__%29.md): Removes the specified column from the table view.
- [moveColumn:toColumn:](nstableview/movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.
- [tableColumns](nstableview/tablecolumns.md): An array containing the current table column objects.
- [columnWithIdentifier:](nstableview/column%28withidentifier_%29.md): Returns the index of the first column in the table view whose identifier is equal to the specified identifier.
- [tableColumnWithIdentifier:](nstableview/tablecolumn%28withidentifier_%29.md): Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.

### Selecting Columns and Rows

- [selectColumnIndexes:byExtendingSelection:](nstableview/selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectedColumn](nstableview/selectedcolumn.md): The index of the last selected column (or the last column added to the selection).
- [selectedColumnIndexes](nstableview/selectedcolumnindexes.md): An index set containing the indexes of the selected columns.
- [deselectColumn:](nstableview/deselectcolumn%28__%29.md): Deselects the column at the specified index if it’s selected.
- [numberOfSelectedColumns](nstableview/numberofselectedcolumns.md): The number of selected columns.
- [isColumnSelected:](nstableview/iscolumnselected%28__%29.md): Returns a Boolean value that indicates whether the column at the specified index is selected.
- [selectRowIndexes:byExtendingSelection:](nstableview/selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.
- [selectedRow](nstableview/selectedrow.md): The index of the last selected row (or the last row added to the selection).
- [selectedRowIndexes](nstableview/selectedrowindexes.md): An index set containing the indexes of the selected rows.
- [deselectRow:](nstableview/deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [numberOfSelectedRows](nstableview/numberofselectedrows.md): The number of selected rows.
- [isRowSelected:](nstableview/isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [selectAll:](nstableview/selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll:](nstableview/deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.

### Enumerating Table Rows

- [enumerateAvailableRowViewsUsingBlock:](nstableview/enumerateavailablerowviews%28__%29.md): Allows the enumeration of all the table rows that are known to the table view.

### Managing Type Select

- [allowsTypeSelect](nstableview/allowstypeselect.md): A Boolean value indicating whether the table view allows the user to type characters to select rows.

### Table Dimensions

- [numberOfColumns](nstableview/numberofcolumns.md): The number of columns in the table.
- [numberOfRows](nstableview/numberofrows.md): The number of rows in the table.

### Getting and Setting Floating Rows

- [floatsGroupRows](nstableview/floatsgrouprows.md): A Boolean value indicating whether the table view draws grouped rows as if they are floating.

### Editing Cells

- [editColumn:row:withEvent:select:](nstableview/editcolumn%28__row_with_select_%29.md): Edits the cell at the specified column and row using the specified event and selection behavior.
- [editedColumn](nstableview/editedcolumn.md): The index of the column being edited.
- [editedRow](nstableview/editedrow.md): The index of the row being edited.

### Adding and Deleting Row Views

- [didAddRowView:forRow:](nstableview/didadd%28__forrow_%29.md): Invoked when a row view is added to the table.
- [didRemoveRowView:forRow:](nstableview/didremove%28__forrow_%29.md): Invoked when a row view is removed from the table.

### Setting Auxiliary Views

- [headerView](nstableview/headerview.md): The view object used to draw headers over columns.
- [cornerView](nstableview/cornerview.md): The view used to draw the area to the right of the column headers and above the vertical scroller of the enclosing scroll view.

### Layout Support

- [userInterfaceLayoutDirection](nstableview/userinterfacelayoutdirection.md): The layout direction of the user interface.
- [rectOfColumn:](nstableview/rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.
- [rectOfRow:](nstableview/rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.
- [rowsInRect:](nstableview/rows%28in_%29.md): Returns a range of indexes for the rows that lie wholly or partially within the vertical boundaries of the specified rectangle.
- [columnIndexesInRect:](nstableview/columnindexes%28in_%29.md): Returns the indexes of the table view’s columns that intersect the specified rectangle.
- [columnAtPoint:](nstableview/column%28at_%29.md): Returns the index of the column the specified point lies in.
- [rowAtPoint:](nstableview/row%28at_%29.md): Returns the index of the row the specified point lies in.
- [frameOfCellAtColumn:row:](nstableview/frameofcell%28atcolumn_row_%29.md): Returns a rectangle locating the cell that lies at the intersection of the specified column and row.
- [columnAutoresizingStyle](nstableview/columnautoresizingstyle-swift.property.md): The table view’s column autoresizing style.
- [sizeLastColumnToFit](nstableview/sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.
- [noteNumberOfRowsChanged](nstableview/notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [tile](nstableview/tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit](nstableview/sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRowsWithIndexesChanged:](nstableview/noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.

### Drawing

- [drawRow:clipRect:](nstableview/drawrow%28__cliprect_%29.md): Draws the cells for the row at `rowIndex` in the columns that intersect `clipRect`.
- [drawGridInClipRect:](nstableview/drawgrid%28incliprect_%29.md): Draws the grid lines within the supplied rectangle.
- [highlightSelectionInClipRect:](nstableview/highlightselection%28incliprect_%29.md): Highlights the region of the table view in the specified rectangle.
- [drawBackgroundInClipRect:](nstableview/drawbackground%28incliprect_%29.md): Draws the background of the table view in the clip rect specified by the rectangle.

### Scrolling

- [scrollRowToVisible:](nstableview/scrollrowtovisible%28__%29.md): Scrolls the view so the specified row is visible.
- [scrollColumnToVisible:](nstableview/scrollcolumntovisible%28__%29.md): Scrolls the view so the specified column is visible.

### Table Column State Persistence

- [autosaveTableColumns](nstableview/autosavetablecolumns.md): A Boolean value indicating whether the order and width of the table view’s columns are automatically saved.
- [autosaveName](nstableview/autosavename-swift.property.md): The name under which table information is automatically saved.
- [NSTableViewAutosaveName](nstableview/autosavename-swift.typealias.md)

### Accessing the Delegate

- [delegate](nstableview/delegate.md): The table view’s delegate.

### Highlightable Column Headers

- [highlightedTableColumn](nstableview/highlightedtablecolumn.md): The column highlighted in the table.

### Dragging

- [dragImageForRowsWithIndexes:tableColumns:event:offset:](nstableview/dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [canDragRowsWithIndexes:atPoint:](nstableview/candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [setDraggingSourceOperationMask:forLocal:](nstableview/setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [verticalMotionCanBeginDrag](nstableview/verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [draggingDestinationFeedbackStyle](nstableview/draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
- [setDropRow:dropOperation:](nstableview/setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.

### Sorting

- [sortDescriptors](nstableview/sortdescriptors.md): The table view’s sort descriptors.

### Row Actions

- [rowActionsVisible](nstableview/rowactionsvisible.md): A Boolean value indicating whether a table row’s actions are visible.

### Hiding and Showing Table Rows

- [hideRowsAtIndexes:withAnimation:](nstableview/hiderows%28at_withanimation_%29.md): Hides the specified table rows.
- [unhideRowsAtIndexes:withAnimation:](nstableview/unhiderows%28at_withanimation_%29.md): Unhides the specified table rows.
- [hiddenRowIndexes](nstableview/hiddenrowindexes.md): The indexes of all hidden table rows.

### Deprecated Methods

- [dragImageForRows:event:dragImageOffset:](nstableview/dragimageforrows_event_dragimageoffset_.md): Deprecated. Computes and returns an image to use for dragging.
- [setAutoresizesAllColumnsToFit:](nstableview/setautoresizesallcolumnstofit_.md): Deprecated. Controls whether the table view proportionally resizes its columns to fit when its superview’s frame changes.
- [autoresizesAllColumnsToFit](nstableview/autoresizesallcolumnstofit.md): Deprecated. Returns a Boolean value that indicates if the table view proportionally resizes its columns to fit when its superview’s frame changes.
- [selectColumn:byExtendingSelection:](nstableview/selectcolumn_byextendingselection_.md): Deprecated. Selects the column at the specified index, optionally extending any existing selection.
- [selectRow:byExtendingSelection:](nstableview/selectrow_byextendingselection_.md): Deprecated. Selects a row at the specified index, optionally extending any existing selection.
- [tableView:writeRows:toPasteboard:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/tableview:writerows:topasteboard:): Deprecated. Writes the specified rows to the specified pasteboard.
- [setDrawsGrid:](nstableview/setdrawsgrid_.md): Deprecated. Sets whether the table view draws a grid.
- [drawsGrid](nstableview/drawsgrid.md): Deprecated. Returns a Boolean value that indicates whether the table view draws a grid.
- [selectedColumnEnumerator](nstableview/selectedcolumnenumerator.md): Deprecated. This method has been deprecated.
- [selectedRowEnumerator](nstableview/selectedrowenumerator.md): Deprecated. This method has been deprecated.
- [focusedColumn](nstableview/focusedcolumn%28%29.md): Deprecated. Returns the currently focused column.
- [setFocusedColumn:](nstableview/setfocusedcolumn%28__%29.md): Deprecated. Sets the currently focused column to the specified index.
- [shouldFocusCell:atColumn:row:](nstableview/shouldfocuscell%28__atcolumn_row_%29.md): Deprecated. Returns whether the fully prepared cell at the specified row and column can be made the focused cell.
- [performClickOnCellAtColumn:row:](nstableview/performclickoncell%28atcolumn_row_%29.md): Deprecated. Performs a click action on the cell at the specified row and column.
- [preparedCellAtColumn:row:](nstableview/preparedcell%28atcolumn_row_%29.md): Deprecated. Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.
- [columnsInRect:](nstableview/columnsinrect_.md): Deprecated. Returns a range of indexes for the table view’s columns that lie wholly or partially within the horizontal boundaries of the specified rectangle.
- [textShouldBeginEditing:](nstableview/textshouldbeginediting_.md): Deprecated. Queries the delegate to determine if the text should begin editing.
- [textDidBeginEditing:](nstableview/textdidbeginediting_.md): Deprecated. Posts an [NSControlTextDidBeginEditingNotification](nscontrol/textdidbegineditingnotification.md) to the default notification center.
- [textDidChange:](nstableview/textdidchange_.md): Deprecated. Sends [textDidChange:](nstableview/textdidchange_.md) to the edited cell and posts an [NSControlTextDidChangeNotification](nscontrol/textdidchangenotification.md) to the default notification center.
- [textShouldEndEditing:](nstableview/textshouldendediting_.md): Deprecated. Validates the text object for the cell being edited by querying the delegate.queries the delegate using [control:textShouldEndEditing:](nscontroltexteditingdelegate/control%28__textshouldendediting_%29.md), returning the delegate’s response if it responds to that method.
- [textDidEndEditing:](nstableview/textdidendediting_.md): Deprecated. Updates the data source based on the newly edited value and selects another cell for editing if possible according to the character that ended editing (Return, Tab, Backtab).

### Constants

- [Specifying a Custom Row View in a Nib File](specifying-a-custom-row-view-in-a-nib-file.md): View-based table view instances use `NSTableViewRowKey` to identify the nib file containing the template row view. You can specify a custom row view (without any code) by associating this key with the appropriate nib name in Interface Builder.
- [NSTableViewDraggingDestinationFeedbackStyle](nstableview/draggingdestinationfeedbackstyle-swift.enum.md): These constants specify the drag styles displayed by the table view. They’re used by [draggingDestinationFeedbackStyle](nstableview/draggingdestinationfeedbackstyle-swift.property.md).
- [NSTableViewDropOperation](nstableview/dropoperation.md): `NSTableView` defines these constants to specify drop operations.
- [NSTableViewGridLineStyle](nstableview/gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](nstableview/gridstylemask.md) property. The mask can be either [NSTableViewGridNone](nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableViewColumnAutoresizingStyle](nstableview/columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](nstableview/columnautoresizingstyle-swift.property.md) property.
- [NSTableViewSelectionHighlightStyle](nstableview/selectionhighlightstyle-swift.enum.md): The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](nstableview/selectionhighlightstyle-swift.property.md) property.
- [NSTableViewAnimationOptions](nstableview/animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [NSTableViewRowSizeStyle](nstableview/rowsizestyle-swift.enum.md): The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](nstableview/effectiverowsizestyle.md) and [rowSizeStyle](nstableview/rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](nstablecellview.md) class’ property [rowSizeStyle](nstablecellview/rowsizestyle.md).
- [NSTableRowActionEdge](nstableview/rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.

### Notifications

- [NSTableViewColumnDidMoveNotification](nstableview/columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSTableView` object.
- [NSTableViewColumnDidResizeNotification](nstableview/columndidresizenotification.md): Posted whenever a column is resized in an `NSTableView` object.
- [NSTableViewSelectionDidChangeNotification](nstableview/selectiondidchangenotification.md): Posted after an `NSTableView` object’s selection changes.
- [NSTableViewSelectionIsChangingNotification](nstableview/selectionischangingnotification.md): Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Inherited By

- [NSOutlineView](nsoutlineview.md)

### Conforms To

- [NSAccessibilityTable](nsaccessibilitytable.md)
- [NSDraggingSource](nsdraggingsource.md)
- [NSTextViewDelegate](nstextviewdelegate.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Views

- [NSTableCellView](nstablecellview.md): A reusable container view shown for a particular cell in a table view that uses rows for content.
