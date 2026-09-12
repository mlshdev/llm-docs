> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cashapelayer/miterlimit](https://developer.apple.com/documentation/quartzcore/cashapelayer/miterlimit)

# miterLimit (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The miter limit used when stroking the shape’s path. Animatable.

## Declaration

```swift
var miterLimit: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the current line join style is set to [miter](../cashapelayerlinejoin/miter.md) (see [lineJoin](linejoin.md)), the miter limit determines whether the lines should be joined with a bevel instead of a miter. The length of the miter is divided by the line width. If the result is greater than the miter limit, the path is drawn with a bevel.

Default is `10.0`.

## See Also

### Accessing Shape Style Properties

- [fillColor](fillcolor.md): The color used to fill the shape’s path. Animatable.
- [fillRule](fillrule.md): The fill rule used when filling the shape’s path.
- [lineCap](linecap.md): Specifies the line cap style for the shape’s path.
- [lineDashPattern](linedashpattern.md): The dash pattern applied to the shape’s path when stroked.
- [lineDashPhase](linedashphase.md): The dash phase applied to the shape’s path when stroked. Animatable.
- [lineJoin](linejoin.md): Specifies the line join style for the shape’s path.
- [lineWidth](linewidth.md): Specifies the line width of the shape’s path. Animatable.
- [strokeColor](strokecolor.md): The color used to stroke the shape’s path. Animatable.
- [strokeStart](strokestart.md): The relative location at which to begin stroking the path. Animatable.
- [strokeEnd](strokeend.md): The relative location at which to stop stroking the path. Animatable.

# miterLimit (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The miter limit used when stroking the shape’s path. Animatable.

## Declaration

```objectivec
@property CGFloat miterLimit;
```

<a id="Discussion"></a>

## Discussion

If the current line join style is set to [kCALineJoinMiter](../cashapelayerlinejoin/miter.md) (see [lineJoin](linejoin.md)), the miter limit determines whether the lines should be joined with a bevel instead of a miter. The length of the miter is divided by the line width. If the result is greater than the miter limit, the path is drawn with a bevel.

Default is `10.0`.

## See Also

### Accessing Shape Style Properties

- [fillColor](fillcolor.md): The color used to fill the shape’s path. Animatable.
- [fillRule](fillrule.md): The fill rule used when filling the shape’s path.
- [lineCap](linecap.md): Specifies the line cap style for the shape’s path.
- [lineDashPattern](linedashpattern.md): The dash pattern applied to the shape’s path when stroked.
- [lineDashPhase](linedashphase.md): The dash phase applied to the shape’s path when stroked. Animatable.
- [lineJoin](linejoin.md): Specifies the line join style for the shape’s path.
- [lineWidth](linewidth.md): Specifies the line width of the shape’s path. Animatable.
- [strokeColor](strokecolor.md): The color used to stroke the shape’s path. Animatable.
- [strokeStart](strokestart.md): The relative location at which to begin stroking the path. Animatable.
- [strokeEnd](strokeend.md): The relative location at which to stop stroking the path. Animatable.
