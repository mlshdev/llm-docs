> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor)

# BNNSGraph.Builder.Tensor

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A structure that represents an abstract handle to a tensor that you use within a `BNNSGraph.makeContext` closure.

## Declaration

```swift
struct Tensor<T> where T : BNNSScalar
```

## Topics

### Operators

- [.!(\_:)](tensor/'.!%28__%29.md): Conforms when `T` is `Bool`. Adds an element-wise logical not operation to the current graph.
- [.!=(\_:\_:)](tensor/'.!=%28____%29.md): Conforms when `T` conforms to `BNNSScalar` and `BNNSGraph.Builder.OperationParameter`. Adds an element-wise inequality operation to the current graph.
- [.&(\_:\_:)](tensor/'.&%28____%29.md): Conforms when `T` is `Bool`. Adds an element-wise logical and operation to the current graph.
- [.==(\_:\_:)](tensor/'.==%28____%29.md): Conforms when `T` conforms to `BNNSScalar` and `BNNSGraph.Builder.OperationParameter`. Adds an element-wise equality operation to the current graph.
- [.|(\_:\_:)](tensor/'._%28____%29-171l2.md): Conforms when `T` is `Bool`. Adds an element-wise logical or operation to the current graph.
- [.\<(\_:\_:)](tensor/'._%28____%29-6sgl6.md): Conforms when `T` conforms to `BNNSScalar` and `BNNSGraph.Builder.OperationParameter`. Adds an element-wise less than comparison operation to the current graph.
- [.^(\_:\_:)](tensor/'._%28____%29-6soc4.md): Conforms when `T` is `Bool`. Adds an element-wise logical xor operation to the current graph.
- [.\>(\_:\_:)](tensor/'._%28____%29-9vd51.md): Conforms when `T` conforms to `BNNSScalar` and `BNNSGraph.Builder.OperationParameter`. Adds an element-wise greater than comparison operation to the current graph.
- [.\<=(\_:\_:)](tensor/'._=%28____%29-20vpj.md): Conforms when `T` conforms to `BNNSScalar` and `BNNSGraph.Builder.OperationParameter`. Adds an element-wise less than or equal comparison operation to the current graph.
- [.\>=(\_:\_:)](tensor/'._=%28____%29-6gvvh.md): Conforms when `T` conforms to `BNNSScalar` and `BNNSGraph.Builder.OperationParameter`. Adds an element-wise greater than or equal comparison operation to the current graph.

### Instance Properties

- [dataType](tensor/datatype.md): The data type of the tensor.
- [description](tensor/description.md): A textual representation of this instance.
- [rank](tensor/rank.md): The rank of the tensor.
- [shape](tensor/shape.md): The shape of the tensor.
- [stride](tensor/stride.md): The stride of the tensor.

### Instance Methods

- [abs()](tensor/abs%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise absolute operation to the current graph.
- [acos()](tensor/acos%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise acos operation to the current graph.
- [acosh()](tensor/acosh%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise atan operation to the current graph.
- [argMax(axis:keepDimension:)](tensor/argmax%28axis_keepdimension_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an argmax operation to the current graph.
- [argMin(axis:keepDimension:)](tensor/argmin%28axis_keepdimension_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an argmin operation to the current graph.
- [argSort(axis:sortOrder:)](tensor/argsort%28axis_sortorder_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an argsort operation to the current graph.
- [asin()](tensor/asin%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise asin operation to the current graph.
- [asinh()](tensor/asinh%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise asinh operation to the current graph.
- [atan()](tensor/atan%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise atan operation to the current graph.
- [atanh()](tensor/atanh%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise atanh operation to the current graph.
- [batchNorm(mean:variance:epsilon:)](tensor/batchnorm%28mean_variance_epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a batch normalization operation to the current graph.
- [batchNorm(mean:variance:weight:bias:epsilon:)](tensor/batchnorm%28mean_variance_weight_bias_epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a batch normalization operation to the current graph.
- [bidirectionalLSTM(initialHiddenStates:initialCellStates:inputHiddenWeight:hiddenHiddenWeight:bias:inputHiddenWeightBack:hiddenHiddenWeightBack:biasBack:activation:recurrentActivation:cellActivation:outputSequence:)](tensor/bidirectionallstm%28initialhiddenstates_initialcellstates_inputhiddenweight_hiddenhiddenweight_bias_inputhiddenweightback_hiddenhiddenweightback_biasback_activation_recurrentactivati~364a3566.md): Conforms when `T` conforms to `BNNSScalar`. Adds a bidirectional LSTM operation to the current graph.
- [cast(to:)](tensor/cast%28to_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a cast operation to the current graph.
- [ceil()](tensor/ceil%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise ceiling operation to the current graph.
- [channelNorm(epsilon:)](tensor/channelnorm%28epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a channel normalization operation to the current graph.
- [channelNorm(weight:bias:epsilon:)](tensor/channelnorm%28weight_bias_epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a channel normalization operation to the current graph.
- [clampedReLU(alpha:beta:)](tensor/clampedrelu%28alpha_beta_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Clamped Rectified Linear Unit (ReLU) activation operation to the current graph.
- [clip(to:)](tensor/clip%28to_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise clip operation to the current graph.
- [conv(weight:strides:bias:padding:dilations:groupCount:)](tensor/conv%28weight_strides_bias_padding_dilations_groupcount_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a convolution operation to the current graph.
- [conv(weight:strides:padding:dilations:groupCount:)](tensor/conv%28weight_strides_padding_dilations_groupcount_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a convolution operation to the current graph.
- [convTranspose(weight:strides:bias:padding:outputPaddingValues:dilations:groupCount:)](tensor/convtranspose%28weight_strides_bias_padding_outputpaddingvalues_dilations_groupcount_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a transposed convolution operation to the current graph.
- [convTranspose(weight:strides:padding:outputPaddingValues:dilations:groupCount:)](tensor/convtranspose%28weight_strides_padding_outputpaddingvalues_dilations_groupcount_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a transposed convolution operation to the current graph.
- [cos()](tensor/cos%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise cos operation to the current graph.
- [cosh()](tensor/cosh%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise cosh operation to the current graph.
- [cumulativeSum(axis:)](tensor/cumulativesum%28axis_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a cumulative sum operation to the the graph.
- [elu(alpha:)](tensor/elu%28alpha_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an Exponential Linear Unit (ELU) activation operation to the current graph.
- [erf()](tensor/erf%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an Error Function (erf) activation operation to the current graph.
- [exp()](tensor/exp%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise exp operation to the current graph.
- [exp2()](tensor/exp2%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise exp operation to the current graph.
- [floor()](tensor/floor%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise floor operation to the current graph.
- [fma(y:z:)](tensor/fma%28y_z_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise fused multiply-add operation to the current graph.
- [gather(indices:axis:batchDimensionCount:)](tensor/gather%28indices_axis_batchdimensioncount_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a gather operation to the current graph.
- [gatherAlongAxis(indices:axis:)](tensor/gatheralongaxis%28indices_axis_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a gather-along-axis operation to the current graph.
- [gatherND(indices:batchDimensionCount:)](tensor/gathernd%28indices_batchdimensioncount_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a gather-nd operation to the current graph.
- [gelu()](tensor/gelu%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Gaussian Error Linear Unit (GELU) activation operation to the current graph.
- [geluSigmoidApproximation()](tensor/gelusigmoidapproximation%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Gaussian Error Linear Unit (GELU) sigmoid approximation activation operation to the current graph.
- [geluTanhApproximation()](tensor/gelutanhapproximation%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Gaussian Error Linear Unit (GELU) tanh approximation activation operation to the current graph.
- [gru(initialHiddenStates:inputHiddenWeight:hiddenHiddenWeight:bias:inputBias:direction:activation:recurrentActivation:applyResetGateAfterMatMul:outputSequence:)](tensor/gru%28initialhiddenstates_inputhiddenweight_hiddenhiddenweight_bias_inputbias_direction_activation_recurrentactivation_applyresetgateaftermatmul_outputsequence_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a GRU operation to the current graph.
- [hardSigmoid(alpha:beta:)](tensor/hardsigmoid%28alpha_beta_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a hard sigmoid activation operation to the current graph.
- [hardSwish()](tensor/hardswish%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a hard swish activation operation to the current graph.
- [instanceNorm(epsilon:)](tensor/instancenorm%28epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a instance normalization operation to the current graph.
- [instanceNorm(weight:bias:epsilon:)](tensor/instancenorm%28weight_bias_epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a instance normalization operation to the current graph.
- [l1Norm(axes:keepDimensions:)](tensor/l1norm%28axes_keepdimensions_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a sum-of-absolutes reduction operation along the given axis operation to the current graph.
- [l2Norm(axes:keepDimensions:)](tensor/l2norm%28axes_keepdimensions_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Euclidean-norm reduction operation along the given axis operation to the current graph.
- [l2Norm(epsilon:)](tensor/l2norm%28epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an L2 spatial normalization operation to the current graph.
- [layerNorm(axes:epsilon:)](tensor/layernorm%28axes_epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a layer normalization operation to the current graph.
- [layerNorm(weight:bias:axes:epsilon:)](tensor/layernorm%28weight_bias_axes_epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a layer normalization operation to the current graph.
- [leakyReLU(alpha:)](tensor/leakyrelu%28alpha_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Leaky Rectified Linear Unit (ReLU) activation operation to the current graph.
- [linear(weight:)](tensor/linear%28weight_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a linear transformation operation to the current graph.
- [linear(weight:bias:)](tensor/linear%28weight_bias_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a linear transformation operation to the current graph.
- [log(epsilon:)](tensor/log%28epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise log operation to the current graph.
- [logSoftmax(axis:)](tensor/logsoftmax%28axis_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a log-softmax along the given axis operation to the current graph.
- [logSum(axes:keepDimensions:)](tensor/logsum%28axes_keepdimensions_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a log-sum reduction operation along the given axis operation to the current graph.
- [logSumExp(axes:keepDimensions:)](tensor/logsumexp%28axes_keepdimensions_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a log-sum-exp reduction operation along the given axis operation to the current graph.
- [lstm(initialHiddenStates:initialCellStates:inputHiddenWeight:hiddenHiddenWeight:bias:direction:activation:recurrentActivation:cellActivation:outputSequence:)](tensor/lstm%28initialhiddenstates_initialcellstates_inputhiddenweight_hiddenhiddenweight_bias_direction_activation_recurrentactivation_cellactivation_outputsequence_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an LSTM operation to the current graph.
- [matmul(transpose:other:transposeOther:)](tensor/matmul%28transpose_other_transposeother_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a matrix-matrix multiplication operation to the current graph.
- [matmul(transpose:other:transposeOther:bias:)](tensor/matmul%28transpose_other_transposeother_bias_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a matrix-matrix multiplication operation to the current graph.
- [max(y:)](tensor/max%28y_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise maximum operation to the current graph.
- [maximum(axes:keepDimensions:)](tensor/maximum%28axes_keepdimensions_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a maximum reduction operation along the given axis operation to the current graph.
- [mean(axes:keepDimensions:)](tensor/mean%28axes_keepdimensions_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a mean reduction operation along the given axis operation to the current graph.
- [min(y:)](tensor/min%28y_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise minimum operation to the current graph.
- [minimum(axes:keepDimensions:)](tensor/minimum%28axes_keepdimensions_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a minimum reduction operation along the given axis operation to the current graph.
- [pad(\_:padding:)](tensor/pad%28__padding_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a padding operation to the graph
- [pooling(\_:kernelSize:strides:padding:ceilingMode:)](tensor/pooling%28__kernelsize_strides_padding_ceilingmode_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a pooling operation to the current graph.
- [pow(y:)](tensor/pow%28y_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise power operation to the current graph.
- [prelu(alpha:)](tensor/prelu%28alpha_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Parametric ReLU (PReLU) activation operation to the current graph.
- [product(axes:keepDimensions:)](tensor/product%28axes_keepdimensions_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a product reduction operation along the given axis operation to the current graph.
- [reciprocal(epsilon:)](tensor/reciprocal%28epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise reciprocal operation to the current graph.
- [relu()](tensor/relu%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Rectified Linear Unit (ReLU) activation operation to the current graph.
- [relu6()](tensor/relu6%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Rectified Linear Unit 6 (ReLU6) activation operation to the current graph.
- [reshape(to:)](tensor/reshape%28to_%29-5oniw.md): Conforms when `T` conforms to `BNNSScalar`. Adds a dynamic reshape operation to the current graph.
- [reshape(to:)](tensor/reshape%28to_%29-9stle.md): Conforms when `T` conforms to `BNNSScalar`. Adds a reshape operation to the current graph.
- [rmsNorm(scale:epsilon:)](tensor/rmsnorm%28scale_epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an RMS spatial normalization operation to the current graph.
- [rnn(initialHiddenStates:inputHiddenWeight:hiddenHiddenWeight:bias:direction:activation:outputSequence:)](tensor/rnn%28initialhiddenstates_inputhiddenweight_hiddenhiddenweight_bias_direction_activation_outputsequence_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an RNN operation to the current graph.
- [round()](tensor/round%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise round operation to the current graph.
- [rsqrt(epsilon:)](tensor/rsqrt%28epsilon_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise rsqrt operation to the current graph.
- [scaledTanh(alpha:beta:)](tensor/scaledtanh%28alpha_beta_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a scaled tanh activation operation to the current graph.
- [scatter(updates:indices:mode:axis:)](tensor/scatter%28updates_indices_mode_axis_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a scatter operation to the current graph.
- [scatterAlongAxis(updates:indices:mode:axis:)](tensor/scatteralongaxis%28updates_indices_mode_axis_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a scatter-along-axis operation to the current graph
- [scatterND(updates:indices:mode:)](tensor/scatternd%28updates_indices_mode_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a scatter-nd operation to the current graph.
- [select(\_:\_:)](tensor/select%28____%29-1fiqe.md): Conforms when `T` is `Bool`. Adds a tensor-tensor select operation to the current graph.
- [select(\_:\_:)](tensor/select%28____%29-3ha1f.md): Conforms when `T` is `Bool`. Adds a tensor-scalar select operation to the current graph.
- [select(\_:\_:)](tensor/select%28____%29-77itm.md): Conforms when `T` is `Bool`. Adds a scalar-tensor select operation to the current graph.
- [sigmoid()](tensor/sigmoid%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a sigmoid activation operation to the current graph.
- [silu()](tensor/silu%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Sigmoid Linear Unit (SiLU) activation operation to the current graph.
- [sin()](tensor/sin%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise sin operation to the current graph.
- [sinh()](tensor/sinh%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise sinh operation to the current graph.
- [softmax(axis:)](tensor/softmax%28axis_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a softmax along the given axis operation to the current graph.
- [softplus(alpha:)](tensor/softplus%28alpha_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a softplus activation operation to the current graph.
- [softsign()](tensor/softsign%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a softsign activation operation to the current graph.
- [sqrt()](tensor/sqrt%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise sqrt operation to the current graph.
- [squeeze(axis:)](tensor/squeeze%28axis_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a squeeze operation in the graph.
- [sum(axes:keepDimensions:)](tensor/sum%28axes_keepdimensions_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a sum reduction operation along the given axis operation to the current graph.
- [sumOfSquares(axes:keepDimensions:)](tensor/sumofsquares%28axes_keepdimensions_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a sum-of-squares reduction operation along the given axis operation to the current graph.
- [tan()](tensor/tan%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise tan operation to the current graph.
- [tanh()](tensor/tanh%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise hyperbolic tangent operation to the current graph.
- [tensorShape()](tensor/tensorshape%28%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a shape operation to the current graph.
- [threshold(to:)](tensor/threshold%28to_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an element-wise round operation to the current graph.
- [thresholdedReLU(alpha:)](tensor/thresholdedrelu%28alpha_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a Thresholded Leaky Rectified Linear Unit (ReLU) activation operation to the current graph.
- [topK(\_:axis:findLargest:)](tensor/topk%28__axis_findlargest_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a top-k operation to the current graph.
- [transpose(axes:)](tensor/transpose%28axes_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a transpose operation to the current graph.
- [unsqueeze(axis:)](tensor/unsqueeze%28axis_%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds an unsqueeze operation in the graph.

### Subscripts

- [subscript(\_:)](tensor/subscript%28__%29.md): Conforms when `T` conforms to `BNNSScalar`. Adds a slice operation to the current graph.

### Default Implementations

- [OperationParameter Implementations](tensor/operationparameter-implementations.md)

## Relationships

### Conforms To

- [BNNSGraph.Builder.OperationParameter](operationparameter.md)
- [BNNSGraph.TensorDescriptor](../tensordescriptor.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Building graphs in Swift

- [makeContext(options:\_:)](../makecontext%28options___%29.md): Returns a new context that wraps a graph object that the given closure defines.
- [BNNSGraph.Builder](../builder.md): A structure thats provides a closure you can use to define the arguments and operations of a BNNS Graph.
- [Supporting real-time ML inference on the CPU](../../supporting-real-time-ml-inference-on-the-cpu.md): Add real-time digital signal processing to apps like Logic Pro X and GarageBand with the BNNS Graph API.
