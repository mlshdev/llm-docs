> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/cellsize(forbounds:)](https://developer.apple.com/documentation/appkit/nscell/cellsize(forbounds:))

# cellSize(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.

## Declaration

```swift
func cellSize(forBounds rect: NSRect) -> NSSize
```

## Parameters

- `rect`: The size of the cell, or the size of the `aRect` parameter if the cell is not a text or image cell. If the cell is an image cell but no image has been set, returns `NSZeroSize`.

<a id="Discussion"></a>

## Discussion

This method takes into account of the size of the image or text within a certain offset determined by the border type of the cell. If the receiver is of text type, the text is resized to fit within `aRect` (as much as `aRect` is within the bounds of the cell).

To support constraint-based layout, when the content of a custom cell changes in such a way that the return value of this method would change, the cell needs to notify its control of the change by calling the control’s [invalidateIntrinsicContentSize(for:)](../nscontrol/invalidateintrinsiccontentsize%28for_%29.md) method.

## See Also

### Determining Cell Size

- [calcDrawInfo(\_:)](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [drawingRect(forBounds:)](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRect(forBounds:)](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRect(forBounds:)](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](controlsize.md): The size of the cell.

# cellSizeForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.

## Declaration

```objectivec
- (NSSize) cellSizeForBounds:(NSRect) rect;
```

## Parameters

- `rect`: The size of the cell, or the size of the `aRect` parameter if the cell is not a text or image cell. If the cell is an image cell but no image has been set, returns `NSZeroSize`.

<a id="Discussion"></a>

## Discussion

This method takes into account of the size of the image or text within a certain offset determined by the border type of the cell. If the receiver is of text type, the text is resized to fit within `aRect` (as much as `aRect` is within the bounds of the cell).

To support constraint-based layout, when the content of a custom cell changes in such a way that the return value of this method would change, the cell needs to notify its control of the change by calling the control’s [invalidateIntrinsicContentSizeForCell:](../nscontrol/invalidateintrinsiccontentsize%28for_%29.md) method.

## See Also

### Determining Cell Size

- [calcDrawInfo:](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [drawingRectForBounds:](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRectForBounds:](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRectForBounds:](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](controlsize.md): The size of the cell.
