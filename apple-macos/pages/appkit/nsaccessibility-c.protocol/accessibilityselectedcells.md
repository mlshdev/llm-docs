> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityselectedcells](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityselectedcells)

# accessibilitySelectedCells

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The currently selected cells for the table.

## Declaration

```objectivec
@property (copy, nullable) NSArray * accessibilitySelectedCells;
```

<a id="Discussion"></a>

## Discussion

This property is required for all elements that act like cell-based tables.

## See Also

### Configuring cell-based tables

- [accessibilityCellForColumn:row:](../nsaccessibilityprotocol/accessibilitycell%28forcolumn_row_%29.md): Returns the cell at the specified column and row.
- [accessibilityColumnIndexRange](accessibilitycolumnindexrange.md): The column index range of the cell.
- [accessibilityRowIndexRange](accessibilityrowindexrange.md): The row index range of the cell.
- [accessibilityVisibleCells](accessibilityvisiblecells.md): The visible cells for the table.
