> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarraymultiarygradientkernel](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraymultiarygradientkernel)

# MPSNDArrayMultiaryGradientKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNDArrayMultiaryGradientKernel
```

## Topics

### Initializers

- [init(coder:device:)](mpsndarraymultiarygradientkernel/init%28coder_device_%29.md)
- [init(device:sourceCount:sourceGradientIndex:)](mpsndarraymultiarygradientkernel/init%28device_sourcecount_sourcegradientindex_%29.md)

### Instance Methods

- [encode(to:sourceArrays:sourceGradient:gradientState:)](mpsndarraymultiarygradientkernel/encode%28to_sourcearrays_sourcegradient_gradientstate_%29.md)
- [encode(to:sourceArrays:sourceGradient:gradientState:destinationArray:)](mpsndarraymultiarygradientkernel/encode%28to_sourcearrays_sourcegradient_gradientstate_destinationarray_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryBase](mpsndarraymultiarybase.md)

### Inherited By

- [MPSNDArrayBinaryPrimaryGradientKernel](mpsndarraybinaryprimarygradientkernel.md)
- [MPSNDArrayBinarySecondaryGradientKernel](mpsndarraybinarysecondarygradientkernel.md)
- [MPSNDArrayUnaryGradientKernel](mpsndarrayunarygradientkernel.md)

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

# MPSNDArrayMultiaryGradientKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNDArrayMultiaryGradientKernel : MPSNDArrayMultiaryBase
```

## Topics

### Instance Methods

- [encodeToCommandBuffer:sourceArrays:sourceGradient:gradientState:](mpsndarraymultiarygradientkernel/encode%28to_sourcearrays_sourcegradient_gradientstate_%29.md)
- [encodeToCommandBuffer:sourceArrays:sourceGradient:gradientState:destinationArray:](mpsndarraymultiarygradientkernel/encode%28to_sourcearrays_sourcegradient_gradientstate_destinationarray_%29.md)
- [initWithCoder:device:](mpsndarraymultiarygradientkernel/init%28coder_device_%29.md)
- [initWithDevice:sourceCount:sourceGradientIndex:](mpsndarraymultiarygradientkernel/init%28device_sourcecount_sourcegradientindex_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryBase](mpsndarraymultiarybase.md)

### Inherited By

- [MPSNDArrayBinaryPrimaryGradientKernel](mpsndarraybinaryprimarygradientkernel.md)
- [MPSNDArrayBinarySecondaryGradientKernel](mpsndarraybinarysecondarygradientkernel.md)
- [MPSNDArrayUnaryGradientKernel](mpsndarrayunarygradientkernel.md)
