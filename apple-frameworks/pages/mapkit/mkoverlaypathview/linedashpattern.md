> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathview/linedashpattern](https://developer.apple.com/documentation/mapkit/mkoverlaypathview/linedashpattern)

# lineDashPattern

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

An array of numbers indicating the dash pattern for paths.

> Use an [MKOverlayPathRenderer](../mkoverlaypathrenderer.md) object instead.

## Declaration

```objectivec
@property (copy) NSArray * lineDashPattern;
```

<a id="Discussion"></a>

## Discussion

The array contains one or more [NSNumber](../../foundation/nsnumber.md) objects that indicate the lengths (measured in points) of the line segments and gaps in the pattern. The values in the array alternate, starting with the first line segment length, followed by the first gap length, followed by the second line segment length, and so on.

This property is set to `nil` by default, which indicates no line dash pattern.

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): Deprecated. The fill color to use for the path.
- [strokeColor](strokecolor.md): Deprecated. The stroke color to use for the path.
- [lineWidth](linewidth.md): Deprecated. The stroke width to use for the path.
- [lineJoin](linejoin.md): Deprecated. The line join style to apply to corners of the path.
- [lineCap](linecap.md): Deprecated. The line cap style to apply to the open ends of the path.
- [miterLimit](miterlimit.md): Deprecated. The limiting value that helps avoid spikes at junctions between connected line segments.
- [lineDashPhase](linedashphase.md): Deprecated. The offset (in points) at which to start drawing the dash pattern.
