> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciwarpkernel](https://developer.apple.com/documentation/coreimage/ciwarpkernel)

# CIWarpKernel (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A GPU-based image-processing routine that processes only the geometry information in an image, used to create custom Core Image filters.

## Declaration

```swift
class CIWarpKernel
```

<a id="overview"></a>

## Overview

The kernel language routine for a warp kernel has the following characteristics:

- It uses exactly one input image.
- Its return type is `vec2` (Core Image Kernel Language) or `float2` (Metal Shading Language), specifying a position in source image coordinates.

A warp kernel routine requires no input parameters (but can use additional custom parameters you declare). Typically, a warp kernel uses the destination coordinate function to look up the coordinates of the destination pixel currently being rendered, then computes a corresponding position in source image coordinates (output using the `return` keyword). Core Image then samples from the source image at the returned coordinates to produce a pixel color for the output image. For example, the Metal Shading Language source below implements a filter that passes through its input image unchanged.

```c
#include <CoreImage/CoreImage.h>
 
extern "C" {
    namespace coreimage {
        float2 do_nothing(destination dest) {
            return dest.coord();
        }
    }
}
```

The equivalent code in Core Image Kernel Language is:

```c
kernel vec2 do_nothing() {
    return destCoord();
}
```

The Core Image Kernel Language is a dialect of the OpenGL Shading Language. See [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for more details.

## Topics

### Creating a Kernel

- [init(source:)](ciwarpkernel/init%28source_%29.md): Deprecated. Creates a warp kernel object from the specified kernel source code.

### Applying a Kernel to Filter an Image

- [apply(extent:roiCallback:image:arguments:)](ciwarpkernel/apply%28extent_roicallback_image_arguments_%29.md): Creates a new image using the kernel and the specified input image and arguments.

## Relationships

### Inherits From

- [CIKernel](cikernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom Filters

- [Writing Custom Kernels](writing-custom-kernels.md): Write your own custom kernels in either the Core Image Kernel Language or the Metal Shading Language.
- [CIKernel](cikernel.md): A GPU-based image-processing routine used to create custom Core Image filters.
- [CIColorKernel](cicolorkernel.md): A GPU-based image-processing routine that processes only the color information in images, used to create custom Core Image filters.
- [CIBlendKernel](ciblendkernel.md): A GPU-based image-processing routine that is optimized for blending two images.
- [CISampler](cisampler.md): An object that retrieves pixel samples for processing by a filter kernel.
- [CIFilterShape](cifiltershape.md): A description of the bounding shape of a filter and the domain of definition for a filter operation.
- [CIFormat](ciformat.md): Pixel data formats for image input, output, and processing.

# CIWarpKernel (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A GPU-based image-processing routine that processes only the geometry information in an image, used to create custom Core Image filters.

## Declaration

```objectivec
@interface CIWarpKernel : CIKernel
```

<a id="overview"></a>

## Overview

The kernel language routine for a warp kernel has the following characteristics:

- It uses exactly one input image.
- Its return type is `vec2` (Core Image Kernel Language) or `float2` (Metal Shading Language), specifying a position in source image coordinates.

A warp kernel routine requires no input parameters (but can use additional custom parameters you declare). Typically, a warp kernel uses the destination coordinate function to look up the coordinates of the destination pixel currently being rendered, then computes a corresponding position in source image coordinates (output using the `return` keyword). Core Image then samples from the source image at the returned coordinates to produce a pixel color for the output image. For example, the Metal Shading Language source below implements a filter that passes through its input image unchanged.

```c
#include <CoreImage/CoreImage.h>
 
extern "C" {
    namespace coreimage {
        float2 do_nothing(destination dest) {
            return dest.coord();
        }
    }
}
```

The equivalent code in Core Image Kernel Language is:

```c
kernel vec2 do_nothing() {
    return destCoord();
}
```

The Core Image Kernel Language is a dialect of the OpenGL Shading Language. See [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for more details.

## Topics

### Creating a Kernel

- [kernelWithString:](ciwarpkernel/init%28source_%29.md): Deprecated. Creates a warp kernel object from the specified kernel source code.

### Applying a Kernel to Filter an Image

- [applyWithExtent:roiCallback:inputImage:arguments:](ciwarpkernel/apply%28extent_roicallback_image_arguments_%29.md): Creates a new image using the kernel and the specified input image and arguments.

## Relationships

### Inherits From

- [CIKernel](cikernel.md)

## See Also

### Custom Filters

- [Writing Custom Kernels](writing-custom-kernels.md): Write your own custom kernels in either the Core Image Kernel Language or the Metal Shading Language.
- [CIKernel](cikernel.md): A GPU-based image-processing routine used to create custom Core Image filters.
- [CIColorKernel](cicolorkernel.md): A GPU-based image-processing routine that processes only the color information in images, used to create custom Core Image filters.
- [CIBlendKernel](ciblendkernel.md): A GPU-based image-processing routine that is optimized for blending two images.
- [CISampler](cisampler.md): An object that retrieves pixel samples for processing by a filter kernel.
- [CIFilterShape](cifiltershape.md): A description of the bounding shape of a filter and the domain of definition for a filter operation.
- [CIFormat](ciformat.md): Pixel data formats for image input, output, and processing.
