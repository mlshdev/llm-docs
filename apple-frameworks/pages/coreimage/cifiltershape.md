> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltershape](https://developer.apple.com/documentation/coreimage/cifiltershape)

# CIFilterShape (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

A description of the bounding shape of a filter and the domain of definition for a filter operation.

## Declaration

```swift
class CIFilterShape
```

<a id="overview"></a>

## Overview

You use `CIFilterShape` objects in conjunction with Core Image classes, such as [CIFilter](cifilter-swift.class.md), [CIKernel](cikernel.md), and [CISampler](cisampler.md), to create custom filters.

## Topics

### Initializing a Filter Shape

- [init(rect:)](cifiltershape/init%28rect_%29.md): Initializes a filter shape object with a rectangle.

### Inspecting a Filter Shape

- [extent](cifiltershape/extent.md): The extent of the filter shape.

### Modifying a Filter Shape

- [insetBy(x:y:)](cifiltershape/insetby%28x_y_%29.md): Modifies a filter shape object so that it is inset by the specified x and y values.
- [intersect(with:)](cifiltershape/intersect%28with_%29-8iw.md): Creates a filter shape object that represents the intersection of the current filter shape and the specified filter shape object.
- [intersect(with:)](cifiltershape/intersect%28with_%29-2o2n8.md): Creates a filter shape that represents the intersection of the current filter shape and a rectangle.
- [transform(by:interior:)](cifiltershape/transform%28by_interior_%29.md): Creates a filter shape that results from applying a transform to the current filter shape.
- [union(with:)](cifiltershape/union%28with_%29-52mnd.md): Creates a filter shape that results from the union of the current filter shape and another filter shape object.
- [union(with:)](cifiltershape/union%28with_%29-75ebo.md): Creates a filter shape that results from the union of the current filter shape and a rectangle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom Filters

- [Writing Custom Kernels](writing-custom-kernels.md): Write your own custom kernels in either the Core Image Kernel Language or the Metal Shading Language.
- [CIKernel](cikernel.md): A GPU-based image-processing routine used to create custom Core Image filters.
- [CIColorKernel](cicolorkernel.md): A GPU-based image-processing routine that processes only the color information in images, used to create custom Core Image filters.
- [CIWarpKernel](ciwarpkernel.md): A GPU-based image-processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
- [CIBlendKernel](ciblendkernel.md): A GPU-based image-processing routine that is optimized for blending two images.
- [CISampler](cisampler.md): An object that retrieves pixel samples for processing by a filter kernel.
- [CIFormat](ciformat.md): Pixel data formats for image input, output, and processing.

# CIFilterShape (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

A description of the bounding shape of a filter and the domain of definition for a filter operation.

## Declaration

```objectivec
@interface CIFilterShape : NSObject
```

<a id="overview"></a>

## Overview

You use `CIFilterShape` objects in conjunction with Core Image classes, such as [CIFilter](cifilter-swift.class.md), [CIKernel](cikernel.md), and [CISampler](cisampler.md), to create custom filters.

## Topics

### Creating a Filter Shape

- [shapeWithRect:](cifiltershape/shapewithrect_.md): Creates a filter shape object and initializes it with a rectangle.

### Initializing a Filter Shape

- [initWithRect:](cifiltershape/init%28rect_%29.md): Initializes a filter shape object with a rectangle.

### Inspecting a Filter Shape

- [extent](cifiltershape/extent.md): The extent of the filter shape.

### Modifying a Filter Shape

- [insetByX:Y:](cifiltershape/insetby%28x_y_%29.md): Modifies a filter shape object so that it is inset by the specified x and y values.
- [intersectWith:](cifiltershape/intersect%28with_%29-8iw.md): Creates a filter shape object that represents the intersection of the current filter shape and the specified filter shape object.
- [intersectWithRect:](cifiltershape/intersect%28with_%29-2o2n8.md): Creates a filter shape that represents the intersection of the current filter shape and a rectangle.
- [transformBy:interior:](cifiltershape/transform%28by_interior_%29.md): Creates a filter shape that results from applying a transform to the current filter shape.
- [unionWith:](cifiltershape/union%28with_%29-52mnd.md): Creates a filter shape that results from the union of the current filter shape and another filter shape object.
- [unionWithRect:](cifiltershape/union%28with_%29-75ebo.md): Creates a filter shape that results from the union of the current filter shape and a rectangle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Custom Filters

- [Writing Custom Kernels](writing-custom-kernels.md): Write your own custom kernels in either the Core Image Kernel Language or the Metal Shading Language.
- [CIKernel](cikernel.md): A GPU-based image-processing routine used to create custom Core Image filters.
- [CIColorKernel](cicolorkernel.md): A GPU-based image-processing routine that processes only the color information in images, used to create custom Core Image filters.
- [CIWarpKernel](ciwarpkernel.md): A GPU-based image-processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
- [CIBlendKernel](ciblendkernel.md): A GPU-based image-processing routine that is optimized for blending two images.
- [CISampler](cisampler.md): An object that retrieves pixel samples for processing by a filter kernel.
- [CIFormat](ciformat.md): Pixel data formats for image input, output, and processing.
