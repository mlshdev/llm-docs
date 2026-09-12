> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlreadwritetexturetier](https://developer.apple.com/documentation/metal/mtlreadwritetexturetier)

# MTLReadWriteTextureTier (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The support level for read-write texture formats.

## Declaration

```swift
enum MTLReadWriteTextureTier
```

## Topics

### Enumeration cases

- [MTLReadWriteTextureTier.tier1](mtlreadwritetexturetier/tier1.md): Indicates the system supports tier 1 read-write textures.
- [MTLReadWriteTextureTier.tier2](mtlreadwritetexturetier/tier2.md): Indicates the system supports tier 2 read-write textures.
- [MTLReadWriteTextureTier.tierNone](mtlreadwritetexturetier/tiernone.md): Indicates the system doesn’t support read-write textures.

### Initializers

- [init(rawValue:)](mtlreadwritetexturetier/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [MTLTensorError.Code](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLArgumentBuffersTier](mtlargumentbufferstier.md): The values that determine the limits and capabilities of argument buffers.
- [MTLLogStateError](mtllogstateerror.md)
- [MTLMathFloatingPointFunctions](mtlmathfloatingpointfunctions.md): Indicates which FP32 math functions Metal uses.
- [MTLMathMode](mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [MTLMatrixLayout](mtlmatrixlayout.md)
- [MTLShaderValidation](mtlshadervalidation.md): Indicates whether shader validation in an enabled or disabled state, or neither state.
- [MTLTransformType](mtltransformtype.md)

# MTLReadWriteTextureTier (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The support level for read-write texture formats.

## Declaration

```objectivec
enum MTLReadWriteTextureTier : NSUInteger;
```

## Topics

### Enumeration cases

- [MTLReadWriteTextureTier1](mtlreadwritetexturetier/tier1.md): Indicates the system supports tier 1 read-write textures.
- [MTLReadWriteTextureTier2](mtlreadwritetexturetier/tier2.md): Indicates the system supports tier 2 read-write textures.
- [MTLReadWriteTextureTierNone](mtlreadwritetexturetier/tiernone.md): Indicates the system doesn’t support read-write textures.

## See Also

### Enumerations

- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLArgumentBuffersTier](mtlargumentbufferstier.md): The values that determine the limits and capabilities of argument buffers.
- [MTLLogStateError](mtllogstateerror.md)
- [MTLMathFloatingPointFunctions](mtlmathfloatingpointfunctions.md): Indicates which FP32 math functions Metal uses.
- [MTLMathMode](mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [MTLMatrixLayout](mtlmatrixlayout.md)
- [MTLShaderValidation](mtlshadervalidation.md): Indicates whether shader validation in an enabled or disabled state, or neither state.
- [MTLTransformType](mtltransformtype.md)
