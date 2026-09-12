> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:datacellfor:row:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:datacellfor:row:))

# tableView(\_:dataCellFor:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate for a custom data cell for the specified row and column.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, dataCellFor tableColumn: NSTableColumn?, row: Int) -> NSCell?
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

An [NSCell](../nscell.md) subclass that is used for the specified `row` and `tableColumn`. The returned cell must properly implement `copyWithZone:`.

<a id="Discussion"></a>

## Discussion

A different data cell can be returned for any particular table column and row, or a cell that will be used for the entire row (that is, a full width cell).

If `tableColumn` is non-`nil`, you should return a cell (generally as the result of sending `tableColumn` a [dataCell(forRow:)](../nstablecolumn/datacell%28forrow_%29.md) message).

While each row is being drawn, this method is first called with a `tableColumn` value of `nil` to allow you to return a group cell—that is, a cell that will be used to draw the entire row. If you return a cell when `tableColumn` is `nil`, all implemented datasource and delegate methods must be prepared to handle a `nil` table column value. If you don’t return a cell, this method is called once for each `tableColumn` in `tableView`.

> **Note**

>  This method is only valid for [NSCell](../nscell.md)-based table views.

## See Also

### Providing cells for rows and columns

- [tableView(\_:willDisplayCell:for:row:)](tableview%28__willdisplaycell_for_row_%29.md): Tells the delegate that the table view will display the specified cell at the specified row and column.
- [tableView(\_:shouldShowCellExpansionFor:row:)](tableview%28__shouldshowcellexpansionfor_row_%29.md): Asks the delegate if an expansion tooltip should be displayed for a specific row and column.
- [tableView(\_:toolTipFor:rect:tableColumn:row:mouseLocation:)](tableview%28__tooltipfor_rect_tablecolumn_row_mouselocation_%29.md): Asks the delegate for a string to display in a tooltip for the specified cell in the column and row.

# tableView:dataCellForTableColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate for a custom data cell for the specified row and column.

## Declaration

```objectivec
- (NSCell *) tableView:(NSTableView *) tableView dataCellForTableColumn:(NSTableColumn *) tableColumn row:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

An [NSCell](../nscell.md) subclass that is used for the specified `row` and `tableColumn`. The returned cell must properly implement `copyWithZone:`.

<a id="Discussion"></a>

## Discussion

A different data cell can be returned for any particular table column and row, or a cell that will be used for the entire row (that is, a full width cell).

If `tableColumn` is non-`nil`, you should return a cell (generally as the result of sending `tableColumn` a [dataCellForRow:](../nstablecolumn/datacell%28forrow_%29.md) message).

While each row is being drawn, this method is first called with a `tableColumn` value of `nil` to allow you to return a group cell—that is, a cell that will be used to draw the entire row. If you return a cell when `tableColumn` is `nil`, all implemented datasource and delegate methods must be prepared to handle a `nil` table column value. If you don’t return a cell, this method is called once for each `tableColumn` in `tableView`.

> **Note**

>  This method is only valid for [NSCell](../nscell.md)-based table views.

## See Also

### Providing cells for rows and columns

- [tableView:willDisplayCell:forTableColumn:row:](tableview%28__willdisplaycell_for_row_%29.md): Tells the delegate that the table view will display the specified cell at the specified row and column.
- [tableView:shouldShowCellExpansionForTableColumn:row:](tableview%28__shouldshowcellexpansionfor_row_%29.md): Asks the delegate if an expansion tooltip should be displayed for a specific row and column.
- [tableView:toolTipForCell:rect:tableColumn:row:mouseLocation:](tableview%28__tooltipfor_rect_tablecolumn_row_mouselocation_%29.md): Asks the delegate for a string to display in a tooltip for the specified cell in the column and row.
