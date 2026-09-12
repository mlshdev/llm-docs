> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/deselectallcells()](https://developer.apple.com/documentation/appkit/nsmatrix/deselectallcells())

# deselectAllCells() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deselects all cells in the receiver and, if necessary, redisplays the receiver.

## Declaration

```swift
func deselectAllCells()
```

<a id="Discussion"></a>

## Discussion

If the selection mode is `NSRadioModeMatrix` and empty selection is not allowed, this method does nothing.

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
- [deselectSelectedCell()](deselectselectedcell%28%29.md): Deselects the selected cell or cells.

# deselectAllCells (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deselects all cells in the receiver and, if necessary, redisplays the receiver.

## Declaration

```objectivec
- (void) deselectAllCells;
```

<a id="Discussion"></a>

## Discussion

If the selection mode is `NSRadioModeMatrix` and empty selection is not allowed, this method does nothing.

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
- [deselectSelectedCell](deselectselectedcell%28%29.md): Deselects the selected cell or cells.
