> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmathfloatingpointfunctions](https://developer.apple.com/documentation/metal/mtlmathfloatingpointfunctions)

# MTLMathFloatingPointFunctions (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates which FP32 math functions Metal uses.

## Declaration

```swift
enum MTLMathFloatingPointFunctions
```

## Topics

### Function sets

- [MTLMathFloatingPointFunctions.fast](mtlmathfloatingpointfunctions/fast.md): An indication that Metal uses the fast version of the 32b floating-point math functions.
- [MTLMathFloatingPointFunctions.precise](mtlmathfloatingpointfunctions/precise.md): An indication that Metal uses the precise version of the 32b floating-point math functions.

### Initializers

- [init(rawValue:)](mtlmathfloatingpointfunctions/init%28rawvalue_%29.md)

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
- [MTLMathMode](mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [MTLMatrixLayout](mtlmatrixlayout.md)
- [MTLReadWriteTextureTier](mtlreadwritetexturetier.md): The support level for read-write texture formats.
- [MTLShaderValidation](mtlshadervalidation.md): Indicates whether shader validation in an enabled or disabled state, or neither state.
- [MTLTransformType](mtltransformtype.md)

# MTLMathFloatingPointFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates which FP32 math functions Metal uses.

## Declaration

```objectivec
enum MTLMathFloatingPointFunctions : NSInteger;
```

## Topics

### Function sets

- [MTLMathFloatingPointFunctionsFast](mtlmathfloatingpointfunctions/fast.md): An indication that Metal uses the fast version of the 32b floating-point math functions.
- [MTLMathFloatingPointFunctionsPrecise](mtlmathfloatingpointfunctions/precise.md): An indication that Metal uses the precise version of the 32b floating-point math functions.

## See Also

### Enumerations

- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLArgumentBuffersTier](mtlargumentbufferstier.md): The values that determine the limits and capabilities of argument buffers.
- [MTLLogStateError](mtllogstateerror.md)
- [MTLMathMode](mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [MTLMatrixLayout](mtlmatrixlayout.md)
- [MTLReadWriteTextureTier](mtlreadwritetexturetier.md): The support level for read-write texture formats.
- [MTLShaderValidation](mtlshadervalidation.md): Indicates whether shader validation in an enabled or disabled state, or neither state.
- [MTLTransformType](mtltransformtype.md)
