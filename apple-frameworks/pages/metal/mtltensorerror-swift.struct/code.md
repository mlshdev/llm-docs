> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorerror-swift.struct/code](https://developer.apple.com/documentation/metal/mtltensorerror-swift.struct/code)

# MTLTensorError.Code (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The error codes that Metal can raise when you create a tensor.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [MTLTensorError.Code.internalError](code/internalerror.md): An internal Metal error occurred.
- [MTLTensorError.Code.invalidDescriptor](code/invaliddescriptor.md): The tensor descriptor is invalid.
- [MTLTensorError.Code.none](code/none.md): No error occurred.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

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

- [MTLArgumentBuffersTier](../mtlargumentbufferstier.md): The values that determine the limits and capabilities of argument buffers.
- [MTLLogStateError](../mtllogstateerror.md)
- [MTLMathFloatingPointFunctions](../mtlmathfloatingpointfunctions.md): Indicates which FP32 math functions Metal uses.
- [MTLMathMode](../mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [MTLMatrixLayout](../mtlmatrixlayout.md)
- [MTLReadWriteTextureTier](../mtlreadwritetexturetier.md): The support level for read-write texture formats.
- [MTLShaderValidation](../mtlshadervalidation.md): Indicates whether shader validation in an enabled or disabled state, or neither state.
- [MTLTransformType](../mtltransformtype.md)

# MTLTensorError (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The error codes that Metal can raise when you create a tensor.

## Declaration

```objectivec
enum MTLTensorError : NSInteger;
```

## Topics

### Enumeration Cases

- [MTLTensorErrorInternalError](code/internalerror.md): An internal Metal error occurred.
- [MTLTensorErrorInvalidDescriptor](code/invaliddescriptor.md): The tensor descriptor is invalid.
- [MTLTensorErrorNone](code/none.md): No error occurred.

## See Also

### Enumerations

- [MTLArgumentBuffersTier](../mtlargumentbufferstier.md): The values that determine the limits and capabilities of argument buffers.
- [MTLLogStateError](../mtllogstateerror.md)
- [MTLMathFloatingPointFunctions](../mtlmathfloatingpointfunctions.md): Indicates which FP32 math functions Metal uses.
- [MTLMathMode](../mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [MTLMatrixLayout](../mtlmatrixlayout.md)
- [MTLReadWriteTextureTier](../mtlreadwritetexturetier.md): The support level for read-write texture formats.
- [MTLShaderValidation](../mtlshadervalidation.md): Indicates whether shader validation in an enabled or disabled state, or neither state.
- [MTLTransformType](../mtltransformtype.md)
