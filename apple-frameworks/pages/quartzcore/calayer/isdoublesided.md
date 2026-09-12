> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/isdoublesided](https://developer.apple.com/documentation/quartzcore/calayer/isdoublesided)

# isDoubleSided (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A Boolean indicating whether the layer displays its content when facing away from the viewer. Animatable.

## Declaration

```swift
var isDoubleSided: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value in this property is [false](https://developer.apple.com/documentation/swift/false), the layer hides its content when it faces away from the viewer. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Modifying the layer’s appearance

- [contentsGravity](contentsgravity.md): A constant that specifies how the layer’s contents are positioned or scaled within its bounds.
- [Contents Gravity Values](../contents-gravity-values.md): The contents gravity constants specify the position of the content object when the layer bounds is larger than the bounds of the content object. They are used by the [contentsGravity](contentsgravity.md) property.
- [opacity](opacity.md): The opacity of the receiver. Animatable.
- [isHidden](ishidden.md): A Boolean indicating whether the layer is displayed. Animatable.
- [masksToBounds](maskstobounds.md): A Boolean indicating whether sublayers are clipped to the layer’s bounds. Animatable.
- [mask](mask.md): An optional layer whose alpha channel is used to mask the layer’s content.
- [cornerRadius](cornerradius.md): The radius to use when drawing rounded corners for the layer’s background. Animatable.
- [maskedCorners](maskedcorners.md)
- [CACornerMask](../cacornermask.md)
- [borderWidth](borderwidth.md): The width of the layer’s border. Animatable.
- [borderColor](bordercolor.md): The color of the layer’s border. Animatable.
- [backgroundColor](backgroundcolor.md): The background color of the receiver. Animatable.
- [shadowOpacity](shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
- [shadowOffset](shadowoffset.md): The offset (in points) of the layer’s shadow. Animatable.

# doubleSided (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A Boolean indicating whether the layer displays its content when facing away from the viewer. Animatable.

## Declaration

```objectivec
@property (getter=isDoubleSided) BOOL doubleSided;
```

<a id="Discussion"></a>

## Discussion

When the value in this property is [false](https://developer.apple.com/documentation/swift/false), the layer hides its content when it faces away from the viewer. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Modifying the layer’s appearance

- [contentsGravity](contentsgravity.md): A constant that specifies how the layer’s contents are positioned or scaled within its bounds.
- [Contents Gravity Values](../contents-gravity-values.md): The contents gravity constants specify the position of the content object when the layer bounds is larger than the bounds of the content object. They are used by the [contentsGravity](contentsgravity.md) property.
- [opacity](opacity.md): The opacity of the receiver. Animatable.
- [hidden](ishidden.md): A Boolean indicating whether the layer is displayed. Animatable.
- [masksToBounds](maskstobounds.md): A Boolean indicating whether sublayers are clipped to the layer’s bounds. Animatable.
- [mask](mask.md): An optional layer whose alpha channel is used to mask the layer’s content.
- [cornerRadius](cornerradius.md): The radius to use when drawing rounded corners for the layer’s background. Animatable.
- [maskedCorners](maskedcorners.md)
- [CACornerMask](../cacornermask.md)
- [borderWidth](borderwidth.md): The width of the layer’s border. Animatable.
- [borderColor](bordercolor.md): The color of the layer’s border. Animatable.
- [backgroundColor](backgroundcolor.md): The background color of the receiver. Animatable.
- [shadowOpacity](shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
- [shadowOffset](shadowoffset.md): The offset (in points) of the layer’s shadow. Animatable.
