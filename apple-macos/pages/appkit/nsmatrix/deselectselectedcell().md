> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/deselectselectedcell()](https://developer.apple.com/documentation/appkit/nsmatrix/deselectselectedcell())

# deselectSelectedCell() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deselects the selected cell or cells.

## Declaration

```swift
func deselectSelectedCell()
```

<a id="Discussion"></a>

## Discussion

If the selection mode is `NSRadioModeMatrix` and empty selection is not allowed, or if nothing is currently selected, this method does nothing. This method doesn’t redisplay the receiver.

## See Also

### Related Documentation

- [mode](mode-swift.property.md): The selection mode of the receiver.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.

### Selecting and Deselecting Cells

- [selectCell(atRow:column:)](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectCell(withTag:)](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [selectAll(\_:)](selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [setSelectionFrom(\_:to:anchor:highlight:)](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells()](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.

# deselectSelectedCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deselects the selected cell or cells.

## Declaration

```objectivec
- (void) deselectSelectedCell;
```

<a id="Discussion"></a>

## Discussion

If the selection mode is `NSRadioModeMatrix` and empty selection is not allowed, or if nothing is currently selected, this method does nothing. This method doesn’t redisplay the receiver.

## See Also

### Related Documentation

- [mode](mode-swift.property.md): The selection mode of the receiver.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.

### Selecting and Deselecting Cells

- [selectCellAtRow:column:](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectCellWithTag:](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [selectAll:](selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [setSelectionFrom:to:anchor:highlight:](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
