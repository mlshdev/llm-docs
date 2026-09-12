> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagescale](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagescale)

# MPSImageScale (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A filter that resizes and changes the aspect ratio of an image.

## Declaration

```swift
class MPSImageScale
```

## Topics

### Initializers

- [init(coder:device:)](mpsimagescale/init%28coder_device_%29.md)
- [init(device:)](mpsimagescale/init%28device_%29.md)

### Instance Properties

- [scaleTransform](mpsimagescale/scaletransform.md)

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageBilinearScale](mpsimagebilinearscale.md)
- [MPSImageLanczosScale](mpsimagelanczosscale.md)

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
- [MPSImageLanczosScale](mpsimagelanczosscale.md): A filter that resizes and changes the aspect ratio of an image using Lanczos resampling.
- [MPSImageBilinearScale](mpsimagebilinearscale.md): A filter that resizes and changes the aspect ratio of an image using Bilinear resampling.
- [MPSImageTranspose](mpsimagetranspose.md): A filter that transposes an image.

# MPSImageScale (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A filter that resizes and changes the aspect ratio of an image.

## Declaration

```objectivec
@interface MPSImageScale : MPSUnaryImageKernel
```

## Topics

### Initializers

- [initWithCoder:device:](mpsimagescale/init%28coder_device_%29.md)
- [initWithDevice:](mpsimagescale/init%28device_%29.md)

### Instance Properties

- [scaleTransform](mpsimagescale/scaletransform.md)

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageBilinearScale](mpsimagebilinearscale.md)
- [MPSImageLanczosScale](mpsimagelanczosscale.md)

## See Also

### Image Manipulation Filters

- [MPSImageConversion](mpsimageconversion.md): A filter that performs a conversion of color space, alpha, or pixel format.
- [MPSImageLanczosScale](mpsimagelanczosscale.md): A filter that resizes and changes the aspect ratio of an image using Lanczos resampling.
- [MPSImageBilinearScale](mpsimagebilinearscale.md): A filter that resizes and changes the aspect ratio of an image using Bilinear resampling.
- [MPSImageTranspose](mpsimagetranspose.md): A filter that transposes an image.
