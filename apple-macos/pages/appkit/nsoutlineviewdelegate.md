> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate)

# NSOutlineViewDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSOutlineView](nsoutlineview.md) objects.

## Declaration

```swift
protocol NSOutlineViewDelegate : NSControlTextEditingDelegate
```

## Topics

### Expanding and Collapsing the Outline

- [outlineView(\_:shouldExpandItem:)](nsoutlineviewdelegate/outlineview%28__shouldexpanditem_%29.md): Returns a Boolean value that indicates whether the outline view should expand a given item.
- [outlineView(\_:shouldCollapseItem:)](nsoutlineviewdelegate/outlineview%28__shouldcollapseitem_%29.md): Returns a Boolean value that indicates whether the outline view should collapse a given item.

### Supporting Type Select

- [outlineView(\_:typeSelectStringFor:item:)](nsoutlineviewdelegate/outlineview%28__typeselectstringfor_item_%29.md): Returns the string that is used for type selection for a given column and item.
- [outlineView(\_:nextTypeSelectMatchFromItem:toItem:for:)](nsoutlineviewdelegate/outlineview%28__nexttypeselectmatchfromitem_toitem_for_%29.md): Returns the first item that matches the searchString from within the range of startItem to endItem
- [outlineView(\_:shouldTypeSelectFor:withCurrentSearch:)](nsoutlineviewdelegate/outlineview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Returns a Boolean value that indicates whether type select should proceed for a given event and search string.

### Working with Tooltips

- [outlineView(\_:toolTipFor:rect:tableColumn:item:mouseLocation:)](nsoutlineviewdelegate/outlineview%28__tooltipfor_rect_tablecolumn_item_mouselocation_%29.md): When the cursor pauses over a given cell, the value returned from this method is displayed in a tooltip.

### Handling Selection

- [outlineView(\_:shouldSelect:)](nsoutlineviewdelegate/outlineview%28__shouldselect_%29.md): Returns a Boolean value that indicates whether the outline view should select a given table column.
- [outlineView(\_:shouldSelectItem:)](nsoutlineviewdelegate/outlineview%28__shouldselectitem_%29.md): Returns a Boolean value that indicates whether the outline view should select a given item.
- [outlineView(\_:selectionIndexesForProposedSelection:)](nsoutlineviewdelegate/outlineview%28__selectionindexesforproposedselection_%29.md): Invoked to allow the delegate to modify the proposed selection.
- [selectionShouldChange(in:)](nsoutlineviewdelegate/selectionshouldchange%28in_%29.md): Returns a Boolean value that indicates whether the outline view should change its selection.
- [outlineViewSelectionIsChanging(\_:)](nsoutlineviewdelegate/outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
- [outlineViewSelectionDidChange(\_:)](nsoutlineviewdelegate/outlineviewselectiondidchange%28__%29.md): Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.

### Displaying Cells

- [outlineView(\_:willDisplayCell:for:item:)](nsoutlineviewdelegate/outlineview%28__willdisplaycell_for_item_%29.md): Informs the delegate that the cell specified by the column and item will be displayed.
- [outlineView(\_:willDisplayOutlineCell:for:item:)](nsoutlineviewdelegate/outlineview%28__willdisplayoutlinecell_for_item_%29.md): Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.
- [outlineView(\_:dataCellFor:item:)](nsoutlineviewdelegate/outlineview%28__datacellfor_item_%29.md): Returns the cell to use in a given column for a given item.
- [outlineView(\_:shouldShowOutlineCellForItem:)](nsoutlineviewdelegate/outlineview%28__shouldshowoutlinecellforitem_%29.md): Returns whether the specified item should display the outline cell (the disclosure triangle).
- [outlineView(\_:shouldShowCellExpansionFor:item:)](nsoutlineviewdelegate/outlineview%28__shouldshowcellexpansionfor_item_%29.md): Invoked to allow the delegate to control cell expansion for a specific column and item.

### Moving and Resizing Columns

- [outlineView(\_:shouldReorderColumn:toColumn:)](nsoutlineviewdelegate/outlineview%28__shouldreordercolumn_tocolumn_%29.md): Sent to the delegate to allow or prohibit the specified column to be dragged to a new location.

### Working with the Outline Column

- [outlineViewColumnDidMove(\_:)](nsoutlineviewdelegate/outlineviewcolumndidmove%28__%29.md): Invoked whenever the user moves a column in the outline view.
- [outlineViewColumnDidResize(\_:)](nsoutlineviewdelegate/outlineviewcolumndidresize%28__%29.md): Invoked whenever the user resizes a column in the outline view.
- [outlineViewItemWillExpand(\_:)](nsoutlineviewdelegate/outlineviewitemwillexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to expand an item in the outline view.
- [outlineViewItemDidExpand(\_:)](nsoutlineviewdelegate/outlineviewitemdidexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user expands an item in the outline view.
- [outlineViewItemWillCollapse(\_:)](nsoutlineviewdelegate/outlineviewitemwillcollapse%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to collapse an item in the outline view.
- [outlineViewItemDidCollapse(\_:)](nsoutlineviewdelegate/outlineviewitemdidcollapse%28__%29.md): Invoked when the did collapse notification is posted—that is, whenever the user collapses an item in the outline view.

### Editing Items

- [outlineView(\_:shouldEdit:item:)](nsoutlineviewdelegate/outlineview%28__shouldedit_item_%29.md): Returns a Boolean value that indicates whether the outline view should allow editing of a given item in a given table column.

### Working with Table Columns

- [outlineView(\_:mouseDownInHeaderOf:)](nsoutlineviewdelegate/outlineview%28__mousedowninheaderof_%29.md): Sent to the delegate whenever the mouse button is clicked in `outlineView` while the cursor is in a column header `tableColumn`.
- [outlineView(\_:didClick:)](nsoutlineviewdelegate/outlineview%28__didclick_%29.md): Sent at the time the mouse button subsequently goes up in `outlineView` and `tableColumn` has been “clicked” without having been dragged anywhere.
- [outlineView(\_:didDrag:)](nsoutlineviewdelegate/outlineview%28__diddrag_%29.md): Sent at the time the mouse button goes up in `outlineView` and `tableColumn` has been dragged during the time the mouse button was down.

### Customizing Column and Row Sizes

- [outlineView(\_:heightOfRowByItem:)](nsoutlineviewdelegate/outlineview%28__heightofrowbyitem_%29.md): Returns the height in points of the row containing `item`.
- [outlineView(\_:sizeToFitWidthOfColumn:)](nsoutlineviewdelegate/outlineview%28__sizetofitwidthofcolumn_%29.md): Invoked to allow the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.

### Customizing Tint Color

- [outlineView(\_:tintConfigurationForItem:)](nsoutlineviewdelegate/outlineview%28__tintconfigurationforitem_%29.md): Customizes an item’s tinting behavior.
- [NSTintConfiguration](nstintconfiguration.md): An object that gives you the ability to choose from system-provided tinting behaviors.

### Customizing Tracking Support

- [outlineView(\_:shouldTrackCell:for:item:)](nsoutlineviewdelegate/outlineview%28__shouldtrackcell_for_item_%29.md): Returns a Boolean value that indicates whether a given cell should be tracked.

### Grouping Rows

- [outlineView(\_:isGroupItem:)](nsoutlineviewdelegate/outlineview%28__isgroupitem_%29.md): Returns a Boolean that indicates whether a given row should be drawn in the “group row” style.

### Working with NSView-Based Outline Views

- [outlineView(\_:didAdd:forRow:)](nsoutlineviewdelegate/outlineview%28__didadd_forrow_%29.md): Implemented to know when a new row view is added to the table.
- [outlineView(\_:didRemove:forRow:)](nsoutlineviewdelegate/outlineview%28__didremove_forrow_%29.md): Implemented to know when a row view is removed from the table
- [outlineView(\_:rowViewForItem:)](nsoutlineviewdelegate/outlineview%28__rowviewforitem_%29.md): implement this method to return a custom `NSTableRowView` for a particular item.
- [outlineView(\_:viewFor:item:)](nsoutlineviewdelegate/outlineview%28__viewfor_item_%29.md): Implemented to return the view used to display the specified item and column.

### Changing Visibility

- [outlineView(\_:userCanChangeVisibilityOf:)](nsoutlineviewdelegate/outlineview%28__usercanchangevisibilityof_%29.md)
- [outlineView(\_:userDidChangeVisibilityOf:)](nsoutlineviewdelegate/outlineview%28__userdidchangevisibilityof_%29.md)

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Management

- [NSOutlineViewDataSource](nsoutlineviewdatasource.md): A set of methods that an outline view calls to retrieve data and information about it from the data source delegate, and—optionally—to update data values.

# NSOutlineViewDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSOutlineView](nsoutlineview.md) objects.

## Declaration

```objectivec
@protocol NSOutlineViewDelegate <NSControlTextEditingDelegate>
```

## Topics

### Expanding and Collapsing the Outline

- [outlineView:shouldExpandItem:](nsoutlineviewdelegate/outlineview%28__shouldexpanditem_%29.md): Returns a Boolean value that indicates whether the outline view should expand a given item.
- [outlineView:shouldCollapseItem:](nsoutlineviewdelegate/outlineview%28__shouldcollapseitem_%29.md): Returns a Boolean value that indicates whether the outline view should collapse a given item.

### Supporting Type Select

- [outlineView:typeSelectStringForTableColumn:item:](nsoutlineviewdelegate/outlineview%28__typeselectstringfor_item_%29.md): Returns the string that is used for type selection for a given column and item.
- [outlineView:nextTypeSelectMatchFromItem:toItem:forString:](nsoutlineviewdelegate/outlineview%28__nexttypeselectmatchfromitem_toitem_for_%29.md): Returns the first item that matches the searchString from within the range of startItem to endItem
- [outlineView:shouldTypeSelectForEvent:withCurrentSearchString:](nsoutlineviewdelegate/outlineview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Returns a Boolean value that indicates whether type select should proceed for a given event and search string.

### Working with Tooltips

- [outlineView:toolTipForCell:rect:tableColumn:item:mouseLocation:](nsoutlineviewdelegate/outlineview%28__tooltipfor_rect_tablecolumn_item_mouselocation_%29.md): When the cursor pauses over a given cell, the value returned from this method is displayed in a tooltip.

### Handling Selection

- [outlineView:shouldSelectTableColumn:](nsoutlineviewdelegate/outlineview%28__shouldselect_%29.md): Returns a Boolean value that indicates whether the outline view should select a given table column.
- [outlineView:shouldSelectItem:](nsoutlineviewdelegate/outlineview%28__shouldselectitem_%29.md): Returns a Boolean value that indicates whether the outline view should select a given item.
- [outlineView:selectionIndexesForProposedSelection:](nsoutlineviewdelegate/outlineview%28__selectionindexesforproposedselection_%29.md): Invoked to allow the delegate to modify the proposed selection.
- [selectionShouldChangeInOutlineView:](nsoutlineviewdelegate/selectionshouldchange%28in_%29.md): Returns a Boolean value that indicates whether the outline view should change its selection.
- [outlineViewSelectionIsChanging:](nsoutlineviewdelegate/outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
- [outlineViewSelectionDidChange:](nsoutlineviewdelegate/outlineviewselectiondidchange%28__%29.md): Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.

### Displaying Cells

- [outlineView:willDisplayCell:forTableColumn:item:](nsoutlineviewdelegate/outlineview%28__willdisplaycell_for_item_%29.md): Informs the delegate that the cell specified by the column and item will be displayed.
- [outlineView:willDisplayOutlineCell:forTableColumn:item:](nsoutlineviewdelegate/outlineview%28__willdisplayoutlinecell_for_item_%29.md): Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.
- [outlineView:dataCellForTableColumn:item:](nsoutlineviewdelegate/outlineview%28__datacellfor_item_%29.md): Returns the cell to use in a given column for a given item.
- [outlineView:shouldShowOutlineCellForItem:](nsoutlineviewdelegate/outlineview%28__shouldshowoutlinecellforitem_%29.md): Returns whether the specified item should display the outline cell (the disclosure triangle).
- [outlineView:shouldShowCellExpansionForTableColumn:item:](nsoutlineviewdelegate/outlineview%28__shouldshowcellexpansionfor_item_%29.md): Invoked to allow the delegate to control cell expansion for a specific column and item.

### Moving and Resizing Columns

- [outlineView:shouldReorderColumn:toColumn:](nsoutlineviewdelegate/outlineview%28__shouldreordercolumn_tocolumn_%29.md): Sent to the delegate to allow or prohibit the specified column to be dragged to a new location.

### Working with the Outline Column

- [outlineViewColumnDidMove:](nsoutlineviewdelegate/outlineviewcolumndidmove%28__%29.md): Invoked whenever the user moves a column in the outline view.
- [outlineViewColumnDidResize:](nsoutlineviewdelegate/outlineviewcolumndidresize%28__%29.md): Invoked whenever the user resizes a column in the outline view.
- [outlineViewItemWillExpand:](nsoutlineviewdelegate/outlineviewitemwillexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to expand an item in the outline view.
- [outlineViewItemDidExpand:](nsoutlineviewdelegate/outlineviewitemdidexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user expands an item in the outline view.
- [outlineViewItemWillCollapse:](nsoutlineviewdelegate/outlineviewitemwillcollapse%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to collapse an item in the outline view.
- [outlineViewItemDidCollapse:](nsoutlineviewdelegate/outlineviewitemdidcollapse%28__%29.md): Invoked when the did collapse notification is posted—that is, whenever the user collapses an item in the outline view.

### Editing Items

- [outlineView:shouldEditTableColumn:item:](nsoutlineviewdelegate/outlineview%28__shouldedit_item_%29.md): Returns a Boolean value that indicates whether the outline view should allow editing of a given item in a given table column.

### Working with Table Columns

- [outlineView:mouseDownInHeaderOfTableColumn:](nsoutlineviewdelegate/outlineview%28__mousedowninheaderof_%29.md): Sent to the delegate whenever the mouse button is clicked in `outlineView` while the cursor is in a column header `tableColumn`.
- [outlineView:didClickTableColumn:](nsoutlineviewdelegate/outlineview%28__didclick_%29.md): Sent at the time the mouse button subsequently goes up in `outlineView` and `tableColumn` has been “clicked” without having been dragged anywhere.
- [outlineView:didDragTableColumn:](nsoutlineviewdelegate/outlineview%28__diddrag_%29.md): Sent at the time the mouse button goes up in `outlineView` and `tableColumn` has been dragged during the time the mouse button was down.

### Customizing Column and Row Sizes

- [outlineView:heightOfRowByItem:](nsoutlineviewdelegate/outlineview%28__heightofrowbyitem_%29.md): Returns the height in points of the row containing `item`.
- [outlineView:sizeToFitWidthOfColumn:](nsoutlineviewdelegate/outlineview%28__sizetofitwidthofcolumn_%29.md): Invoked to allow the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.

### Customizing Tint Color

- [outlineView:tintConfigurationForItem:](nsoutlineviewdelegate/outlineview%28__tintconfigurationforitem_%29.md): Customizes an item’s tinting behavior.
- [NSTintConfiguration](nstintconfiguration.md): An object that gives you the ability to choose from system-provided tinting behaviors.

### Customizing Tracking Support

- [outlineView:shouldTrackCell:forTableColumn:item:](nsoutlineviewdelegate/outlineview%28__shouldtrackcell_for_item_%29.md): Returns a Boolean value that indicates whether a given cell should be tracked.

### Grouping Rows

- [outlineView:isGroupItem:](nsoutlineviewdelegate/outlineview%28__isgroupitem_%29.md): Returns a Boolean that indicates whether a given row should be drawn in the “group row” style.

### Working with NSView-Based Outline Views

- [outlineView:didAddRowView:forRow:](nsoutlineviewdelegate/outlineview%28__didadd_forrow_%29.md): Implemented to know when a new row view is added to the table.
- [outlineView:didRemoveRowView:forRow:](nsoutlineviewdelegate/outlineview%28__didremove_forrow_%29.md): Implemented to know when a row view is removed from the table
- [outlineView:rowViewForItem:](nsoutlineviewdelegate/outlineview%28__rowviewforitem_%29.md): implement this method to return a custom `NSTableRowView` for a particular item.
- [outlineView:viewForTableColumn:item:](nsoutlineviewdelegate/outlineview%28__viewfor_item_%29.md): Implemented to return the view used to display the specified item and column.

### Changing Visibility

- [outlineView:userCanChangeVisibilityOfTableColumn:](nsoutlineviewdelegate/outlineview%28__usercanchangevisibilityof_%29.md)
- [outlineView:userDidChangeVisibilityOfTableColumns:](nsoutlineviewdelegate/outlineview%28__userdidchangevisibilityof_%29.md)

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)

## See Also

### Management

- [NSOutlineViewDataSource](nsoutlineviewdatasource.md): A set of methods that an outline view calls to retrieve data and information about it from the data source delegate, and—optionally—to update data values.
