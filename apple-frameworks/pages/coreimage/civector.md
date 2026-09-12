> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civector](https://developer.apple.com/documentation/coreimage/civector)

# CIVector (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The Core Image class that defines a vector object.

## Declaration

```swift
class CIVector
```

<a id="overview"></a>

## Overview

A `CIVector` can store one or more `CGFloat` in one object. They can store a group of float values for a variety of different uses such as coordinate points, direction vectors, geometric rectangles, transform matrices, convolution weights, or just a list a parameter values.

You use `CIVector` objects in conjunction with other Core Image classes, such as [CIFilter](cifilter-swift.class.md) and [CIKernel](cikernel.md).  Many of the built-in Core Image filters have one or more `CIVector` inputs that you can set to affect the filter’s behavior.

## Topics

### Creating a Vector

- [init(cgAffineTransform:)](civector/init%28cgaffinetransform_%29-59e4k.md): Create a Core Image vector object that is initialized with six values provided by a `CGAffineTransform` structure.
- [init(cgPoint:)](civector/init%28cgpoint_%29-3mobm.md): Create a Core Image vector object that is initialized with two values provided by a `CGPoint` structure.
- [init(cgRect:)](civector/init%28cgrect_%29-3undj.md): Create a Core Image vector object that is initialized with four values provided by a `CGRect` structure.

### Initializing a Vector

- [init(values:count:)](civector/init%28values_count_%29.md): Initialize a Core Image vector object with the specified the values.
- [init(x:)](civector/init%28x_%29.md): Initialize a Core Image vector object with one value.
- [init(x:y:)](civector/init%28x_y_%29-4grr.md): Initialize a Core Image vector object with two values.
- [init(x:y:z:)](civector/init%28x_y_z_%29-zais.md): Initialize a Core Image vector object with three values.
- [init(x:y:z:w:)](civector/init%28x_y_z_w_%29-75emo.md): Initialize a Core Image vector object with four values.
- [init(string:)](civector/init%28string_%29.md): Initialize a Core Image vector object with values provided in a string representation.
- [init(cgAffineTransform:)](civector/init%28cgaffinetransform_%29-6o8gl.md): Initialize a Core Image vector object with six values provided by a `CGAffineTransform` structure.
- [init(cgPoint:)](civector/init%28cgpoint_%29-8cf9j.md): Initialize a Core Image vector object with two values provided by a `CGPoint` structure.
- [init(cgRect:)](civector/init%28cgrect_%29-6bolw.md): Initialize a Core Image vector object with four values provided by a `CGRect` structure.

### Getting Values From a Vector

- [value(at:)](civector/value%28at_%29.md): Returns a value from a specific position in the vector.
- [count](civector/count.md): The number of items in the vector.
- [x](civector/x.md): The value located in the first position in the vector.
- [y](civector/y.md): The value located in the second position in the vector.
- [z](civector/z.md): The value located in the third position in the vector.
- [w](civector/w.md): The value located in the forth position in the vector.
- [stringRepresentation](civector/stringrepresentation.md): Returns a formatted string with all the values of a `CIVector`.
- [cgAffineTransformValue](civector/cgaffinetransformvalue.md): Returns the values in the vector as a `CGAffineTransformValue` structure.
- [cgPointValue](civector/cgpointvalue.md): Returns the values in the vector as a `CGPoint` structure.
- [cgRectValue](civector/cgrectvalue.md): Returns the values in the vector as a `CGRect` structure.

### Initializers

- [init(CGAffineTransform:)](civector/init%28cgaffinetransform_%29-61k8d.md)
- [init(CGAffineTransform:)](civector/init%28cgaffinetransform_%29-gf61.md)
- [init(CGPoint:)](civector/init%28cgpoint_%29-2q3w0.md)
- [init(CGPoint:)](civector/init%28cgpoint_%29-339fj.md)
- [init(CGRect:)](civector/init%28cgrect_%29-60mr0.md)
- [init(CGRect:)](civector/init%28cgrect_%29-9l6dq.md)
- [init(coder:)](civector/init%28coder_%29.md)
- [init(x:Y:)](civector/init%28x_y_%29-2ia98.md)
- [init(x:Y:)](civector/init%28x_y_%29-8ln4z.md)
- [init(x:Y:Z:)](civector/init%28x_y_z_%29-6pett.md)
- [init(x:Y:Z:)](civector/init%28x_y_z_%29-94o0c.md)
- [init(x:Y:Z:W:)](civector/init%28x_y_z_w_%29-3lp39.md)
- [init(x:Y:Z:W:)](civector/init%28x_y_z_w_%29-9obnr.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Filters

- [CIFilter](cifilter-swift.class.md): An image processor that produces an image by manipulating one or more input images or by generating new image data.
- [CIRAWFilter](cirawfilter.md): A filter subclass that produces an image by manipulating RAW image sensor data from a digital camera or scanner.
- [CIColor](cicolor.md): The Core Image class that defines a color object.

# CIVector (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The Core Image class that defines a vector object.

## Declaration

```objectivec
@interface CIVector : NSObject
```

<a id="overview"></a>

## Overview

A `CIVector` can store one or more `CGFloat` in one object. They can store a group of float values for a variety of different uses such as coordinate points, direction vectors, geometric rectangles, transform matrices, convolution weights, or just a list a parameter values.

You use `CIVector` objects in conjunction with other Core Image classes, such as [CIFilter](cifilter-swift.class.md) and [CIKernel](cikernel.md).  Many of the built-in Core Image filters have one or more `CIVector` inputs that you can set to affect the filter’s behavior.

## Topics

### Creating a Vector

- [vectorWithValues:count:](civector/vectorwithvalues_count_.md): Create a Core Image vector object that is initialized with the specified values.
- [vectorWithX:](civector/vectorwithx_.md): Create a Core Image vector object that is initialized with one value.
- [vectorWithX:Y:](civector/vectorwithx_y_.md): Create a Core Image vector object that is initialized with two values.
- [vectorWithX:Y:Z:](civector/vectorwithx_y_z_.md): Create a Core Image vector object that is initialized with three values.
- [vectorWithX:Y:Z:W:](civector/vectorwithx_y_z_w_.md): Create a Core Image vector object that is initialized with four values.
- [vectorWithString:](civector/vectorwithstring_.md): Create a Core Image vector object with values provided in a string representation.
- [vectorWithCGAffineTransform:](civector/init%28cgaffinetransform_%29-59e4k.md): Create a Core Image vector object that is initialized with six values provided by a `CGAffineTransform` structure.
- [vectorWithCGPoint:](civector/init%28cgpoint_%29-3mobm.md): Create a Core Image vector object that is initialized with two values provided by a `CGPoint` structure.
- [vectorWithCGRect:](civector/init%28cgrect_%29-3undj.md): Create a Core Image vector object that is initialized with four values provided by a `CGRect` structure.

### Initializing a Vector

- [initWithValues:count:](civector/init%28values_count_%29.md): Initialize a Core Image vector object with the specified the values.
- [initWithX:](civector/init%28x_%29.md): Initialize a Core Image vector object with one value.
- [initWithX:Y:](civector/init%28x_y_%29-4grr.md): Initialize a Core Image vector object with two values.
- [initWithX:Y:Z:](civector/init%28x_y_z_%29-zais.md): Initialize a Core Image vector object with three values.
- [initWithX:Y:Z:W:](civector/init%28x_y_z_w_%29-75emo.md): Initialize a Core Image vector object with four values.
- [initWithString:](civector/init%28string_%29.md): Initialize a Core Image vector object with values provided in a string representation.
- [initWithCGAffineTransform:](civector/init%28cgaffinetransform_%29-6o8gl.md): Initialize a Core Image vector object with six values provided by a `CGAffineTransform` structure.
- [initWithCGPoint:](civector/init%28cgpoint_%29-8cf9j.md): Initialize a Core Image vector object with two values provided by a `CGPoint` structure.
- [initWithCGRect:](civector/init%28cgrect_%29-6bolw.md): Initialize a Core Image vector object with four values provided by a `CGRect` structure.

### Getting Values From a Vector

- [valueAtIndex:](civector/value%28at_%29.md): Returns a value from a specific position in the vector.
- [count](civector/count.md): The number of items in the vector.
- [X](civector/x.md): The value located in the first position in the vector.
- [Y](civector/y.md): The value located in the second position in the vector.
- [Z](civector/z.md): The value located in the third position in the vector.
- [W](civector/w.md): The value located in the forth position in the vector.
- [stringRepresentation](civector/stringrepresentation.md): Returns a formatted string with all the values of a `CIVector`.
- [CGAffineTransformValue](civector/cgaffinetransformvalue.md): Returns the values in the vector as a `CGAffineTransformValue` structure.
- [CGPointValue](civector/cgpointvalue.md): Returns the values in the vector as a `CGPoint` structure.
- [CGRectValue](civector/cgrectvalue.md): Returns the values in the vector as a `CGRect` structure.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Filters

- [CIFilter](cifilter-swift.class.md): An image processor that produces an image by manipulating one or more input images or by generating new image data.
- [CIRAWFilter](cirawfilter.md): A filter subclass that produces an image by manipulating RAW image sensor data from a digital camera or scanner.
- [CIColor](cicolor.md): The Core Image class that defines a color object.
