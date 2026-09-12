> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/selectcell(withtag:)](https://developer.apple.com/documentation/appkit/nsmatrix/selectcell(withtag:))

# selectCell(withTag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the last cell with the given tag.

## Declaration

```swift
func selectCell(withTag tag: Int) -> Bool
```

## Parameters

- `tag`: The tag of the cell to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver contains a cell whose tag matches `anInt`, or [false](https://developer.apple.com/documentation/swift/false) if no such cell exists

<a id="Discussion"></a>

## Discussion

If the matrix has at least one cell whose tag is equal to `anInt`, the last cell (when viewing the matrix as a row-ordered array) is selected. If the specified cell is an editable text cell, its text is selected.

## See Also

### Related Documentation

- [cell(withTag:)](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [selectCell(\_:)](../nscontrol/selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.

### Selecting and Deselecting Cells

- [selectCell(atRow:column:)](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectAll(\_:)](selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [setSelectionFrom(\_:to:anchor:highlight:)](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells()](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell()](deselectselectedcell%28%29.md): Deselects the selected cell or cells.

# selectCellWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the last cell with the given tag.

## Declaration

```objectivec
- (BOOL) selectCellWithTag:(NSInteger) tag;
```

## Parameters

- `tag`: The tag of the cell to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver contains a cell whose tag matches `anInt`, or [false](https://developer.apple.com/documentation/swift/false) if no such cell exists

<a id="Discussion"></a>

## Discussion

If the matrix has at least one cell whose tag is equal to `anInt`, the last cell (when viewing the matrix as a row-ordered array) is selected. If the specified cell is an editable text cell, its text is selected.

## See Also

### Related Documentation

- [cellWithTag:](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [selectCell:](../nscontrol/selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.

### Selecting and Deselecting Cells

- [selectCellAtRow:column:](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectAll:](selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [setSelectionFrom:to:anchor:highlight:](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell](deselectselectedcell%28%29.md): Deselects the selected cell or cells.
