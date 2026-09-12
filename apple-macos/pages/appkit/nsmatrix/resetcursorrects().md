> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/resetcursorrects()](https://developer.apple.com/documentation/appkit/nsmatrix/resetcursorrects())

# resetCursorRects() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resets cursor rectangles so the cursor becomes an I-beam over text cells.

## Declaration

```swift
func resetCursorRects()
```

<a id="Discussion"></a>

## Discussion

This method resets the cursor rectangles by sending [resetCursorRect(\_:in:)](../nscell/resetcursorrect%28__in_%29.md) to each cell in the receiver. Any cell that has a cursor rectangle to set up should then send [addCursorRect(\_:cursor:)](../nsview/addcursorrect%28__cursor_%29.md) back to the receiver.

## See Also

### Related Documentation

- [addCursorRect(\_:cursor:)](../nsview/addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.
- [resetCursorRect(\_:in:)](../nscell/resetcursorrect%28__in_%29.md): Sets the receiver to show the I-beam cursor while it tracks the mouse.

# resetCursorRects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resets cursor rectangles so the cursor becomes an I-beam over text cells.

## Declaration

```objectivec
- (void) resetCursorRects;
```

<a id="Discussion"></a>

## Discussion

This method resets the cursor rectangles by sending [resetCursorRect:inView:](../nscell/resetcursorrect%28__in_%29.md) to each cell in the receiver. Any cell that has a cursor rectangle to set up should then send [addCursorRect:cursor:](../nsview/addcursorrect%28__cursor_%29.md) back to the receiver.

## See Also

### Related Documentation

- [addCursorRect:cursor:](../nsview/addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.
- [resetCursorRect:inView:](../nscell/resetcursorrect%28__in_%29.md): Sets the receiver to show the I-beam cursor while it tracks the mouse.
