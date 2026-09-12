> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagearithmetic](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagearithmetic)

# MPSImageArithmetic (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Base class for basic arithmetic nodes

## Declaration

```swift
class MPSImageArithmetic
```

## Topics

### Instance Properties

- [bias](mpsimagearithmetic/bias.md)
- [primaryScale](mpsimagearithmetic/primaryscale.md)
- [primaryStrideInPixels](mpsimagearithmetic/primarystrideinpixels.md)
- [secondaryScale](mpsimagearithmetic/secondaryscale.md)
- [secondaryStrideInPixels](mpsimagearithmetic/secondarystrideinpixels.md)
- [maximumValue](mpsimagearithmetic/maximumvalue.md)
- [minimumValue](mpsimagearithmetic/minimumvalue.md)

## Relationships

### Inherits From

- [MPSBinaryImageKernel](mpsbinaryimagekernel.md)

### Inherited By

- [MPSImageAdd](mpsimageadd.md)
- [MPSImageDivide](mpsimagedivide.md)
- [MPSImageMultiply](mpsimagemultiply.md)
- [MPSImageSubtract](mpsimagesubtract.md)

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

### Image Arithmetic Filters

- [MPSImageAdd](mpsimageadd.md): A filter that returns the element-wise sum of its two input images.
- [MPSImageSubtract](mpsimagesubtract.md): A filter that returns the element-wise difference of its two input images.
- [MPSImageMultiply](mpsimagemultiply.md): A filter that returns the element-wise product of its two input images.
- [MPSImageDivide](mpsimagedivide.md): A filter that returns the element-wise quotient of its two input images.

# MPSImageArithmetic (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Base class for basic arithmetic nodes

## Declaration

```objectivec
@interface MPSImageArithmetic : MPSBinaryImageKernel
```

## Topics

### Instance Properties

- [bias](mpsimagearithmetic/bias.md)
- [primaryScale](mpsimagearithmetic/primaryscale.md)
- [primaryStrideInPixels](mpsimagearithmetic/primarystrideinpixels.md)
- [secondaryScale](mpsimagearithmetic/secondaryscale.md)
- [secondaryStrideInPixels](mpsimagearithmetic/secondarystrideinpixels.md)
- [maximumValue](mpsimagearithmetic/maximumvalue.md)
- [minimumValue](mpsimagearithmetic/minimumvalue.md)

## Relationships

### Inherits From

- [MPSBinaryImageKernel](mpsbinaryimagekernel.md)

### Inherited By

- [MPSImageAdd](mpsimageadd.md)
- [MPSImageDivide](mpsimagedivide.md)
- [MPSImageMultiply](mpsimagemultiply.md)
- [MPSImageSubtract](mpsimagesubtract.md)

## See Also

### Image Arithmetic Filters

- [MPSImageAdd](mpsimageadd.md): A filter that returns the element-wise sum of its two input images.
- [MPSImageSubtract](mpsimagesubtract.md): A filter that returns the element-wise difference of its two input images.
- [MPSImageMultiply](mpsimagemultiply.md): A filter that returns the element-wise product of its two input images.
- [MPSImageDivide](mpsimagedivide.md): A filter that returns the element-wise quotient of its two input images.
