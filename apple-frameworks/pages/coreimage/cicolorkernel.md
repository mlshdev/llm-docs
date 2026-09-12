> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolorkernel](https://developer.apple.com/documentation/coreimage/cicolorkernel)

# CIColorKernel (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A GPU-based image-processing routine that processes only the color information in images, used to create custom Core Image filters.

## Declaration

```swift
class CIColorKernel
```

<a id="overview"></a>

## Overview

The kernel language routine for a color kernel has the following characteristics:

- Its return type is `vec4` (Core Image Kernel Language) or `float4` (Metal Shading Language); that is, it returns a pixel color for the output image.
- It may use zero or more input images. Each input image is represented by a parameter of type `__sample` (Core Image Kernel Language) or `sample_t` (Metal Shading Language), which can be treated as a single pixel color of type `vec4` (Core Image Kernel Language) or `float4` (Metal Shading Language);.

A color kernel routine receives as input single-pixel colors (one sampled from each input image) and computes a final pixel color (output using the `return` keyword). For example, the Metal Shading Language source below implements a filter that passes through its input image unchanged.

```c
#include <CoreImage/CoreImage.h>
 
extern "C" {
    namespace coreimage {
        float4 do_nothing(sample_t s) {
            return s;
        }
    }
}
```

The equivalent code in Core Image Kernel Language is:

```c
kernel vec4 do_nothing(__sample s) {
    return s.rgba;
}
```

The Core Image Kernel Language is a dialect of the OpenGL Shading Language. See [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for more details.

## Topics

### Creating a Kernel

- [init(source:)](cicolorkernel/init%28source_%29.md): Deprecated. Creates a color kernel object from the specified kernel source code.

### Applying a Kernel to Filter an Image

- [apply(extent:arguments:)](cicolorkernel/apply%28extent_arguments_%29.md): Creates a new image using the kernel and specified arguments.

## Relationships

### Inherits From

- [CIKernel](cikernel.md)

### Inherited By

- [CIBlendKernel](ciblendkernel.md)

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
- [CIWarpKernel](ciwarpkernel.md): A GPU-based image-processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
- [CIBlendKernel](ciblendkernel.md): A GPU-based image-processing routine that is optimized for blending two images.
- [CISampler](cisampler.md): An object that retrieves pixel samples for processing by a filter kernel.
- [CIFilterShape](cifiltershape.md): A description of the bounding shape of a filter and the domain of definition for a filter operation.
- [CIFormat](ciformat.md): Pixel data formats for image input, output, and processing.

# CIColorKernel (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A GPU-based image-processing routine that processes only the color information in images, used to create custom Core Image filters.

## Declaration

```objectivec
@interface CIColorKernel : CIKernel
```

<a id="overview"></a>

## Overview

The kernel language routine for a color kernel has the following characteristics:

- Its return type is `vec4` (Core Image Kernel Language) or `float4` (Metal Shading Language); that is, it returns a pixel color for the output image.
- It may use zero or more input images. Each input image is represented by a parameter of type `__sample` (Core Image Kernel Language) or `sample_t` (Metal Shading Language), which can be treated as a single pixel color of type `vec4` (Core Image Kernel Language) or `float4` (Metal Shading Language);.

A color kernel routine receives as input single-pixel colors (one sampled from each input image) and computes a final pixel color (output using the `return` keyword). For example, the Metal Shading Language source below implements a filter that passes through its input image unchanged.

```c
#include <CoreImage/CoreImage.h>
 
extern "C" {
    namespace coreimage {
        float4 do_nothing(sample_t s) {
            return s;
        }
    }
}
```

The equivalent code in Core Image Kernel Language is:

```c
kernel vec4 do_nothing(__sample s) {
    return s.rgba;
}
```

The Core Image Kernel Language is a dialect of the OpenGL Shading Language. See [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for more details.

## Topics

### Creating a Kernel

- [kernelWithString:](cicolorkernel/init%28source_%29.md): Deprecated. Creates a color kernel object from the specified kernel source code.

### Applying a Kernel to Filter an Image

- [applyWithExtent:arguments:](cicolorkernel/apply%28extent_arguments_%29.md): Creates a new image using the kernel and specified arguments.

## Relationships

### Inherits From

- [CIKernel](cikernel.md)

### Inherited By

- [CIBlendKernel](ciblendkernel.md)

## See Also

### Custom Filters

- [Writing Custom Kernels](writing-custom-kernels.md): Write your own custom kernels in either the Core Image Kernel Language or the Metal Shading Language.
- [CIKernel](cikernel.md): A GPU-based image-processing routine used to create custom Core Image filters.
- [CIWarpKernel](ciwarpkernel.md): A GPU-based image-processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
- [CIBlendKernel](ciblendkernel.md): A GPU-based image-processing routine that is optimized for blending two images.
- [CISampler](cisampler.md): An object that retrieves pixel samples for processing by a filter kernel.
- [CIFilterShape](cifiltershape.md): A description of the bounding shape of a filter and the domain of definition for a filter operation.
- [CIFormat](ciformat.md): Pixel data formats for image input, output, and processing.
