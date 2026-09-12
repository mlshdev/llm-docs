> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cagradientlayer/colors](https://developer.apple.com/documentation/quartzcore/cagradientlayer/colors)

# colors (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

An array of `CGColorRef` objects defining the color of each gradient stop. Animatable.

## Declaration

```swift
var colors: [Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to `nil`.

## See Also

### Gradient Style Properties

- [locations](locations.md): An optional array of NSNumber objects defining the location of each gradient stop. Animatable.
- [endPoint](endpoint.md): The end point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [startPoint](startpoint.md): The start point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [type](type.md): Style of gradient drawn by the layer.

# colors (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

An array of `CGColorRef` objects defining the color of each gradient stop. Animatable.

## Declaration

```objectivec
@property (copy, nullable) NSArray * colors;
```

<a id="Discussion"></a>

## Discussion

Defaults to `nil`.

## See Also

### Gradient Style Properties

- [locations](locations.md): An optional array of NSNumber objects defining the location of each gradient stop. Animatable.
- [endPoint](endpoint.md): The end point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [startPoint](startpoint.md): The start point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [type](type.md): Style of gradient drawn by the layer.
