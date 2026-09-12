> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/backgroundcolor](https://developer.apple.com/documentation/quartzcore/calayer/backgroundcolor)

# backgroundColor (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The background color of the receiver. Animatable.

## Declaration

```swift
var backgroundColor: CGColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`.

The value of this property is retained using the Core Foundation retain/release semantics. This behavior occurs despite the fact that the property declaration appears to use the default assign semantics for object retention.

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
- [borderWidth](borderwidth.md): The width of the layer’s border. Animatable.
- [borderColor](bordercolor.md): The color of the layer’s border. Animatable.
- [shadowOpacity](shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
- [shadowOffset](shadowoffset.md): The offset (in points) of the layer’s shadow. Animatable.

# backgroundColor (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The background color of the receiver. Animatable.

## Declaration

```objectivec
@property (nullable) CGColorRef backgroundColor;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`.

The value of this property is retained using the Core Foundation retain/release semantics. This behavior occurs despite the fact that the property declaration appears to use the default assign semantics for object retention.

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
- [borderWidth](borderwidth.md): The width of the layer’s border. Animatable.
- [borderColor](bordercolor.md): The color of the layer’s border. Animatable.
- [shadowOpacity](shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
- [shadowOffset](shadowoffset.md): The offset (in points) of the layer’s shadow. Animatable.
