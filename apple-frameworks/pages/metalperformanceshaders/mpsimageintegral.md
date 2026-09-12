> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageintegral](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageintegral)

# MPSImageIntegral (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that calculates the sum of pixels over a specified region in an image.

## Declaration

```swift
class MPSImageIntegral
```

<a id="overview"></a>

## Overview

The value at each position is the sum of all pixels in a source image rectangle, `sumRect.` The following listing shows the pseudocode used to calculate `sumRect`.

Listing 1. Pseudocode for sumRect

```objc
sumRect.origin = filter.offset
sumRect.size = dest_position - filter.clipRect.origin
```

If the channels in the source image are normalized, half-float or floating values, the destination image is recommended to be a 32-bit floating-point image. If the channels in the source image are integer values, it is recommended that an appropriate 32-bit integer image destination format is used.

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

### Image Integral Filters

- [MPSImageIntegralOfSquares](mpsimageintegralofsquares.md): A filter that calculates the sum of squared pixels over a specified region in an image.

# MPSImageIntegral (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that calculates the sum of pixels over a specified region in an image.

## Declaration

```objectivec
@interface MPSImageIntegral : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

The value at each position is the sum of all pixels in a source image rectangle, `sumRect.` The following listing shows the pseudocode used to calculate `sumRect`.

Listing 1. Pseudocode for sumRect

```objc
sumRect.origin = filter.offset
sumRect.size = dest_position - filter.clipRect.origin
```

If the channels in the source image are normalized, half-float or floating values, the destination image is recommended to be a 32-bit floating-point image. If the channels in the source image are integer values, it is recommended that an appropriate 32-bit integer image destination format is used.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Image Integral Filters

- [MPSImageIntegralOfSquares](mpsimageintegralofsquares.md): A filter that calculates the sum of squared pixels over a specified region in an image.
