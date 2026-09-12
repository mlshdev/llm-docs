> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:sizetofitwidthofcolumn:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:sizetofitwidthofcolumn:))

# tableView(\_:sizeToFitWidthOfColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, sizeToFitWidthOfColumn column: Int) -> CGFloat
```

## Parameters

- `tableView`: The table view that sent the message.
- `column`: The index of the column.

<a id="return-value"></a>

## Return Value

The width of the specified column.

<a id="Discussion"></a>

## Discussion

By default, [NSTableView](../nstableview.md) iterates every row in the table, accesses a cell via [preparedCell(atColumn:row:)](../nstableview/preparedcell%28atcolumn_row_%29.md), and requests the [cellSize](../nscell/cellsize.md) to find the appropriate largest width to use.

For accurate results and performance, it’s recommended that this method is implemented when using large tables. By default, large tables use a Monte Carlo simulation instead of iterating every row.

## See Also

### Setting row and column size

- [tableView(\_:heightOfRow:)](tableview%28__heightofrow_%29.md): Asks the delegate for the height of the specified row.

# tableView:sizeToFitWidthOfColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.

## Declaration

```objectivec
- (CGFloat) tableView:(NSTableView *) tableView sizeToFitWidthOfColumn:(NSInteger) column;
```

## Parameters

- `tableView`: The table view that sent the message.
- `column`: The index of the column.

<a id="return-value"></a>

## Return Value

The width of the specified column.

<a id="Discussion"></a>

## Discussion

By default, [NSTableView](../nstableview.md) iterates every row in the table, accesses a cell via [preparedCellAtColumn:row:](../nstableview/preparedcell%28atcolumn_row_%29.md), and requests the [cellSize](../nscell/cellsize.md) to find the appropriate largest width to use.

For accurate results and performance, it’s recommended that this method is implemented when using large tables. By default, large tables use a Monte Carlo simulation instead of iterating every row.

## See Also

### Setting row and column size

- [tableView:heightOfRow:](tableview%28__heightofrow_%29.md): Asks the delegate for the height of the specified row.
