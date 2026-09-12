> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/setselectionfrom(_:to:anchor:highlight:)](https://developer.apple.com/documentation/appkit/nsmatrix/setselectionfrom(_:to:anchor:highlight:))

# setSelectionFrom(\_:to:anchor:highlight:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Programmatically selects a range of cells.

## Declaration

```swift
func setSelectionFrom(_ startPos: Int, to endPos: Int, anchor anchorPos: Int, highlight lit: Bool)
```

## Parameters

- `startPos`: The position of the cell that marks where the user would have pressed the mouse button.
- `endPos`: The position of the cell that marks where the user would have released the mouse button.
- `anchorPos`: The position of the cell to treat as the last cell the user would have selected. To simulate Shift-dragging (continuous selection) `anchorPos` should be the `endPos` used in the last method call. To simulate Command-dragging (discontinuous selection), `anchorPos` should be the same as this method call’s `startPos`.
- `lit`: [true](https://developer.apple.com/documentation/swift/true) if cells selected by this method should be highlighted.

<a id="Discussion"></a>

## Discussion

`startPos`, `endPos`, and `anchorPos` are cell positions, counting from 0 at the upper left cell of the receiver, in row order. For example, the third cell in the top row would be number 2.

To simulate dragging without a modifier key, deselecting anything that was selected before, call [deselectAllCells()](deselectallcells%28%29.md) before calling this method.

## See Also

### Related Documentation

- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [isSelectionByRect](isselectionbyrect.md): A Boolean that indicates whether the user can select a rectangle of cells in the receiver by dragging the cursor.

### Selecting and Deselecting Cells

- [selectCell(atRow:column:)](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectCell(withTag:)](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [selectAll(\_:)](selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [deselectAllCells()](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell()](deselectselectedcell%28%29.md): Deselects the selected cell or cells.

# setSelectionFrom:to:anchor:highlight: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Programmatically selects a range of cells.

## Declaration

```objectivec
- (void) setSelectionFrom:(NSInteger) startPos to:(NSInteger) endPos anchor:(NSInteger) anchorPos highlight:(BOOL) lit;
```

## Parameters

- `startPos`: The position of the cell that marks where the user would have pressed the mouse button.
- `endPos`: The position of the cell that marks where the user would have released the mouse button.
- `anchorPos`: The position of the cell to treat as the last cell the user would have selected. To simulate Shift-dragging (continuous selection) `anchorPos` should be the `endPos` used in the last method call. To simulate Command-dragging (discontinuous selection), `anchorPos` should be the same as this method call’s `startPos`.
- `lit`: [true](https://developer.apple.com/documentation/swift/true) if cells selected by this method should be highlighted.

<a id="Discussion"></a>

## Discussion

`startPos`, `endPos`, and `anchorPos` are cell positions, counting from 0 at the upper left cell of the receiver, in row order. For example, the third cell in the top row would be number 2.

To simulate dragging without a modifier key, deselecting anything that was selected before, call [deselectAllCells](deselectallcells%28%29.md) before calling this method.

## See Also

### Related Documentation

- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectionByRect](isselectionbyrect.md): A Boolean that indicates whether the user can select a rectangle of cells in the receiver by dragging the cursor.

### Selecting and Deselecting Cells

- [selectCellAtRow:column:](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectCellWithTag:](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [selectAll:](selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [deselectAllCells](deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell](deselectselectedcell%28%29.md): Deselects the selected cell or cells.
