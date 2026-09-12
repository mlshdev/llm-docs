> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagethresholdbinary](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagethresholdbinary)

# MPSImageThresholdBinary (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that returns a specified value for each pixel with a value greater than a specified threshold or 0 otherwise.

## Declaration

```swift
class MPSImageThresholdBinary
```

<a id="overview"></a>

## Overview

An [MPSImageThresholdBinary](mpsimagethresholdbinary.md) filter converts a single channel image to a binary image. If the input image is not a single channel image, the function first converts the input image into a single channel luminance image using the linear gray color transform, and then it applies the threshold.

The following listing shows the threshold binary function.

Listing 1. Threshold binary function

```other
destinationPixelValue = sourcePixelValue > thresholdValue ? maximumValue : 0
```

## Topics

### Initializers

- [init(coder:device:)](mpsimagethresholdbinary/init%28coder_device_%29.md)

### Methods

- [init(device:thresholdValue:maximumValue:linearGrayColorTransform:)](mpsimagethresholdbinary/init%28device_thresholdvalue_maximumvalue_lineargraycolortransform_%29.md): Initializes the kernel.

### Properties

- [thresholdValue](mpsimagethresholdbinary/thresholdvalue.md): The threshold value used to initialize the threshold filter.
- [maximumValue](mpsimagethresholdbinary/maximumvalue.md): The maximum value used to initialize the threshold filter.
- [transform](mpsimagethresholdbinary/transform.md): The color transform used to initialize the threshold filter.

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

- [MPSImageThresholdBinaryInverse](mpsimagethresholdbinaryinverse.md): A filter that returns 0 for each pixel with a value greater than a specified threshold or a specified value otherwise.
- [MPSImageThresholdToZero](mpsimagethresholdtozero.md): A filter that returns the original value for each pixel with a value greater than a specified threshold or 0 otherwise.
- [MPSImageThresholdToZeroInverse](mpsimagethresholdtozeroinverse.md): A filter that returns 0 for each pixel with a value greater than a specified threshold or the original value otherwise.
- [MPSImageThresholdTruncate](mpsimagethresholdtruncate.md): A filter that clamps the return value to an upper specified value.

# MPSImageThresholdBinary (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that returns a specified value for each pixel with a value greater than a specified threshold or 0 otherwise.

## Declaration

```objectivec
@interface MPSImageThresholdBinary : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

An [MPSImageThresholdBinary](mpsimagethresholdbinary.md) filter converts a single channel image to a binary image. If the input image is not a single channel image, the function first converts the input image into a single channel luminance image using the linear gray color transform, and then it applies the threshold.

The following listing shows the threshold binary function.

Listing 1. Threshold binary function

```other
destinationPixelValue = sourcePixelValue > thresholdValue ? maximumValue : 0
```

## Topics

### Initializers

- [initWithCoder:device:](mpsimagethresholdbinary/init%28coder_device_%29.md)

### Methods

- [initWithDevice:thresholdValue:maximumValue:linearGrayColorTransform:](mpsimagethresholdbinary/init%28device_thresholdvalue_maximumvalue_lineargraycolortransform_%29.md): Initializes the kernel.

### Properties

- [thresholdValue](mpsimagethresholdbinary/thresholdvalue.md): The threshold value used to initialize the threshold filter.
- [maximumValue](mpsimagethresholdbinary/maximumvalue.md): The maximum value used to initialize the threshold filter.
- [transform](mpsimagethresholdbinary/transform.md): The color transform used to initialize the threshold filter.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Image Threshold Filters

- [MPSImageThresholdBinaryInverse](mpsimagethresholdbinaryinverse.md): A filter that returns 0 for each pixel with a value greater than a specified threshold or a specified value otherwise.
- [MPSImageThresholdToZero](mpsimagethresholdtozero.md): A filter that returns the original value for each pixel with a value greater than a specified threshold or 0 otherwise.
- [MPSImageThresholdToZeroInverse](mpsimagethresholdtozeroinverse.md): A filter that returns 0 for each pixel with a value greater than a specified threshold or the original value otherwise.
- [MPSImageThresholdTruncate](mpsimagethresholdtruncate.md): A filter that clamps the return value to an upper specified value.
