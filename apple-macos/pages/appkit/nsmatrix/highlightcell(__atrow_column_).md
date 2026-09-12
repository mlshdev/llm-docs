> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/highlightcell(_:atrow:column:)](https://developer.apple.com/documentation/appkit/nsmatrix/highlightcell(_:atrow:column:))

# highlightCell(\_:atRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Highlights or unhighlights the cell at the specified row and column location.

## Declaration

```swift
func highlightCell(_ flag: Bool, atRow row: Int, column col: Int)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to highlight the cell; [false](https://developer.apple.com/documentation/swift/false) to unhighlight the cell.
- `row`: The row containing the cell.
- `col`: The column containing the cell.

## See Also

### Displaying and Highlighting Cells

- [drawCell(atRow:column:)](drawcell%28atrow_column_%29.md): Displays the cell at the specified row and column.

# highlightCell:atRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Highlights or unhighlights the cell at the specified row and column location.

## Declaration

```objectivec
- (void) highlightCell:(BOOL) flag atRow:(NSInteger) row column:(NSInteger) col;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to highlight the cell; [false](https://developer.apple.com/documentation/swift/false) to unhighlight the cell.
- `row`: The row containing the cell.
- `col`: The column containing the cell.

## See Also

### Displaying and Highlighting Cells

- [drawCellAtRow:column:](drawcell%28atrow_column_%29.md): Displays the cell at the specified row and column.
