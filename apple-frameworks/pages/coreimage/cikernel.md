> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cikernel](https://developer.apple.com/documentation/coreimage/cikernel)

# CIKernel (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A GPU-based image-processing routine used to create custom Core Image filters.

## Declaration

```swift
class CIKernel
```

## Mentioned In

- [Writing Custom Kernels](writing-custom-kernels.md)

<a id="overview"></a>

## Overview

> **Note**

>  If your custom filter uses both color and geometry information, but does not require processing both at the same time, you can improve performance by separating your image processing code: use a [CIColorKernel](cicolorkernel.md) object for the color processing step and a [CIWarpKernel](ciwarpkernel.md) object for the geometry processing step.

The kernel language routine for a general-purpose filter kernel has the following characteristics:

- Its return type is `vec4` (Core Image Kernel Language) or `float4` (Metal Shading Language); that is, it returns a pixel color for the output image.
- It may use zero or more input images. Each input image is represented by a parameter of type `sampler`.

A kernel routine typically produces its output by calculating source image coordinates (using the `destCoord` and `samplerTransform` functions or the `samplerTransform` function), samples from the source images (using the `sample` function), and computes a final pixel color (output using the `return` keyword). For example, the Metal Shading Language source below implements a filter that passes through its input image unchanged.

```c
#include <CoreImage/CoreImage.h>
 
extern "C" {
    namespace coreimage {
        float4 do_nothing(sampler src) {
            return src.sample(src.coord());
        }
    }
}
```

The equivalent code in Core Image Kernel Language is:

```c
kernel vec4 do_nothing(sampler image) {
    vec2 dc = destCoord();
    return sample(image, samplerTransform(image, dc));
}
```

The Core Image Kernel Language is a dialect of the OpenGL Shading Language. See [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for more details.

## Topics

### Creating a Kernel Using Metal Shading Language

- [init(functionName:fromMetalLibraryData:)](cikernel/init%28functionname_frommetallibrarydata_%29.md): Creates a single kernel object using a Metal Shading Language (MSL) kernel function.
- [init(functionName:fromMetalLibraryData:outputPixelFormat:)](cikernel/init%28functionname_frommetallibrarydata_outputpixelformat_%29.md): Creates a single kernel object using a Metal Shading Language kernel function with optional pixel format.
- [kernelNames(fromMetalLibraryData:)](cikernel/kernelnames%28frommetallibrarydata_%29.md): Return an array of strings containing the names of all of the kernels contained in the Metal library.
- [kernels(withMetalString:)](cikernel/kernels%28withmetalstring_%29.md): Load kernels from a Metal language string.

### Getting a Kernel Name

- [name](cikernel/name.md): The name of the kernel routine.

### Identifying the Region of Interest for the Kernel

- [setROISelector(\_:)](cikernel/setroiselector%28__%29.md): Sets the selector Core Image uses to query the region of interest for image processing with the kernel.

### Applying a Kernel to Filter an Image

- [apply(extent:roiCallback:arguments:)](cikernel/apply%28extent_roicallback_arguments_%29.md): Creates a new image using the kernel and specified arguments.
- [CIKernelROICallback](cikernelroicallback.md): The signature for a block that computes the region of interest (ROI) for a given area of destination image pixels. Core Image calls this block when applying the kernel. You specify this block when using the [apply(extent:roiCallback:arguments:)](cikernel/apply%28extent_roicallback_arguments_%29.md) method.

### Deprecated

- [init(source:)](cikernel/init%28source_%29.md): Deprecated. Creates a single kernel object.
- [makeKernels(source:)](cikernel/makekernels%28source_%29.md): Deprecated. Creates and returns and array of `CIKernel` objects.

### Initializers

- [init(string:)](cikernel/init%28string_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CIColorKernel](cicolorkernel.md)
- [CIWarpKernel](ciwarpkernel.md)

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
- [CIColorKernel](cicolorkernel.md): A GPU-based image-processing routine that processes only the color information in images, used to create custom Core Image filters.
- [CIWarpKernel](ciwarpkernel.md): A GPU-based image-processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
- [CIBlendKernel](ciblendkernel.md): A GPU-based image-processing routine that is optimized for blending two images.
- [CISampler](cisampler.md): An object that retrieves pixel samples for processing by a filter kernel.
- [CIFilterShape](cifiltershape.md): A description of the bounding shape of a filter and the domain of definition for a filter operation.
- [CIFormat](ciformat.md): Pixel data formats for image input, output, and processing.

# CIKernel (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A GPU-based image-processing routine used to create custom Core Image filters.

## Declaration

```objectivec
@interface CIKernel : NSObject
```

## Mentioned In

- [Writing Custom Kernels](writing-custom-kernels.md)

<a id="overview"></a>

## Overview

> **Note**

>  If your custom filter uses both color and geometry information, but does not require processing both at the same time, you can improve performance by separating your image processing code: use a [CIColorKernel](cicolorkernel.md) object for the color processing step and a [CIWarpKernel](ciwarpkernel.md) object for the geometry processing step.

The kernel language routine for a general-purpose filter kernel has the following characteristics:

- Its return type is `vec4` (Core Image Kernel Language) or `float4` (Metal Shading Language); that is, it returns a pixel color for the output image.
- It may use zero or more input images. Each input image is represented by a parameter of type `sampler`.

A kernel routine typically produces its output by calculating source image coordinates (using the `destCoord` and `samplerTransform` functions or the `samplerTransform` function), samples from the source images (using the `sample` function), and computes a final pixel color (output using the `return` keyword). For example, the Metal Shading Language source below implements a filter that passes through its input image unchanged.

```c
#include <CoreImage/CoreImage.h>
 
extern "C" {
    namespace coreimage {
        float4 do_nothing(sampler src) {
            return src.sample(src.coord());
        }
    }
}
```

The equivalent code in Core Image Kernel Language is:

```c
kernel vec4 do_nothing(sampler image) {
    vec2 dc = destCoord();
    return sample(image, samplerTransform(image, dc));
}
```

The Core Image Kernel Language is a dialect of the OpenGL Shading Language. See [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for more details.

## Topics

### Creating a Kernel Using Metal Shading Language

- [kernelWithFunctionName:fromMetalLibraryData:error:](cikernel/init%28functionname_frommetallibrarydata_%29.md): Creates a single kernel object using a Metal Shading Language (MSL) kernel function.
- [kernelWithFunctionName:fromMetalLibraryData:outputPixelFormat:error:](cikernel/init%28functionname_frommetallibrarydata_outputpixelformat_%29.md): Creates a single kernel object using a Metal Shading Language kernel function with optional pixel format.
- [kernelNamesFromMetalLibraryData:](cikernel/kernelnames%28frommetallibrarydata_%29.md): Return an array of strings containing the names of all of the kernels contained in the Metal library.
- [kernelsWithMetalString:error:](cikernel/kernels%28withmetalstring_%29.md): Load kernels from a Metal language string.

### Getting a Kernel Name

- [name](cikernel/name.md): The name of the kernel routine.

### Identifying the Region of Interest for the Kernel

- [setROISelector:](cikernel/setroiselector%28__%29.md): Sets the selector Core Image uses to query the region of interest for image processing with the kernel.

### Applying a Kernel to Filter an Image

- [applyWithExtent:roiCallback:arguments:](cikernel/apply%28extent_roicallback_arguments_%29.md): Creates a new image using the kernel and specified arguments.
- [CIKernelROICallback](cikernelroicallback.md): The signature for a block that computes the region of interest (ROI) for a given area of destination image pixels. Core Image calls this block when applying the kernel. You specify this block when using the [applyWithExtent:roiCallback:arguments:](cikernel/apply%28extent_roicallback_arguments_%29.md) method.

### Deprecated

- [kernelWithString:](cikernel/init%28source_%29.md): Deprecated. Creates a single kernel object.
- [kernelsWithString:](cikernel/makekernels%28source_%29.md): Deprecated. Creates and returns and array of `CIKernel` objects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CIColorKernel](cicolorkernel.md)
- [CIWarpKernel](ciwarpkernel.md)

## See Also

### Custom Filters

- [Writing Custom Kernels](writing-custom-kernels.md): Write your own custom kernels in either the Core Image Kernel Language or the Metal Shading Language.
- [CIColorKernel](cicolorkernel.md): A GPU-based image-processing routine that processes only the color information in images, used to create custom Core Image filters.
- [CIWarpKernel](ciwarpkernel.md): A GPU-based image-processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
- [CIBlendKernel](ciblendkernel.md): A GPU-based image-processing routine that is optimized for blending two images.
- [CISampler](cisampler.md): An object that retrieves pixel samples for processing by a filter kernel.
- [CIFilterShape](cifiltershape.md): A description of the bounding shape of a filter and the domain of definition for a filter operation.
- [CIFormat](ciformat.md): Pixel data formats for image input, output, and processing.
