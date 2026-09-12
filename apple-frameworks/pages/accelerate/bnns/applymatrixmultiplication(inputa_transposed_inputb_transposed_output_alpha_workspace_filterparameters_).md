> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/applymatrixmultiplication(inputa:transposed:inputb:transposed:output:alpha:workspace:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/applymatrixmultiplication(inputa:transposed:inputb:transposed:output:alpha:workspace:filterparameters:))

# applyMatrixMultiplication(inputA:transposed:inputB:transposed:output:alpha:workspace:filterParameters:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Performs a matrix multiplication operation directly on two input matrices.

> Use the BNNSGraph API instead.

## Declaration

```swift
static func applyMatrixMultiplication(inputA: BNNSNDArrayDescriptor, transposed transposeA: Bool, inputB: BNNSNDArrayDescriptor, transposed transposeB: Bool, output: BNNSNDArrayDescriptor, alpha: Float, workspace: UnsafeMutableRawBufferPointer?, filterParameters: BNNSFilterParameters? = nil) throws
```

## Parameters

- `inputA`: The descriptor of matrix A.
- `transposeA`: A Boolean value that indicates whether the function transposes the last two dimensions of matrix A.
- `inputB`: The descriptor of matrix B.
- `transposeB`: A Boolean value that indicates whether the function transposes the last two dimensions of matrix B.
- `output`: The descriptor of the output.
- `alpha`: A scalar value that scales the result.
- `workspace`: A pointer to a memory region that the function uses as scratch space. This must have a size no less than the value that [matrixMultiplicationWorkspaceSize(inputA:transposed:inputB:transposed:output:alpha:filterParameters:)](matrixmultiplicationworkspacesize%28inputa_transposed_inputb_transposed_output_alpha_filterparameters_%29.md) returns.
- `filterParameters`: The filter runtime parameters.

## See Also

### Matrix multiplication

- [BNNSDirectApplyBroadcastMatMul(\_:\_:\_:\_:\_:\_:\_:)](../bnnsdirectapplybroadcastmatmul%28______________%29.md): Deprecated. Applies a broadcast matrix multiplication operation directly to two input matrices.
- [BNNS.BroadcastMatrixMultiplyLayer](broadcastmatrixmultiplylayer.md): Deprecated. A layer object that wraps a broadcast matrix multiply filter and manages its deinitialization.
- [BNNSLayerParametersBroadcastMatMul](../bnnslayerparametersbroadcastmatmul.md): Deprecated. A set of parameters that define a broadcast matrix multiply layer.
- [BNNSFilterCreateLayerBroadcastMatMul(\_:\_:)](../bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMulWorkspaceSize(\_:\_:\_:\_:\_:\_:\_:)](../bnnsmatmulworkspacesize%28______________%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
- [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsmatmul%28________________%29.md): Deprecated. Applies a matrix multiplication operation directly to two input matrices.
- [matrixMultiplicationWorkspaceSize(inputA:transposed:inputB:transposed:output:alpha:filterParameters:)](matrixmultiplicationworkspacesize%28inputa_transposed_inputb_transposed_output_alpha_filterparameters_%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
