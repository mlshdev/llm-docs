> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/linejoinstyle](https://developer.apple.com/documentation/uikit/uibezierpath/linejoinstyle)

# lineJoinStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The shape of the joints between connected segments of a stroked path.

## Declaration

```swift
var lineJoinStyle: CGLineJoin { get set }
```

<a id="Discussion"></a>

## Discussion

The default line join style is [CGLineJoin.miter](../../coregraphics/cglinejoin/miter.md).

## See Also

### Accessing drawing properties

- [lineWidth](linewidth.md): The line width of the path.
- [lineCapStyle](linecapstyle.md): The shape of the endpoints of a stroked path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [flatness](flatness.md): The factor that determines the rendering accuracy for curved path segments.
- [usesEvenOddFillRule](usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.

# lineJoinStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The shape of the joints between connected segments of a stroked path.

## Declaration

```objectivec
@property (nonatomic) CGLineJoin lineJoinStyle;
```

<a id="Discussion"></a>

## Discussion

The default line join style is [kCGLineJoinMiter](../../coregraphics/cglinejoin/miter.md).

## See Also

### Accessing drawing properties

- [lineWidth](linewidth.md): The line width of the path.
- [lineCapStyle](linecapstyle.md): The shape of the endpoints of a stroked path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [flatness](flatness.md): The factor that determines the rendering accuracy for curved path segments.
- [usesEvenOddFillRule](usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.
