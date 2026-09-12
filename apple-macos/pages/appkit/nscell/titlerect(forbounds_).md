> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/titlerect(forbounds:)](https://developer.apple.com/documentation/appkit/nscell/titlerect(forbounds:))

# titleRect(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle in which the receiver draws its title text.

## Declaration

```swift
func titleRect(forBounds rect: NSRect) -> NSRect
```

## Parameters

- `rect`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The rectangle in which the receiver draws its title text.

<a id="Discussion"></a>

## Discussion

If the receiver is a text-type cell, this method resizes the drawing rectangle for the title (`theRect`) inward by a small offset to accommodate the cell border. If the receiver is not a text-type cell, the method does nothing.

## See Also

### Determining Cell Size

- [calcDrawInfo(\_:)](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [cellSize(forBounds:)](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRect(forBounds:)](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRect(forBounds:)](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [controlSize](controlsize.md): The size of the cell.

# titleRectForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle in which the receiver draws its title text.

## Declaration

```objectivec
- (NSRect) titleRectForBounds:(NSRect) rect;
```

## Parameters

- `rect`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The rectangle in which the receiver draws its title text.

<a id="Discussion"></a>

## Discussion

If the receiver is a text-type cell, this method resizes the drawing rectangle for the title (`theRect`) inward by a small offset to accommodate the cell border. If the receiver is not a text-type cell, the method does nothing.

## See Also

### Determining Cell Size

- [calcDrawInfo:](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [cellSizeForBounds:](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRectForBounds:](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRectForBounds:](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [controlSize](controlsize.md): The size of the cell.
