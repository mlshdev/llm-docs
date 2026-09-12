> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/isautoscroll](https://developer.apple.com/documentation/appkit/nsmatrix/isautoscroll)

# isAutoscroll (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the receiver is automatically scrolled.

## Declaration

```swift
var isAutoscroll: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the matrix, if it is in a scrolling view, is automatically scrolled whenever the cursor is dragged outside the matrix after a mouse-down event within its bounds.

## See Also

### Scrolling Cells in the Matrix

- [setScrollable(\_:)](setscrollable%28__%29.md): Specifies whether the cells in the matrix are scrollable.
- [scrollCellToVisible(atRow:column:)](scrollcelltovisible%28atrow_column_%29.md): Scrolls the receiver so the specified cell is visible.

# autoscroll (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the receiver is automatically scrolled.

## Declaration

```objectivec
@property (getter=isAutoscroll) BOOL autoscroll;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the matrix, if it is in a scrolling view, is automatically scrolled whenever the cursor is dragged outside the matrix after a mouse-down event within its bounds.

## See Also

### Scrolling Cells in the Matrix

- [setScrollable:](setscrollable%28__%29.md): Specifies whether the cells in the matrix are scrollable.
- [scrollCellToVisibleAtRow:column:](scrollcelltovisible%28atrow_column_%29.md): Scrolls the receiver so the specified cell is visible.
