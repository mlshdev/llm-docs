> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/imagerect(forbounds:)](https://developer.apple.com/documentation/appkit/nscell/imagerect(forbounds:))

# imageRect(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle in which the receiver draws its image.

## Declaration

```swift
func imageRect(forBounds rect: NSRect) -> NSRect
```

## Parameters

- `rect`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The rectangle in which the receiver draws its image. This rectangle is slightly offset from the one in `theRect`.

## See Also

### Determining Cell Size

- [calcDrawInfo(\_:)](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [cellSize(forBounds:)](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRect(forBounds:)](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [titleRect(forBounds:)](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](controlsize.md): The size of the cell.

# imageRectForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle in which the receiver draws its image.

## Declaration

```objectivec
- (NSRect) imageRectForBounds:(NSRect) rect;
```

## Parameters

- `rect`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The rectangle in which the receiver draws its image. This rectangle is slightly offset from the one in `theRect`.

## See Also

### Determining Cell Size

- [calcDrawInfo:](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [cellSizeForBounds:](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRectForBounds:](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [titleRectForBounds:](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](controlsize.md): The size of the cell.
