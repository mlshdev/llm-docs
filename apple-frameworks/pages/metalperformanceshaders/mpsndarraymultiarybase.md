> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarraymultiarybase](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraymultiarybase)

# MPSNDArrayMultiaryBase (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNDArrayMultiaryBase
```

## Topics

### Initializers

- [init(coder:device:)](mpsndarraymultiarybase/init%28coder_device_%29.md)
- [init(device:sourceCount:)](mpsndarraymultiarybase/init%28device_sourcecount_%29.md)

### Instance Properties

- [destinationArrayAllocator](mpsndarraymultiarybase/destinationarrayallocator.md)

### Instance Methods

- [copy(with:device:)](mpsndarraymultiarybase/copy%28with_device_%29.md)
- [destinationArrayDescriptor(forSourceArrays:sourceState:)](mpsndarraymultiarybase/destinationarraydescriptor%28forsourcearrays_sourcestate_%29.md)
- [dilationRates(forSourceIndex:)](mpsndarraymultiarybase/dilationrates%28forsourceindex_%29.md): Deprecated.
- [edgeMode(atSourceIndex:)](mpsndarraymultiarybase/edgemode%28atsourceindex_%29.md): Deprecated.
- [encode(with:)](mpsndarraymultiarybase/encode%28with_%29.md)
- [kernelSizes(forSourceIndex:)](mpsndarraymultiarybase/kernelsizes%28forsourceindex_%29.md): Deprecated.
- [offsets(atSourceIndex:)](mpsndarraymultiarybase/offsets%28atsourceindex_%29.md): Deprecated.
- [resultState(forSourceArrays:sourceStates:destinationArray:)](mpsndarraymultiarybase/resultstate%28forsourcearrays_sourcestates_destinationarray_%29.md)
- [strides(forSourceIndex:)](mpsndarraymultiarybase/strides%28forsourceindex_%29.md): Deprecated.

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSNDArrayMultiaryGradientKernel](mpsndarraymultiarygradientkernel.md)
- [MPSNDArrayMultiaryKernel](mpsndarraymultiarykernel.md)

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

# MPSNDArrayMultiaryBase (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNDArrayMultiaryBase : MPSKernel
```

## Topics

### Instance Properties

- [destinationArrayAllocator](mpsndarraymultiarybase/destinationarrayallocator.md)

### Instance Methods

- [copyWithZone:device:](mpsndarraymultiarybase/copy%28with_device_%29.md)
- [destinationArrayDescriptorForSourceArrays:sourceState:](mpsndarraymultiarybase/destinationarraydescriptor%28forsourcearrays_sourcestate_%29.md)
- [dilationRatesForSourceIndex:](mpsndarraymultiarybase/dilationrates%28forsourceindex_%29.md): Deprecated.
- [edgeModeAtSourceIndex:](mpsndarraymultiarybase/edgemode%28atsourceindex_%29.md): Deprecated.
- [encodeWithCoder:](mpsndarraymultiarybase/encode%28with_%29.md)
- [initWithCoder:device:](mpsndarraymultiarybase/init%28coder_device_%29.md)
- [initWithDevice:sourceCount:](mpsndarraymultiarybase/init%28device_sourcecount_%29.md)
- [kernelSizesForSourceIndex:](mpsndarraymultiarybase/kernelsizes%28forsourceindex_%29.md): Deprecated.
- [offsetsAtSourceIndex:](mpsndarraymultiarybase/offsets%28atsourceindex_%29.md): Deprecated.
- [resultStateForSourceArrays:sourceStates:destinationArray:](mpsndarraymultiarybase/resultstate%28forsourcearrays_sourcestates_destinationarray_%29.md)
- [stridesForSourceIndex:](mpsndarraymultiarybase/strides%28forsourceindex_%29.md): Deprecated.

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSNDArrayMultiaryGradientKernel](mpsndarraymultiarygradientkernel.md)
- [MPSNDArrayMultiaryKernel](mpsndarraymultiarykernel.md)
