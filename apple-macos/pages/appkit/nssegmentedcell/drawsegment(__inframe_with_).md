> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell/drawsegment(_:inframe:with:)](https://developer.apple.com/documentation/appkit/nssegmentedcell/drawsegment(_:inframe:with:))

# drawSegment(\_:inFrame:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image and label of the segment in the specified view.

## Declaration

```swift
func drawSegment(_ segment: Int, inFrame frame: NSRect, with controlView: NSView)
```

## Parameters

- `segment`: The index of the segment to draw. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.
- `frame`: The rectangle in which to draw the segment’s image and label. This rectangle is specified in user space coordinates of the specified view.
- `controlView`: The view that contains the segment.

<a id="Discussion"></a>

## Discussion

You can override this method to provide a custom appearance for segmented controls. You should not call this method directly. It is called for you automatically by the control when it needs to be redrawn.

## See Also

### Related Documentation

- [draw(withFrame:in:)](../nscell/draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.

# drawSegment:inFrame:withView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image and label of the segment in the specified view.

## Declaration

```objectivec
- (void) drawSegment:(NSInteger) segment inFrame:(NSRect) frame withView:(NSView *) controlView;
```

## Parameters

- `segment`: The index of the segment to draw. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.
- `frame`: The rectangle in which to draw the segment’s image and label. This rectangle is specified in user space coordinates of the specified view.
- `controlView`: The view that contains the segment.

<a id="Discussion"></a>

## Discussion

You can override this method to provide a custom appearance for segmented controls. You should not call this method directly. It is called for you automatically by the control when it needs to be redrawn.

## See Also

### Related Documentation

- [drawWithFrame:inView:](../nscell/draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
