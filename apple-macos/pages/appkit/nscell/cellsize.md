> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/cellsize](https://developer.apple.com/documentation/appkit/nscell/cellsize)

# cellSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum size needed to display the cell.

## Declaration

```swift
var cellSize: NSSize { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the smallest cell size (in points) required to draw its contents. If the cell is not a text or image cell, the cell size is set to (`10000`, `10000`). If an image cell does not yet have an associated image, the cell size is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).This method takes into account of the size of the image or text in the cell along with any margin areas required by the cell’s border, if any.

## See Also

### Determining Cell Size

- [calcDrawInfo(\_:)](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize(forBounds:)](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRect(forBounds:)](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRect(forBounds:)](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRect(forBounds:)](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](controlsize.md): The size of the cell.

# cellSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum size needed to display the cell.

## Declaration

```objectivec
@property (readonly) NSSize cellSize;
```

<a id="Discussion"></a>

## Discussion

This property contains the smallest cell size (in points) required to draw its contents. If the cell is not a text or image cell, the cell size is set to (`10000`, `10000`). If an image cell does not yet have an associated image, the cell size is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).This method takes into account of the size of the image or text in the cell along with any margin areas required by the cell’s border, if any.

## See Also

### Determining Cell Size

- [calcDrawInfo:](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSizeForBounds:](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRectForBounds:](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRectForBounds:](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRectForBounds:](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](controlsize.md): The size of the cell.
