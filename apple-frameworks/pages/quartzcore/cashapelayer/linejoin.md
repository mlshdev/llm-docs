> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cashapelayer/linejoin](https://developer.apple.com/documentation/quartzcore/cashapelayer/linejoin)

# lineJoin (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the line join style for the shape’s path.

## Declaration

```swift
var lineJoin: CAShapeLayerLineJoin { get set }
```

<a id="Discussion"></a>

## Discussion

The line join style specifies the shape of the joints between connected segments of a stroked path. The supported values are described in [Line Join Values](../line-join-values.md). The following figure shows the appearance of the available line join styles.

![](https://developer.apple.com/images/com.apple.quartzcore/media-1965771.gif)

The default is [miter](../cashapelayerlinejoin/miter.md).

## See Also

### Accessing Shape Style Properties

- [fillColor](fillcolor.md): The color used to fill the shape’s path. Animatable.
- [fillRule](fillrule.md): The fill rule used when filling the shape’s path.
- [lineCap](linecap.md): Specifies the line cap style for the shape’s path.
- [lineDashPattern](linedashpattern.md): The dash pattern applied to the shape’s path when stroked.
- [lineDashPhase](linedashphase.md): The dash phase applied to the shape’s path when stroked. Animatable.
- [lineWidth](linewidth.md): Specifies the line width of the shape’s path. Animatable.
- [miterLimit](miterlimit.md): The miter limit used when stroking the shape’s path. Animatable.
- [strokeColor](strokecolor.md): The color used to stroke the shape’s path. Animatable.
- [strokeStart](strokestart.md): The relative location at which to begin stroking the path. Animatable.
- [strokeEnd](strokeend.md): The relative location at which to stop stroking the path. Animatable.

# lineJoin (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the line join style for the shape’s path.

## Declaration

```objectivec
@property (copy) CAShapeLayerLineJoin lineJoin;
```

<a id="Discussion"></a>

## Discussion

The line join style specifies the shape of the joints between connected segments of a stroked path. The supported values are described in [Line Join Values](../line-join-values.md). The following figure shows the appearance of the available line join styles.

![](https://developer.apple.com/images/com.apple.quartzcore/media-1965771.gif)

The default is [kCALineJoinMiter](../cashapelayerlinejoin/miter.md).

## See Also

### Accessing Shape Style Properties

- [fillColor](fillcolor.md): The color used to fill the shape’s path. Animatable.
- [fillRule](fillrule.md): The fill rule used when filling the shape’s path.
- [lineCap](linecap.md): Specifies the line cap style for the shape’s path.
- [lineDashPattern](linedashpattern.md): The dash pattern applied to the shape’s path when stroked.
- [lineDashPhase](linedashphase.md): The dash phase applied to the shape’s path when stroked. Animatable.
- [lineWidth](linewidth.md): Specifies the line width of the shape’s path. Animatable.
- [miterLimit](miterlimit.md): The miter limit used when stroking the shape’s path. Animatable.
- [strokeColor](strokecolor.md): The color used to stroke the shape’s path. Animatable.
- [strokeStart](strokestart.md): The relative location at which to begin stroking the path. Animatable.
- [strokeEnd](strokeend.md): The relative location at which to stop stroking the path. Animatable.
