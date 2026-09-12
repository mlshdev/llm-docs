> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathrenderer/linecap](https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/linecap)

# lineCap (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The line cap style to apply to the open ends of the path.

## Declaration

```swift
var lineCap: CGLineCap { get set }
```

<a id="Discussion"></a>

## Discussion

The line cap style applies to the start and end points of any open subpaths. This property doesn’t affect closed subpaths. The default line cap style is [CGLineCap.round](../../coregraphics/cglinecap/round.md).

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): The fill color to use for the path.
- [strokeColor](strokecolor.md): The stroke color to use for the path.
- [lineWidth](linewidth.md): The stroke width to use for the path.
- [lineJoin](linejoin.md): The line join style to apply to the corners of the path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [lineDashPhase](linedashphase.md): The offset (in points) at which to start drawing the dash pattern.
- [lineDashPattern](linedashpattern.md): An array of numbers specifying the dash pattern to use for the path.

# lineCap (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The line cap style to apply to the open ends of the path.

## Declaration

```objectivec
@property CGLineCap lineCap;
```

<a id="Discussion"></a>

## Discussion

The line cap style applies to the start and end points of any open subpaths. This property doesn’t affect closed subpaths. The default line cap style is [kCGLineCapRound](../../coregraphics/cglinecap/round.md).

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): The fill color to use for the path.
- [strokeColor](strokecolor.md): The stroke color to use for the path.
- [lineWidth](linewidth.md): The stroke width to use for the path.
- [lineJoin](linejoin.md): The line join style to apply to the corners of the path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [lineDashPhase](linedashphase.md): The offset (in points) at which to start drawing the dash pattern.
- [lineDashPattern](linedashpattern.md): An array of numbers specifying the dash pattern to use for the path.
