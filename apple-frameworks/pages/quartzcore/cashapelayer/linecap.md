> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cashapelayer/linecap](https://developer.apple.com/documentation/quartzcore/cashapelayer/linecap)

# lineCap (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the line cap style for the shape’s path.

## Declaration

```swift
var lineCap: CAShapeLayerLineCap { get set }
```

<a id="Discussion"></a>

## Discussion

The line cap style specifies the shape of the endpoints of an open path when stroked. The supported values are described in [Line Cap Values](../line-cap-values.md). The following figure shows the appearance of the available line cap styles.

![](https://developer.apple.com/images/com.apple.quartzcore/media-1965770.gif)

The default is [butt](../cashapelayerlinecap/butt.md).

## See Also

### Accessing Shape Style Properties

- [fillColor](fillcolor.md): The color used to fill the shape’s path. Animatable.
- [fillRule](fillrule.md): The fill rule used when filling the shape’s path.
- [lineDashPattern](linedashpattern.md): The dash pattern applied to the shape’s path when stroked.
- [lineDashPhase](linedashphase.md): The dash phase applied to the shape’s path when stroked. Animatable.
- [lineJoin](linejoin.md): Specifies the line join style for the shape’s path.
- [lineWidth](linewidth.md): Specifies the line width of the shape’s path. Animatable.
- [miterLimit](miterlimit.md): The miter limit used when stroking the shape’s path. Animatable.
- [strokeColor](strokecolor.md): The color used to stroke the shape’s path. Animatable.
- [strokeStart](strokestart.md): The relative location at which to begin stroking the path. Animatable.
- [strokeEnd](strokeend.md): The relative location at which to stop stroking the path. Animatable.

# lineCap (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the line cap style for the shape’s path.

## Declaration

```objectivec
@property (copy) CAShapeLayerLineCap lineCap;
```

<a id="Discussion"></a>

## Discussion

The line cap style specifies the shape of the endpoints of an open path when stroked. The supported values are described in [Line Cap Values](../line-cap-values.md). The following figure shows the appearance of the available line cap styles.

![](https://developer.apple.com/images/com.apple.quartzcore/media-1965770.gif)

The default is [kCALineCapButt](../cashapelayerlinecap/butt.md).

## See Also

### Accessing Shape Style Properties

- [fillColor](fillcolor.md): The color used to fill the shape’s path. Animatable.
- [fillRule](fillrule.md): The fill rule used when filling the shape’s path.
- [lineDashPattern](linedashpattern.md): The dash pattern applied to the shape’s path when stroked.
- [lineDashPhase](linedashphase.md): The dash phase applied to the shape’s path when stroked. Animatable.
- [lineJoin](linejoin.md): Specifies the line join style for the shape’s path.
- [lineWidth](linewidth.md): Specifies the line width of the shape’s path. Animatable.
- [miterLimit](miterlimit.md): The miter limit used when stroking the shape’s path. Animatable.
- [strokeColor](strokecolor.md): The color used to stroke the shape’s path. Animatable.
- [strokeStart](strokestart.md): The relative location at which to begin stroking the path. Animatable.
- [strokeEnd](strokeend.md): The relative location at which to stop stroking the path. Animatable.
