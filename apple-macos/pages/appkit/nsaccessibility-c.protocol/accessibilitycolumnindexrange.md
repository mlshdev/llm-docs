> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitycolumnindexrange](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitycolumnindexrange)

# accessibilityColumnIndexRange

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The column index range of the cell.

## Declaration

```objectivec
@property NSRange accessibilityColumnIndexRange;
```

<a id="Discussion"></a>

## Discussion

This property contains the column’s starting index and index span in the table. Use this property in the elements representing a table’s cell.

## See Also

### Configuring cell-based tables

- [accessibilityCellForColumn:row:](../nsaccessibilityprotocol/accessibilitycell%28forcolumn_row_%29.md): Returns the cell at the specified column and row.
- [accessibilityRowIndexRange](accessibilityrowindexrange.md): The row index range of the cell.
- [accessibilitySelectedCells](accessibilityselectedcells.md): The currently selected cells for the table.
- [accessibilityVisibleCells](accessibilityvisiblecells.md): The visible cells for the table.
