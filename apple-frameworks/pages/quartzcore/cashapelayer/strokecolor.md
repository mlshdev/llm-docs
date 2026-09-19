> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/cashapelayer/strokecolor

# strokeColor (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The color used to stroke the shape’s path. Animatable.

## Declaration

```swift
var strokeColor: CGColor? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting `strokeColor` to `nil` results in no stroke being rendered.

Default is `nil`.

## See Also

### Accessing Shape Style Properties

- [fillColor](fillcolor.md): The color used to fill the shape’s path. Animatable.
- [fillRule](fillrule.md): The fill rule used when filling the shape’s path.
- [lineCap](linecap.md): Specifies the line cap style for the shape’s path.
- [lineDashPattern](linedashpattern.md): The dash pattern applied to the shape’s path when stroked.
- [lineDashPhase](linedashphase.md): The dash phase applied to the shape’s path when stroked. Animatable.
- [lineJoin](linejoin.md): Specifies the line join style for the shape’s path.
- [lineWidth](linewidth.md): Specifies the line width of the shape’s path. Animatable.
- [miterLimit](miterlimit.md): The miter limit used when stroking the shape’s path. Animatable.
- [strokeStart](strokestart.md): The relative location at which to begin stroking the path. Animatable.
- [strokeEnd](strokeend.md): The relative location at which to stop stroking the path. Animatable.

# strokeColor (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The color used to stroke the shape’s path. Animatable.

## Declaration

```objectivec
@property (nullable) CGColorRef strokeColor;
```

<a id="Discussion"></a>

## Discussion

Setting `strokeColor` to `nil` results in no stroke being rendered.

Default is `nil`.

## See Also

### Accessing Shape Style Properties

- [fillColor](fillcolor.md): The color used to fill the shape’s path. Animatable.
- [fillRule](fillrule.md): The fill rule used when filling the shape’s path.
- [lineCap](linecap.md): Specifies the line cap style for the shape’s path.
- [lineDashPattern](linedashpattern.md): The dash pattern applied to the shape’s path when stroked.
- [lineDashPhase](linedashphase.md): The dash phase applied to the shape’s path when stroked. Animatable.
- [lineJoin](linejoin.md): Specifies the line join style for the shape’s path.
- [lineWidth](linewidth.md): Specifies the line width of the shape’s path. Animatable.
- [miterLimit](miterlimit.md): The miter limit used when stroking the shape’s path. Animatable.
- [strokeStart](strokestart.md): The relative location at which to begin stroking the path. Animatable.
- [strokeEnd](strokeend.md): The relative location at which to stop stroking the path. Animatable.
