> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagestatisticsminandmax](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagestatisticsminandmax)

# MPSImageStatisticsMinAndMax (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel that computes the minimum and maximum pixel values for a given region of an image.

## Declaration

```swift
class MPSImageStatisticsMinAndMax
```

<a id="overview"></a>

## Overview

The minimum and maximum values are written to the destination image at the following pixel locations:

- Minimum value is written at pixel location `(0, 0)`
- Maximum value is written at pixel location `(1, 0)`

## Topics

### Initializers

- [init(coder:device:)](mpsimagestatisticsminandmax/init%28coder_device_%29.md)
- [init(device:)](mpsimagestatisticsminandmax/init%28device_%29.md)

### Instance Properties

- [clipRectSource](mpsimagestatisticsminandmax/cliprectsource.md)

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

### Image Statistics Filters

- [MPSImageStatisticsMean](mpsimagestatisticsmean.md): A kernel that computes the mean for a given region of an image.
- [MPSImageStatisticsMeanAndVariance](mpsimagestatisticsmeanandvariance.md): A kernel that computes the mean and variance for a given region of an image.

# MPSImageStatisticsMinAndMax (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel that computes the minimum and maximum pixel values for a given region of an image.

## Declaration

```objectivec
@interface MPSImageStatisticsMinAndMax : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

The minimum and maximum values are written to the destination image at the following pixel locations:

- Minimum value is written at pixel location `(0, 0)`
- Maximum value is written at pixel location `(1, 0)`

## Topics

### Initializers

- [initWithCoder:device:](mpsimagestatisticsminandmax/init%28coder_device_%29.md)
- [initWithDevice:](mpsimagestatisticsminandmax/init%28device_%29.md)

### Instance Properties

- [clipRectSource](mpsimagestatisticsminandmax/cliprectsource.md)

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Image Statistics Filters

- [MPSImageStatisticsMean](mpsimagestatisticsmean.md): A kernel that computes the mean for a given region of an image.
- [MPSImageStatisticsMeanAndVariance](mpsimagestatisticsmeanandvariance.md): A kernel that computes the mean and variance for a given region of an image.
