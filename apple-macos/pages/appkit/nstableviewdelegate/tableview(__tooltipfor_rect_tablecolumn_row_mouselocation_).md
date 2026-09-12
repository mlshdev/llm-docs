> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:tooltipfor:rect:tablecolumn:row:mouselocation:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:tooltipfor:rect:tablecolumn:row:mouselocation:))

# tableView(\_:toolTipFor:rect:tableColumn:row:mouseLocation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for a string to display in a tooltip for the specified cell in the column and row.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, toolTipFor cell: NSCell, rect: NSRectPointer, tableColumn: NSTableColumn?, row: Int, mouseLocation: NSPoint) -> String
```

## Parameters

- `tableView`: The table view that sent the message.
- `cell`: The cell.
- `rect`: The proposed active area of the tooltip. You can modify `rect` to provide an alternative active area.
- `tableColumn`: The table column.
- `row`: The row index.
- `mouseLocation`: The mouse location.

<a id="return-value"></a>

## Return Value

A string that should be displayed in the tooltip. Return `nil` or the empty string if no tooltip is desired.

<a id="Discussion"></a>

## Discussion

By default, `rect` is computed as

`[cell drawingRectForBounds:cellFrame]`. Note that tooltips are also known as help tags.

## See Also

### Providing cells for rows and columns

- [tableView(\_:willDisplayCell:for:row:)](tableview%28__willdisplaycell_for_row_%29.md): Tells the delegate that the table view will display the specified cell at the specified row and column.
- [tableView(\_:dataCellFor:row:)](tableview%28__datacellfor_row_%29.md): Asks the delegate for a custom data cell for the specified row and column.
- [tableView(\_:shouldShowCellExpansionFor:row:)](tableview%28__shouldshowcellexpansionfor_row_%29.md): Asks the delegate if an expansion tooltip should be displayed for a specific row and column.

# tableView:toolTipForCell:rect:tableColumn:row:mouseLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for a string to display in a tooltip for the specified cell in the column and row.

## Declaration

```objectivec
- (NSString *) tableView:(NSTableView *) tableView toolTipForCell:(NSCell *) cell rect:(NSRectPointer) rect tableColumn:(NSTableColumn *) tableColumn row:(NSInteger) row mouseLocation:(NSPoint) mouseLocation;
```

## Parameters

- `tableView`: The table view that sent the message.
- `cell`: The cell.
- `rect`: The proposed active area of the tooltip. You can modify `rect` to provide an alternative active area.
- `tableColumn`: The table column.
- `row`: The row index.
- `mouseLocation`: The mouse location.

<a id="return-value"></a>

## Return Value

A string that should be displayed in the tooltip. Return `nil` or the empty string if no tooltip is desired.

<a id="Discussion"></a>

## Discussion

By default, `rect` is computed as

`[cell drawingRectForBounds:cellFrame]`. Note that tooltips are also known as help tags.

## See Also

### Providing cells for rows and columns

- [tableView:willDisplayCell:forTableColumn:row:](tableview%28__willdisplaycell_for_row_%29.md): Tells the delegate that the table view will display the specified cell at the specified row and column.
- [tableView:dataCellForTableColumn:row:](tableview%28__datacellfor_row_%29.md): Asks the delegate for a custom data cell for the specified row and column.
- [tableView:shouldShowCellExpansionForTableColumn:row:](tableview%28__shouldshowcellexpansionfor_row_%29.md): Asks the delegate if an expansion tooltip should be displayed for a specific row and column.
