> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/sizetocells()](https://developer.apple.com/documentation/appkit/nsmatrix/sizetocells())

# sizeToCells() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes the width and the height of the receiver’s frame so it exactly contains the cells.

## Declaration

```swift
func sizeToCells()
```

<a id="Discussion"></a>

## Discussion

This method does not redraw the receiver.

## See Also

### Related Documentation

- [setFrameSize(\_:)](../nsview/setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [sizeToFit()](../nscontrol/sizetofit%28%29.md): Resizes the receiver’s frame so that it’s the minimum size needed to contain its cell.

### Resizing the Matrix and Its Cells

- [autosizesCells](autosizescells.md): A Boolean that indicates whether the cell sizes change when the receiver is resized.
- [setValidateSize(\_:)](setvalidatesize%28__%29.md): Specifies whether the receiver’s size information is validated.

# sizeToCells (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes the width and the height of the receiver’s frame so it exactly contains the cells.

## Declaration

```objectivec
- (void) sizeToCells;
```

<a id="Discussion"></a>

## Discussion

This method does not redraw the receiver.

## See Also

### Related Documentation

- [setFrameSize:](../nsview/setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [sizeToFit](../nscontrol/sizetofit%28%29.md): Resizes the receiver’s frame so that it’s the minimum size needed to contain its cell.

### Resizing the Matrix and Its Cells

- [autosizesCells](autosizescells.md): A Boolean that indicates whether the cell sizes change when the receiver is resized.
- [setValidateSize:](setvalidatesize%28__%29.md): Specifies whether the receiver’s size information is validated.
