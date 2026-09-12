> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlshadervalidation](https://developer.apple.com/documentation/metal/mtlshadervalidation)

# MTLShaderValidation (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Indicates whether shader validation in an enabled or disabled state, or neither state.

## Declaration

```swift
enum MTLShaderValidation
```

## Topics

### Validation states

- [MTLShaderValidation.default](mtlshadervalidation/default.md): The default value when the property isn’t set.
- [MTLShaderValidation.disabled](mtlshadervalidation/disabled.md): Disables shader validation.
- [MTLShaderValidation.enabled](mtlshadervalidation/enabled.md): Enables shader validation.

### Initializers

- [init(rawValue:)](mtlshadervalidation/init%28rawvalue_%29.md)

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
- [MTLReadWriteTextureTier](mtlreadwritetexturetier.md): The support level for read-write texture formats.
- [MTLTransformType](mtltransformtype.md)

# MTLShaderValidation (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Indicates whether shader validation in an enabled or disabled state, or neither state.

## Declaration

```objectivec
enum MTLShaderValidation : NSInteger;
```

## Topics

### Validation states

- [MTLShaderValidationDefault](mtlshadervalidation/default.md): The default value when the property isn’t set.
- [MTLShaderValidationDisabled](mtlshadervalidation/disabled.md): Disables shader validation.
- [MTLShaderValidationEnabled](mtlshadervalidation/enabled.md): Enables shader validation.

## See Also

### Enumerations

- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLArgumentBuffersTier](mtlargumentbufferstier.md): The values that determine the limits and capabilities of argument buffers.
- [MTLLogStateError](mtllogstateerror.md)
- [MTLMathFloatingPointFunctions](mtlmathfloatingpointfunctions.md): Indicates which FP32 math functions Metal uses.
- [MTLMathMode](mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [MTLMatrixLayout](mtlmatrixlayout.md)
- [MTLReadWriteTextureTier](mtlreadwritetexturetier.md): The support level for read-write texture formats.
- [MTLTransformType](mtltransformtype.md)
