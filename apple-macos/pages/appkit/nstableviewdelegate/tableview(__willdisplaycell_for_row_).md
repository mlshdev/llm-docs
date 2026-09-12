> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:willdisplaycell:for:row:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:willdisplaycell:for:row:))

# tableView(\_:willDisplayCell:for:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the table view will display the specified cell at the specified row and column.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, willDisplayCell cell: Any, for tableColumn: NSTableColumn?, row: Int)
```

## Parameters

- `tableView`: The table view that sent the message.
- `cell`: The cell to be displayed.
- `tableColumn`: The table column.
- `row`: The row index.

<a id="Discussion"></a>

## Discussion

The delegate can modify the display attributes of `aCell` to alter the appearance of the cell.

Because `aCell` is reused for every row in `aTableColumn`, the delegate must set the display attributes both when drawing special cells and when drawing standard cells.

> **Note**

>  The implementation of this method must not draw portions of the cell. It should only alter the state of the passed-in cell.

## See Also

### Providing cells for rows and columns

- [tableView(\_:dataCellFor:row:)](tableview%28__datacellfor_row_%29.md): Asks the delegate for a custom data cell for the specified row and column.
- [tableView(\_:shouldShowCellExpansionFor:row:)](tableview%28__shouldshowcellexpansionfor_row_%29.md): Asks the delegate if an expansion tooltip should be displayed for a specific row and column.
- [tableView(\_:toolTipFor:rect:tableColumn:row:mouseLocation:)](tableview%28__tooltipfor_rect_tablecolumn_row_mouselocation_%29.md): Asks the delegate for a string to display in a tooltip for the specified cell in the column and row.

# tableView:willDisplayCell:forTableColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the table view will display the specified cell at the specified row and column.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView willDisplayCell:(id) cell forTableColumn:(NSTableColumn *) tableColumn row:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `cell`: The cell to be displayed.
- `tableColumn`: The table column.
- `row`: The row index.

<a id="Discussion"></a>

## Discussion

The delegate can modify the display attributes of `aCell` to alter the appearance of the cell.

Because `aCell` is reused for every row in `aTableColumn`, the delegate must set the display attributes both when drawing special cells and when drawing standard cells.

> **Note**

>  The implementation of this method must not draw portions of the cell. It should only alter the state of the passed-in cell.

## See Also

### Providing cells for rows and columns

- [tableView:dataCellForTableColumn:row:](tableview%28__datacellfor_row_%29.md): Asks the delegate for a custom data cell for the specified row and column.
- [tableView:shouldShowCellExpansionForTableColumn:row:](tableview%28__shouldshowcellexpansionfor_row_%29.md): Asks the delegate if an expansion tooltip should be displayed for a specific row and column.
- [tableView:toolTipForCell:rect:tableColumn:row:mouseLocation:](tableview%28__tooltipfor_rect_tablecolumn_row_mouselocation_%29.md): Asks the delegate for a string to display in a tooltip for the specified cell in the column and row.
