> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:shouldshowcellexpansionfor:row:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:shouldshowcellexpansionfor:row:))

# tableView(\_:shouldShowCellExpansionFor:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate if an expansion tooltip should be displayed for a specific row and column.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, shouldShowCellExpansionFor tableColumn: NSTableColumn?, row: Int) -> Bool
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an expansion tooltip should be displayed, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

An expansion tooltip can be displayed when the pointer hovers over a cell that contains truncated text. When this method returns [true](https://developer.apple.com/documentation/swift/true), the cell’s full contents is shown in an expansion tooltip, which looks similar to a help tag.

> **Note**

>  This method is only valid for [NSCell](../nscell.md)-based table views.

## See Also

### Providing cells for rows and columns

- [tableView(\_:willDisplayCell:for:row:)](tableview%28__willdisplaycell_for_row_%29.md): Tells the delegate that the table view will display the specified cell at the specified row and column.
- [tableView(\_:dataCellFor:row:)](tableview%28__datacellfor_row_%29.md): Asks the delegate for a custom data cell for the specified row and column.
- [tableView(\_:toolTipFor:rect:tableColumn:row:mouseLocation:)](tableview%28__tooltipfor_rect_tablecolumn_row_mouselocation_%29.md): Asks the delegate for a string to display in a tooltip for the specified cell in the column and row.

# tableView:shouldShowCellExpansionForTableColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate if an expansion tooltip should be displayed for a specific row and column.

## Declaration

```objectivec
- (BOOL) tableView:(NSTableView *) tableView shouldShowCellExpansionForTableColumn:(NSTableColumn *) tableColumn row:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an expansion tooltip should be displayed, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

An expansion tooltip can be displayed when the pointer hovers over a cell that contains truncated text. When this method returns [true](https://developer.apple.com/documentation/swift/true), the cell’s full contents is shown in an expansion tooltip, which looks similar to a help tag.

> **Note**

>  This method is only valid for [NSCell](../nscell.md)-based table views.

## See Also

### Providing cells for rows and columns

- [tableView:willDisplayCell:forTableColumn:row:](tableview%28__willdisplaycell_for_row_%29.md): Tells the delegate that the table view will display the specified cell at the specified row and column.
- [tableView:dataCellForTableColumn:row:](tableview%28__datacellfor_row_%29.md): Asks the delegate for a custom data cell for the specified row and column.
- [tableView:toolTipForCell:rect:tableColumn:row:mouseLocation:](tableview%28__tooltipfor_rect_tablecolumn_row_mouselocation_%29.md): Asks the delegate for a string to display in a tooltip for the specified cell in the column and row.
