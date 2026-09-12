> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/flatness](https://developer.apple.com/documentation/uikit/uibezierpath/flatness)

# flatness (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The factor that determines the rendering accuracy for curved path segments.

## Declaration

```swift
var flatness: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The flatness value measures the largest permissible distance (measured in pixels) between a point on the true curve and a point on the rendered curve. Smaller values result in smoother curves but require more computation time. Larger values result in more jagged curves but are rendered much faster. The default flatness value is `0.6`.

In most cases, you should not change the flatness value. However, you might increase the flatness value temporarily to minimize the amount of time it takes to draw a shape temporarily (such as during scrolling).

## See Also

### Accessing drawing properties

- [lineWidth](linewidth.md): The line width of the path.
- [lineCapStyle](linecapstyle.md): The shape of the endpoints of a stroked path.
- [lineJoinStyle](linejoinstyle.md): The shape of the joints between connected segments of a stroked path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [usesEvenOddFillRule](usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.

# flatness (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The factor that determines the rendering accuracy for curved path segments.

## Declaration

```objectivec
@property (nonatomic) CGFloat flatness;
```

<a id="Discussion"></a>

## Discussion

The flatness value measures the largest permissible distance (measured in pixels) between a point on the true curve and a point on the rendered curve. Smaller values result in smoother curves but require more computation time. Larger values result in more jagged curves but are rendered much faster. The default flatness value is `0.6`.

In most cases, you should not change the flatness value. However, you might increase the flatness value temporarily to minimize the amount of time it takes to draw a shape temporarily (such as during scrolling).

## See Also

### Accessing drawing properties

- [lineWidth](linewidth.md): The line width of the path.
- [lineCapStyle](linecapstyle.md): The shape of the endpoints of a stroked path.
- [lineJoinStyle](linejoinstyle.md): The shape of the joints between connected segments of a stroked path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [usesEvenOddFillRule](usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.
