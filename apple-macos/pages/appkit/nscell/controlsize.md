> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/controlsize](https://developer.apple.com/documentation/appkit/nscell/controlsize)

# controlSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the cell.

## Declaration

```swift
var controlSize: NSControl.ControlSize { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to change the rendered size of the cell and its control. For a list of possible values, see [NSControl.ControlSize](../nscontrol/controlsize-swift.enum.md).

Changing the cell’s control size does not change the font used by the cell. Use the [systemFontSize(for:)](../nsfont/systemfontsize%28for_%29.md) class method of [NSFont](../nsfont.md) to obtain an appropriate font based on the new control size.

## See Also

### Determining Cell Size

- [calcDrawInfo(\_:)](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [cellSize(forBounds:)](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRect(forBounds:)](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRect(forBounds:)](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRect(forBounds:)](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.

# controlSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the cell.

## Declaration

```objectivec
@property NSControlSize controlSize;
```

<a id="Discussion"></a>

## Discussion

Use this property to change the rendered size of the cell and its control. For a list of possible values, see [NSControlSize](../nscontrol/controlsize-swift.enum.md).

Changing the cell’s control size does not change the font used by the cell. Use the [systemFontSizeForControlSize:](../nsfont/systemfontsize%28for_%29.md) class method of [NSFont](../nsfont.md) to obtain an appropriate font based on the new control size.

## See Also

### Determining Cell Size

- [calcDrawInfo:](calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](cellsize.md): The minimum size needed to display the cell.
- [cellSizeForBounds:](cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRectForBounds:](drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRectForBounds:](imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRectForBounds:](titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
