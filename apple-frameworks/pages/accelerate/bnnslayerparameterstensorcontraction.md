> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterstensorcontraction](https://developer.apple.com/documentation/accelerate/bnnslayerparameterstensorcontraction)

# BNNSLayerParametersTensorContraction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a tensor-contraction layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersTensorContraction
```

## Topics

### Initializers

- [init(operation:alpha:beta:iA_desc:iB_desc:o_desc:)](bnnslayerparameterstensorcontraction/init%28operation_alpha_beta_ia_desc_ib_desc_o_desc_%29.md): Deprecated. Returns a new tensor-contraction parameters structure.

### Instance Properties

- [operation](bnnslayerparameterstensorcontraction/operation.md): Deprecated. The string that describes the operation.
- [alpha](bnnslayerparameterstensorcontraction/alpha.md): Deprecated. Scaling that the operation applies to the result.
- [beta](bnnslayerparameterstensorcontraction/beta.md): Deprecated. A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- [iA_desc](bnnslayerparameterstensorcontraction/ia_desc.md): Deprecated. The descriptor of input matrix *A*.
- [iB_desc](bnnslayerparameterstensorcontraction/ib_desc.md): Deprecated. The descriptor of input matrix *B*.
- [o_desc](bnnslayerparameterstensorcontraction/o_desc.md): Deprecated. The descriptor of the output.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Tensor contraction layers

- [BNNSFilterCreateLayerTensorContraction(\_:\_:)](bnnsfiltercreatelayertensorcontraction%28____%29.md): Deprecated. Returns a new tensor-contraction layer.

# BNNSLayerParametersTensorContraction (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a tensor-contraction layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersTensorContraction;
```

## Topics

### Instance Properties

- [operation](bnnslayerparameterstensorcontraction/operation.md): Deprecated. The string that describes the operation.
- [alpha](bnnslayerparameterstensorcontraction/alpha.md): Deprecated. Scaling that the operation applies to the result.
- [beta](bnnslayerparameterstensorcontraction/beta.md): Deprecated. A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- [iA_desc](bnnslayerparameterstensorcontraction/ia_desc.md): Deprecated. The descriptor of input matrix *A*.
- [iB_desc](bnnslayerparameterstensorcontraction/ib_desc.md): Deprecated. The descriptor of input matrix *B*.
- [o_desc](bnnslayerparameterstensorcontraction/o_desc.md): Deprecated. The descriptor of the output.

## See Also

### Tensor contraction layers

- [BNNSFilterCreateLayerTensorContraction](bnnsfiltercreatelayertensorcontraction%28____%29.md): Deprecated. Returns a new tensor-contraction layer.
