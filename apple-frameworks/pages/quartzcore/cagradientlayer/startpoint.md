> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cagradientlayer/startpoint](https://developer.apple.com/documentation/quartzcore/cagradientlayer/startpoint)

# startPoint (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The start point of the gradient when drawn in the layer’s coordinate space. Animatable.

## Declaration

```swift
var startPoint: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The start point corresponds to the first stop of the gradient. The point is defined in the unit coordinate space and is then mapped to the layer’s bounds rectangle when drawn.

Default value is `(0.5,0.0)`.

## See Also

### Gradient Style Properties

- [colors](colors.md): An array of `CGColorRef` objects defining the color of each gradient stop. Animatable.
- [locations](locations.md): An optional array of NSNumber objects defining the location of each gradient stop. Animatable.
- [endPoint](endpoint.md): The end point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [type](type.md): Style of gradient drawn by the layer.

# startPoint (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The start point of the gradient when drawn in the layer’s coordinate space. Animatable.

## Declaration

```objectivec
@property CGPoint startPoint;
```

<a id="Discussion"></a>

## Discussion

The start point corresponds to the first stop of the gradient. The point is defined in the unit coordinate space and is then mapped to the layer’s bounds rectangle when drawn.

Default value is `(0.5,0.0)`.

## See Also

### Gradient Style Properties

- [colors](colors.md): An array of `CGColorRef` objects defining the color of each gradient stop. Animatable.
- [locations](locations.md): An optional array of NSNumber objects defining the location of each gradient stop. Animatable.
- [endPoint](endpoint.md): The end point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [type](type.md): Style of gradient drawn by the layer.
