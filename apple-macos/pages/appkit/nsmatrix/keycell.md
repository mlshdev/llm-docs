> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/keycell](https://developer.apple.com/documentation/appkit/nsmatrix/keycell)

# keyCell (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell that will be clicked when the user presses the Space bar.

## Declaration

```swift
var keyCell: NSCell? { get set }
```

## See Also

### Related Documentation

- [tabKeyTraversesCells](tabkeytraversescells.md): A Boolean that indicates whether pressing the Tab key advances the key cell to the next selectable cell.

### Selecting and Deselecting Cells

- [selectCell(atRow:column:)](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectCell(withTag:)](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [selectAll(\_:)](selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [setSelectionFrom(\_:to:anchor:highlight:)](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells()](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell()](deselectselectedcell%28%29.md): Deselects the selected cell or cells.

# keyCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell that will be clicked when the user presses the Space bar.

## Declaration

```objectivec
@property (strong, nullable) NSCell * keyCell;
```

## See Also

### Related Documentation

- [tabKeyTraversesCells](tabkeytraversescells.md): A Boolean that indicates whether pressing the Tab key advances the key cell to the next selectable cell.

### Selecting and Deselecting Cells

- [selectCellAtRow:column:](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectCellWithTag:](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [selectAll:](selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [setSelectionFrom:to:anchor:highlight:](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell](deselectselectedcell%28%29.md): Deselects the selected cell or cells.
