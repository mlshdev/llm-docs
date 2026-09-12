> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagethresholdtozero](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagethresholdtozero)

# MPSImageThresholdToZero (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that returns the original value for each pixel with a value greater than a specified threshold or 0 otherwise.

## Declaration

```swift
class MPSImageThresholdToZero
```

<a id="overview"></a>

## Overview

An [MPSImageThresholdToZero](mpsimagethresholdtozero.md) filter converts a single channel image to a binary image. If the input image is not a single channel image, the function first converts the input image into a single channel luminance image using the linear gray color transform, and then it applies the threshold.

The following listing shows the threshold to zero function.

Listing 1. Threshold to zero function

```other
destinationPixelValue = sourcePixelValue > thresholdValue ? sourcePixelValue : 0
```

## Topics

### Initializers

- [init(coder:device:)](mpsimagethresholdtozero/init%28coder_device_%29.md)

### Methods

- [init(device:thresholdValue:linearGrayColorTransform:)](mpsimagethresholdtozero/init%28device_thresholdvalue_lineargraycolortransform_%29.md): Initializes the kernel.

### Properties

- [thresholdValue](mpsimagethresholdtozero/thresholdvalue.md): The threshold value used to initialize the threshold filter.
- [transform](mpsimagethresholdtozero/transform.md): The color transform used to initialize the threshold filter.

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

### Image Threshold Filters

- [MPSImageThresholdBinary](mpsimagethresholdbinary.md): A filter that returns a specified value for each pixel with a value greater than a specified threshold or 0 otherwise.
- [MPSImageThresholdBinaryInverse](mpsimagethresholdbinaryinverse.md): A filter that returns 0 for each pixel with a value greater than a specified threshold or a specified value otherwise.
- [MPSImageThresholdToZeroInverse](mpsimagethresholdtozeroinverse.md): A filter that returns 0 for each pixel with a value greater than a specified threshold or the original value otherwise.
- [MPSImageThresholdTruncate](mpsimagethresholdtruncate.md): A filter that clamps the return value to an upper specified value.

# MPSImageThresholdToZero (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that returns the original value for each pixel with a value greater than a specified threshold or 0 otherwise.

## Declaration

```objectivec
@interface MPSImageThresholdToZero : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

An [MPSImageThresholdToZero](mpsimagethresholdtozero.md) filter converts a single channel image to a binary image. If the input image is not a single channel image, the function first converts the input image into a single channel luminance image using the linear gray color transform, and then it applies the threshold.

The following listing shows the threshold to zero function.

Listing 1. Threshold to zero function

```other
destinationPixelValue = sourcePixelValue > thresholdValue ? sourcePixelValue : 0
```

## Topics

### Initializers

- [initWithCoder:device:](mpsimagethresholdtozero/init%28coder_device_%29.md)

### Methods

- [initWithDevice:thresholdValue:linearGrayColorTransform:](mpsimagethresholdtozero/init%28device_thresholdvalue_lineargraycolortransform_%29.md): Initializes the kernel.

### Properties

- [thresholdValue](mpsimagethresholdtozero/thresholdvalue.md): The threshold value used to initialize the threshold filter.
- [transform](mpsimagethresholdtozero/transform.md): The color transform used to initialize the threshold filter.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Image Threshold Filters

- [MPSImageThresholdBinary](mpsimagethresholdbinary.md): A filter that returns a specified value for each pixel with a value greater than a specified threshold or 0 otherwise.
- [MPSImageThresholdBinaryInverse](mpsimagethresholdbinaryinverse.md): A filter that returns 0 for each pixel with a value greater than a specified threshold or a specified value otherwise.
- [MPSImageThresholdToZeroInverse](mpsimagethresholdtozeroinverse.md): A filter that returns 0 for each pixel with a value greater than a specified threshold or the original value otherwise.
- [MPSImageThresholdTruncate](mpsimagethresholdtruncate.md): A filter that clamps the return value to an upper specified value.
