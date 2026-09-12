> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/allowsedgeantialiasing](https://developer.apple.com/documentation/quartzcore/calayer/allowsedgeantialiasing)

# allowsEdgeAntialiasing (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean indicating whether the layer is allowed to perform edge antialiasing.

## Declaration

```swift
var allowsEdgeAntialiasing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value is [true](https://developer.apple.com/documentation/swift/true), the layer is allowed to antialias its edges, as requested by the value in the layer’s [edgeAntialiasingMask](edgeantialiasingmask.md) property. The default value is read from the boolean `UIViewEdgeAntialiasing` property in the main bundle’s `Info.plist` file. If no value is found, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.

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
- [backgroundColor](backgroundcolor.md): The background color of the receiver. Animatable.
- [shadowOpacity](shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.

# allowsEdgeAntialiasing (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean indicating whether the layer is allowed to perform edge antialiasing.

## Declaration

```objectivec
@property BOOL allowsEdgeAntialiasing;
```

<a id="Discussion"></a>

## Discussion

When the value is [true](https://developer.apple.com/documentation/swift/true), the layer is allowed to antialias its edges, as requested by the value in the layer’s [edgeAntialiasingMask](edgeantialiasingmask.md) property. The default value is read from the boolean `UIViewEdgeAntialiasing` property in the main bundle’s `Info.plist` file. If no value is found, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.

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
- [backgroundColor](backgroundcolor.md): The background color of the receiver. Animatable.
- [shadowOpacity](shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
