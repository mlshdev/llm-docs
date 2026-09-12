> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdirectapplybroadcastmatmul(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsdirectapplybroadcastmatmul(_:_:_:_:_:_:_:))

# BNNSDirectApplyBroadcastMatMul(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 11.0+ (deprecated in 13.0) · tvOS 14.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 7.0+ (deprecated in 9.0)

Applies a broadcast matrix multiplication operation directly to two input matrices.

> Use [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmul%28________________%29.md) instead.

## Declaration

```swift
func BNNSDirectApplyBroadcastMatMul(_ transA: Bool, _ transB: Bool, _ alpha: Float, _ inputA: UnsafePointer<BNNSNDArrayDescriptor>, _ inputB: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?)
```

## Parameters

- `transA`: A Boolean value that transposes the last two dimensions of matrix *A*.
- `transB`: A Boolean value that transposes the last two dimensions of matrix *B*.
- `alpha`: A value to scale the result.
- `inputA`: The descriptor of matrix *A*.
- `inputB`: The descriptor of matrix *B*.
- `output`: The descriptor of the output.
- `filter_params`: The filter runtime parameters.

## See Also

### Matrix multiplication

- [BNNS.BroadcastMatrixMultiplyLayer](bnns/broadcastmatrixmultiplylayer.md): Deprecated. A layer object that wraps a broadcast matrix multiply filter and manages its deinitialization.
- [BNNSLayerParametersBroadcastMatMul](bnnslayerparametersbroadcastmatmul.md): Deprecated. A set of parameters that define a broadcast matrix multiply layer.
- [BNNSFilterCreateLayerBroadcastMatMul(\_:\_:)](bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMulWorkspaceSize(\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmulworkspacesize%28______________%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
- [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmul%28________________%29.md): Deprecated. Applies a matrix multiplication operation directly to two input matrices.
- [applyMatrixMultiplication(inputA:transposed:inputB:transposed:output:alpha:workspace:filterParameters:)](bnns/applymatrixmultiplication%28inputa_transposed_inputb_transposed_output_alpha_workspace_filterparameters_%29.md): Deprecated. Performs a matrix multiplication operation directly on two input matrices.
- [matrixMultiplicationWorkspaceSize(inputA:transposed:inputB:transposed:output:alpha:filterParameters:)](bnns/matrixmultiplicationworkspacesize%28inputa_transposed_inputb_transposed_output_alpha_filterparameters_%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.

# BNNSDirectApplyBroadcastMatMul (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 11.0+ (deprecated in 13.0) · tvOS 14.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 7.0+ (deprecated in 9.0)

Applies a broadcast matrix multiplication operation directly to two input matrices.

> Use [BNNSMatMul](bnnsmatmul%28________________%29.md) instead.

## Declaration

```objectivec
void BNNSDirectApplyBroadcastMatMul(const _Bool transA, const _Bool transB, const float alpha, const BNNSNDArrayDescriptor *inputA, const BNNSNDArrayDescriptor *inputB, const BNNSNDArrayDescriptor *output, const BNNSFilterParameters *filter_params);
```

## Parameters

- `transA`: A Boolean value that transposes the last two dimensions of matrix *A*.
- `transB`: A Boolean value that transposes the last two dimensions of matrix *B*.
- `alpha`: A value to scale the result.
- `inputA`: The descriptor of matrix *A*.
- `inputB`: The descriptor of matrix *B*.
- `output`: The descriptor of the output.
- `filter_params`: The filter runtime parameters.

## See Also

### Matrix multiplication

- [BNNSLayerParametersBroadcastMatMul](bnnslayerparametersbroadcastmatmul.md): Deprecated. A set of parameters that define a broadcast matrix multiply layer.
- [BNNSFilterCreateLayerBroadcastMatMul](bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMulWorkspaceSize](bnnsmatmulworkspacesize%28______________%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
- [BNNSMatMul](bnnsmatmul%28________________%29.md): Deprecated. Applies a matrix multiplication operation directly to two input matrices.
