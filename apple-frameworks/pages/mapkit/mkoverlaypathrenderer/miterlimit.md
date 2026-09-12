> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathrenderer/miterlimit](https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/miterlimit)

# miterLimit (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The limiting value that helps avoid spikes at junctions between connected line segments.

## Declaration

```swift
var miterLimit: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The miter limit helps you avoid spikes in paths that use the [CGLineJoin.miter](../../coregraphics/cglinejoin/miter.md) join style. If the ratio of the miter length to the line thickness — the diagonal length of the miter join — exceeds the miter limit, the renderer converts the joint to a bevel join. The default miter limit is `10`, which results in the conversion of miters with an angle at the joint of less than `11` degrees.

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): The fill color to use for the path.
- [strokeColor](strokecolor.md): The stroke color to use for the path.
- [lineWidth](linewidth.md): The stroke width to use for the path.
- [lineJoin](linejoin.md): The line join style to apply to the corners of the path.
- [lineCap](linecap.md): The line cap style to apply to the open ends of the path.
- [lineDashPhase](linedashphase.md): The offset (in points) at which to start drawing the dash pattern.
- [lineDashPattern](linedashpattern.md): An array of numbers specifying the dash pattern to use for the path.

# miterLimit (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The limiting value that helps avoid spikes at junctions between connected line segments.

## Declaration

```objectivec
@property CGFloat miterLimit;
```

<a id="Discussion"></a>

## Discussion

The miter limit helps you avoid spikes in paths that use the [kCGLineJoinMiter](../../coregraphics/cglinejoin/miter.md) join style. If the ratio of the miter length to the line thickness — the diagonal length of the miter join — exceeds the miter limit, the renderer converts the joint to a bevel join. The default miter limit is `10`, which results in the conversion of miters with an angle at the joint of less than `11` degrees.

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): The fill color to use for the path.
- [strokeColor](strokecolor.md): The stroke color to use for the path.
- [lineWidth](linewidth.md): The stroke width to use for the path.
- [lineJoin](linejoin.md): The line join style to apply to the corners of the path.
- [lineCap](linecap.md): The line cap style to apply to the open ends of the path.
- [lineDashPhase](linedashphase.md): The offset (in points) at which to start drawing the dash pattern.
- [lineDashPattern](linedashpattern.md): An array of numbers specifying the dash pattern to use for the path.
