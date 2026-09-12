> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilitycell(forcolumn:row:)](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilitycell(forcolumn:row:))

# accessibilityCell(forColumn:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the cell at the specified column and row.

## Declaration

```swift
func accessibilityCell(forColumn column: Int, row: Int) -> Any?
```

## Parameters

- `column`: The column index.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

The cell specified by the column and row indexes.

<a id="Discussion"></a>

## Discussion

This property is required for all elements that function as cell-based tables.

## See Also

### Configuring cell-based tables

- [accessibilityColumnIndexRange()](accessibilitycolumnindexrange%28%29.md): Returns the column index range of the cell.
- [setAccessibilityColumnIndexRange(\_:)](setaccessibilitycolumnindexrange%28__%29.md): Sets the column index range of the cell.
- [accessibilityRowIndexRange()](accessibilityrowindexrange%28%29.md): Returns the row index range of the cell.
- [setAccessibilityRowIndexRange(\_:)](setaccessibilityrowindexrange%28__%29.md): Sets the row index range of the cell.
- [accessibilitySelectedCells()](accessibilityselectedcells%28%29.md): Returns the currently selected cells for the table.
- [setAccessibilitySelectedCells(\_:)](setaccessibilityselectedcells%28__%29.md): Sets the currently selected cells for the table.
- [accessibilityVisibleCells()](accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [setAccessibilityVisibleCells(\_:)](setaccessibilityvisiblecells%28__%29.md): Sets the visible cells for the table.

# accessibilityCellForColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the cell at the specified column and row.

## Declaration

```objectivec
- (id) accessibilityCellForColumn:(NSInteger) column row:(NSInteger) row;
```

## Parameters

- `column`: The column index.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

The cell specified by the column and row indexes.

<a id="Discussion"></a>

## Discussion

This property is required for all elements that function as cell-based tables.

## See Also

### Configuring cell-based tables

- [accessibilityColumnIndexRange](../nsaccessibility-c.protocol/accessibilitycolumnindexrange.md): The column index range of the cell.
- [accessibilityRowIndexRange](../nsaccessibility-c.protocol/accessibilityrowindexrange.md): The row index range of the cell.
- [accessibilitySelectedCells](../nsaccessibility-c.protocol/accessibilityselectedcells.md): The currently selected cells for the table.
- [accessibilityVisibleCells](../nsaccessibility-c.protocol/accessibilityvisiblecells.md): The visible cells for the table.
