> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cacornermask](https://developer.apple.com/documentation/quartzcore/cacornermask)

# CACornerMask (Swift)

**Framework:** Core Animation  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
struct CACornerMask
```

## Topics

### Constants

- [init(rawValue:)](cacornermask/init%28rawvalue_%29.md)
- [layerMaxXMaxYCorner](cacornermask/layermaxxmaxycorner.md)
- [layerMaxXMinYCorner](cacornermask/layermaxxminycorner.md)
- [layerMinXMaxYCorner](cacornermask/layerminxmaxycorner.md)
- [layerMinXMinYCorner](cacornermask/layerminxminycorner.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Modifying the layer’s appearance

- [contentsGravity](calayer/contentsgravity.md): A constant that specifies how the layer’s contents are positioned or scaled within its bounds.
- [Contents Gravity Values](contents-gravity-values.md): The contents gravity constants specify the position of the content object when the layer bounds is larger than the bounds of the content object. They are used by the [contentsGravity](calayer/contentsgravity.md) property.
- [opacity](calayer/opacity.md): The opacity of the receiver. Animatable.
- [isHidden](calayer/ishidden.md): A Boolean indicating whether the layer is displayed. Animatable.
- [masksToBounds](calayer/maskstobounds.md): A Boolean indicating whether sublayers are clipped to the layer’s bounds. Animatable.
- [mask](calayer/mask.md): An optional layer whose alpha channel is used to mask the layer’s content.
- [isDoubleSided](calayer/isdoublesided.md): A Boolean indicating whether the layer displays its content when facing away from the viewer. Animatable.
- [cornerRadius](calayer/cornerradius.md): The radius to use when drawing rounded corners for the layer’s background. Animatable.
- [maskedCorners](calayer/maskedcorners.md)
- [borderWidth](calayer/borderwidth.md): The width of the layer’s border. Animatable.
- [borderColor](calayer/bordercolor.md): The color of the layer’s border. Animatable.
- [backgroundColor](calayer/backgroundcolor.md): The background color of the receiver. Animatable.
- [shadowOpacity](calayer/shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](calayer/shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
- [shadowOffset](calayer/shadowoffset.md): The offset (in points) of the layer’s shadow. Animatable.

# CACornerMask (Objective-C)

**Framework:** Core Animation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
enum CACornerMask : NSUInteger;
```

## Topics

### Constants

- [kCALayerMaxXMaxYCorner](cacornermask/layermaxxmaxycorner.md)
- [kCALayerMaxXMinYCorner](cacornermask/layermaxxminycorner.md)
- [kCALayerMinXMaxYCorner](cacornermask/layerminxmaxycorner.md)
- [kCALayerMinXMinYCorner](cacornermask/layerminxminycorner.md)

## See Also

### Modifying the layer’s appearance

- [contentsGravity](calayer/contentsgravity.md): A constant that specifies how the layer’s contents are positioned or scaled within its bounds.
- [Contents Gravity Values](contents-gravity-values.md): The contents gravity constants specify the position of the content object when the layer bounds is larger than the bounds of the content object. They are used by the [contentsGravity](calayer/contentsgravity.md) property.
- [opacity](calayer/opacity.md): The opacity of the receiver. Animatable.
- [hidden](calayer/ishidden.md): A Boolean indicating whether the layer is displayed. Animatable.
- [masksToBounds](calayer/maskstobounds.md): A Boolean indicating whether sublayers are clipped to the layer’s bounds. Animatable.
- [mask](calayer/mask.md): An optional layer whose alpha channel is used to mask the layer’s content.
- [doubleSided](calayer/isdoublesided.md): A Boolean indicating whether the layer displays its content when facing away from the viewer. Animatable.
- [cornerRadius](calayer/cornerradius.md): The radius to use when drawing rounded corners for the layer’s background. Animatable.
- [maskedCorners](calayer/maskedcorners.md)
- [borderWidth](calayer/borderwidth.md): The width of the layer’s border. Animatable.
- [borderColor](calayer/bordercolor.md): The color of the layer’s border. Animatable.
- [backgroundColor](calayer/backgroundcolor.md): The background color of the receiver. Animatable.
- [shadowOpacity](calayer/shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](calayer/shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
- [shadowOffset](calayer/shadowoffset.md): The offset (in points) of the layer’s shadow. Animatable.
