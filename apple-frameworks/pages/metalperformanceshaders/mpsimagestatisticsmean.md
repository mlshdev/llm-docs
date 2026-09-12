> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagestatisticsmean](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagestatisticsmean)

# MPSImageStatisticsMean (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel that computes the mean for a given region of an image.

## Declaration

```swift
class MPSImageStatisticsMean
```

## Topics

### Initializers

- [init(coder:device:)](mpsimagestatisticsmean/init%28coder_device_%29.md)
- [init(device:)](mpsimagestatisticsmean/init%28device_%29.md)

### Instance Properties

- [clipRectSource](mpsimagestatisticsmean/cliprectsource.md)

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

- [MPSImageStatisticsMeanAndVariance](mpsimagestatisticsmeanandvariance.md): A kernel that computes the mean and variance for a given region of an image.
- [MPSImageStatisticsMinAndMax](mpsimagestatisticsminandmax.md): A kernel that computes the minimum and maximum pixel values for a given region of an image.

# MPSImageStatisticsMean (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel that computes the mean for a given region of an image.

## Declaration

```objectivec
@interface MPSImageStatisticsMean : MPSUnaryImageKernel
```

## Topics

### Initializers

- [initWithCoder:device:](mpsimagestatisticsmean/init%28coder_device_%29.md)
- [initWithDevice:](mpsimagestatisticsmean/init%28device_%29.md)

### Instance Properties

- [clipRectSource](mpsimagestatisticsmean/cliprectsource.md)

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Image Statistics Filters

- [MPSImageStatisticsMeanAndVariance](mpsimagestatisticsmeanandvariance.md): A kernel that computes the mean and variance for a given region of an image.
- [MPSImageStatisticsMinAndMax](mpsimagestatisticsminandmax.md): A kernel that computes the minimum and maximum pixel values for a given region of an image.
