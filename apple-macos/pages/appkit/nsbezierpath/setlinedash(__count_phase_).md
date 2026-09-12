> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/setlinedash(_:count:phase:)](https://developer.apple.com/documentation/appkit/nsbezierpath/setlinedash(_:count:phase:))

# setLineDash(\_:count:phase:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the line-stroking pattern for the path.

## Declaration

```swift
func setLineDash(_ pattern: UnsafePointer<CGFloat>?, count: Int, phase: CGFloat)
```

## Parameters

- `pattern`: A C-style array of floating point values that contains the lengths (measured in points) of the line segments and gaps in the pattern. The values in the array alternate, starting with the first line segment length, followed by the first gap length, followed by the second line segment length, and so on
- `count`: The number of values in `pattern`.
- `phase`: The offset at which to start drawing the pattern, measured in points along the dashed-line pattern. For example, a phase of 6 in the pattern 5-2-3-2 would cause drawing to begin in the middle of the first gap

<a id="Discussion"></a>

## Discussion

For example, to produce a supermarket coupon type of dashed line:

```objc
array[0] = 5.0; //segment painted with stroke color
array[1] = 2.0; //segment not painted with a color
 
[path setLineDash: array count: 2 phase: 0.0];
```

In the above example, if you set `phase` to 6.0, the line dash would begin exactly six units into `pattern`, which would start the pattern in the middle of the first gap.

## See Also

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.

# setLineDash:count:phase: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the line-stroking pattern for the path.

## Declaration

```objectivec
- (void) setLineDash:(const CGFloat *) pattern count:(NSInteger) count phase:(CGFloat) phase;
```

## Parameters

- `pattern`: A C-style array of floating point values that contains the lengths (measured in points) of the line segments and gaps in the pattern. The values in the array alternate, starting with the first line segment length, followed by the first gap length, followed by the second line segment length, and so on
- `count`: The number of values in `pattern`.
- `phase`: The offset at which to start drawing the pattern, measured in points along the dashed-line pattern. For example, a phase of 6 in the pattern 5-2-3-2 would cause drawing to begin in the middle of the first gap

<a id="Discussion"></a>

## Discussion

For example, to produce a supermarket coupon type of dashed line:

```objc
array[0] = 5.0; //segment painted with stroke color
array[1] = 2.0; //segment not painted with a color
 
[path setLineDash: array count: 2 phase: 0.0];
```

In the above example, if you set `phase` to 6.0, the line dash would begin exactly six units into `pattern`, which would start the pattern in the middle of the first gap.

## See Also

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
