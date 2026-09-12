> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/borderwidth](https://developer.apple.com/documentation/quartzcore/calayer/borderwidth)

# borderWidth (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The width of the layer’s border. Animatable.

## Declaration

```swift
var borderWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When this value is greater than 0.0, the layer draws a border using the current [borderColor](bordercolor.md) value. The border is drawn inset from the receiver’s bounds by the value specified in this property. It is composited above the receiver’s contents and sublayers and includes the effects of the [cornerRadius](cornerradius.md) property.

The default value of this property is `0.0`.

## See Also

### Modifying the layer’s appearance

- [contentsGravity](contentsgravity.md): A constant that specifies how the layer’s contents are positioned or scaled within its bounds.
- [Contents Gravity Values](../contents-gravity-values.md): The contents gravity constants specify the position of the content object when the layer bounds is larger than the bounds of the content object. They are used by the [contentsGravity](contentsgravity.md) property.
- [opacity](opacity.md): The opacity of the receiver. Animatable.
- [isHidden](ishidden.md): A Boolean indicating whether the layer is displayed. Animatable.
- [masksToBounds](maskstobounds.md): A Boolean indicating whether sublayers are clipped to the layer’s bounds. Animatable.
- [mask](mask.md): An optional layer whose alpha channel is used to mask the layer’s content.
- [isDoubleSided](isdoublesided.md): A Boolean indicating whether the layer displays its content when facing away from the viewer. Animatable.
- [cornerRadius](cornerradius.md): The radius to use when drawing rounded corners for the layer’s background. Animatable.
- [maskedCorners](maskedcorners.md)
- [CACornerMask](../cacornermask.md)
- [borderColor](bordercolor.md): The color of the layer’s border. Animatable.
- [backgroundColor](backgroundcolor.md): The background color of the receiver. Animatable.
- [shadowOpacity](shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
- [shadowOffset](shadowoffset.md): The offset (in points) of the layer’s shadow. Animatable.

# borderWidth (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The width of the layer’s border. Animatable.

## Declaration

```objectivec
@property CGFloat borderWidth;
```

<a id="Discussion"></a>

## Discussion

When this value is greater than 0.0, the layer draws a border using the current [borderColor](bordercolor.md) value. The border is drawn inset from the receiver’s bounds by the value specified in this property. It is composited above the receiver’s contents and sublayers and includes the effects of the [cornerRadius](cornerradius.md) property.

The default value of this property is `0.0`.

## See Also

### Modifying the layer’s appearance

- [contentsGravity](contentsgravity.md): A constant that specifies how the layer’s contents are positioned or scaled within its bounds.
- [Contents Gravity Values](../contents-gravity-values.md): The contents gravity constants specify the position of the content object when the layer bounds is larger than the bounds of the content object. They are used by the [contentsGravity](contentsgravity.md) property.
- [opacity](opacity.md): The opacity of the receiver. Animatable.
- [hidden](ishidden.md): A Boolean indicating whether the layer is displayed. Animatable.
- [masksToBounds](maskstobounds.md): A Boolean indicating whether sublayers are clipped to the layer’s bounds. Animatable.
- [mask](mask.md): An optional layer whose alpha channel is used to mask the layer’s content.
- [doubleSided](isdoublesided.md): A Boolean indicating whether the layer displays its content when facing away from the viewer. Animatable.
- [cornerRadius](cornerradius.md): The radius to use when drawing rounded corners for the layer’s background. Animatable.
- [maskedCorners](maskedcorners.md)
- [CACornerMask](../cacornermask.md)
- [borderColor](bordercolor.md): The color of the layer’s border. Animatable.
- [backgroundColor](backgroundcolor.md): The background color of the receiver. Animatable.
- [shadowOpacity](shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
- [shadowOffset](shadowoffset.md): The offset (in points) of the layer’s shadow. Animatable.
