> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentbufferstier](https://developer.apple.com/documentation/metal/mtlargumentbufferstier)

# MTLArgumentBuffersTier (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The values that determine the limits and capabilities of argument buffers.

## Declaration

```swift
enum MTLArgumentBuffersTier
```

<a id="overview"></a>

## Overview

See [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md) for more information about argument buffer tiers, limits, and capabilities. Query the [argumentBuffersSupport](mtldevice/argumentbufferssupport.md) property to determine argument buffer tier support for a given device.

## Topics

### Enumeration cases

- [MTLArgumentBuffersTier.tier1](mtlargumentbufferstier/tier1.md): Support for tier 1 argument buffers.
- [MTLArgumentBuffersTier.tier2](mtlargumentbufferstier/tier2.md): Support for tier 2 argument buffers.

### Initializers

- [init(rawValue:)](mtlargumentbufferstier/init%28rawvalue_%29.md)

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
- [MTLLogStateError](mtllogstateerror.md)
- [MTLMathFloatingPointFunctions](mtlmathfloatingpointfunctions.md): Indicates which FP32 math functions Metal uses.
- [MTLMathMode](mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [MTLMatrixLayout](mtlmatrixlayout.md)
- [MTLReadWriteTextureTier](mtlreadwritetexturetier.md): The support level for read-write texture formats.
- [MTLShaderValidation](mtlshadervalidation.md): Indicates whether shader validation in an enabled or disabled state, or neither state.
- [MTLTransformType](mtltransformtype.md)

# MTLArgumentBuffersTier (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The values that determine the limits and capabilities of argument buffers.

## Declaration

```objectivec
enum MTLArgumentBuffersTier : NSUInteger;
```

<a id="overview"></a>

## Overview

See [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md) for more information about argument buffer tiers, limits, and capabilities. Query the [argumentBuffersSupport](mtldevice/argumentbufferssupport.md) property to determine argument buffer tier support for a given device.

## Topics

### Enumeration cases

- [MTLArgumentBuffersTier1](mtlargumentbufferstier/tier1.md): Support for tier 1 argument buffers.
- [MTLArgumentBuffersTier2](mtlargumentbufferstier/tier2.md): Support for tier 2 argument buffers.

## See Also

### Enumerations

- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLLogStateError](mtllogstateerror.md)
- [MTLMathFloatingPointFunctions](mtlmathfloatingpointfunctions.md): Indicates which FP32 math functions Metal uses.
- [MTLMathMode](mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [MTLMatrixLayout](mtlmatrixlayout.md)
- [MTLReadWriteTextureTier](mtlreadwritetexturetier.md): The support level for read-write texture formats.
- [MTLShaderValidation](mtlshadervalidation.md): Indicates whether shader validation in an enabled or disabled state, or neither state.
- [MTLTransformType](mtltransformtype.md)
