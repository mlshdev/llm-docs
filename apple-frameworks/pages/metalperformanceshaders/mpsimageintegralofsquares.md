> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageintegralofsquares](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageintegralofsquares)

# MPSImageIntegralOfSquares (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that calculates the sum of squared pixels over a specified region in an image.

## Declaration

```swift
class MPSImageIntegralOfSquares
```

<a id="overview"></a>

## Overview

The value at each position is the sum of all squared pixels in a source image rectangle, `sumRect.` The following listing shows the pseudocode used to calculate `sumRect`.

Listing 1. Pseudocode for sumRect

```other
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

- [MPSImageIntegral](mpsimageintegral.md): A filter that calculates the sum of pixels over a specified region in an image.

# MPSImageIntegralOfSquares (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that calculates the sum of squared pixels over a specified region in an image.

## Declaration

```objectivec
@interface MPSImageIntegralOfSquares : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

The value at each position is the sum of all squared pixels in a source image rectangle, `sumRect.` The following listing shows the pseudocode used to calculate `sumRect`.

Listing 1. Pseudocode for sumRect

```other
sumRect.origin = filter.offset
sumRect.size = dest_position - filter.clipRect.origin
```

If the channels in the source image are normalized, half-float or floating values, the destination image is recommended to be a 32-bit floating-point image. If the channels in the source image are integer values, it is recommended that an appropriate 32-bit integer image destination format is used.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Image Integral Filters

- [MPSImageIntegral](mpsimageintegral.md): A filter that calculates the sum of pixels over a specified region in an image.
