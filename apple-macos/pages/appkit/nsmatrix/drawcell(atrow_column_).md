> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/drawcell(atrow:column:)](https://developer.apple.com/documentation/appkit/nsmatrix/drawcell(atrow:column:))

# drawCell(atRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the cell at the specified row and column.

## Declaration

```swift
func drawCell(atRow row: Int, column col: Int)
```

## Parameters

- `row`: The row containing the cell to draw.
- `col`: The column containing the cell to draw.

## See Also

### Related Documentation

- [drawCell(\_:)](../nscontrol/drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [drawCellInside(\_:)](../nscontrol/drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)

### Displaying and Highlighting Cells

- [highlightCell(\_:atRow:column:)](highlightcell%28__atrow_column_%29.md): Highlights or unhighlights the cell at the specified row and column location.

# drawCellAtRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the cell at the specified row and column.

## Declaration

```objectivec
- (void) drawCellAtRow:(NSInteger) row column:(NSInteger) col;
```

## Parameters

- `row`: The row containing the cell to draw.
- `col`: The column containing the cell to draw.

## See Also

### Related Documentation

- [drawCell:](../nscontrol/drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [drawCellInside:](../nscontrol/drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)

### Displaying and Highlighting Cells

- [highlightCell:atRow:column:](highlightcell%28__atrow_column_%29.md): Highlights or unhighlights the cell at the specified row and column location.
