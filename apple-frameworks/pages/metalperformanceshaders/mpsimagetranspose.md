> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagetranspose](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagetranspose)

# MPSImageTranspose (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that transposes an image.

## Declaration

```swift
class MPSImageTranspose
```

<a id="overview"></a>

## Overview

An [MPSImageTranspose](mpsimagetranspose.md) filter applies a matrix transposition to the source image by exchanging its rows with its columns.

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

- [MPSImageConversion](mpsimageconversion.md): A filter that performs a conversion of color space, alpha, or pixel format.
- [MPSImageScale](mpsimagescale.md): A filter that resizes and changes the aspect ratio of an image.
- [MPSImageLanczosScale](mpsimagelanczosscale.md): A filter that resizes and changes the aspect ratio of an image using Lanczos resampling.
- [MPSImageBilinearScale](mpsimagebilinearscale.md): A filter that resizes and changes the aspect ratio of an image using Bilinear resampling.

# MPSImageTranspose (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that transposes an image.

## Declaration

```objectivec
@interface MPSImageTranspose : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

An [MPSImageTranspose](mpsimagetranspose.md) filter applies a matrix transposition to the source image by exchanging its rows with its columns.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Image Manipulation Filters

- [MPSImageConversion](mpsimageconversion.md): A filter that performs a conversion of color space, alpha, or pixel format.
- [MPSImageScale](mpsimagescale.md): A filter that resizes and changes the aspect ratio of an image.
- [MPSImageLanczosScale](mpsimagelanczosscale.md): A filter that resizes and changes the aspect ratio of an image using Lanczos resampling.
- [MPSImageBilinearScale](mpsimagebilinearscale.md): A filter that resizes and changes the aspect ratio of an image using Bilinear resampling.
