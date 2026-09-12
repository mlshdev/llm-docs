> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/linewidth](https://developer.apple.com/documentation/appkit/nsbezierpath/linewidth)

# lineWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of stroked path lines.

## Declaration

```swift
var lineWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The line width defines the thickness of the receiver’s stroked path. A width of 0 is interpreted as the thinnest line that can be rendered on a particular device. The actual rendered line width may vary from the specified width by as much as 2 device pixels, depending on the position of the line with respect to the pixel grid and the current anti-aliasing settings. The width of the line may also be affected by scaling factors specified in the current transformation matrix of the active graphics context.

The default value of this property is the value returned by the [defaultLineWidth](defaultlinewidth.md) method.

## See Also

### Related Documentation

- [defaultLineWidth](defaultlinewidth.md): Returns the default line width for the all paths.

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.

# lineWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of stroked path lines.

## Declaration

```objectivec
@property CGFloat lineWidth;
```

<a id="Discussion"></a>

## Discussion

The line width defines the thickness of the receiver’s stroked path. A width of 0 is interpreted as the thinnest line that can be rendered on a particular device. The actual rendered line width may vary from the specified width by as much as 2 device pixels, depending on the position of the line with respect to the pixel grid and the current anti-aliasing settings. The width of the line may also be affected by scaling factors specified in the current transformation matrix of the active graphics context.

The default value of this property is the value returned by the [defaultLineWidth](defaultlinewidth.md) method.

## See Also

### Related Documentation

- [defaultLineWidth](defaultlinewidth.md): Returns the default line width for the all paths.

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
