> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathview/linewidth](https://developer.apple.com/documentation/mapkit/mkoverlaypathview/linewidth)

# lineWidth

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The stroke width to use for the path.

> Use an [MKOverlayPathRenderer](../mkoverlaypathrenderer.md) object instead.

## Declaration

```objectivec
@property CGFloat lineWidth;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is 0.

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): Deprecated. The fill color to use for the path.
- [strokeColor](strokecolor.md): Deprecated. The stroke color to use for the path.
- [lineJoin](linejoin.md): Deprecated. The line join style to apply to corners of the path.
- [lineCap](linecap.md): Deprecated. The line cap style to apply to the open ends of the path.
- [miterLimit](miterlimit.md): Deprecated. The limiting value that helps avoid spikes at junctions between connected line segments.
- [lineDashPhase](linedashphase.md): Deprecated. The offset (in points) at which to start drawing the dash pattern.
- [lineDashPattern](linedashpattern.md): Deprecated. An array of numbers indicating the dash pattern for paths.
