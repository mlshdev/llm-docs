> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cagradientlayer/type](https://developer.apple.com/documentation/quartzcore/cagradientlayer/type)

# type (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Style of gradient drawn by the layer.

## Declaration

```swift
var type: CAGradientLayerType { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [axial](../cagradientlayertype/axial.md).

## See Also

### Gradient Style Properties

- [colors](colors.md): An array of `CGColorRef` objects defining the color of each gradient stop. Animatable.
- [locations](locations.md): An optional array of NSNumber objects defining the location of each gradient stop. Animatable.
- [endPoint](endpoint.md): The end point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [startPoint](startpoint.md): The start point of the gradient when drawn in the layer’s coordinate space. Animatable.

# type (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Style of gradient drawn by the layer.

## Declaration

```objectivec
@property (copy) CAGradientLayerType type;
```

<a id="Discussion"></a>

## Discussion

Defaults to [kCAGradientLayerAxial](../cagradientlayertype/axial.md).

## See Also

### Gradient Style Properties

- [colors](colors.md): An array of `CGColorRef` objects defining the color of each gradient stop. Animatable.
- [locations](locations.md): An optional array of NSNumber objects defining the location of each gradient stop. Animatable.
- [endPoint](endpoint.md): The end point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [startPoint](startpoint.md): The start point of the gradient when drawn in the layer’s coordinate space. Animatable.
