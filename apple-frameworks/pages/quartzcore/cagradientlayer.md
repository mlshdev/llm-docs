> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cagradientlayer](https://developer.apple.com/documentation/quartzcore/cagradientlayer)

# CAGradientLayer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A layer that draws a color gradient over its background color, filling the shape of the layer.

## Declaration

```swift
class CAGradientLayer
```

<a id="overview"></a>

## Overview

You use a gradient layer to create a color gradient containing an arbitrary number of colors. By default, the colors are spread uniformly across the layer, but you can optionally specify locations for control over the color positions through the gradient.

The following code shows how to create a gradient layer containing four colors that are evenly distributed through the gradient. Rotating the layer by 90° ([pi](https://developer.apple.com/documentation/swift/floatingpoint/pi) ⁄ `2` radians) gives a horizontal gradient.

```objc
gradientLayer.colors = [UIColor.red.cgColor,
                        UIColor.yellow.cgColor,
                        UIColor.green.cgColor,
                        UIColor.blue.cgColor]
     
gradientLayer.transform = CATransform3DMakeRotation(CGFloat.pi / 2, 0, 0, 1)
```

The following figure shows the appearance of the gradient layer.

![Color gradient layer](https://developer.apple.com/images/com.apple.quartzcore/media-2825193@2x.png)

## Topics

### Gradient Style Properties

- [colors](cagradientlayer/colors.md): An array of `CGColorRef` objects defining the color of each gradient stop. Animatable.
- [locations](cagradientlayer/locations.md): An optional array of NSNumber objects defining the location of each gradient stop. Animatable.
- [endPoint](cagradientlayer/endpoint.md): The end point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [startPoint](cagradientlayer/startpoint.md): The start point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [type](cagradientlayer/type.md): Style of gradient drawn by the layer.

### Constants

- [Gradient Types](gradient-types.md): The style of gradient drawn by the layer.

## Relationships

### Inherits From

- [CALayer](calayer.md)

### Conforms To

- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text, Shapes, and Gradients

- [CATextLayer](catextlayer.md): A layer that provides simple text layout and rendering of plain or attributed strings.
- [CAShapeLayer](cashapelayer.md): A layer that draws a cubic Bezier spline in its coordinate space.

# CAGradientLayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A layer that draws a color gradient over its background color, filling the shape of the layer.

## Declaration

```objectivec
@interface CAGradientLayer : CALayer
```

<a id="overview"></a>

## Overview

You use a gradient layer to create a color gradient containing an arbitrary number of colors. By default, the colors are spread uniformly across the layer, but you can optionally specify locations for control over the color positions through the gradient.

The following code shows how to create a gradient layer containing four colors that are evenly distributed through the gradient. Rotating the layer by 90° ([pi](https://developer.apple.com/documentation/swift/floatingpoint/pi) ⁄ `2` radians) gives a horizontal gradient.

```objc
gradientLayer.colors = [UIColor.red.cgColor,
                        UIColor.yellow.cgColor,
                        UIColor.green.cgColor,
                        UIColor.blue.cgColor]
     
gradientLayer.transform = CATransform3DMakeRotation(CGFloat.pi / 2, 0, 0, 1)
```

The following figure shows the appearance of the gradient layer.

![Color gradient layer](https://developer.apple.com/images/com.apple.quartzcore/media-2825193@2x.png)

## Topics

### Gradient Style Properties

- [colors](cagradientlayer/colors.md): An array of `CGColorRef` objects defining the color of each gradient stop. Animatable.
- [locations](cagradientlayer/locations.md): An optional array of NSNumber objects defining the location of each gradient stop. Animatable.
- [endPoint](cagradientlayer/endpoint.md): The end point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [startPoint](cagradientlayer/startpoint.md): The start point of the gradient when drawn in the layer’s coordinate space. Animatable.
- [type](cagradientlayer/type.md): Style of gradient drawn by the layer.

### Constants

- [Gradient Types](gradient-types.md): The style of gradient drawn by the layer.

## Relationships

### Inherits From

- [CALayer](calayer.md)

## See Also

### Text, Shapes, and Gradients

- [CATextLayer](catextlayer.md): A layer that provides simple text layout and rendering of plain or attributed strings.
- [CAShapeLayer](cashapelayer.md): A layer that draws a cubic Bezier spline in its coordinate space.
