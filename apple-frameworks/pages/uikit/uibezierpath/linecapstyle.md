> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/linecapstyle](https://developer.apple.com/documentation/uikit/uibezierpath/linecapstyle)

# lineCapStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The shape of the endpoints of a stroked path.

## Declaration

```swift
var lineCapStyle: CGLineCap { get set }
```

<a id="Discussion"></a>

## Discussion

The line cap style is applied to the start and end points of any open subpaths. This property does not affect closed subpaths. The default line cap style is [CGLineCap.butt](../../coregraphics/cglinecap/butt.md).

## See Also

### Accessing drawing properties

- [lineWidth](linewidth.md): The line width of the path.
- [lineJoinStyle](linejoinstyle.md): The shape of the joints between connected segments of a stroked path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [flatness](flatness.md): The factor that determines the rendering accuracy for curved path segments.
- [usesEvenOddFillRule](usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.

# lineCapStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The shape of the endpoints of a stroked path.

## Declaration

```objectivec
@property (nonatomic) CGLineCap lineCapStyle;
```

<a id="Discussion"></a>

## Discussion

The line cap style is applied to the start and end points of any open subpaths. This property does not affect closed subpaths. The default line cap style is [kCGLineCapButt](../../coregraphics/cglinecap/butt.md).

## See Also

### Accessing drawing properties

- [lineWidth](linewidth.md): The line width of the path.
- [lineJoinStyle](linejoinstyle.md): The shape of the joints between connected segments of a stroked path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [flatness](flatness.md): The factor that determines the rendering accuracy for curved path segments.
- [usesEvenOddFillRule](usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.
