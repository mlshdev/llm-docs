> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/setscrollable(_:)](https://developer.apple.com/documentation/appkit/nsmatrix/setscrollable(_:))

# setScrollable(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Specifies whether the cells in the matrix are scrollable.

## Declaration

```swift
func setScrollable(_ flag: Bool)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to make all the cells in the receiver scrollable, so the text they contain scrolls to remain in view if the user types past the edge of the cell. If `flag` is [false](https://developer.apple.com/documentation/swift/false), all cells are made nonscrolling. The prototype cell, if there is one, is also set accordingly

## See Also

### Related Documentation

- [isScrollable](../nscell/isscrollable.md): A Boolean value indicating whether excess text scrolls past the cell’s bounds.
- [prototype](prototype.md): The prototype cell that’s copied whenever the matrix creates a new cell.

### Scrolling Cells in the Matrix

- [isAutoscroll](isautoscroll.md): A Boolean that indicates whether the receiver is automatically scrolled.
- [scrollCellToVisible(atRow:column:)](scrollcelltovisible%28atrow_column_%29.md): Scrolls the receiver so the specified cell is visible.

# setScrollable: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Specifies whether the cells in the matrix are scrollable.

## Declaration

```objectivec
- (void) setScrollable:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to make all the cells in the receiver scrollable, so the text they contain scrolls to remain in view if the user types past the edge of the cell. If `flag` is [false](https://developer.apple.com/documentation/swift/false), all cells are made nonscrolling. The prototype cell, if there is one, is also set accordingly

## See Also

### Related Documentation

- [scrollable](../nscell/isscrollable.md): A Boolean value indicating whether excess text scrolls past the cell’s bounds.
- [prototype](prototype.md): The prototype cell that’s copied whenever the matrix creates a new cell.

### Scrolling Cells in the Matrix

- [autoscroll](isautoscroll.md): A Boolean that indicates whether the receiver is automatically scrolled.
- [scrollCellToVisibleAtRow:column:](scrollcelltovisible%28atrow_column_%29.md): Scrolls the receiver so the specified cell is visible.
