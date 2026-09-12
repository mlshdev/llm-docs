> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/linewidth](https://developer.apple.com/documentation/uikit/uibezierpath/linewidth)

# lineWidth (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The line width of the path.

## Declaration

```swift
var lineWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The line width defines the thickness of the receiver’s stroked path. A width of 0 is interpreted as the thinnest line that can be rendered on a particular device. The actual rendered line width may vary from the specified width by as much as 2 device pixels, depending on the position of the line with respect to the pixel grid and the current anti-aliasing settings. The width of the line may also be affected by scaling factors specified in the current transformation matrix of the active graphics context.

The default line width is 1.0.

## See Also

### Accessing drawing properties

- [lineCapStyle](linecapstyle.md): The shape of the endpoints of a stroked path.
- [lineJoinStyle](linejoinstyle.md): The shape of the joints between connected segments of a stroked path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [flatness](flatness.md): The factor that determines the rendering accuracy for curved path segments.
- [usesEvenOddFillRule](usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.

# lineWidth (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The line width of the path.

## Declaration

```objectivec
@property (nonatomic) CGFloat lineWidth;
```

<a id="Discussion"></a>

## Discussion

The line width defines the thickness of the receiver’s stroked path. A width of 0 is interpreted as the thinnest line that can be rendered on a particular device. The actual rendered line width may vary from the specified width by as much as 2 device pixels, depending on the position of the line with respect to the pixel grid and the current anti-aliasing settings. The width of the line may also be affected by scaling factors specified in the current transformation matrix of the active graphics context.

The default line width is 1.0.

## See Also

### Accessing drawing properties

- [lineCapStyle](linecapstyle.md): The shape of the endpoints of a stroked path.
- [lineJoinStyle](linejoinstyle.md): The shape of the joints between connected segments of a stroked path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [flatness](flatness.md): The factor that determines the rendering accuracy for curved path segments.
- [usesEvenOddFillRule](usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.
