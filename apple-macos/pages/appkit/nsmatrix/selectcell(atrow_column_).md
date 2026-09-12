> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/selectcell(atrow:column:)](https://developer.apple.com/documentation/appkit/nsmatrix/selectcell(atrow:column:))

# selectCell(atRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the cell at the specified row and column within the receiver.

## Declaration

```swift
func selectCell(atRow row: Int, column col: Int)
```

## Parameters

- `row`: The row of the cell to select.
- `col`: The column of the cell to select.

<a id="Discussion"></a>

## Discussion

If the specified cell is an editable text cell, its text is selected. If either `row` or `column` is –1, then the current selection is cleared (unless the receiver is an `NSRadioModeMatrix` and doesn’t allow empty selection). This method redraws the affected cells.

## See Also

### Related Documentation

- [mode](mode-swift.property.md): The selection mode of the receiver.
- [selectCell(\_:)](../nscontrol/selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.

### Selecting and Deselecting Cells

- [selectCell(withTag:)](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [selectAll(\_:)](selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [setSelectionFrom(\_:to:anchor:highlight:)](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells()](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell()](deselectselectedcell%28%29.md): Deselects the selected cell or cells.

# selectCellAtRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the cell at the specified row and column within the receiver.

## Declaration

```objectivec
- (void) selectCellAtRow:(NSInteger) row column:(NSInteger) col;
```

## Parameters

- `row`: The row of the cell to select.
- `col`: The column of the cell to select.

<a id="Discussion"></a>

## Discussion

If the specified cell is an editable text cell, its text is selected. If either `row` or `column` is –1, then the current selection is cleared (unless the receiver is an `NSRadioModeMatrix` and doesn’t allow empty selection). This method redraws the affected cells.

## See Also

### Related Documentation

- [mode](mode-swift.property.md): The selection mode of the receiver.
- [selectCell:](../nscontrol/selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.

### Selecting and Deselecting Cells

- [selectCellWithTag:](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [selectAll:](selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [setSelectionFrom:to:anchor:highlight:](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell](deselectselectedcell%28%29.md): Deselects the selected cell or cells.
