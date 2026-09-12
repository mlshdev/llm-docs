> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cagradientlayer/endpoint](https://developer.apple.com/documentation/quartzcore/cagradientlayer/endpoint)

# endPoint (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The end point of the gradient when drawn in the layer’s coordinate space. Animatable.

## Declaration

```swift
var endPoint: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The end point corresponds to the last stop of the gradient. The point is defined in the unit coordinate space and is then mapped to the layer’s bounds rectangle when drawn.

Default value is `(0.5,1.0)`.

## See Also

### Gradient Style Properties

- [colors](colors.md): An array of `CGColorRef` objects defining the color of each gradient stop. Animatable.
- [locations](locations.md): An optional array of NSNumber objects defining the location of each gradient stop. Animatable.
- [startPoint](startpoint.md): The start point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [type](type.md): Style of gradient drawn by the layer.

# endPoint (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The end point of the gradient when drawn in the layer’s coordinate space. Animatable.

## Declaration

```objectivec
@property CGPoint endPoint;
```

<a id="Discussion"></a>

## Discussion

The end point corresponds to the last stop of the gradient. The point is defined in the unit coordinate space and is then mapped to the layer’s bounds rectangle when drawn.

Default value is `(0.5,1.0)`.

## See Also

### Gradient Style Properties

- [colors](colors.md): An array of `CGColorRef` objects defining the color of each gradient stop. Animatable.
- [locations](locations.md): An optional array of NSNumber objects defining the location of each gradient stop. Animatable.
- [startPoint](startpoint.md): The start point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [type](type.md): Style of gradient drawn by the layer.
