> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/miterlimit](https://developer.apple.com/documentation/uikit/uibezierpath/miterlimit)

# miterLimit (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The limiting value that helps avoid spikes at junctions between connected line segments.

## Declaration

```swift
var miterLimit: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The miter limit helps you avoid spikes in paths that use the [CGLineJoin.miter](../../coregraphics/cglinejoin/miter.md) join style. If the ratio of the miter length—that is, the diagonal length of the miter join—to the line thickness exceeds the miter limit, the joint is converted to a bevel join. The default miter limit is 10, which results in the conversion of miters whose angle at the joint is less than 11 degrees.

## See Also

### Accessing drawing properties

- [lineWidth](linewidth.md): The line width of the path.
- [lineCapStyle](linecapstyle.md): The shape of the endpoints of a stroked path.
- [lineJoinStyle](linejoinstyle.md): The shape of the joints between connected segments of a stroked path.
- [flatness](flatness.md): The factor that determines the rendering accuracy for curved path segments.
- [usesEvenOddFillRule](usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.

# miterLimit (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The limiting value that helps avoid spikes at junctions between connected line segments.

## Declaration

```objectivec
@property (nonatomic) CGFloat miterLimit;
```

<a id="Discussion"></a>

## Discussion

The miter limit helps you avoid spikes in paths that use the [kCGLineJoinMiter](../../coregraphics/cglinejoin/miter.md) join style. If the ratio of the miter length—that is, the diagonal length of the miter join—to the line thickness exceeds the miter limit, the joint is converted to a bevel join. The default miter limit is 10, which results in the conversion of miters whose angle at the joint is less than 11 degrees.

## See Also

### Accessing drawing properties

- [lineWidth](linewidth.md): The line width of the path.
- [lineCapStyle](linecapstyle.md): The shape of the endpoints of a stroked path.
- [lineJoinStyle](linejoinstyle.md): The shape of the joints between connected segments of a stroked path.
- [flatness](flatness.md): The factor that determines the rendering accuracy for curved path segments.
- [usesEvenOddFillRule](usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.
