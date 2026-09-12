> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathview/miterlimit](https://developer.apple.com/documentation/mapkit/mkoverlaypathview/miterlimit)

# miterLimit

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The limiting value that helps avoid spikes at junctions between connected line segments.

> Use an [MKOverlayPathRenderer](../mkoverlaypathrenderer.md) object instead.

## Declaration

```objectivec
@property CGFloat miterLimit;
```

<a id="Discussion"></a>

## Discussion

The miter limit helps you avoid spikes in paths that use the [kCGLineJoinMiter](../../coregraphics/cglinejoin/miter.md) join style. If the ratio of the miter length—that is, the diagonal length of the miter join—to the line thickness exceeds the miter limit, the joint is converted to a bevel join. The default miter limit is 10, which results in the conversion of miters whose angle at the joint is less than 11 degrees.

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): Deprecated. The fill color to use for the path.
- [strokeColor](strokecolor.md): Deprecated. The stroke color to use for the path.
- [lineWidth](linewidth.md): Deprecated. The stroke width to use for the path.
- [lineJoin](linejoin.md): Deprecated. The line join style to apply to corners of the path.
- [lineCap](linecap.md): Deprecated. The line cap style to apply to the open ends of the path.
- [lineDashPhase](linedashphase.md): Deprecated. The offset (in points) at which to start drawing the dash pattern.
- [lineDashPattern](linedashpattern.md): Deprecated. An array of numbers indicating the dash pattern for paths.
