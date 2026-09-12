> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageconversion](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageconversion)

# MPSImageConversion (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A filter that performs a conversion of color space, alpha, or pixel format.

## Declaration

```swift
class MPSImageConversion
```

<a id="overview"></a>

## Overview

An [MPSImageConversion](mpsimageconversion.md) filter allows you to change the alpha encoding or color space of an image. For example, you can convert an image with a premultiplied alpha to non-premultiplied, or change the color space from one variant to another.

As with all Metal Performance Shaders filters, the conversion filter allows for source and destination textures with different pixel formats and, in that case, will convert the source texture’s format to the destination texture’s format. See [Supported Pixel Formats for Image Kernels](image-filters.md#Supported-Pixel-Formats-for-Image-Kernels) for a list of supported pixel formats.

The following listing shows how you can create an image conversion filter to map the color intensity from the sRGB color space to a linear gamma curve.

Listing 1. Mapping color intensity from the sRGB color space to a linear gamma curve.

```swift
guard let srcColorSpace = CGColorSpace(name: CGColorSpace.sRGB),
    let dstColorSpace = CGColorSpace(name: CGColorSpace.linearSRGB),
    let device = MTLCreateSystemDefaultDevice() else {
        return
}
     
let conversionInfo = CGColorConversionInfo(src: srcColorSpace,
                                           dst: dstColorSpace)
     
let conversion = MPSImageConversion(device: device,
                                    srcAlpha: .alphaIsOne,
                                    destAlpha: .alphaIsOne,
                                    backgroundColor: nil,
                                    conversionInfo: conversionInfo)
```

## Topics

### Methods

- [init(device:srcAlpha:destAlpha:backgroundColor:conversionInfo:)](mpsimageconversion/init%28device_srcalpha_destalpha_backgroundcolor_conversioninfo_%29.md): Initializes a filter that can convert texture color space, alpha, and pixel format.
- [MPSAlphaType](mpsalphatype.md): Premultiplication description for the color channels of an image.

### Properties

- [sourceAlpha](mpsimageconversion/sourcealpha.md): Premultiplication description for the source texture.
- [destinationAlpha](mpsimageconversion/destinationalpha.md): Premultiplication description for the destination texture.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

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

## See Also

### Image Manipulation Filters

- [MPSImageScale](mpsimagescale.md): A filter that resizes and changes the aspect ratio of an image.
- [MPSImageLanczosScale](mpsimagelanczosscale.md): A filter that resizes and changes the aspect ratio of an image using Lanczos resampling.
- [MPSImageBilinearScale](mpsimagebilinearscale.md): A filter that resizes and changes the aspect ratio of an image using Bilinear resampling.
- [MPSImageTranspose](mpsimagetranspose.md): A filter that transposes an image.

# MPSImageConversion (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A filter that performs a conversion of color space, alpha, or pixel format.

## Declaration

```objectivec
@interface MPSImageConversion : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

An [MPSImageConversion](mpsimageconversion.md) filter allows you to change the alpha encoding or color space of an image. For example, you can convert an image with a premultiplied alpha to non-premultiplied, or change the color space from one variant to another.

As with all Metal Performance Shaders filters, the conversion filter allows for source and destination textures with different pixel formats and, in that case, will convert the source texture’s format to the destination texture’s format. See [Supported Pixel Formats for Image Kernels](image-filters.md#Supported-Pixel-Formats-for-Image-Kernels) for a list of supported pixel formats.

The following listing shows how you can create an image conversion filter to map the color intensity from the sRGB color space to a linear gamma curve.

Listing 1. Mapping color intensity from the sRGB color space to a linear gamma curve.

```swift
guard let srcColorSpace = CGColorSpace(name: CGColorSpace.sRGB),
    let dstColorSpace = CGColorSpace(name: CGColorSpace.linearSRGB),
    let device = MTLCreateSystemDefaultDevice() else {
        return
}
     
let conversionInfo = CGColorConversionInfo(src: srcColorSpace,
                                           dst: dstColorSpace)
     
let conversion = MPSImageConversion(device: device,
                                    srcAlpha: .alphaIsOne,
                                    destAlpha: .alphaIsOne,
                                    backgroundColor: nil,
                                    conversionInfo: conversionInfo)
```

## Topics

### Methods

- [initWithDevice:srcAlpha:destAlpha:backgroundColor:conversionInfo:](mpsimageconversion/init%28device_srcalpha_destalpha_backgroundcolor_conversioninfo_%29.md): Initializes a filter that can convert texture color space, alpha, and pixel format.
- [MPSAlphaType](mpsalphatype.md): Premultiplication description for the color channels of an image.

### Properties

- [sourceAlpha](mpsimageconversion/sourcealpha.md): Premultiplication description for the source texture.
- [destinationAlpha](mpsimageconversion/destinationalpha.md): Premultiplication description for the destination texture.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Image Manipulation Filters

- [MPSImageScale](mpsimagescale.md): A filter that resizes and changes the aspect ratio of an image.
- [MPSImageLanczosScale](mpsimagelanczosscale.md): A filter that resizes and changes the aspect ratio of an image using Lanczos resampling.
- [MPSImageBilinearScale](mpsimagebilinearscale.md): A filter that resizes and changes the aspect ratio of an image using Bilinear resampling.
- [MPSImageTranspose](mpsimagetranspose.md): A filter that transposes an image.
