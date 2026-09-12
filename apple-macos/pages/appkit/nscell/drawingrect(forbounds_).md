> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/drawingrect(forbounds:)](https://developer.apple.com/documentation/appkit/nscell/drawingrect(forbounds:))

# drawingRect(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle within which the receiver draws itself

## Declaration

```swift
func drawingRect(forBounds rect: NSRect) -> NSRect
```

## Parameters

- `rect`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The rectangle in which the receiver draws itself. This rectangle is slightly inset from the one in `theRect`.

## See Also

### Related Documentation

- [calcSize()](../nscontrol/calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.

### Determining Cell Size

- [calcDrawInfo(\_:)](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [cellSize(forBounds:)](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [imageRect(forBounds:)](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRect(forBounds:)](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](controlsize.md): The size of the cell.

# drawingRectForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle within which the receiver draws itself

## Declaration

```objectivec
- (NSRect) drawingRectForBounds:(NSRect) rect;
```

## Parameters

- `rect`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The rectangle in which the receiver draws itself. This rectangle is slightly inset from the one in `theRect`.

## See Also

### Related Documentation

- [calcSize](../nscontrol/calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.

### Determining Cell Size

- [calcDrawInfo:](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [cellSizeForBounds:](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [imageRectForBounds:](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRectForBounds:](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](controlsize.md): The size of the cell.
