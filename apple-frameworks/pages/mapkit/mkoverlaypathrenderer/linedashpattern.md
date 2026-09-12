> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathrenderer/linedashpattern](https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/linedashpattern)

# lineDashPattern (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

An array of numbers specifying the dash pattern to use for the path.

## Declaration

```swift
var lineDashPattern: [NSNumber]? { get set }
```

<a id="Discussion"></a>

## Discussion

The array contains one or more [NSNumber](../../foundation/nsnumber.md) objects that indicate the lengths (in points) of the line segments and gaps in the pattern. The values in the array alternate, starting with the first line segment length, followed by the first gap length, followed by the second line segment length, and so on.

This property is `nil` by default, which indicates no line dash pattern.

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): The fill color to use for the path.
- [strokeColor](strokecolor.md): The stroke color to use for the path.
- [lineWidth](linewidth.md): The stroke width to use for the path.
- [lineJoin](linejoin.md): The line join style to apply to the corners of the path.
- [lineCap](linecap.md): The line cap style to apply to the open ends of the path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [lineDashPhase](linedashphase.md): The offset (in points) at which to start drawing the dash pattern.

# lineDashPattern (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

An array of numbers specifying the dash pattern to use for the path.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSNumber *> * lineDashPattern;
```

<a id="Discussion"></a>

## Discussion

The array contains one or more [NSNumber](../../foundation/nsnumber.md) objects that indicate the lengths (in points) of the line segments and gaps in the pattern. The values in the array alternate, starting with the first line segment length, followed by the first gap length, followed by the second line segment length, and so on.

This property is `nil` by default, which indicates no line dash pattern.

## See Also

### Accessing the drawing attributes

- [fillColor](fillcolor.md): The fill color to use for the path.
- [strokeColor](strokecolor.md): The stroke color to use for the path.
- [lineWidth](linewidth.md): The stroke width to use for the path.
- [lineJoin](linejoin.md): The line join style to apply to the corners of the path.
- [lineCap](linecap.md): The line cap style to apply to the open ends of the path.
- [miterLimit](miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [lineDashPhase](linedashphase.md): The offset (in points) at which to start drawing the dash pattern.
