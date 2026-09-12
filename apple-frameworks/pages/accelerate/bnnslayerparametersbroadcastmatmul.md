> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersbroadcastmatmul](https://developer.apple.com/documentation/accelerate/bnnslayerparametersbroadcastmatmul)

# BNNSLayerParametersBroadcastMatMul (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A set of parameters that define a broadcast matrix multiply layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersBroadcastMatMul
```

## Topics

### Initializers

- [init(alpha:beta:transA:transB:quadratic:a_is_weights:b_is_weights:iA_desc:iB_desc:o_desc:)](bnnslayerparametersbroadcastmatmul/init%28alpha_beta_transa_transb_quadratic_a_is_weights_b_is_weights_ia_desc_ib_desc_o_desc_%29.md): Deprecated. Returns a new broadcast matrix multiply layer parameters structure from the specified parameters.
- [init()](bnnslayerparametersbroadcastmatmul/init%28%29.md): Deprecated. Returns a new broadcast matrix multiply layer parameters structure.

### Instance Properties

- [alpha](bnnslayerparametersbroadcastmatmul/alpha.md): Deprecated. A value to scale the result.
- [beta](bnnslayerparametersbroadcastmatmul/beta.md): Deprecated. A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- [transA](bnnslayerparametersbroadcastmatmul/transa.md): Deprecated. A Boolean value that transposes the last two dimensions of matrix *A*.
- [transB](bnnslayerparametersbroadcastmatmul/transb.md): Deprecated. A Boolean value that transposes the last two dimensions of matrix *B*.
- [quadratic](bnnslayerparametersbroadcastmatmul/quadratic.md): Deprecated. A Boolean value that determines whether the operation multiplies matrix *A* by itself.
- [a_is_weights](bnnslayerparametersbroadcastmatmul/a_is_weights.md): Deprecated. A Boolean value that determines whether to treat matrix *A* as weights.
- [b_is_weights](bnnslayerparametersbroadcastmatmul/b_is_weights.md): Deprecated. A Boolean value that determines whether to treat matrix *B* as weights.
- [iA_desc](bnnslayerparametersbroadcastmatmul/ia_desc.md): Deprecated. The descriptor of matrix *A*.
- [iB_desc](bnnslayerparametersbroadcastmatmul/ib_desc.md): Deprecated. The descriptor of matrix *B*.
- [o_desc](bnnslayerparametersbroadcastmatmul/o_desc.md): Deprecated. The descriptor of the output.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Matrix multiplication

- [BNNSDirectApplyBroadcastMatMul(\_:\_:\_:\_:\_:\_:\_:)](bnnsdirectapplybroadcastmatmul%28______________%29.md): Deprecated. Applies a broadcast matrix multiplication operation directly to two input matrices.
- [BNNS.BroadcastMatrixMultiplyLayer](bnns/broadcastmatrixmultiplylayer.md): Deprecated. A layer object that wraps a broadcast matrix multiply filter and manages its deinitialization.
- [BNNSFilterCreateLayerBroadcastMatMul(\_:\_:)](bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMulWorkspaceSize(\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmulworkspacesize%28______________%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
- [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmul%28________________%29.md): Deprecated. Applies a matrix multiplication operation directly to two input matrices.
- [applyMatrixMultiplication(inputA:transposed:inputB:transposed:output:alpha:workspace:filterParameters:)](bnns/applymatrixmultiplication%28inputa_transposed_inputb_transposed_output_alpha_workspace_filterparameters_%29.md): Deprecated. Performs a matrix multiplication operation directly on two input matrices.
- [matrixMultiplicationWorkspaceSize(inputA:transposed:inputB:transposed:output:alpha:filterParameters:)](bnns/matrixmultiplicationworkspacesize%28inputa_transposed_inputb_transposed_output_alpha_filterparameters_%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.

# BNNSLayerParametersBroadcastMatMul (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of parameters that define a broadcast matrix multiply layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersBroadcastMatMul;
```

## Topics

### Instance Properties

- [alpha](bnnslayerparametersbroadcastmatmul/alpha.md): Deprecated. A value to scale the result.
- [beta](bnnslayerparametersbroadcastmatmul/beta.md): Deprecated. A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- [transA](bnnslayerparametersbroadcastmatmul/transa.md): Deprecated. A Boolean value that transposes the last two dimensions of matrix *A*.
- [transB](bnnslayerparametersbroadcastmatmul/transb.md): Deprecated. A Boolean value that transposes the last two dimensions of matrix *B*.
- [quadratic](bnnslayerparametersbroadcastmatmul/quadratic.md): Deprecated. A Boolean value that determines whether the operation multiplies matrix *A* by itself.
- [a_is_weights](bnnslayerparametersbroadcastmatmul/a_is_weights.md): Deprecated. A Boolean value that determines whether to treat matrix *A* as weights.
- [b_is_weights](bnnslayerparametersbroadcastmatmul/b_is_weights.md): Deprecated. A Boolean value that determines whether to treat matrix *B* as weights.
- [iA_desc](bnnslayerparametersbroadcastmatmul/ia_desc.md): Deprecated. The descriptor of matrix *A*.
- [iB_desc](bnnslayerparametersbroadcastmatmul/ib_desc.md): Deprecated. The descriptor of matrix *B*.
- [o_desc](bnnslayerparametersbroadcastmatmul/o_desc.md): Deprecated. The descriptor of the output.

## See Also

### Matrix multiplication

- [BNNSDirectApplyBroadcastMatMul](bnnsdirectapplybroadcastmatmul%28______________%29.md): Deprecated. Applies a broadcast matrix multiplication operation directly to two input matrices.
- [BNNSFilterCreateLayerBroadcastMatMul](bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMulWorkspaceSize](bnnsmatmulworkspacesize%28______________%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
- [BNNSMatMul](bnnsmatmul%28________________%29.md): Deprecated. Applies a matrix multiplication operation directly to two input matrices.
