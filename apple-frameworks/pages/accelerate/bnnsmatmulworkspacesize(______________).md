> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsmatmulworkspacesize(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsmatmulworkspacesize(_:_:_:_:_:_:_:))

# BNNSMatMulWorkspaceSize(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Returns the workspace size that a matrix multiply operation requires.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSMatMulWorkspaceSize(_ transA: Bool, _ transB: Bool, _ alpha: Float, _ inputA: UnsafePointer<BNNSNDArrayDescriptor>, _ inputB: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int
```

## Parameters

- `transA`: A Boolean value that specifies whether the operation should treat `inputA` as transposed.
- `transB`: A Boolean value that specifies whether the operation should treat `inputB` as transposed.
- `alpha`: A value that the operation uses to scale the result.
- `inputA`: A pointer to the `inputA` matrix descriptor.
- `inputB`: A pointer to the `inputB` matrix descriptor.
- `output`: A pointer to the output matrix descriptor.
- `filter_params`: The filter runtime parameters.

<a id="return-value"></a>

## Return Value

The required allocation size for workspace paramter to [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmul%28________________%29.md), in bytes.

## See Also

### Matrix multiplication

- [BNNSDirectApplyBroadcastMatMul(\_:\_:\_:\_:\_:\_:\_:)](bnnsdirectapplybroadcastmatmul%28______________%29.md): Deprecated. Applies a broadcast matrix multiplication operation directly to two input matrices.
- [BNNS.BroadcastMatrixMultiplyLayer](bnns/broadcastmatrixmultiplylayer.md): Deprecated. A layer object that wraps a broadcast matrix multiply filter and manages its deinitialization.
- [BNNSLayerParametersBroadcastMatMul](bnnslayerparametersbroadcastmatmul.md): Deprecated. A set of parameters that define a broadcast matrix multiply layer.
- [BNNSFilterCreateLayerBroadcastMatMul(\_:\_:)](bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmul%28________________%29.md): Deprecated. Applies a matrix multiplication operation directly to two input matrices.
- [applyMatrixMultiplication(inputA:transposed:inputB:transposed:output:alpha:workspace:filterParameters:)](bnns/applymatrixmultiplication%28inputa_transposed_inputb_transposed_output_alpha_workspace_filterparameters_%29.md): Deprecated. Performs a matrix multiplication operation directly on two input matrices.
- [matrixMultiplicationWorkspaceSize(inputA:transposed:inputB:transposed:output:alpha:filterParameters:)](bnns/matrixmultiplicationworkspacesize%28inputa_transposed_inputb_transposed_output_alpha_filterparameters_%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.

# BNNSMatMulWorkspaceSize (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Returns the workspace size that a matrix multiply operation requires.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
ssize_t BNNSMatMulWorkspaceSize(const _Bool transA, const _Bool transB, const float alpha, const BNNSNDArrayDescriptor *inputA, const BNNSNDArrayDescriptor *inputB, const BNNSNDArrayDescriptor *output, const BNNSFilterParameters *filter_params);
```

## Parameters

- `transA`: A Boolean value that specifies whether the operation should treat `inputA` as transposed.
- `transB`: A Boolean value that specifies whether the operation should treat `inputB` as transposed.
- `alpha`: A value that the operation uses to scale the result.
- `inputA`: A pointer to the `inputA` matrix descriptor.
- `inputB`: A pointer to the `inputB` matrix descriptor.
- `output`: A pointer to the output matrix descriptor.
- `filter_params`: The filter runtime parameters.

<a id="return-value"></a>

## Return Value

The required allocation size for workspace paramter to [BNNSMatMul](bnnsmatmul%28________________%29.md), in bytes.

## See Also

### Matrix multiplication

- [BNNSDirectApplyBroadcastMatMul](bnnsdirectapplybroadcastmatmul%28______________%29.md): Deprecated. Applies a broadcast matrix multiplication operation directly to two input matrices.
- [BNNSLayerParametersBroadcastMatMul](bnnslayerparametersbroadcastmatmul.md): Deprecated. A set of parameters that define a broadcast matrix multiply layer.
- [BNNSFilterCreateLayerBroadcastMatMul](bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMul](bnnsmatmul%28________________%29.md): Deprecated. Applies a matrix multiplication operation directly to two input matrices.
