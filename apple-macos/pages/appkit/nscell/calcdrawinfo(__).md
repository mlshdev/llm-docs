> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/calcdrawinfo(_:)](https://developer.apple.com/documentation/appkit/nscell/calcdrawinfo(_:))

# calcDrawInfo(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Recalculates the cell geometry.

## Declaration

```swift
func calcDrawInfo(_ rect: NSRect)
```

## Parameters

- `rect`: The reference rectangle to use when calculating the cell information.

<a id="Discussion"></a>

## Discussion

Objects (such as controls) that manage `NSCell` objects generally maintain a flag that informs them if any of their cells have been modified in such a way that the location or size of the cell should be recomputed. If so, [calcSize()](../nscontrol/calcsize%28%29.md) method of `NSControl` is automatically invoked prior to the display of the cell, and that method invokes the [calcDrawInfo(\_:)](calcdrawinfo%28__%29.md) method of the cell.

The default implementation of this method does nothing.

## See Also

### Determining Cell Size

- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [cellSize(forBounds:)](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRect(forBounds:)](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRect(forBounds:)](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRect(forBounds:)](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](controlsize.md): The size of the cell.

# calcDrawInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Recalculates the cell geometry.

## Declaration

```objectivec
- (void) calcDrawInfo:(NSRect) rect;
```

## Parameters

- `rect`: The reference rectangle to use when calculating the cell information.

<a id="Discussion"></a>

## Discussion

Objects (such as controls) that manage `NSCell` objects generally maintain a flag that informs them if any of their cells have been modified in such a way that the location or size of the cell should be recomputed. If so, [calcSize](../nscontrol/calcsize%28%29.md) method of `NSControl` is automatically invoked prior to the display of the cell, and that method invokes the [calcDrawInfo:](calcdrawinfo%28__%29.md) method of the cell.

The default implementation of this method does nothing.

## See Also

### Determining Cell Size

- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [cellSizeForBounds:](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRectForBounds:](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRectForBounds:](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRectForBounds:](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](controlsize.md): The size of the cell.
