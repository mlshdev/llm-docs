> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/classic-bnns-api](https://developer.apple.com/documentation/accelerate/classic-bnns-api)

# Classic BNNS API (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

## Topics

### N-dimensional array descriptor essentials

- [BNNSLayerData](bnnslayerdata.md): Deprecated. A structure containing common layer parameters.
- [BNNS.Shape](bnns/shape.md): Constants that describe the size and data layout of an n-dimensional array descriptor.
- [BNNSDataLayout](bnnsdatalayout.md): Constants that describe the data type of an n-dimensional array.
- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSDataLayoutGetRank(\_:)](bnnsdatalayoutgetrank%28__%29.md)

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [Applying Filters](applying-filters.md)
- [BNNS.Layer](bnns/layer.md): Deprecated. The base class for layer objects that wrap filters and manage deinitialization.
- [BNNS.UnaryLayer](bnns/unarylayer.md): Deprecated. The base class for layers that accept a single input.
- [BNNS.BinaryLayer](bnns/binarylayer.md): Deprecated. The base class for layers that accept two inputs.
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSFilterDestroy(\_:)](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.

### Activation layers

- [BNNSFilterCreateVectorActivationLayer(\_:\_:\_:\_:)](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNS.ActivationLayer](bnns/activationlayer.md): Deprecated. A layer object that wraps an activation filter and manages its deinitialization.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation(\_:\_:)](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch(\_:\_:\_:\_:\_:)](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
- [applyActivation(activation:axes:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_axes_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies an activation function on the specified axes.
- [applyActivation(activation:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.

### Arithmetic layers

- [BNNS.UnaryArithmeticLayer](bnns/unaryarithmeticlayer.md): Deprecated. A layer object that wraps a unary arithmetic filter and manages its deinitialization.
- [BNNS.BinaryArithmeticLayer](bnns/binaryarithmeticlayer.md): Deprecated. A layer object that wraps a binary arithmetic filter and manages its deinitialization.
- [BNNS.TernaryArithmeticLayer](bnns/ternaryarithmeticlayer.md): Deprecated. A layer object that wraps a ternary arithmetic filter and manages its deinitialization.
- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticBinary](bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticTernary](bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSArithmeticFunction](bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic(\_:\_:)](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.

### Compute norm functions

- [computeNorm(input:output:axes:)](bnns/computenorm%28input_output_axes_%29.md): Deprecated. Computes the Euclidean norm and writes the result to the output tensor.
- [computeNormBackward(input:output:axes:outputGradient:generatingInputGradient:)](bnns/computenormbackward%28input_output_axes_outputgradient_generatinginputgradient_%29.md): Deprecated. Backpropogates gradients for the compute norm function.
- [BNNSComputeNorm(\_:\_:\_:\_:)](bnnscomputenorm%28________%29.md): Deprecated. Computes the specified norm over an entire tensor or the specified axes.
- [BNNSComputeNormBackward(\_:\_:\_:\_:\_:\_:)](bnnscomputenormbackward%28____________%29.md): Deprecated. Backpropogates gradients for the compute norm function.
- [BNNSNormType](bnnsnormtype.md): Constants that describe norm types.

### Convolution layers

- [BNNSConvolutionLayerParameters](bnnsconvolutionlayerparameters.md): Deprecated. A structure containing convolution parameters.
- [BNNSFilterCreateConvolutionLayer(\_:\_:\_:\_:)](bnnsfiltercreateconvolutionlayer%28________%29.md): Deprecated. Returns a convolution filter, initialized with input, output, layer, and filter parameters.
- [BNNS.ConvolutionLayer](bnns/convolutionlayer.md): Deprecated. A layer object that wraps a convolution filter and manages its deinitialization.
- [BNNSLayerParametersConvolution](bnnslayerparametersconvolution.md): Deprecated. A structure that contains the parameters of a convolution layer.
- [BNNSFilterCreateLayerConvolution(\_:\_:)](bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.
- [BNNSFilterCreateLayerTransposedConvolution(\_:\_:)](bnnsfiltercreatelayertransposedconvolution%28____%29.md): Deprecated. Returns a new transposed convolution layer.

### Crop-resize layers

- [BNNS.CropResizeLayer](bnns/cropresizelayer.md): Deprecated. A layer object that wraps a crop-resize filter and manages its deinitialization.
- [BNNSCropResize(\_:\_:\_:\_:\_:)](bnnscropresize%28__________%29.md): Deprecated. Extracts and resizes regions of interest of an input tensor.
- [BNNSCropResizeBackward(\_:\_:\_:\_:\_:)](bnnscropresizebackward%28__________%29.md): Deprecated. Applies a crop-resize filter backward to generate gradients.
- [BNNSLayerParametersCropResize](bnnslayerparameterscropresize.md): Deprecated. A set of parameters that describe a crop-resize operation.
- [BNNSBoxCoordinateMode](bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.
- [BNNSLinearSamplingMode](bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.

### Dropout layers

- [BNNS.DropoutLayer](bnns/dropoutlayer.md): Deprecated. A layer object that wraps a dropout filter and manages its deinitialization.
- [BNNSLayerParametersDropout](bnnslayerparametersdropout.md): Deprecated. A structure that contains the parameters of a dropout layer.
- [BNNSFilterCreateLayerDropout(\_:\_:)](bnnsfiltercreatelayerdropout%28____%29.md): Deprecated. Returns a new dropout layer.

### Embedding layers

- [BNNS.EmbeddingLayer](bnns/embeddinglayer.md): Deprecated. A layer object that wraps an embedding filter and manages its deinitialization.
- [BNNSLayerParametersEmbedding](bnnslayerparametersembedding.md): Deprecated. A structure that contains the parameters of an embedding layer.
- [BNNSFilterCreateLayerEmbedding(\_:\_:)](bnnsfiltercreatelayerembedding%28____%29.md): Deprecated. Returns a new embedding layer.

### Fully connected layers

- [BNNSFullyConnectedLayerParameters](bnnsfullyconnectedlayerparameters.md): Deprecated. A structure containing fully connected layer parameters.
- [BNNSFilterCreateFullyConnectedLayer(\_:\_:\_:\_:)](bnnsfiltercreatefullyconnectedlayer%28________%29.md): Deprecated. Returns a fully connected filter, initialized with input, output, layer, and filter parameters.
- [BNNS.FullyConnectedLayer](bnns/fullyconnectedlayer.md): Deprecated. A layer object that wraps a fully connected filter and manages its deinitialization.
- [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md): Deprecated. A structure that contains the parameters of a fully connected layer.
- [BNNSFilterCreateLayerFullyConnected(\_:\_:)](bnnsfiltercreatelayerfullyconnected%28____%29.md): Deprecated. Returns a new fully connected layer.

### Fused layers

- [FusableLayerParameters](fusablelayerparameters.md): Deprecated.
- [BNNS.FusedParametersLayer](bnns/fusedparameterslayer.md): Deprecated. A layer object that wraps a fused layer and manages its deinitialization.
- [BNNS.FusedConvolutionNormalizationLayer](bnns/fusedconvolutionnormalizationlayer.md): Deprecated. A layer object that wraps a fused, convolution normalization layer and manages its deinitialization.
- [BNNS.FusedFullyConnectedNormalizationLayer](bnns/fusedfullyconnectednormalizationlayer.md): Deprecated. A layer object that wraps a fused, fully connected normalization layer and manages its deinitialization.
- [BNNSFilterType](bnnsfiltertype.md): Constants that define the component filters of a fused layer.
- [BNNSFilterCreateFusedLayer(\_:\_:\_:\_:)](bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybatch%28______________%29.md): Deprecated. Applies a fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies a fused filter backward to generate input gradients.
- [BNNSFusedFilterApplyBackwardMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.

### Gather and scatter operations

- [Calculating the dominant colors in an image](calculating-the-dominant-colors-in-an-image.md): Find the main colors in an image by implementing k-means clustering using the Accelerate framework.
- [gather(input:indices:output:axis:filterParameters:)](bnns/gather%28input_indices_output_axis_filterparameters_%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [gatherND(input:indices:output:filterParameters:)](bnns/gathernd%28input_indices_output_filterparameters_%29.md): Deprecated. Gathers the slices of a tensor.
- [scatter(input:indices:output:axis:reductionFunction:filterParameters:)](bnns/scatter%28input_indices_output_axis_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [scatterND(input:indices:output:reductionFunction:filterParameters:)](bnns/scatternd%28input_indices_output_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the slices of a tensor.
- [BNNSGather(\_:\_:\_:\_:\_:)](bnnsgather%28__________%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [BNNSGatherND(\_:\_:\_:\_:)](bnnsgathernd%28________%29.md): Deprecated. Gathers the slices of a tensor.
- [BNNSScatter(\_:\_:\_:\_:\_:\_:)](bnnsscatter%28____________%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [BNNSScatterND(\_:\_:\_:\_:\_:)](bnnsscatternd%28__________%29.md): Deprecated. Scatters the slices of a tensor.

### Loss layers

- [BNNS.LossLayer](bnns/losslayer.md): Deprecated. A layer object that wraps a loss filter and manages its deinitialization.
- [BNNSLossFunction](bnnslossfunction.md): Constants that describe loss functions.
- [BNNSLossReductionFunction](bnnslossreductionfunction.md): Constants that describe reduction functions used by a loss layer.
- [BNNSLayerParametersLossBase](bnnslayerparameterslossbase.md): Deprecated. A structure that contains the parameters of a loss layer.
- [BNNSLayerParametersLossHuber](bnnslayerparameterslosshuber.md): Deprecated. A structure that contains the parameters of a Huber loss layer.
- [BNNSLayerParametersLossSigmoidCrossEntropy](bnnslayerparameterslosssigmoidcrossentropy.md): Deprecated. A structure that contains the parameters of a sigmoid cross entropy loss layer.
- [BNNSLayerParametersLossSoftmaxCrossEntropy](bnnslayerparameterslosssoftmaxcrossentropy.md): Deprecated. A structure that contains the parameters of a softmax cross entropy loss layer.
- [BNNSLayerParametersLossYolo](bnnslayerparameterslossyolo.md): Deprecated. A structure that contains the parameters of a You Only Look Once (YOLO) loss layer.
- [BNNSFilterCreateLayerLoss(\_:\_:)](bnnsfiltercreatelayerloss%28____%29.md): Deprecated. Returns a new loss layer.
- [BNNSLossFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnslossfilterapplybatch%28______________________%29.md): Deprecated. Applies a loss filter to a set of input objects, writing the result to a set of output objects.
- [BNNSLossFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnslossfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a loss filter backward to generate gradients.

### K-nearest neighbors calculation

- [BNNS.NearestNeighbors](bnns/nearestneighbors.md): A structure that calculates k-nearest neighbors.
- [BNNSNearestNeighbors](bnnsnearestneighbors.md): A k-nearest neighbors object.
- [BNNSCreateNearestNeighbors(\_:\_:\_:\_:\_:)](bnnscreatenearestneighbors%28__________%29.md): Returns a new k-nearest neighbors object.
- [BNNSNearestNeighborsLoad(\_:\_:\_:)](bnnsnearestneighborsload%28______%29.md): Adds new sample data to a k-nearest neighbors object.
- [BNNSNearestNeighborsGetInfo(\_:\_:\_:\_:)](bnnsnearestneighborsgetinfo%28________%29.md): Calculates the sorted indices and Euclidean distances of the k-nearest neighbors to a specified sample data point.
- [BNNSDestroyNearestNeighbors(\_:)](bnnsdestroynearestneighbors%28__%29.md): Destroys a k-nearest neighbors object.

### Matrix multiplication

- [BNNSDirectApplyBroadcastMatMul(\_:\_:\_:\_:\_:\_:\_:)](bnnsdirectapplybroadcastmatmul%28______________%29.md): Deprecated. Applies a broadcast matrix multiplication operation directly to two input matrices.
- [BNNS.BroadcastMatrixMultiplyLayer](bnns/broadcastmatrixmultiplylayer.md): Deprecated. A layer object that wraps a broadcast matrix multiply filter and manages its deinitialization.
- [BNNSLayerParametersBroadcastMatMul](bnnslayerparametersbroadcastmatmul.md): Deprecated. A set of parameters that define a broadcast matrix multiply layer.
- [BNNSFilterCreateLayerBroadcastMatMul(\_:\_:)](bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMulWorkspaceSize(\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmulworkspacesize%28______________%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
- [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmul%28________________%29.md): Deprecated. Applies a matrix multiplication operation directly to two input matrices.
- [applyMatrixMultiplication(inputA:transposed:inputB:transposed:output:alpha:workspace:filterParameters:)](bnns/applymatrixmultiplication%28inputa_transposed_inputb_transposed_output_alpha_workspace_filterparameters_%29.md): Deprecated. Performs a matrix multiplication operation directly on two input matrices.
- [matrixMultiplicationWorkspaceSize(inputA:transposed:inputB:transposed:output:alpha:filterParameters:)](bnns/matrixmultiplicationworkspacesize%28inputa_transposed_inputb_transposed_output_alpha_filterparameters_%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.

### Multihead attention layers

- [BNNSMHAProjectionParameters](bnnsmhaprojectionparameters.md): A structure that contains multihead attention projection parameters.
- [BNNSLayerParametersMultiheadAttention](bnnslayerparametersmultiheadattention.md): Deprecated. A structure that contains the parameters of a multihead attention layer.
- [BNNSFilterCreateLayerMultiheadAttention(\_:\_:)](bnnsfiltercreatelayermultiheadattention%28____%29.md): Deprecated. Returns a new multihead attention layer.
- [BNNSApplyMultiheadAttention(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsapplymultiheadattention%28__________________________________%29.md): Deprecated. Applies a mutihead attention filter to a set of input objects, writing the result to a set of output objects.
- [BNNSApplyMultiheadAttentionBackward(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsapplymultiheadattentionbackward%28______________________________________________%29.md): Deprecated. Applies a multihead attention filter backward to generate gradients.

### Normalization layers

- [BNNS.NormalizationLayer](bnns/normalizationlayer.md): Deprecated. A layer object that wraps a normalization filter and manages its deinitialization.
- [BNNSLayerParametersNormalization](bnnslayerparametersnormalization.md): Deprecated. A structure that contains the parameters of a normalization layer.
- [BNNSFilterCreateLayerNormalization(\_:\_:\_:)](bnnsfiltercreatelayernormalization%28______%29.md): Deprecated. Returns a new normalization layer.
- [BNNSNormalizationFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsnormalizationfilterapplybatch%28______________%29.md): Deprecated. Applies a normalization filter to a set of input objects, writing the result to a set of output objects.
- [BNNSNormalizationFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsnormalizationfilterapplybackwardbatch%28____________________%29.md): Deprecated. Applies a normalization filter backward to generate gradients.

### Optimizers

- [BNNS.AdamOptimizer](bnns/adamoptimizer.md): Deprecated. An optimizer that uses the Adam optimization algorithm.
- [BNNS.AdamWOptimizer](bnns/adamwoptimizer.md): Deprecated. An optimizer that uses the AdamW optimization algorithm.
- [BNNS.RMSPropOptimizer](bnns/rmspropoptimizer.md): Deprecated. An optimizer that uses the root mean square propagation (RMSProp) optimization method.
- [BNNS.SGDMomentumOptimizer](bnns/sgdmomentumoptimizer.md): Deprecated. An optimizer that uses the stochastic gradient descent (SGD) with the momentum optimization method.
- [BNNSOptimizer](bnnsoptimizer.md): Deprecated.
- [BNNSOptimizerRegularizationFunction](bnnsoptimizerregularizationfunction.md): A structure that contains optimizer regularization functions.
- [BNNSOptimizerAdamFields](bnnsoptimizeradamfields.md): Deprecated. A structure that contains the fields of an Adam optimizer.
- [BNNSOptimizerAdamWithClippingFields](bnnsoptimizeradamwithclippingfields.md): Deprecated. A structure that contains the fields of an Adam or AdamW optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerRMSPropFields](bnnsoptimizerrmspropfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer.
- [BNNSOptimizerRMSPropWithClippingFields](bnnsoptimizerrmspropwithclippingfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumFields](bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumWithClippingFields](bnnsoptimizersgdmomentumwithclippingfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep(\_:\_:\_:\_:\_:\_:\_:)](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.

### Padding layers

- [BNNS.PaddingLayer](bnns/paddinglayer.md): Deprecated. A layer object that wraps a padding filter and manages its deinitialization.
- [BNNSPaddingMode](bnnspaddingmode.md): Constants that define padding modes.
- [BNNSLayerParametersPadding](bnnslayerparameterspadding.md): Deprecated. A structure that contains the parameters of a padding layer.
- [BNNSFilterCreateLayerPadding(\_:\_:)](bnnsfiltercreatelayerpadding%28____%29.md): Deprecated. Returns a new loss layer.

### Permute layers

- [BNNS.PermuteLayer](bnns/permutelayer.md): Deprecated. A layer object that wraps a permute filter and manages its deinitialization.
- [BNNSLayerParametersPermute](bnnslayerparameterspermute.md): Deprecated. A structure that contains the parameters of a permute layer.
- [BNNSFilterCreateLayerPermute(\_:\_:)](bnnsfiltercreatelayerpermute%28____%29.md): Deprecated. Returns a new permute layer.
- [BNNSPermuteFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:)](bnnspermutefilterapplybackwardbatch%28____________%29.md): Deprecated. Applies a permute filter backward to generate gradients.

### Pooling layers

- [BNNSPoolingLayerParameters](bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNSFilterCreatePoolingLayer(\_:\_:\_:\_:)](bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNS.PoolingLayer](bnns/poolinglayer.md): Deprecated. A layer object that wraps a pooling filter and manages its deinitialization.
- [BNNSPoolingFunction](bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSPoolingFunctionAverage](bnnspoolingfunctionaverage.md): Deprecated.
- [BNNSPoolingFunctionMax](bnnspoolingfunctionmax.md): Deprecated.
- [BNNSLayerParametersPooling](bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling(\_:\_:)](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.

### Quantization functions

- [quantize(batchSize:input:output:axis:scale:bias:filterParameters:)](bnns/quantize%28batchsize_input_output_axis_scale_bias_filterparameters_%29.md): Deprecated. Quantizes the input tensor and writes the result to the output tensor.
- [dequantize(batchSize:input:output:axis:scale:bias:filterParameters:)](bnns/dequantize%28batchsize_input_output_axis_scale_bias_filterparameters_%29.md): Deprecated. Dequantizes the input tensor and writes the result to the output tensor.
- [BNNSQuantizerFunction](bnnsquantizerfunction.md): Constants that describe quantization functions.
- [BNNSLayerParametersQuantization](bnnslayerparametersquantization.md): Deprecated. A structure that contains the parameters of a quantization layer.
- [BNNSDirectApplyQuantizer(\_:\_:\_:\_:\_:)](bnnsdirectapplyquantizer%28__________%29.md): Deprecated. Applies a quantization layer directly to two input matrices.

### Random number generation

- [BNNS.RandomGenerator](bnns/randomgenerator.md): A random number generator.
- [BNNSCreateRandomGenerator(\_:\_:)](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSCreateRandomGeneratorWithSeed(\_:\_:\_:)](bnnscreaterandomgeneratorwithseed%28______%29.md): Returns a new random number generator using the specified seed.
- [BNNSRandomGeneratorMethod](bnnsrandomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformInt(\_:\_:\_:\_:)](bnnsrandomfilluniformint%28________%29.md): Fills the specified tensor with random integer values from the continuous uniform distribution within a range.
- [BNNSRandomFillUniformFloat(\_:\_:\_:\_:)](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat(\_:\_:\_:\_:)](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomFillCategoricalFloat(\_:\_:\_:\_:)](bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize(\_:)](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState(\_:\_:\_:)](bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState(\_:\_:\_:)](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator(\_:)](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMDataDescriptor](bnnslstmdatadescriptor.md): Deprecated. A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.
- [BNNSLSTMGateDescriptor](bnnslstmgatedescriptor.md): Deprecated. A structure that describes a long short-term memory (LSTM) gate layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md): Deprecated. A structure that contains the parameters of a long short-term memory (LSTM) layer.
- [BNNSComputeLSTMTrainingCacheCapacity(\_:)](bnnscomputelstmtrainingcachecapacity%28__%29.md): Deprecated. Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.
- [BNNSDirectApplyLSTMBatchTrainingCaching(\_:\_:\_:\_:)](bnnsdirectapplylstmbatchtrainingcaching%28________%29.md): Deprecated. Applies a long short-term memory (LSTM) layer directly to an input.
- [BNNSDirectApplyLSTMBatchBackward(\_:\_:\_:\_:\_:)](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.

### Reduction layers

- [BNNS.ReductionLayer](bnns/reductionlayer.md): Deprecated. A layer object that wraps a reduction filter and manages its deinitialization.
- [applyReduction(\_:input:output:weights:filterParameters:)](bnns/applyreduction%28__input_output_weights_filterparameters_%29.md): Applies the specified reduction function.
- [BNNSReduceFunction](bnnsreducefunction.md): Constants that describe reduction functions.
- [BNNSLayerParametersReduction](bnnslayerparametersreduction.md): A set of parameters that define a reduction layer.
- [BNNSFilterCreateLayerReduction(\_:\_:)](bnnsfiltercreatelayerreduction%28____%29.md): Deprecated. Returns a new reduction layer.
- [BNNSDirectApplyReduction(\_:\_:)](bnnsdirectapplyreduction%28____%29.md): Applies a reduction operation directly to an input tensor.

### Resize layers

- [BNNS.ResizeLayer](bnns/resizelayer.md): Deprecated. A layer object that wraps a resize filter and manages its deinitialization.
- [BNNSInterpolationMethod](bnnsinterpolationmethod.md): Constants that describe interpolation methods.
- [BNNSLayerParametersResize](bnnslayerparametersresize.md): Deprecated. A structure that contains the parameters of a resize layer.
- [BNNSFilterCreateLayerResize(\_:\_:)](bnnsfiltercreatelayerresize%28____%29.md): Deprecated. Returns a new resize layer.

### Sparse layers

- [BNNSNDArrayGetDataSize(\_:)](bnnsndarraygetdatasize%28__%29.md): Returns the size, in bytes, that an array descriptor requires.
- [BNNSNDArrayFullyConnectedSparsifySparseCOO(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md): Deprecated. Converts a sparse tensor from the standardized coordinate list (COO) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNSNDArrayFullyConnectedSparsifySparseCSR(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md): Deprecated. Converts a sparse tensor from the standardized compressed sparse row (CSR) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [sparsify(batchSize:inputLayout:inputDenseShape:inputValues:output:sparseParameters:workspace:filterParameters:)](bnns/fullyconnectedlayer/sparsify%28batchsize_inputlayout_inputdenseshape_inputvalues_output_sparseparameters_workspace_filterparameters_%29.md): Deprecated. Converts a sparse tensor from a standardized sparse layout to a device-specific sparse layout that Fully Connected uses.
- [BNNS.SparseParameters](bnns/sparseparameters.md): Deprecated. A data structure that provides a hint to the sparsity function.
- [BNNS.SparseLayout](bnns/sparselayout.md): Deprecated. Constants that specify standardized sparse layouts that BNNS can convert to opaque.
- [BNNS.SparsityType](bnns/sparsitytype.md): Deprecated. Constants that specify patterns in the sparsity.
- [BNNSSparsityTypeUnstructured](bnnssparsitytypeunstructured.md)

### Tensor comparison layers

- [compare(\_:\_:using:output:)](bnns/compare%28____using_output_%29.md): Deprecated. Performs an elementwise comparison of two array descriptors using the specified relational operator.
- [BNNSRelationalOperator](bnnsrelationaloperator.md): Constants that describe relational operations.
- [BNNSCompareTensor(\_:\_:\_:\_:)](bnnscomparetensor%28________%29.md): Deprecated. Returns a tensor of Boolean type by comparing or performing a logical operation between two inputs.

### Tensor contraction layers

- [BNNSLayerParametersTensorContraction](bnnslayerparameterstensorcontraction.md): Deprecated. A structure that contains the parameters of a tensor-contraction layer.
- [BNNSFilterCreateLayerTensorContraction(\_:\_:)](bnnsfiltercreatelayertensorcontraction%28____%29.md): Deprecated. Returns a new tensor-contraction layer.

### Top-k layers

- [applyTopK(k:input:bestValues:bestIndices:axis:batchSize:filterParameters:)](bnns/applytopk%28k_input_bestvalues_bestindices_axis_batchsize_filterparameters_%29.md): Applies a top-k filter directly to an input.
- [applyInTopK(k:input:testIndices:output:axis:batchSize:filterParameters:)](bnns/applyintopk%28k_input_testindices_output_axis_batchsize_filterparameters_%29.md): Applies an in-top-k filter directly to an input.

### Top-k layers

- [BNNSDirectApplyTopK(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsdirectapplytopk%28____________________%29.md): Applies a top-k filter directly to an input.
- [BNNSDirectApplyInTopK(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsdirectapplyintopk%28____________________%29.md): Applies an in-top-k filter directly to an input.

### Utility functions

- [copy(\_:to:filterParameters:)](bnns/copy%28__to_filterparameters_%29.md): Copies the contents of an n-dimensional array descriptor to another descriptor of the same shape.
- [transpose(input:output:firstTransposeAxis:secondTransposeAxis:filterParameters:)](bnns/transpose%28input_output_firsttransposeaxis_secondtransposeaxis_filterparameters_%29.md): Transposes a tensor by swapping two of its dimensions.
- [BNNSCopy(\_:\_:\_:)](bnnscopy%28______%29.md): Copies the contents of an n-dimensional array descriptor to another of the same shape.
- [BNNSTranspose(\_:\_:\_:\_:\_:)](bnnstranspose%28__________%29.md): Transposes a tensor by swapping two of its dimensions.
- [BNNSGetPointer(\_:\_:)](bnnsgetpointer%28____%29.md): Deprecated. Returns an n-dimensional array descriptor that contains a reference to a filter-data member.
- [BNNSPointerSpecifier](bnnspointerspecifier.md): Constants that specify which pointer the BNNS get filter function returns.
- [BNNS.GramLayer](bnns/gramlayer.md): Deprecated. A layer object that wraps a Gram matrix filter and manages its deinitialization.
- [BNNSLayerParametersGram](bnnslayerparametersgram.md): Deprecated. A set of parameters that define a Gram matrix layer.
- [BNNSFilterCreateLayerGram(\_:\_:)](bnnsfiltercreatelayergram%28____%29.md): Deprecated. Returns a new Gram matrix layer.
- [clip(to:input:output:)](bnns/clip%28to_input_output_%29.md): Deprecated. Clips the input tensor to a closed range and writes the result to the output tensor.
- [clipByNorm(threshold:input:output:axes:)](bnns/clipbynorm%28threshold_input_output_axes_%29.md): Deprecated. Clips the input tensor to a Euclidean norm and writes the result to the output tensor.
- [clipByGlobalNorm(threshold:inputs:outputs:globalNorm:)](bnns/clipbyglobalnorm%28threshold_inputs_outputs_globalnorm_%29.md): Deprecated. Clips the input tensors to a global Euclidean norm and writes the result to the output tensors.
- [BNNSClipByValue(\_:\_:\_:\_:)](bnnsclipbyvalue%28________%29.md): Deprecated. Clips a tensor’s values to the specified minimum and maximum values.
- [BNNSClipByNorm(\_:\_:\_:\_:)](bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.
- [BNNSClipByGlobalNorm(\_:\_:\_:\_:\_:)](bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.
- [copyBandPart(\_:to:lowerBandCount:upperBandCount:filterParameters:)](bnns/copybandpart%28__to_lowerbandcount_upperbandcount_filterparameters_%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [shuffle(\_:input:output:filterParameters:)](bnns/shuffle%28__input_output_filterparameters_%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNS.ShuffleType](bnns/shuffletype.md): Deprecated. Constants that specify a shuffle type.
- [tile(input:output:filterParameters:)](bnns/tile%28input_output_filterparameters_%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
- [tileBackward(outputGradient:generatingInputGradient:filterParameters:)](bnns/tilebackward%28outputgradient_generatinginputgradient_filterparameters_%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.

### Errors

- [BNNS.Error](bnns/error.md)
- [BNNSBandPart(\_:\_:\_:\_:\_:)](bnnsbandpart%28__________%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [BNNSShuffle(\_:\_:\_:\_:)](bnnsshuffle%28________%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNSShuffleType](bnnsshuffletype.md): Constants that specify a shuffle type.
- [BNNSTile(\_:\_:\_:)](bnnstile%28______%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
- [BNNSTileBackward(\_:\_:\_:)](bnnstilebackward%28______%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.

### Macros

- [BNNSDataTypeFloat16](bnnsdatatypefloat16.md): Deprecated.
- [BNNSDataTypeFloat32](bnnsdatatypefloat32.md): Deprecated.
- [BNNSDataTypeIndexed8](bnnsdatatypeindexed8.md): Deprecated.
- [BNNSDataTypeInt16](bnnsdatatypeint16.md): Deprecated.
- [BNNSDataTypeInt32](bnnsdatatypeint32.md): Deprecated.
- [BNNSDataTypeInt8](bnnsdatatypeint8.md): Deprecated.
- [BNNSFlagsUseClientPtr](bnnsflagsuseclientptr.md): Deprecated.

# Classic BNNS API (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

## Topics

### N-dimensional array descriptor essentials

- [BNNSLayerData](bnnslayerdata.md): Deprecated. A structure containing common layer parameters.
- [BNNSDataLayout](bnnsdatalayout.md): Constants that describe the data type of an n-dimensional array.
- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSDataLayoutGetRank](bnnsdatalayoutgetrank%28__%29.md)

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [Applying Filters](applying-filters.md)
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSFilterDestroy](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.

### Activation layers

- [BNNSFilterCreateVectorActivationLayer](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.

### Arithmetic layers

- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticBinary](bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticTernary](bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSArithmeticFunction](bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch](bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.

### Compute norm functions

- [BNNSComputeNorm](bnnscomputenorm%28________%29.md): Deprecated. Computes the specified norm over an entire tensor or the specified axes.
- [BNNSComputeNormBackward](bnnscomputenormbackward%28____________%29.md): Deprecated. Backpropogates gradients for the compute norm function.
- [BNNSNormType](bnnsnormtype.md): Constants that describe norm types.

### Convolution layers

- [BNNSConvolutionLayerParameters](bnnsconvolutionlayerparameters.md): Deprecated. A structure containing convolution parameters.
- [BNNSFilterCreateConvolutionLayer](bnnsfiltercreateconvolutionlayer%28________%29.md): Deprecated. Returns a convolution filter, initialized with input, output, layer, and filter parameters.
- [BNNSLayerParametersConvolution](bnnslayerparametersconvolution.md): Deprecated. A structure that contains the parameters of a convolution layer.
- [BNNSFilterCreateLayerConvolution](bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.
- [BNNSFilterCreateLayerTransposedConvolution](bnnsfiltercreatelayertransposedconvolution%28____%29.md): Deprecated. Returns a new transposed convolution layer.

### Crop-resize layers

- [BNNSCropResize](bnnscropresize%28__________%29.md): Deprecated. Extracts and resizes regions of interest of an input tensor.
- [BNNSCropResizeBackward](bnnscropresizebackward%28__________%29.md): Deprecated. Applies a crop-resize filter backward to generate gradients.
- [BNNSLayerParametersCropResize](bnnslayerparameterscropresize.md): Deprecated. A set of parameters that describe a crop-resize operation.
- [BNNSBoxCoordinateMode](bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.
- [BNNSLinearSamplingMode](bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.

### Dropout layers

- [BNNSLayerParametersDropout](bnnslayerparametersdropout.md): Deprecated. A structure that contains the parameters of a dropout layer.
- [BNNSFilterCreateLayerDropout](bnnsfiltercreatelayerdropout%28____%29.md): Deprecated. Returns a new dropout layer.

### Embedding layers

- [BNNSLayerParametersEmbedding](bnnslayerparametersembedding.md): Deprecated. A structure that contains the parameters of an embedding layer.
- [BNNSFilterCreateLayerEmbedding](bnnsfiltercreatelayerembedding%28____%29.md): Deprecated. Returns a new embedding layer.

### Fully connected layers

- [BNNSFullyConnectedLayerParameters](bnnsfullyconnectedlayerparameters.md): Deprecated. A structure containing fully connected layer parameters.
- [BNNSFilterCreateFullyConnectedLayer](bnnsfiltercreatefullyconnectedlayer%28________%29.md): Deprecated. Returns a fully connected filter, initialized with input, output, layer, and filter parameters.
- [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md): Deprecated. A structure that contains the parameters of a fully connected layer.
- [BNNSFilterCreateLayerFullyConnected](bnnsfiltercreatelayerfullyconnected%28____%29.md): Deprecated. Returns a new fully connected layer.

### Fused layers

- [BNNSFilterType](bnnsfiltertype.md): Constants that define the component filters of a fused layer.
- [BNNSFilterCreateFusedLayer](bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyBatch](bnnsfusedfilterapplybatch%28______________%29.md): Deprecated. Applies a fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyMultiInputBatch](bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardBatch](bnnsfusedfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies a fused filter backward to generate input gradients.
- [BNNSFusedFilterApplyBackwardMultiInputBatch](bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.

### Gather and scatter operations

- [BNNSGather](bnnsgather%28__________%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [BNNSGatherND](bnnsgathernd%28________%29.md): Deprecated. Gathers the slices of a tensor.
- [BNNSScatter](bnnsscatter%28____________%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [BNNSScatterND](bnnsscatternd%28__________%29.md): Deprecated. Scatters the slices of a tensor.

### Loss layers

- [BNNSLossFunction](bnnslossfunction.md): Constants that describe loss functions.
- [BNNSLossReductionFunction](bnnslossreductionfunction.md): Constants that describe reduction functions used by a loss layer.
- [BNNSLayerParametersLossBase](bnnslayerparameterslossbase.md): Deprecated. A structure that contains the parameters of a loss layer.
- [BNNSLayerParametersLossHuber](bnnslayerparameterslosshuber.md): Deprecated. A structure that contains the parameters of a Huber loss layer.
- [BNNSLayerParametersLossSigmoidCrossEntropy](bnnslayerparameterslosssigmoidcrossentropy.md): Deprecated. A structure that contains the parameters of a sigmoid cross entropy loss layer.
- [BNNSLayerParametersLossSoftmaxCrossEntropy](bnnslayerparameterslosssoftmaxcrossentropy.md): Deprecated. A structure that contains the parameters of a softmax cross entropy loss layer.
- [BNNSLayerParametersLossYolo](bnnslayerparameterslossyolo.md): Deprecated. A structure that contains the parameters of a You Only Look Once (YOLO) loss layer.
- [BNNSFilterCreateLayerLoss](bnnsfiltercreatelayerloss%28____%29.md): Deprecated. Returns a new loss layer.
- [BNNSLossFilterApplyBatch](bnnslossfilterapplybatch%28______________________%29.md): Deprecated. Applies a loss filter to a set of input objects, writing the result to a set of output objects.
- [BNNSLossFilterApplyBackwardBatch](bnnslossfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a loss filter backward to generate gradients.

### K-nearest neighbors calculation

- [BNNSNearestNeighbors](bnnsnearestneighbors.md): A k-nearest neighbors object.
- [BNNSCreateNearestNeighbors](bnnscreatenearestneighbors%28__________%29.md): Returns a new k-nearest neighbors object.
- [BNNSNearestNeighborsLoad](bnnsnearestneighborsload%28______%29.md): Adds new sample data to a k-nearest neighbors object.
- [BNNSNearestNeighborsGetInfo](bnnsnearestneighborsgetinfo%28________%29.md): Calculates the sorted indices and Euclidean distances of the k-nearest neighbors to a specified sample data point.
- [BNNSDestroyNearestNeighbors](bnnsdestroynearestneighbors%28__%29.md): Destroys a k-nearest neighbors object.

### Matrix multiplication

- [BNNSDirectApplyBroadcastMatMul](bnnsdirectapplybroadcastmatmul%28______________%29.md): Deprecated. Applies a broadcast matrix multiplication operation directly to two input matrices.
- [BNNSLayerParametersBroadcastMatMul](bnnslayerparametersbroadcastmatmul.md): Deprecated. A set of parameters that define a broadcast matrix multiply layer.
- [BNNSFilterCreateLayerBroadcastMatMul](bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMulWorkspaceSize](bnnsmatmulworkspacesize%28______________%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
- [BNNSMatMul](bnnsmatmul%28________________%29.md): Deprecated. Applies a matrix multiplication operation directly to two input matrices.

### Multihead attention layers

- [BNNSMHAProjectionParameters](bnnsmhaprojectionparameters.md): A structure that contains multihead attention projection parameters.
- [BNNSLayerParametersMultiheadAttention](bnnslayerparametersmultiheadattention.md): Deprecated. A structure that contains the parameters of a multihead attention layer.
- [BNNSFilterCreateLayerMultiheadAttention](bnnsfiltercreatelayermultiheadattention%28____%29.md): Deprecated. Returns a new multihead attention layer.
- [BNNSApplyMultiheadAttention](bnnsapplymultiheadattention%28__________________________________%29.md): Deprecated. Applies a mutihead attention filter to a set of input objects, writing the result to a set of output objects.
- [BNNSApplyMultiheadAttentionBackward](bnnsapplymultiheadattentionbackward%28______________________________________________%29.md): Deprecated. Applies a multihead attention filter backward to generate gradients.

### Normalization layers

- [BNNSLayerParametersNormalization](bnnslayerparametersnormalization.md): Deprecated. A structure that contains the parameters of a normalization layer.
- [BNNSFilterCreateLayerNormalization](bnnsfiltercreatelayernormalization%28______%29.md): Deprecated. Returns a new normalization layer.
- [BNNSNormalizationFilterApplyBatch](bnnsnormalizationfilterapplybatch%28______________%29.md): Deprecated. Applies a normalization filter to a set of input objects, writing the result to a set of output objects.
- [BNNSNormalizationFilterApplyBackwardBatch](bnnsnormalizationfilterapplybackwardbatch%28____________________%29.md): Deprecated. Applies a normalization filter backward to generate gradients.

### Optimizers

- [BNNSOptimizerRegularizationFunction](bnnsoptimizerregularizationfunction.md): A structure that contains optimizer regularization functions.
- [BNNSOptimizerAdamFields](bnnsoptimizeradamfields.md): Deprecated. A structure that contains the fields of an Adam optimizer.
- [BNNSOptimizerAdamWithClippingFields](bnnsoptimizeradamwithclippingfields.md): Deprecated. A structure that contains the fields of an Adam or AdamW optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerRMSPropFields](bnnsoptimizerrmspropfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer.
- [BNNSOptimizerRMSPropWithClippingFields](bnnsoptimizerrmspropwithclippingfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumFields](bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumWithClippingFields](bnnsoptimizersgdmomentumwithclippingfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.

### Padding layers

- [BNNSPaddingMode](bnnspaddingmode.md): Constants that define padding modes.
- [BNNSLayerParametersPadding](bnnslayerparameterspadding.md): Deprecated. A structure that contains the parameters of a padding layer.
- [BNNSFilterCreateLayerPadding](bnnsfiltercreatelayerpadding%28____%29.md): Deprecated. Returns a new loss layer.

### Permute layers

- [BNNSLayerParametersPermute](bnnslayerparameterspermute.md): Deprecated. A structure that contains the parameters of a permute layer.
- [BNNSFilterCreateLayerPermute](bnnsfiltercreatelayerpermute%28____%29.md): Deprecated. Returns a new permute layer.
- [BNNSPermuteFilterApplyBackwardBatch](bnnspermutefilterapplybackwardbatch%28____________%29.md): Deprecated. Applies a permute filter backward to generate gradients.

### Pooling layers

- [BNNSPoolingLayerParameters](bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNSFilterCreatePoolingLayer](bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNSPoolingFunction](bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSLayerParametersPooling](bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx](bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.

### Quantization functions

- [BNNSQuantizerFunction](bnnsquantizerfunction.md): Constants that describe quantization functions.
- [BNNSLayerParametersQuantization](bnnslayerparametersquantization.md): Deprecated. A structure that contains the parameters of a quantization layer.
- [BNNSDirectApplyQuantizer](bnnsdirectapplyquantizer%28__________%29.md): Deprecated. Applies a quantization layer directly to two input matrices.

### Random number generation

- [BNNSCreateRandomGenerator](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSCreateRandomGeneratorWithSeed](bnnscreaterandomgeneratorwithseed%28______%29.md): Returns a new random number generator using the specified seed.
- [BNNSRandomGeneratorMethod](bnnsrandomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformInt](bnnsrandomfilluniformint%28________%29.md): Fills the specified tensor with random integer values from the continuous uniform distribution within a range.
- [BNNSRandomFillUniformFloat](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomFillCategoricalFloat](bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState](bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMDataDescriptor](bnnslstmdatadescriptor.md): Deprecated. A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.
- [BNNSLSTMGateDescriptor](bnnslstmgatedescriptor.md): Deprecated. A structure that describes a long short-term memory (LSTM) gate layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md): Deprecated. A structure that contains the parameters of a long short-term memory (LSTM) layer.
- [BNNSComputeLSTMTrainingCacheCapacity](bnnscomputelstmtrainingcachecapacity%28__%29.md): Deprecated. Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.
- [BNNSDirectApplyLSTMBatchTrainingCaching](bnnsdirectapplylstmbatchtrainingcaching%28________%29.md): Deprecated. Applies a long short-term memory (LSTM) layer directly to an input.
- [BNNSDirectApplyLSTMBatchBackward](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.

### Reduction layers

- [BNNSReduceFunction](bnnsreducefunction.md): Constants that describe reduction functions.
- [BNNSLayerParametersReduction](bnnslayerparametersreduction.md): A set of parameters that define a reduction layer.
- [BNNSFilterCreateLayerReduction](bnnsfiltercreatelayerreduction%28____%29.md): Deprecated. Returns a new reduction layer.
- [BNNSDirectApplyReduction](bnnsdirectapplyreduction%28____%29.md): Applies a reduction operation directly to an input tensor.

### Resize layers

- [BNNSInterpolationMethod](bnnsinterpolationmethod.md): Constants that describe interpolation methods.
- [BNNSLayerParametersResize](bnnslayerparametersresize.md): Deprecated. A structure that contains the parameters of a resize layer.
- [BNNSFilterCreateLayerResize](bnnsfiltercreatelayerresize%28____%29.md): Deprecated. Returns a new resize layer.

### Sparse layers

- [BNNSNDArrayGetDataSize](bnnsndarraygetdatasize%28__%29.md): Returns the size, in bytes, that an array descriptor requires.
- [BNNSNDArrayFullyConnectedSparsifySparseCOO](bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md): Deprecated. Converts a sparse tensor from the standardized coordinate list (COO) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNSNDArrayFullyConnectedSparsifySparseCSR](bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md): Deprecated. Converts a sparse tensor from the standardized compressed sparse row (CSR) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNSSparsityTypeUnstructured](bnnssparsitytypeunstructured.md)

### Tensor comparison layers

- [BNNSRelationalOperator](bnnsrelationaloperator.md): Constants that describe relational operations.
- [BNNSCompareTensor](bnnscomparetensor%28________%29.md): Deprecated. Returns a tensor of Boolean type by comparing or performing a logical operation between two inputs.

### Tensor contraction layers

- [BNNSLayerParametersTensorContraction](bnnslayerparameterstensorcontraction.md): Deprecated. A structure that contains the parameters of a tensor-contraction layer.
- [BNNSFilterCreateLayerTensorContraction](bnnsfiltercreatelayertensorcontraction%28____%29.md): Deprecated. Returns a new tensor-contraction layer.

### Top-k layers

- [BNNSDirectApplyTopK](bnnsdirectapplytopk%28____________________%29.md): Applies a top-k filter directly to an input.
- [BNNSDirectApplyInTopK](bnnsdirectapplyintopk%28____________________%29.md): Applies an in-top-k filter directly to an input.

### Utility functions

- [BNNSCopy](bnnscopy%28______%29.md): Copies the contents of an n-dimensional array descriptor to another of the same shape.
- [BNNSTranspose](bnnstranspose%28__________%29.md): Transposes a tensor by swapping two of its dimensions.
- [BNNSGetPointer](bnnsgetpointer%28____%29.md): Deprecated. Returns an n-dimensional array descriptor that contains a reference to a filter-data member.
- [BNNSPointerSpecifier](bnnspointerspecifier.md): Constants that specify which pointer the BNNS get filter function returns.
- [BNNSLayerParametersGram](bnnslayerparametersgram.md): Deprecated. A set of parameters that define a Gram matrix layer.
- [BNNSFilterCreateLayerGram](bnnsfiltercreatelayergram%28____%29.md): Deprecated. Returns a new Gram matrix layer.
- [BNNSClipByValue](bnnsclipbyvalue%28________%29.md): Deprecated. Clips a tensor’s values to the specified minimum and maximum values.
- [BNNSClipByNorm](bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.
- [BNNSClipByGlobalNorm](bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.

### Errors

- [BNNSBandPart](bnnsbandpart%28__________%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [BNNSShuffle](bnnsshuffle%28________%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNSShuffleType](bnnsshuffletype.md): Constants that specify a shuffle type.
- [BNNSTile](bnnstile%28______%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
- [BNNSTileBackward](bnnstilebackward%28______%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.
