> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagelanczosscale](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagelanczosscale)

# MPSImageLanczosScale (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that resizes and changes the aspect ratio of an image using Lanczos resampling.

## Declaration

```swift
class MPSImageLanczosScale
```

<a id="overview"></a>

## Overview

You can use this filter to enlarge or reduce the size of an image, or to change the aspect ratio of an image. The filter uses a Lanczos resampling algorithm, that typically produces better quality for photographs, but is slower than linear sampling that uses GPU texture units. Lanczos downsampling does not require a low pass filter to be applied before it is used. Because the resampling function has negative lobes, Lanczos can result in ringing artifacts near sharp edges, making it less suitable for vector art.

## Topics

### Initializers

- [init(coder:device:)](mpsimagelanczosscale/init%28coder_device_%29.md)
- [init(device:)](mpsimagelanczosscale/init%28device_%29.md)

### Properties

- [MPSScaleTransform](mpsscaletransform.md): A transform matrix for explicit resampling control with a Lanczos kernel.

## Relationships

### Inherits From

- [MPSImageScale](mpsimagescale.md)

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
- [MPSImageBilinearScale](mpsimagebilinearscale.md): A filter that resizes and changes the aspect ratio of an image using Bilinear resampling.
- [MPSImageTranspose](mpsimagetranspose.md): A filter that transposes an image.

# MPSImageLanczosScale (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that resizes and changes the aspect ratio of an image using Lanczos resampling.

## Declaration

```objectivec
@interface MPSImageLanczosScale : MPSImageScale
```

<a id="overview"></a>

## Overview

You can use this filter to enlarge or reduce the size of an image, or to change the aspect ratio of an image. The filter uses a Lanczos resampling algorithm, that typically produces better quality for photographs, but is slower than linear sampling that uses GPU texture units. Lanczos downsampling does not require a low pass filter to be applied before it is used. Because the resampling function has negative lobes, Lanczos can result in ringing artifacts near sharp edges, making it less suitable for vector art.

## Topics

### Initializers

- [initWithCoder:device:](mpsimagelanczosscale/init%28coder_device_%29.md)
- [initWithDevice:](mpsimagelanczosscale/init%28device_%29.md)

### Properties

- [MPSScaleTransform](mpsscaletransform.md): A transform matrix for explicit resampling control with a Lanczos kernel.

## Relationships

### Inherits From

- [MPSImageScale](mpsimagescale.md)

## See Also

### Image Manipulation Filters

- [MPSImageConversion](mpsimageconversion.md): A filter that performs a conversion of color space, alpha, or pixel format.
- [MPSImageScale](mpsimagescale.md): A filter that resizes and changes the aspect ratio of an image.
- [MPSImageBilinearScale](mpsimagebilinearscale.md): A filter that resizes and changes the aspect ratio of an image using Bilinear resampling.
- [MPSImageTranspose](mpsimagetranspose.md): A filter that transposes an image.
