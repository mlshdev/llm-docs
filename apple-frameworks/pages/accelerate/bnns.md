> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns](https://developer.apple.com/documentation/accelerate/bnns)

# BNNS

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An enumeration that acts as a namespace for Swift overlays to BNNS.

## Declaration

```swift
enum BNNS
```

## Topics

### Base Classes

- [BNNS.Layer](bnns/layer.md): Deprecated. The base class for layer objects that wrap filters and manage deinitialization.
- [BNNS.UnaryLayer](bnns/unarylayer.md): Deprecated. The base class for layers that accept a single input.
- [BNNS.BinaryLayer](bnns/binarylayer.md): Deprecated. The base class for layers that accept two inputs.

### Classes

- [BNNS.ActivationLayer](bnns/activationlayer.md): Deprecated. A layer object that wraps an activation filter and manages its deinitialization.
- [BNNS.BinaryArithmeticLayer](bnns/binaryarithmeticlayer.md): Deprecated. A layer object that wraps a binary arithmetic filter and manages its deinitialization.
- [BNNS.BroadcastMatrixMultiplyLayer](bnns/broadcastmatrixmultiplylayer.md): Deprecated. A layer object that wraps a broadcast matrix multiply filter and manages its deinitialization.
- [BNNS.ConvolutionLayer](bnns/convolutionlayer.md): Deprecated. A layer object that wraps a convolution filter and manages its deinitialization.
- [BNNS.CropResizeLayer](bnns/cropresizelayer.md): Deprecated. A layer object that wraps a crop-resize filter and manages its deinitialization.
- [BNNS.DropoutLayer](bnns/dropoutlayer.md): Deprecated. A layer object that wraps a dropout filter and manages its deinitialization.
- [BNNS.EmbeddingLayer](bnns/embeddinglayer.md): Deprecated. A layer object that wraps an embedding filter and manages its deinitialization.
- [BNNS.FullyConnectedLayer](bnns/fullyconnectedlayer.md): Deprecated. A layer object that wraps a fully connected filter and manages its deinitialization.
- [BNNS.FusedConvolutionNormalizationLayer](bnns/fusedconvolutionnormalizationlayer.md): Deprecated. A layer object that wraps a fused, convolution normalization layer and manages its deinitialization.
- [BNNS.FusedFullyConnectedNormalizationLayer](bnns/fusedfullyconnectednormalizationlayer.md): Deprecated. A layer object that wraps a fused, fully connected normalization layer and manages its deinitialization.
- [BNNS.FusedLayer](bnns/fusedlayer.md): Deprecated. The base class for fused convolution-normalization and fully connected-normalization layers.
- [BNNS.FusedParametersLayer](bnns/fusedparameterslayer.md): Deprecated. A layer object that wraps a fused layer and manages its deinitialization.
- [BNNS.GramLayer](bnns/gramlayer.md): Deprecated. A layer object that wraps a Gram matrix filter and manages its deinitialization.
- [BNNS.LossLayer](bnns/losslayer.md): Deprecated. A layer object that wraps a loss filter and manages its deinitialization.
- [BNNS.NormalizationLayer](bnns/normalizationlayer.md): Deprecated. A layer object that wraps a normalization filter and manages its deinitialization.
- [BNNS.PaddingLayer](bnns/paddinglayer.md): Deprecated. A layer object that wraps a padding filter and manages its deinitialization.
- [BNNS.PermuteLayer](bnns/permutelayer.md): Deprecated. A layer object that wraps a permute filter and manages its deinitialization.
- [BNNS.PoolingLayer](bnns/poolinglayer.md): Deprecated. A layer object that wraps a pooling filter and manages its deinitialization.
- [BNNS.RandomGenerator](bnns/randomgenerator.md): A random number generator.
- [BNNS.RandomGeneratorState](bnns/randomgeneratorstate.md): An opaque object that contains the state of a random number generator.
- [BNNS.ReductionLayer](bnns/reductionlayer.md): Deprecated. A layer object that wraps a reduction filter and manages its deinitialization.
- [BNNS.ResizeLayer](bnns/resizelayer.md): Deprecated. A layer object that wraps a resize filter and manages its deinitialization.
- [BNNS.TernaryArithmeticLayer](bnns/ternaryarithmeticlayer.md): Deprecated. A layer object that wraps a ternary arithmetic filter and manages its deinitialization.
- [BNNS.UnaryArithmeticLayer](bnns/unaryarithmeticlayer.md): Deprecated. A layer object that wraps a unary arithmetic filter and manages its deinitialization.

### Structures

- [BNNS.AdamOptimizer](bnns/adamoptimizer.md): Deprecated. An optimizer that uses the Adam optimization algorithm.
- [BNNS.AdamWOptimizer](bnns/adamwoptimizer.md): Deprecated. An optimizer that uses the AdamW optimization algorithm.
- [BNNS.FusedBinaryArithmeticParameters](bnns/fusedbinaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused binary arithmetic layer.
- [BNNS.FusedConvolutionParameters](bnns/fusedconvolutionparameters.md): Deprecated. A structure that contains the parameters for a fused convolution layer.
- [BNNS.FusedDequantizationParameters](bnns/fuseddequantizationparameters.md): Deprecated. A structure that contains the parameters for a fused dequantization layer.
- [BNNS.FusedFullyConnectedParameters](bnns/fusedfullyconnectedparameters.md): Deprecated. A structure that contains the parameters for a fused fully connected layer.
- [BNNS.FusedNormalizationParameters](bnns/fusednormalizationparameters.md): Deprecated. A structure that contains the parameters for a fused normalization layer.
- [BNNS.FusedQuantizationParameters](bnns/fusedquantizationparameters.md): Deprecated. A structure that contains the parameters for a fused quantization layer.
- [BNNS.FusedTernaryArithmeticParameters](bnns/fusedternaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused ternary arithmetic layer.
- [BNNS.FusedUnaryArithmeticParameters](bnns/fusedunaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused unary arithmetic layer.
- [BNNS.NearestNeighbors](bnns/nearestneighbors.md): A structure that calculates k-nearest neighbors.
- [BNNS.Norm](bnns/norm.md): Deprecated. Constants that describe norm types.
- [BNNS.RMSPropOptimizer](bnns/rmspropoptimizer.md): Deprecated. An optimizer that uses the root mean square propagation (RMSProp) optimization method.
- [BNNS.RelationalOperator](bnns/relationaloperator.md): Deprecated. Constants that describe relational operations.
- [BNNS.SGDMomentumOptimizer](bnns/sgdmomentumoptimizer.md): Deprecated. An optimizer that uses the stochastic gradient descent (SGD) with the momentum optimization method.
- [BNNS.SparseParameters](bnns/sparseparameters.md): Deprecated. A data structure that provides a hint to the sparsity function.

### Type Methods

- [applyActivation(activation:axes:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_axes_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies an activation function on the specified axes.
- [applyActivation(activation:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.
- [applyInTopK(k:input:testIndices:output:axis:batchSize:filterParameters:)](bnns/applyintopk%28k_input_testindices_output_axis_batchsize_filterparameters_%29.md): Applies an in-top-k filter directly to an input.
- [applyMatrixMultiplication(inputA:transposed:inputB:transposed:output:alpha:workspace:filterParameters:)](bnns/applymatrixmultiplication%28inputa_transposed_inputb_transposed_output_alpha_workspace_filterparameters_%29.md): Deprecated. Performs a matrix multiplication operation directly on two input matrices.
- [applyReduction(\_:input:output:weights:filterParameters:)](bnns/applyreduction%28__input_output_weights_filterparameters_%29.md): Applies the specified reduction function.
- [applyTopK(k:input:bestValues:bestIndices:axis:batchSize:filterParameters:)](bnns/applytopk%28k_input_bestvalues_bestindices_axis_batchsize_filterparameters_%29.md): Applies a top-k filter directly to an input.
- [clip(to:input:output:)](bnns/clip%28to_input_output_%29.md): Deprecated. Clips the input tensor to a closed range and writes the result to the output tensor.
- [clipByGlobalNorm(threshold:inputs:outputs:globalNorm:)](bnns/clipbyglobalnorm%28threshold_inputs_outputs_globalnorm_%29.md): Deprecated. Clips the input tensors to a global Euclidean norm and writes the result to the output tensors.
- [clipByNorm(threshold:input:output:axes:)](bnns/clipbynorm%28threshold_input_output_axes_%29.md): Deprecated. Clips the input tensor to a Euclidean norm and writes the result to the output tensor.
- [compare(\_:\_:using:output:)](bnns/compare%28____using_output_%29.md): Deprecated. Performs an elementwise comparison of two array descriptors using the specified relational operator.
- [computeNorm(input:output:axes:)](bnns/computenorm%28input_output_axes_%29.md): Deprecated. Computes the Euclidean norm and writes the result to the output tensor.
- [computeNormBackward(input:output:axes:outputGradient:generatingInputGradient:)](bnns/computenormbackward%28input_output_axes_outputgradient_generatinginputgradient_%29.md): Deprecated. Backpropogates gradients for the compute norm function.
- [copy(\_:to:filterParameters:)](bnns/copy%28__to_filterparameters_%29.md): Copies the contents of an n-dimensional array descriptor to another descriptor of the same shape.
- [copyBandPart(\_:to:lowerBandCount:upperBandCount:filterParameters:)](bnns/copybandpart%28__to_lowerbandcount_upperbandcount_filterparameters_%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [dequantize(batchSize:input:output:axis:scale:bias:filterParameters:)](bnns/dequantize%28batchsize_input_output_axis_scale_bias_filterparameters_%29.md): Deprecated. Dequantizes the input tensor and writes the result to the output tensor.
- [gather(input:indices:output:axis:filterParameters:)](bnns/gather%28input_indices_output_axis_filterparameters_%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [gatherND(input:indices:output:filterParameters:)](bnns/gathernd%28input_indices_output_filterparameters_%29.md): Deprecated. Gathers the slices of a tensor.
- [matrixMultiplicationWorkspaceSize(inputA:transposed:inputB:transposed:output:alpha:filterParameters:)](bnns/matrixmultiplicationworkspacesize%28inputa_transposed_inputb_transposed_output_alpha_filterparameters_%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
- [quantize(batchSize:input:output:axis:scale:bias:filterParameters:)](bnns/quantize%28batchsize_input_output_axis_scale_bias_filterparameters_%29.md): Deprecated. Quantizes the input tensor and writes the result to the output tensor.
- [scatter(input:indices:output:axis:filterParameters:)](bnns/scatter%28input_indices_output_axis_filterparameters_%29.md)
- [scatter(input:indices:output:axis:reductionFunction:filterParameters:)](bnns/scatter%28input_indices_output_axis_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [scatterND(input:indices:output:filterParameters:)](bnns/scatternd%28input_indices_output_filterparameters_%29.md)
- [scatterND(input:indices:output:reductionFunction:filterParameters:)](bnns/scatternd%28input_indices_output_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the slices of a tensor.
- [shuffle(\_:input:output:filterParameters:)](bnns/shuffle%28__input_output_filterparameters_%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [tile(input:output:filterParameters:)](bnns/tile%28input_output_filterparameters_%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
- [tileBackward(outputGradient:generatingInputGradient:filterParameters:)](bnns/tilebackward%28outputgradient_generatinginputgradient_filterparameters_%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.
- [transpose(input:output:firstTransposeAxis:secondTransposeAxis:filterParameters:)](bnns/transpose%28input_output_firsttransposeaxis_secondtransposeaxis_filterparameters_%29.md): Transposes a tensor by swapping two of its dimensions.

### Enumerations

- [BNNS.ActivationFunction](bnns/activationfunction.md): Deprecated. Constants that describe activation functions.
- [BNNS.ArithmeticBinaryFunction](bnns/arithmeticbinaryfunction.md): Deprecated. Constants that describe binary arithmetic functions.
- [BNNS.ArithmeticTernaryFunction](bnns/arithmeticternaryfunction.md): Deprecated. Constants that describe ternary arithmetic functions.
- [BNNS.ArithmeticUnaryFunction](bnns/arithmeticunaryfunction.md): Deprecated. Constants that describe unary arithmetic functions.
- [BNNS.ConvolutionPadding](bnns/convolutionpadding.md): Deprecated. Constants that describe convolution padding modes.
- [BNNS.ConvolutionType](bnns/convolutiontype.md): Deprecated. Constants that describe convolution types.
- [BNNS.DataLayout](bnns/datalayout.md): Constants that describe the data layout of an n-dimensional array descriptor shape.
- [BNNS.DescriptorType](bnns/descriptortype.md): Deprecated. Constants that describe the input and output types of an arithmetic operation.
- [BNNS.Error](bnns/error.md)
- [BNNS.GradientClipping](bnns/gradientclipping.md): Constants that describe clipping functions.
- [BNNS.InterpolationMethod](bnns/interpolationmethod.md): Deprecated. Constants that specify interpolation methods for resize operations.
- [BNNS.LearningPhase](bnns/learningphase.md): Deprecated. Constants that describe the learning phase of a normalization operation.
- [BNNS.LossFunction](bnns/lossfunction.md): Deprecated. Constants that describe loss functions.
- [BNNS.LossReduction](bnns/lossreduction.md): Deprecated. An enumeration that describes loss reduction functions.
- [BNNS.NormalizationType](bnns/normalizationtype.md): Deprecated. Constants that describe normalization types.
- [BNNS.PaddingMode](bnns/paddingmode.md): Deprecated. Constants that define padding modes.
- [BNNS.PoolingType](bnns/poolingtype.md): Deprecated. Constants that describe pooling types.
- [BNNS.RandomGeneratorMethod](bnns/randomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNS.ReductionFunction](bnns/reductionfunction.md): Constants that describe reduction functions.
- [BNNS.Shape](bnns/shape.md): Constants that describe the size and data layout of an n-dimensional array descriptor.
- [BNNS.ShuffleType](bnns/shuffletype.md): Deprecated. Constants that specify a shuffle type.
- [BNNS.SparseLayout](bnns/sparselayout.md): Deprecated. Constants that specify standardized sparse layouts that BNNS can convert to opaque.
- [BNNS.SparsityType](bnns/sparsitytype.md): Deprecated. Constants that specify patterns in the sparsity.

## See Also

### Enumerations

- [BNNSGraph](bnnsgraph.md): An enumeration that acts as a namespace for the Swift overlays to BNNS Graph.
