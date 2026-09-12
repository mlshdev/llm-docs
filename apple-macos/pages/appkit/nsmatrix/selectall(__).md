> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/selectall(_:)](https://developer.apple.com/documentation/appkit/nsmatrix/selectall(_:))

# selectAll(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects and highlights all cells in the receiver.

## Declaration

```swift
func selectAll(_ sender: Any?)
```

## Parameters

- `sender`: This argument is ignored.

<a id="Discussion"></a>

## Discussion

Editable text cells and disabled cells are not selected. The receiver is redisplayed.

If the selection mode is not [NSMatrix.Mode.listModeMatrix](mode-swift.enum/listmodematrix.md), this method does nothing.

## See Also

### Related Documentation

- [selectCell(\_:)](../nscontrol/selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.

### Selecting and Deselecting Cells

- [selectCell(atRow:column:)](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectCell(withTag:)](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [setSelectionFrom(\_:to:anchor:highlight:)](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells()](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell()](deselectselectedcell%28%29.md): Deselects the selected cell or cells.

# selectAll: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects and highlights all cells in the receiver.

## Declaration

```objectivec
- (void) selectAll:(id) sender;
```

## Parameters

- `sender`: This argument is ignored.

<a id="Discussion"></a>

## Discussion

Editable text cells and disabled cells are not selected. The receiver is redisplayed.

If the selection mode is not [NSListModeMatrix](mode-swift.enum/listmodematrix.md), this method does nothing.

## See Also

### Related Documentation

- [selectCell:](../nscontrol/selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.

### Selecting and Deselecting Cells

- [selectCellAtRow:column:](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectCellWithTag:](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [setSelectionFrom:to:anchor:highlight:](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell](deselectselectedcell%28%29.md): Deselects the selected cell or cells.
