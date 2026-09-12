> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/broadcastmatrixmultiplylayer](https://developer.apple.com/documentation/accelerate/bnns/broadcastmatrixmultiplylayer)

# BNNS.BroadcastMatrixMultiplyLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a broadcast matrix multiply filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class BroadcastMatrixMultiplyLayer
```

## Topics

### Creating a Broadcast Matrix Multiplication Layer

- [init(inputA:transposed:isWeights:inputB:transposed:isWeights:output:alpha:accumulatesToOutput:isQuadratic:filterParameters:)](broadcastmatrixmultiplylayer/init%28inputa_transposed_isweights_inputb_transposed_isweights_output_alpha_accumulatestooutput_isquadratic_filterparameters_%29.md): Deprecated. Returns a new broadcast matrix multiply layer.

### Applying a Broadcast Matrix Multiplication Layer

- [applyBackward(batchSize:inputA:inputB:output:outputGradient:generatingInputAGradient:generatingInputBGradient:)](broadcastmatrixmultiplylayer/applybackward%28batchsize_inputa_inputb_output_outputgradient_generatinginputagradient_generatinginputbgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.

### Instance Methods

- [apply(batchSize:inputA:inputB:output:)](broadcastmatrixmultiplylayer/apply%28batchsize_inputa_inputb_output_%29.md): Deprecated.

## Relationships

### Inherits From

- [BNNS.Layer](layer.md)

## See Also

### Matrix multiplication

- [BNNSDirectApplyBroadcastMatMul(\_:\_:\_:\_:\_:\_:\_:)](../bnnsdirectapplybroadcastmatmul%28______________%29.md): Deprecated. Applies a broadcast matrix multiplication operation directly to two input matrices.
- [BNNSLayerParametersBroadcastMatMul](../bnnslayerparametersbroadcastmatmul.md): Deprecated. A set of parameters that define a broadcast matrix multiply layer.
- [BNNSFilterCreateLayerBroadcastMatMul(\_:\_:)](../bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMulWorkspaceSize(\_:\_:\_:\_:\_:\_:\_:)](../bnnsmatmulworkspacesize%28______________%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
- [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsmatmul%28________________%29.md): Deprecated. Applies a matrix multiplication operation directly to two input matrices.
- [applyMatrixMultiplication(inputA:transposed:inputB:transposed:output:alpha:workspace:filterParameters:)](applymatrixmultiplication%28inputa_transposed_inputb_transposed_output_alpha_workspace_filterparameters_%29.md): Deprecated. Performs a matrix multiplication operation directly on two input matrices.
- [matrixMultiplicationWorkspaceSize(inputA:transposed:inputB:transposed:output:alpha:filterParameters:)](matrixmultiplicationworkspacesize%28inputa_transposed_inputb_transposed_output_alpha_filterparameters_%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
