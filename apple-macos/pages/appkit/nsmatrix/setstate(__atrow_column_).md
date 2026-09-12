> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/setstate(_:atrow:column:)](https://developer.apple.com/documentation/appkit/nsmatrix/setstate(_:atrow:column:))

# setState(\_:atRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the state of the cell at specified location.

## Declaration

```swift
func setState(_ value: Int, atRow row: Int, column col: Int)
```

## Parameters

- `value`: The value to assign to the cell.
- `row`: The row in which the cell is located.
- `col`: The column in which the cell is located.

<a id="Discussion"></a>

## Discussion

For radio-mode matrices, if `value` is nonzero the specified cell is selected before its state is set to `value`. If `value` is 0 and the receiver is a radio-mode matrix, the currently selected cell is deselected (providing that empty selection is allowed).

This method redraws the affected cell.

## See Also

### Related Documentation

- [state](../nscell/state.md): The cell’s current state.
- [selectCell(atRow:column:)](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.

### Managing Attributes of Individual Cells

- [setToolTip(\_:for:)](settooltip%28__for_%29.md): Sets the tooltip for the cell.
- [toolTip(for:)](tooltip%28for_%29.md): Returns the tooltip for the specified cell.

# setState:atRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the state of the cell at specified location.

## Declaration

```objectivec
- (void) setState:(NSInteger) value atRow:(NSInteger) row column:(NSInteger) col;
```

## Parameters

- `value`: The value to assign to the cell.
- `row`: The row in which the cell is located.
- `col`: The column in which the cell is located.

<a id="Discussion"></a>

## Discussion

For radio-mode matrices, if `value` is nonzero the specified cell is selected before its state is set to `value`. If `value` is 0 and the receiver is a radio-mode matrix, the currently selected cell is deselected (providing that empty selection is allowed).

This method redraws the affected cell.

## See Also

### Related Documentation

- [state](../nscell/state.md): The cell’s current state.
- [selectCellAtRow:column:](selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.

### Managing Attributes of Individual Cells

- [setToolTip:forCell:](settooltip%28__for_%29.md): Sets the tooltip for the cell.
- [toolTipForCell:](tooltip%28for_%29.md): Returns the tooltip for the specified cell.
