> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathrenderer/linedashphase](https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/linedashphase)

# lineDashPhase (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The offset (in points) at which to start drawing the dash pattern.

## Declaration

```swift
var lineDashPhase: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to start drawing a dashed line partway through a segment or gap. For example, a phase value of `6` for the pattern 5-2-3-2 would cause drawing to begin in the middle of the first gap.

The default value of this property is `0`.

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): The fill color to use for the path.
- [strokeColor](strokecolor.md): The stroke color to use for the path.
- [lineWidth](linewidth.md): The stroke width to use for the path.
- [lineJoin](linejoin.md): The line join style to apply to the corners of the path.
- [lineCap](linecap.md): The line cap style to apply to the open ends of the path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [lineDashPattern](linedashpattern.md): An array of numbers specifying the dash pattern to use for the path.

# lineDashPhase (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The offset (in points) at which to start drawing the dash pattern.

## Declaration

```objectivec
@property CGFloat lineDashPhase;
```

<a id="Discussion"></a>

## Discussion

Use this property to start drawing a dashed line partway through a segment or gap. For example, a phase value of `6` for the pattern 5-2-3-2 would cause drawing to begin in the middle of the first gap.

The default value of this property is `0`.

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): The fill color to use for the path.
- [strokeColor](strokecolor.md): The stroke color to use for the path.
- [lineWidth](linewidth.md): The stroke width to use for the path.
- [lineJoin](linejoin.md): The line join style to apply to the corners of the path.
- [lineCap](linecap.md): The line cap style to apply to the open ends of the path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [lineDashPattern](linedashpattern.md): An array of numbers specifying the dash pattern to use for the path.
