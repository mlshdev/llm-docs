> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarraymultiarykernel](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraymultiarykernel)

# MPSNDArrayMultiaryKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNDArrayMultiaryKernel
```

## Topics

### Initializers

- [init(coder:device:)](mpsndarraymultiarykernel/init%28coder_device_%29.md)
- [init(device:sourceCount:)](mpsndarraymultiarykernel/init%28device_sourcecount_%29.md)

### Instance Methods

- [encode(to:commandBuffer:sourceArrays:destinationArray:)](mpsndarraymultiarykernel/encode%28to_commandbuffer_sourcearrays_destinationarray_%29.md)
- [encode(to:sourceArrays:)](mpsndarraymultiarykernel/encode%28to_sourcearrays_%29.md)
- [encode(to:sourceArrays:destinationArray:)](mpsndarraymultiarykernel/encode%28to_sourcearrays_destinationarray_%29.md)
- [encode(to:sourceArrays:resultState:destinationArray:)](mpsndarraymultiarykernel/encode%28to_sourcearrays_resultstate_destinationarray_%29.md)
- [encode(to:sourceArrays:resultState:outputStateIsTemporary:)](mpsndarraymultiarykernel/encode%28to_sourcearrays_resultstate_outputstateistemporary_%29.md)
- [encode(withMTL4CommandEncoder:sourceArrays:destinationArray:)](mpsndarraymultiarykernel/encode%28withmtl4commandencoder_sourcearrays_destinationarray_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryBase](mpsndarraymultiarybase.md)

### Inherited By

- [MPSNDArrayAffineInt4Dequantize](mpsndarrayaffineint4dequantize.md)
- [MPSNDArrayBinaryKernel](mpsndarraybinarykernel.md)
- [MPSNDArrayLUTDequantize](mpsndarraylutdequantize.md)
- [MPSNDArrayMatrixMultiplication](mpsndarraymatrixmultiplication.md)
- [MPSNDArrayUnaryKernel](mpsndarrayunarykernel.md)
- [MPSNDArrayVectorLUTDequantize](mpsndarrayvectorlutdequantize.md)

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

# MPSNDArrayMultiaryKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNDArrayMultiaryKernel : MPSNDArrayMultiaryBase
```

## Topics

### Instance Methods

- [encodeToCommandEncoder:commandBuffer:sourceArrays:destinationArray:](mpsndarraymultiarykernel/encode%28to_commandbuffer_sourcearrays_destinationarray_%29.md)
- [encodeToCommandBuffer:sourceArrays:](mpsndarraymultiarykernel/encode%28to_sourcearrays_%29.md)
- [encodeToCommandBuffer:sourceArrays:destinationArray:](mpsndarraymultiarykernel/encode%28to_sourcearrays_destinationarray_%29.md)
- [encodeToCommandBuffer:sourceArrays:resultState:destinationArray:](mpsndarraymultiarykernel/encode%28to_sourcearrays_resultstate_destinationarray_%29.md)
- [encodeToCommandBuffer:sourceArrays:resultState:outputStateIsTemporary:](mpsndarraymultiarykernel/encode%28to_sourcearrays_resultstate_outputstateistemporary_%29.md)
- [encodeWithMTL4CommandEncoder:sourceArrays:destinationArray:](mpsndarraymultiarykernel/encode%28withmtl4commandencoder_sourcearrays_destinationarray_%29.md)
- [initWithCoder:device:](mpsndarraymultiarykernel/init%28coder_device_%29.md)
- [initWithDevice:sourceCount:](mpsndarraymultiarykernel/init%28device_sourcecount_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryBase](mpsndarraymultiarybase.md)

### Inherited By

- [MPSNDArrayAffineInt4Dequantize](mpsndarrayaffineint4dequantize.md)
- [MPSNDArrayBinaryKernel](mpsndarraybinarykernel.md)
- [MPSNDArrayLUTDequantize](mpsndarraylutdequantize.md)
- [MPSNDArrayMatrixMultiplication](mpsndarraymatrixmultiplication.md)
- [MPSNDArrayUnaryKernel](mpsndarrayunarykernel.md)
- [MPSNDArrayVectorLUTDequantize](mpsndarrayvectorlutdequantize.md)
