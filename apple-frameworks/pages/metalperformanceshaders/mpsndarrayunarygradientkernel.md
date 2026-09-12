> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarrayunarygradientkernel](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayunarygradientkernel)

# MPSNDArrayUnaryGradientKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNDArrayUnaryGradientKernel
```

## Topics

### Initializers

- [init(coder:device:)](mpsndarrayunarygradientkernel/init%28coder_device_%29.md)
- [init(device:)](mpsndarrayunarygradientkernel/init%28device_%29.md)

### Instance Methods

- [encode(to:sourceArray:sourceGradient:gradientState:)](mpsndarrayunarygradientkernel/encode%28to_sourcearray_sourcegradient_gradientstate_%29.md)
- [encode(to:sourceArray:sourceGradient:gradientState:destinationArray:)](mpsndarrayunarygradientkernel/encode%28to_sourcearray_sourcegradient_gradientstate_destinationarray_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryGradientKernel](mpsndarraymultiarygradientkernel.md)

### Inherited By

- [MPSNDArrayStridedSliceGradient](mpsndarraystridedslicegradient.md)

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

# MPSNDArrayUnaryGradientKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNDArrayUnaryGradientKernel : MPSNDArrayMultiaryGradientKernel
```

## Topics

### Instance Methods

- [encodeToCommandBuffer:sourceArray:sourceGradient:gradientState:](mpsndarrayunarygradientkernel/encode%28to_sourcearray_sourcegradient_gradientstate_%29.md)
- [encodeToCommandBuffer:sourceArray:sourceGradient:gradientState:destinationArray:](mpsndarrayunarygradientkernel/encode%28to_sourcearray_sourcegradient_gradientstate_destinationarray_%29.md)
- [initWithCoder:device:](mpsndarrayunarygradientkernel/init%28coder_device_%29.md)
- [initWithDevice:](mpsndarrayunarygradientkernel/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryGradientKernel](mpsndarraymultiarygradientkernel.md)

### Inherited By

- [MPSNDArrayStridedSliceGradient](mpsndarraystridedslicegradient.md)
