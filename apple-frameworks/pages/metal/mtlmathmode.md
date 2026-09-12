> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmathmode](https://developer.apple.com/documentation/metal/mtlmathmode)

# MTLMathMode (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

## Declaration

```swift
enum MTLMathMode
```

## Topics

### Modes

- [MTLMathMode.fast](mtlmathmode/fast.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math.
- [MTLMathMode.relaxed](mtlmathmode/relaxed.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math, while honoring Inf/NaN.
- [MTLMathMode.safe](mtlmathmode/safe.md): An indicator of the mode the compiler uses to disable unsafe floating-point optimizations by preventing the compiler from making any transformations that could affect the results.

### Initializers

- [init(rawValue:)](mtlmathmode/init%28rawvalue_%29.md)

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
- [MTLMatrixLayout](mtlmatrixlayout.md)
- [MTLReadWriteTextureTier](mtlreadwritetexturetier.md): The support level for read-write texture formats.
- [MTLShaderValidation](mtlshadervalidation.md): Indicates whether shader validation in an enabled or disabled state, or neither state.
- [MTLTransformType](mtltransformtype.md)

# MTLMathMode (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

## Declaration

```objectivec
enum MTLMathMode : NSInteger;
```

## Topics

### Modes

- [MTLMathModeFast](mtlmathmode/fast.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math.
- [MTLMathModeRelaxed](mtlmathmode/relaxed.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math, while honoring Inf/NaN.
- [MTLMathModeSafe](mtlmathmode/safe.md): An indicator of the mode the compiler uses to disable unsafe floating-point optimizations by preventing the compiler from making any transformations that could affect the results.

## See Also

### Enumerations

- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLArgumentBuffersTier](mtlargumentbufferstier.md): The values that determine the limits and capabilities of argument buffers.
- [MTLLogStateError](mtllogstateerror.md)
- [MTLMathFloatingPointFunctions](mtlmathfloatingpointfunctions.md): Indicates which FP32 math functions Metal uses.
- [MTLMatrixLayout](mtlmatrixlayout.md)
- [MTLReadWriteTextureTier](mtlreadwritetexturetier.md): The support level for read-write texture formats.
- [MTLShaderValidation](mtlshadervalidation.md): Indicates whether shader validation in an enabled or disabled state, or neither state.
- [MTLTransformType](mtltransformtype.md)
