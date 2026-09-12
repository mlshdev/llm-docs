> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:sizetofitwidthofcolumn:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:sizetofitwidthofcolumn:))

# outlineView(\_:sizeToFitWidthOfColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked to allow the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, sizeToFitWidthOfColumn column: Int) -> CGFloat
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `column`: The index of the column.

<a id="return-value"></a>

## Return Value

The width of the specified column.

<a id="Discussion"></a>

## Discussion

By default, `NSOutlineView` iterates every row in the table, accesses a cell via [preparedCell(atColumn:row:)](../nstableview/preparedcell%28atcolumn_row_%29.md), and requests the [cellSize](../nscell/cellsize.md) to find the appropriate largest width to use.

For accurate results and performance, it is recommended that this method is implemented when using large tables. By default, large tables use a monte carlo simulation instead of iterating every row.

## See Also

### Customizing Column and Row Sizes

- [outlineView(\_:heightOfRowByItem:)](outlineview%28__heightofrowbyitem_%29.md): Returns the height in points of the row containing `item`.

# outlineView:sizeToFitWidthOfColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked to allow the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.

## Declaration

```objectivec
- (CGFloat) outlineView:(NSOutlineView *) outlineView sizeToFitWidthOfColumn:(NSInteger) column;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `column`: The index of the column.

<a id="return-value"></a>

## Return Value

The width of the specified column.

<a id="Discussion"></a>

## Discussion

By default, `NSOutlineView` iterates every row in the table, accesses a cell via [preparedCellAtColumn:row:](../nstableview/preparedcell%28atcolumn_row_%29.md), and requests the [cellSize](../nscell/cellsize.md) to find the appropriate largest width to use.

For accurate results and performance, it is recommended that this method is implemented when using large tables. By default, large tables use a monte carlo simulation instead of iterating every row.

## See Also

### Customizing Column and Row Sizes

- [outlineView:heightOfRowByItem:](outlineview%28__heightofrowbyitem_%29.md): Returns the height in points of the row containing `item`.
