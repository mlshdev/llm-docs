> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarrayunarykernel](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayunarykernel)

# MPSNDArrayUnaryKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNDArrayUnaryKernel
```

## Topics

### Initializers

- [init(coder:device:)](mpsndarrayunarykernel/init%28coder_device_%29.md)
- [init(device:)](mpsndarrayunarykernel/init%28device_%29.md)

### Instance Properties

- [dilationRates](mpsndarrayunarykernel/dilationrates.md): Deprecated.
- [edgeMode](mpsndarrayunarykernel/edgemode.md): Deprecated.
- [kernelSizes](mpsndarrayunarykernel/kernelsizes.md): Deprecated.
- [offsets](mpsndarrayunarykernel/offsets.md): Deprecated.
- [strides](mpsndarrayunarykernel/strides.md): Deprecated.

### Instance Methods

- [encode(to:sourceArray:)](mpsndarrayunarykernel/encode%28to_sourcearray_%29.md)
- [encode(to:sourceArray:destinationArray:)](mpsndarrayunarykernel/encode%28to_sourcearray_destinationarray_%29.md)
- [encode(to:sourceArray:resultState:destinationArray:)](mpsndarrayunarykernel/encode%28to_sourcearray_resultstate_destinationarray_%29.md)
- [encode(to:sourceArray:resultState:outputStateIsTemporary:)](mpsndarrayunarykernel/encode%28to_sourcearray_resultstate_outputstateistemporary_%29.md)
- [encode(withMTL4CommandEncoder:sourceArray:destinationArray:)](mpsndarrayunarykernel/encode%28withmtl4commandencoder_sourcearray_destinationarray_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryKernel](mpsndarraymultiarykernel.md)

### Inherited By

- [MPSNDArrayIdentity](mpsndarrayidentity.md)
- [MPSNDArrayStridedSlice](mpsndarraystridedslice.md)

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

# MPSNDArrayUnaryKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNDArrayUnaryKernel : MPSNDArrayMultiaryKernel
```

## Topics

### Instance Properties

- [dilationRates](mpsndarrayunarykernel/dilationrates.md): Deprecated.
- [edgeMode](mpsndarrayunarykernel/edgemode.md): Deprecated.
- [kernelSizes](mpsndarrayunarykernel/kernelsizes.md): Deprecated.
- [offsets](mpsndarrayunarykernel/offsets.md): Deprecated.
- [strides](mpsndarrayunarykernel/strides.md): Deprecated.

### Instance Methods

- [encodeToCommandBuffer:sourceArray:](mpsndarrayunarykernel/encode%28to_sourcearray_%29.md)
- [encodeToCommandBuffer:sourceArray:destinationArray:](mpsndarrayunarykernel/encode%28to_sourcearray_destinationarray_%29.md)
- [encodeToCommandBuffer:sourceArray:resultState:destinationArray:](mpsndarrayunarykernel/encode%28to_sourcearray_resultstate_destinationarray_%29.md)
- [encodeToCommandBuffer:sourceArray:resultState:outputStateIsTemporary:](mpsndarrayunarykernel/encode%28to_sourcearray_resultstate_outputstateistemporary_%29.md)
- [encodeWithMTL4CommandEncoder:sourceArray:destinationArray:](mpsndarrayunarykernel/encode%28withmtl4commandencoder_sourcearray_destinationarray_%29.md)
- [initWithCoder:device:](mpsndarrayunarykernel/init%28coder_device_%29.md)
- [initWithDevice:](mpsndarrayunarykernel/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryKernel](mpsndarraymultiarykernel.md)

### Inherited By

- [MPSNDArrayIdentity](mpsndarrayidentity.md)
- [MPSNDArrayStridedSlice](mpsndarraystridedslice.md)
