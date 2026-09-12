> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsnormtype](https://developer.apple.com/documentation/accelerate/bnnsnormtype)

# BNNSNormType (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe norm types.

## Declaration

```swift
struct BNNSNormType
```

## Topics

### Constants

- [init(\_:)](bnnsnormtype/init%28__%29.md): Creates a new instance with the specified raw value.
- [init(rawValue:)](bnnsnormtype/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [rawValue](bnnsnormtype/rawvalue.md): The corresponding value of the raw type.
- [BNNSL2Norm](bnnsl2norm.md): A constant that represents the L2 norm.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Compute norm functions

- [computeNorm(input:output:axes:)](bnns/computenorm%28input_output_axes_%29.md): Deprecated. Computes the Euclidean norm and writes the result to the output tensor.
- [computeNormBackward(input:output:axes:outputGradient:generatingInputGradient:)](bnns/computenormbackward%28input_output_axes_outputgradient_generatinginputgradient_%29.md): Deprecated. Backpropogates gradients for the compute norm function.
- [BNNSComputeNorm(\_:\_:\_:\_:)](bnnscomputenorm%28________%29.md): Deprecated. Computes the specified norm over an entire tensor or the specified axes.
- [BNNSComputeNormBackward(\_:\_:\_:\_:\_:\_:)](bnnscomputenormbackward%28____________%29.md): Deprecated. Backpropogates gradients for the compute norm function.

# BNNSNormType (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe norm types.

## Declaration

```objectivec
typedef enum { ... } BNNSNormType;
```

## Topics

### Constants

- [BNNSL2Norm](bnnsl2norm.md): A constant that represents the L2 norm.

## See Also

### Compute norm functions

- [BNNSComputeNorm](bnnscomputenorm%28________%29.md): Deprecated. Computes the specified norm over an entire tensor or the specified axes.
- [BNNSComputeNormBackward](bnnscomputenormbackward%28____________%29.md): Deprecated. Backpropogates gradients for the compute norm function.
