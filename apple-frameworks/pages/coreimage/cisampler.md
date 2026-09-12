> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cisampler](https://developer.apple.com/documentation/coreimage/cisampler)

# CISampler (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

An object that retrieves pixel samples for processing by a filter kernel.

## Declaration

```swift
class CISampler
```

<a id="overview"></a>

## Overview

The `CISampler` class retrieves samples of images for processing by a [CIKernel](cikernel.md) object. A `CISampler` object defines a coordinate transform, and modes for interpolation and wrapping. You use `CISampler` objects in conjunction with other Core Image classes, such as  [CIFilter](cifilter-swift.class.md), `CIKernel`, and [CIFilterShape](cifiltershape.md), to create custom filters.

## Topics

### Initializing a Sampler

- [init(image:)](cisampler/init%28image_%29.md): Initializes a sampler with an image object.
- [init(image:options:)](cisampler/init%28image_options_%29.md): Initializes the sampler with an image object using options specified in a dictionary.

### Getting Information About the Sampler Object

- [definition](cisampler/definition.md): The domain of definition (DOD) of the sampler
- [extent](cisampler/extent.md): The rectangle that specifies the extent of the sampler

### Constants

- [Sampler Option Keys](sampler-option-keys.md): Keys for creating a sampler.
- [Sampler Option Values](sampler-option-values.md): Values for sampler option keys.

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
- [CIFilterShape](cifiltershape.md): A description of the bounding shape of a filter and the domain of definition for a filter operation.
- [CIFormat](ciformat.md): Pixel data formats for image input, output, and processing.

# CISampler (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

An object that retrieves pixel samples for processing by a filter kernel.

## Declaration

```objectivec
@interface CISampler : NSObject
```

<a id="overview"></a>

## Overview

The `CISampler` class retrieves samples of images for processing by a [CIKernel](cikernel.md) object. A `CISampler` object defines a coordinate transform, and modes for interpolation and wrapping. You use `CISampler` objects in conjunction with other Core Image classes, such as  [CIFilter](cifilter-swift.class.md), `CIKernel`, and [CIFilterShape](cifiltershape.md), to create custom filters.

## Topics

### Creating a Sampler

- [samplerWithImage:](cisampler/samplerwithimage_.md): Creates and returns a sampler that references an image.
- [samplerWithImage:keysAndValues:](cisampler/samplerwithimage_keysandvalues_.md): Creates and returns a sampler that references an image using options specified as key-value pairs.
- [samplerWithImage:options:](cisampler/samplerwithimage_options_.md): Creates and returns a sampler that references an image using options specified in a dictionary.

### Initializing a Sampler

- [initWithImage:](cisampler/init%28image_%29.md): Initializes a sampler with an image object.
- [initWithImage:keysAndValues:](cisampler/initwithimage_keysandvalues_.md): Initializes the sampler with an image object using options specified as key-value pairs.
- [initWithImage:options:](cisampler/init%28image_options_%29.md): Initializes the sampler with an image object using options specified in a dictionary.

### Getting Information About the Sampler Object

- [definition](cisampler/definition.md): The domain of definition (DOD) of the sampler
- [extent](cisampler/extent.md): The rectangle that specifies the extent of the sampler

### Constants

- [Sampler Option Keys](sampler-option-keys.md): Keys for creating a sampler.
- [Sampler Option Values](sampler-option-values.md): Values for sampler option keys.

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
- [CIFilterShape](cifiltershape.md): A description of the bounding shape of a filter and the domain of definition for a filter operation.
- [CIFormat](ciformat.md): Pixel data formats for image input, output, and processing.
