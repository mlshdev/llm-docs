> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate](https://developer.apple.com/documentation/appkit/nstableviewdelegate)

# NSTableViewDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods you implement in a table view delegate to customize the behavior of the table view.

## Declaration

```swift
protocol NSTableViewDelegate : NSControlTextEditingDelegate
```

<a id="overview"></a>

## Overview

Using a table view delegate allows you to customize a table view’s behavior without creating a table view subclass. A table view delegate provides views for table rows and columns, and supports functionality such as column reordering and resizing and row selection. To learn more about table views, see [NSTableView](nstableview.md).

## Topics

### Providing views for rows and columns

- [tableView(\_:viewFor:row:)](nstableviewdelegate/tableview%28__viewfor_row_%29.md): Asks the delegate for a view to display the specified row and column.
- [tableView(\_:rowViewForRow:)](nstableviewdelegate/tableview%28__rowviewforrow_%29.md): Asks the delegate for a view to display the specified row.

### Notification of row views being added or removed

- [tableView(\_:didAdd:forRow:)](nstableviewdelegate/tableview%28__didadd_forrow_%29.md): Tells the delegate that a row view was added at the specified row.
- [tableView(\_:didRemove:forRow:)](nstableviewdelegate/tableview%28__didremove_forrow_%29.md): Tells the delegate that a row view was removed from the table at the specified row.

### Grouping rows

- [tableView(\_:isGroupRow:)](nstableviewdelegate/tableview%28__isgrouprow_%29.md): Returns whether the specified row is a group row.

### Providing cells for rows and columns

- [tableView(\_:willDisplayCell:for:row:)](nstableviewdelegate/tableview%28__willdisplaycell_for_row_%29.md): Tells the delegate that the table view will display the specified cell at the specified row and column.
- [tableView(\_:dataCellFor:row:)](nstableviewdelegate/tableview%28__datacellfor_row_%29.md): Asks the delegate for a custom data cell for the specified row and column.
- [tableView(\_:shouldShowCellExpansionFor:row:)](nstableviewdelegate/tableview%28__shouldshowcellexpansionfor_row_%29.md): Asks the delegate if an expansion tooltip should be displayed for a specific row and column.
- [tableView(\_:toolTipFor:rect:tableColumn:row:mouseLocation:)](nstableviewdelegate/tableview%28__tooltipfor_rect_tablecolumn_row_mouselocation_%29.md): Asks the delegate for a string to display in a tooltip for the specified cell in the column and row.

### Editing cells

- [tableView(\_:shouldEdit:row:)](nstableviewdelegate/tableview%28__shouldedit_row_%29.md): Asks the delegate if the cell at the specified row and column can be edited.

### Setting row and column size

- [tableView(\_:heightOfRow:)](nstableviewdelegate/tableview%28__heightofrow_%29.md): Asks the delegate for the height of the specified row.
- [tableView(\_:sizeToFitWidthOfColumn:)](nstableviewdelegate/tableview%28__sizetofitwidthofcolumn_%29.md): Asks the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.

### Selecting rows

- [selectionShouldChange(in:)](nstableviewdelegate/selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView(\_:shouldSelectRow:)](nstableviewdelegate/tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView(\_:selectionIndexesForProposedSelection:)](nstableviewdelegate/tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView(\_:shouldSelect:)](nstableviewdelegate/tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging(\_:)](nstableviewdelegate/tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange(\_:)](nstableviewdelegate/tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView(\_:shouldTypeSelectFor:withCurrentSearch:)](nstableviewdelegate/tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView(\_:typeSelectStringFor:row:)](nstableviewdelegate/tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
- [tableView(\_:nextTypeSelectMatchFromRow:toRow:for:)](nstableviewdelegate/tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.

### Moving and resizing columns

- [tableView(\_:shouldReorderColumn:toColumn:)](nstableviewdelegate/tableview%28__shouldreordercolumn_tocolumn_%29.md): Asks the delegate to allow or prohibit the specified column to be dragged to a new location.
- [tableView(\_:didDrag:)](nstableviewdelegate/tableview%28__diddrag_%29.md): Tells the delegate that the specified table column was dragged.
- [tableViewColumnDidMove(\_:)](nstableviewdelegate/tableviewcolumndidmove%28__%29.md): Tells the delegate that a table column was moved by user action.
- [tableViewColumnDidResize(\_:)](nstableviewdelegate/tableviewcolumndidresize%28__%29.md): Tells the delegate that a table column was resized.

### Responding to mouse events

- [tableView(\_:didClick:)](nstableviewdelegate/tableview%28__didclick_%29.md): Tells the delegate that the mouse button was clicked in the specified table column, but the column was not dragged.
- [tableView(\_:mouseDownInHeaderOf:)](nstableviewdelegate/tableview%28__mousedowninheaderof_%29.md): Tells the delegate that the mouse button was clicked in the specified table column’s header.
- [tableView(\_:shouldTrackCell:for:row:)](nstableviewdelegate/tableview%28__shouldtrackcell_for_row_%29.md): Asks the delegate whether the specified cell should be tracked.

### Enabling table row actions

- [tableView(\_:rowActionsForRow:edge:)](nstableviewdelegate/tableview%28__rowactionsforrow_edge_%29.md): Asks the delegate to provide an array of row actions to be attached to the specified edge of a table row and displayed when the user swipes horizontally across the row.

### Showing and hiding columns

- [tableView(\_:userCanChangeVisibilityOf:)](nstableviewdelegate/tableview%28__usercanchangevisibilityof_%29.md): Asks the delegate to verify that the user can change the given column’s visibility.
- [tableView(\_:userDidChangeVisibilityOf:)](nstableviewdelegate/tableview%28__userdidchangevisibilityof_%29.md): Tells the delegate that the user changed the visibility of one or more table columns.

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Management

- [NSTableViewDataSource](nstableviewdatasource.md): A set of methods that a table view uses to provide data to a table view and to allow the editing of the table view’s data source object.
- [NSTableViewDiffableDataSource](nstableviewdiffabledatasource-c5gl.md): The object you use to manage data and provide items for a table view.

# NSTableViewDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods you implement in a table view delegate to customize the behavior of the table view.

## Declaration

```objectivec
@protocol NSTableViewDelegate <NSControlTextEditingDelegate>
```

<a id="overview"></a>

## Overview

Using a table view delegate allows you to customize a table view’s behavior without creating a table view subclass. A table view delegate provides views for table rows and columns, and supports functionality such as column reordering and resizing and row selection. To learn more about table views, see [NSTableView](nstableview.md).

## Topics

### Providing views for rows and columns

- [tableView:viewForTableColumn:row:](nstableviewdelegate/tableview%28__viewfor_row_%29.md): Asks the delegate for a view to display the specified row and column.
- [tableView:rowViewForRow:](nstableviewdelegate/tableview%28__rowviewforrow_%29.md): Asks the delegate for a view to display the specified row.

### Notification of row views being added or removed

- [tableView:didAddRowView:forRow:](nstableviewdelegate/tableview%28__didadd_forrow_%29.md): Tells the delegate that a row view was added at the specified row.
- [tableView:didRemoveRowView:forRow:](nstableviewdelegate/tableview%28__didremove_forrow_%29.md): Tells the delegate that a row view was removed from the table at the specified row.

### Grouping rows

- [tableView:isGroupRow:](nstableviewdelegate/tableview%28__isgrouprow_%29.md): Returns whether the specified row is a group row.

### Providing cells for rows and columns

- [tableView:willDisplayCell:forTableColumn:row:](nstableviewdelegate/tableview%28__willdisplaycell_for_row_%29.md): Tells the delegate that the table view will display the specified cell at the specified row and column.
- [tableView:dataCellForTableColumn:row:](nstableviewdelegate/tableview%28__datacellfor_row_%29.md): Asks the delegate for a custom data cell for the specified row and column.
- [tableView:shouldShowCellExpansionForTableColumn:row:](nstableviewdelegate/tableview%28__shouldshowcellexpansionfor_row_%29.md): Asks the delegate if an expansion tooltip should be displayed for a specific row and column.
- [tableView:toolTipForCell:rect:tableColumn:row:mouseLocation:](nstableviewdelegate/tableview%28__tooltipfor_rect_tablecolumn_row_mouselocation_%29.md): Asks the delegate for a string to display in a tooltip for the specified cell in the column and row.

### Editing cells

- [tableView:shouldEditTableColumn:row:](nstableviewdelegate/tableview%28__shouldedit_row_%29.md): Asks the delegate if the cell at the specified row and column can be edited.

### Setting row and column size

- [tableView:heightOfRow:](nstableviewdelegate/tableview%28__heightofrow_%29.md): Asks the delegate for the height of the specified row.
- [tableView:sizeToFitWidthOfColumn:](nstableviewdelegate/tableview%28__sizetofitwidthofcolumn_%29.md): Asks the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.

### Selecting rows

- [selectionShouldChangeInTableView:](nstableviewdelegate/selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView:shouldSelectRow:](nstableviewdelegate/tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView:selectionIndexesForProposedSelection:](nstableviewdelegate/tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView:shouldSelectTableColumn:](nstableviewdelegate/tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging:](nstableviewdelegate/tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange:](nstableviewdelegate/tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView:shouldTypeSelectForEvent:withCurrentSearchString:](nstableviewdelegate/tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView:typeSelectStringForTableColumn:row:](nstableviewdelegate/tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
- [tableView:nextTypeSelectMatchFromRow:toRow:forString:](nstableviewdelegate/tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.

### Moving and resizing columns

- [tableView:shouldReorderColumn:toColumn:](nstableviewdelegate/tableview%28__shouldreordercolumn_tocolumn_%29.md): Asks the delegate to allow or prohibit the specified column to be dragged to a new location.
- [tableView:didDragTableColumn:](nstableviewdelegate/tableview%28__diddrag_%29.md): Tells the delegate that the specified table column was dragged.
- [tableViewColumnDidMove:](nstableviewdelegate/tableviewcolumndidmove%28__%29.md): Tells the delegate that a table column was moved by user action.
- [tableViewColumnDidResize:](nstableviewdelegate/tableviewcolumndidresize%28__%29.md): Tells the delegate that a table column was resized.

### Responding to mouse events

- [tableView:didClickTableColumn:](nstableviewdelegate/tableview%28__didclick_%29.md): Tells the delegate that the mouse button was clicked in the specified table column, but the column was not dragged.
- [tableView:mouseDownInHeaderOfTableColumn:](nstableviewdelegate/tableview%28__mousedowninheaderof_%29.md): Tells the delegate that the mouse button was clicked in the specified table column’s header.
- [tableView:shouldTrackCell:forTableColumn:row:](nstableviewdelegate/tableview%28__shouldtrackcell_for_row_%29.md): Asks the delegate whether the specified cell should be tracked.

### Enabling table row actions

- [tableView:rowActionsForRow:edge:](nstableviewdelegate/tableview%28__rowactionsforrow_edge_%29.md): Asks the delegate to provide an array of row actions to be attached to the specified edge of a table row and displayed when the user swipes horizontally across the row.

### Showing and hiding columns

- [tableView:userCanChangeVisibilityOfTableColumn:](nstableviewdelegate/tableview%28__usercanchangevisibilityof_%29.md): Asks the delegate to verify that the user can change the given column’s visibility.
- [tableView:userDidChangeVisibilityOfTableColumns:](nstableviewdelegate/tableview%28__userdidchangevisibilityof_%29.md): Tells the delegate that the user changed the visibility of one or more table columns.

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)

## See Also

### Management

- [NSTableViewDataSource](nstableviewdatasource.md): A set of methods that a table view uses to provide data to a table view and to allow the editing of the table view’s data source object.
- [NSTableViewDiffableDataSource](nstableviewdiffabledatasourcereference.md): The object you use to manage data and provide items for a table view.
