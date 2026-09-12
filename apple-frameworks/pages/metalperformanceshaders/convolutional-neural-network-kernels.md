> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/convolutional-neural-network-kernels](https://developer.apple.com/documentation/metalperformanceshaders/convolutional-neural-network-kernels)

# Convolutional Neural Network Kernels (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** API Collection

Build neural networks with layers.

<a id="overview"></a>

## Overview

- Think carefully about the edge mode requested for pooling layers. The default value is [MPSImageEdgeMode.zero](mpsimageedgemode/zero.md), but there are times when a [MPSImageEdgeMode.clamp](mpsimageedgemode/clamp.md) value may be better.
- To avoid reading off the edge of an image for filters that have a filter area (convolution, pooling), set `MPSCNNKernel.offset = (MPSOffset){ .x = kernelWidth/2, .y = kernelHeight/2, .z = 0}` and reduce the size of the output image by `{kernelWidth-1, kernelHeight-1, 0}`. The filter area stretches up and to the left of the kernel offset by `{kernelWidth/2, kernelHeight/2}`.
- Always remember the following distinction:
- The [MPSCNNConvolution](mpscnnconvolution.md) class takes weights in the order `weight[outputChannels][kernelHeight][kernelWidth][inputChannels/groups]`.
- The [MPSCNNFullyConnected](mpscnnfullyconnected.md) class takes weights in the order `weight[outputChannels][sourceWidth][sourceHeight][inputChannels]`.
- Initialize [MPSCNNKernel](mpscnnkernel.md) objects once and reuse them.
- You can use [MPSCNNNeuron](mpscnnneuron.md) objects and similar to perform pre-processing of images, such as scaling and resizing.
- Specify a neuron filter with an [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md) object to combine the convolution and neuron operations.
- Use [MPSTemporaryImage](mpstemporaryimage.md) objects for intermediate images that live for a short period of time (one [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object).

[MPSTemporaryImage](mpstemporaryimage.md) objects can reduce the amount of memory used by the CNN by several folds, and similarly reduce the amount of CPU time spent allocating storage and latency between the time a command buffer is committed and when it is actually executed on the GPU.

You cannot read or write to a [MPSTemporaryImage](mpstemporaryimage.md) object using the CPU. Generally, [MPSTemporaryImage](mpstemporaryimage.md) objects should be created as needed and thrown away promptly. Persistent objects should not retain them.

Please be sure to understand the purpose of the [readCount](mpstemporaryimage/readcount.md) property.

- Because the Metal Performance Shaders framework encodes its work in place in your command buffer, you always have the option to insert your own code in between [MPSCNNKernel](mpscnnkernel.md) encodings as a Metal function for tasks not covered by the framework. You do not need to use the Metal Performance Shaders framework for everything.

## Topics

### Arithmetic Layers

- [MPSCNNAdd](mpscnnadd.md): An addition operator.
- [MPSCNNAddGradient](mpscnnaddgradient.md): A gradient addition operator.
- [MPSCNNSubtract](mpscnnsubtract.md): A subtraction operator.
- [MPSCNNSubtractGradient](mpscnnsubtractgradient.md): A gradient subtraction operator.
- [MPSCNNMultiply](mpscnnmultiply.md): A multiply operator.
- [MPSCNNMultiplyGradient](mpscnnmultiplygradient.md): A gradient multiply operator.
- [MPSCNNDivide](mpscnndivide.md): A division operator.
- [MPSCNNArithmetic](mpscnnarithmetic.md): The base class for arithmetic operators.
- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md): The base class for gradient arithmetic operators.
- [MPSCNNArithmeticGradientState](mpscnnarithmeticgradientstate.md): An object that stores the clamp mask used by gradient arithmetic operators.

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.

### Pooling Layers

- [MPSCNNPoolingAverage](mpscnnpoolingaverage.md): An average pooling filter.
- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md): A gradient average pooling filter.
- [MPSCNNPoolingL2Norm](mpscnnpoolingl2norm.md): An L2-norm pooling filter.
- [MPSCNNPoolingMax](mpscnnpoolingmax.md): A max pooling filter.
- [MPSCNNDilatedPoolingMax](mpscnndilatedpoolingmax.md): A dilated max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md): A gradient pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.

### Fully Connected Layers

- [MPSCNNBinaryFullyConnected](mpscnnbinaryfullyconnected.md): A fully connected convolution layer with binary weights and optionally binarized input image.
- [MPSCNNFullyConnected](mpscnnfullyconnected.md): A fully connected convolution layer, also known as an inner product layer.
- [MPSCNNFullyConnectedGradient](mpscnnfullyconnectedgradient.md): A gradient fully connected convolution layer.

### Neuron Layers

- [MPSCNNNeuronAbsolute](mpscnnneuronabsolute.md): An absolute neuron filter.
- [MPSCNNNeuronELU](mpscnnneuronelu.md): A parametric ELU neuron filter.
- [MPSCNNNeuronHardSigmoid](mpscnnneuronhardsigmoid.md): A hard sigmoid neuron filter.
- [MPSCNNNeuronLinear](mpscnnneuronlinear.md): A linear neuron filter.
- [MPSCNNNeuronPReLU](mpscnnneuronprelu.md): A parametric ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronReLUN](mpscnnneuronrelun.md): A ReLUN neuron filter.
- [MPSCNNNeuronReLU](mpscnnneuronrelu.md): A ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronSigmoid](mpscnnneuronsigmoid.md): A sigmoid neuron filter.
- [MPSCNNNeuronSoftPlus](mpscnnneuronsoftplus.md): A parametric softplus neuron filter.
- [MPSCNNNeuronSoftSign](mpscnnneuronsoftsign.md): A softsign neuron filter.
- [MPSCNNNeuronTanH](mpscnnneurontanh.md): A hyperbolic tangent neuron filter.
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md): An exponential neuron filter.
- [MPSCNNNeuronGradient](mpscnnneurongradient.md): A gradient neuron filter.
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md): A logarithm neuron filter.
- [MPSCNNNeuronPower](mpscnnneuronpower.md): A power neuron filter.
- [MPSNNNeuronDescriptor](mpsnnneurondescriptor.md): An object that specifies properties used by a neuron kernel.

### Softmax Layers

- [MPSCNNSoftMax](mpscnnsoftmax.md): A neural transfer function that is useful for classification tasks.
- [MPSCNNLogSoftMax](mpscnnlogsoftmax.md): A neural transfer function that is useful for constructing a loss function to be minimized when training neural networks.
- [MPSCNNLogSoftMaxGradient](mpscnnlogsoftmaxgradient.md): A gradient logarithmic softmax filter.
- [MPSCNNSoftMaxGradient](mpscnnsoftmaxgradient.md): A gradient softmax filter.

### Normalization Layers

- [MPSCNNCrossChannelNormalization](mpscnncrosschannelnormalization.md): A normalization kernel applied across feature channels.
- [MPSCNNCrossChannelNormalizationGradient](mpscnncrosschannelnormalizationgradient.md): A gradient normalization kernel applied across feature channels.
- [MPSCNNLocalContrastNormalization](mpscnnlocalcontrastnormalization.md): A local-contrast normalization kernel.
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md): A gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md): A spatial normalization kernel.
- [MPSCNNSpatialNormalizationGradient](mpscnnspatialnormalizationgradient.md): A gradient spatial normalization kernel.
- [MPSCNNBatchNormalization](mpscnnbatchnormalization.md): A batch normalization kernel.
- [MPSCNNBatchNormalizationGradient](mpscnnbatchnormalizationgradient.md): A gradient batch normalization kernel.
- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md): An object that stores data required to execute batch normalization.
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md): An object that stores mean and variance terms used to execute batch normalization.
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalization](mpscnninstancenormalization.md): An instance normalization kernel.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.

### Upsampling Layers

- [MPSCNNUpsampling](mpscnnupsampling.md): A filter that resamples an existing MPS image.
- [MPSCNNUpsamplingBilinear](mpscnnupsamplingbilinear.md): A bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearest](mpscnnupsamplingnearest.md): A nearest spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradient](mpscnnupsamplingbilineargradient.md): A gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingGradient](mpscnnupsamplinggradient.md): A gradient filter that upsamples an existing Metal Performance Shaders image.
- [MPSCNNUpsamplingNearestGradient](mpscnnupsamplingnearestgradient.md): A gradient upsampling filter that samples the pixel nearest to the source when upsampling to the destination pixel.

### Dropout Layers

- [MPSCNNDropout](mpscnndropout.md): A dropout filter.
- [MPSCNNDropoutGradient](mpscnndropoutgradient.md): A gradient dropout filter.
- [MPSCNNDropoutGradientState](mpscnndropoutgradientstate.md): A class that stores the mask used by dropout and gradient dropout filters.

### Loss Layers

- [MPSCNNLoss](mpscnnloss.md): A kernel that computes the loss and loss gradient between specified predictions and labels.
- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.

### Reduction Layers

- [MPSNNReduceRowMax](mpsnnreducerowmax.md): A reduction filter that returns the maximum value for each row in an image.
- [MPSNNReduceRowMin](mpsnnreducerowmin.md): A reduction filter that returns the minimum value for each row in an image.
- [MPSNNReduceRowSum](mpsnnreducerowsum.md): A reduction filter that returns the sum of all values for each row in an image.
- [MPSNNReduceRowMean](mpsnnreducerowmean.md): A reduction filter that returns the mean value for each row in an image.
- [MPSNNReduceColumnMax](mpsnnreducecolumnmax.md): A reduction filter that returns the maximum value for each column in an image.
- [MPSNNReduceColumnMin](mpsnnreducecolumnmin.md): A reduction filter that returns the minimum value for each column in an image.
- [MPSNNReduceColumnSum](mpsnnreducecolumnsum.md): A reduction filter that returns the sum of all values for each column in an image.
- [MPSNNReduceColumnMean](mpsnnreducecolumnmean.md): A reduction filter that returns the mean value for each column in an image.
- [MPSNNReduceFeatureChannelsMax](mpsnnreducefeaturechannelsmax.md): A reduction filter that returns the maximum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsMin](mpsnnreducefeaturechannelsmin.md): A reduction filter that returns the minimum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsSum](mpsnnreducefeaturechannelssum.md): A reduction filter that returns the sum of all values for each feature channel in an image.
- [MPSNNReduceFeatureChannelsMean](mpsnnreducefeaturechannelsmean.md): A reduction filter that returns the mean value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMax](mpsnnreducefeaturechannelsargumentmax.md): A reduction filter that returns the index of the location of the maximum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMin](mpsnnreducefeaturechannelsargumentmin.md): A reduction filter that returns the index of the location of the minimum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsAndWeightsSum](mpsnnreducefeaturechannelsandweightssum.md): A reduction filter that returns the weighted sum of all values for each feature channel in an image.
- [MPSNNReduceFeatureChannelsAndWeightsMean](mpsnnreducefeaturechannelsandweightsmean.md): A reduction filter that returns the weighted sum for each feature channel in an image.
- [MPSNNReduceUnary](mpsnnreduceunary.md): The base class for unary reduction filters.
- [MPSNNReduceBinary](mpsnnreducebinary.md): The base class for binary reduction filters.

### Reshape Layer

- [MPSNNReshape](mpsnnreshape.md): The base class for reshape operations.

### Slice Layer

- [MPSNNSlice](mpsnnslice.md): A kernel that extracts a slice from an image.

### Optimization Layers

- [MPSNNOptimizerAdam](mpsnnoptimizeradam.md): An optimization layer that performs an Adam pdate.
- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md): An optimization layer that performs a root mean square propagation update.
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md): An optimization layer that performs a gradient descent with an optional momentum update.
- [MPSNNOptimizer](mpsnnoptimizer.md): The base class for optimization layers.
- [MPSNNOptimizerDescriptor](mpsnnoptimizerdescriptor.md): An object that specifies properties used by an optimizer kernel.

### Layer Base Classes

- [MPSCNNKernel](mpscnnkernel.md): Base class for neural network layers.
- [MPSCNNBinaryKernel](mpscnnbinarykernel.md): A convolution neural network kernel.
- [MPSCNNGradientKernel](mpscnngradientkernel.md): The base class for gradient layers.

### Predefined Padding Policies

- [MPSNNDefaultPadding](mpsnndefaultpadding.md): A class that provides predefined padding policies for common tasks.

## See Also

### Neural Networks

- [Training a Neural Network with Metal Performance Shaders](training-a-neural-network-with-metal-performance-shaders.md): Use an MPS neural network graph to train a simple neural network digit classifier.
- [MPSImage](mpsimage.md): A texture that may have more than four channels for use in convolutional neural networks.
- [MPSTemporaryImage](mpstemporaryimage.md): A texture for use in convolutional neural networks that stores transient data to be used and discarded promptly.
- [Objects that Simplify the Creation of Neural Networks](objects-that-simplify-the-creation-of-neural-networks.md): Simplify the creation of neural networks using networks of filter, image, and state nodes.
- [Recurrent Neural Networks](recurrent-neural-networks.md): Create recurrent neural networks.

# Convolutional Neural Network Kernels (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** API Collection

Build neural networks with layers.

<a id="overview"></a>

## Overview

- Think carefully about the edge mode requested for pooling layers. The default value is [MPSImageEdgeModeZero](mpsimageedgemode/zero.md), but there are times when a [MPSImageEdgeModeClamp](mpsimageedgemode/clamp.md) value may be better.
- To avoid reading off the edge of an image for filters that have a filter area (convolution, pooling), set `MPSCNNKernel.offset = (MPSOffset){ .x = kernelWidth/2, .y = kernelHeight/2, .z = 0}` and reduce the size of the output image by `{kernelWidth-1, kernelHeight-1, 0}`. The filter area stretches up and to the left of the kernel offset by `{kernelWidth/2, kernelHeight/2}`.
- Always remember the following distinction:
- The [MPSCNNConvolution](mpscnnconvolution.md) class takes weights in the order `weight[outputChannels][kernelHeight][kernelWidth][inputChannels/groups]`.
- The [MPSCNNFullyConnected](mpscnnfullyconnected.md) class takes weights in the order `weight[outputChannels][sourceWidth][sourceHeight][inputChannels]`.
- Initialize [MPSCNNKernel](mpscnnkernel.md) objects once and reuse them.
- You can use [MPSCNNNeuron](mpscnnneuron.md) objects and similar to perform pre-processing of images, such as scaling and resizing.
- Specify a neuron filter with an [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md) object to combine the convolution and neuron operations.
- Use [MPSTemporaryImage](mpstemporaryimage.md) objects for intermediate images that live for a short period of time (one [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object).

[MPSTemporaryImage](mpstemporaryimage.md) objects can reduce the amount of memory used by the CNN by several folds, and similarly reduce the amount of CPU time spent allocating storage and latency between the time a command buffer is committed and when it is actually executed on the GPU.

You cannot read or write to a [MPSTemporaryImage](mpstemporaryimage.md) object using the CPU. Generally, [MPSTemporaryImage](mpstemporaryimage.md) objects should be created as needed and thrown away promptly. Persistent objects should not retain them.

Please be sure to understand the purpose of the [readCount](mpstemporaryimage/readcount.md) property.

- Because the Metal Performance Shaders framework encodes its work in place in your command buffer, you always have the option to insert your own code in between [MPSCNNKernel](mpscnnkernel.md) encodings as a Metal function for tasks not covered by the framework. You do not need to use the Metal Performance Shaders framework for everything.

## Topics

### Arithmetic Layers

- [MPSCNNAdd](mpscnnadd.md): An addition operator.
- [MPSCNNAddGradient](mpscnnaddgradient.md): A gradient addition operator.
- [MPSCNNSubtract](mpscnnsubtract.md): A subtraction operator.
- [MPSCNNSubtractGradient](mpscnnsubtractgradient.md): A gradient subtraction operator.
- [MPSCNNMultiply](mpscnnmultiply.md): A multiply operator.
- [MPSCNNMultiplyGradient](mpscnnmultiplygradient.md): A gradient multiply operator.
- [MPSCNNDivide](mpscnndivide.md): A division operator.
- [MPSCNNArithmetic](mpscnnarithmetic.md): The base class for arithmetic operators.
- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md): The base class for gradient arithmetic operators.
- [MPSCNNArithmeticGradientState](mpscnnarithmeticgradientstate.md): An object that stores the clamp mask used by gradient arithmetic operators.

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.

### Pooling Layers

- [MPSCNNPoolingAverage](mpscnnpoolingaverage.md): An average pooling filter.
- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md): A gradient average pooling filter.
- [MPSCNNPoolingL2Norm](mpscnnpoolingl2norm.md): An L2-norm pooling filter.
- [MPSCNNPoolingMax](mpscnnpoolingmax.md): A max pooling filter.
- [MPSCNNDilatedPoolingMax](mpscnndilatedpoolingmax.md): A dilated max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md): A gradient pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.

### Fully Connected Layers

- [MPSCNNBinaryFullyConnected](mpscnnbinaryfullyconnected.md): A fully connected convolution layer with binary weights and optionally binarized input image.
- [MPSCNNFullyConnected](mpscnnfullyconnected.md): A fully connected convolution layer, also known as an inner product layer.
- [MPSCNNFullyConnectedGradient](mpscnnfullyconnectedgradient.md): A gradient fully connected convolution layer.

### Neuron Layers

- [MPSCNNNeuronAbsolute](mpscnnneuronabsolute.md): An absolute neuron filter.
- [MPSCNNNeuronELU](mpscnnneuronelu.md): A parametric ELU neuron filter.
- [MPSCNNNeuronHardSigmoid](mpscnnneuronhardsigmoid.md): A hard sigmoid neuron filter.
- [MPSCNNNeuronLinear](mpscnnneuronlinear.md): A linear neuron filter.
- [MPSCNNNeuronPReLU](mpscnnneuronprelu.md): A parametric ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronReLUN](mpscnnneuronrelun.md): A ReLUN neuron filter.
- [MPSCNNNeuronReLU](mpscnnneuronrelu.md): A ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronSigmoid](mpscnnneuronsigmoid.md): A sigmoid neuron filter.
- [MPSCNNNeuronSoftPlus](mpscnnneuronsoftplus.md): A parametric softplus neuron filter.
- [MPSCNNNeuronSoftSign](mpscnnneuronsoftsign.md): A softsign neuron filter.
- [MPSCNNNeuronTanH](mpscnnneurontanh.md): A hyperbolic tangent neuron filter.
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md): An exponential neuron filter.
- [MPSCNNNeuronGradient](mpscnnneurongradient.md): A gradient neuron filter.
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md): A logarithm neuron filter.
- [MPSCNNNeuronPower](mpscnnneuronpower.md): A power neuron filter.
- [MPSNNNeuronDescriptor](mpsnnneurondescriptor.md): An object that specifies properties used by a neuron kernel.

### Softmax Layers

- [MPSCNNSoftMax](mpscnnsoftmax.md): A neural transfer function that is useful for classification tasks.
- [MPSCNNLogSoftMax](mpscnnlogsoftmax.md): A neural transfer function that is useful for constructing a loss function to be minimized when training neural networks.
- [MPSCNNLogSoftMaxGradient](mpscnnlogsoftmaxgradient.md): A gradient logarithmic softmax filter.
- [MPSCNNSoftMaxGradient](mpscnnsoftmaxgradient.md): A gradient softmax filter.

### Normalization Layers

- [MPSCNNCrossChannelNormalization](mpscnncrosschannelnormalization.md): A normalization kernel applied across feature channels.
- [MPSCNNCrossChannelNormalizationGradient](mpscnncrosschannelnormalizationgradient.md): A gradient normalization kernel applied across feature channels.
- [MPSCNNLocalContrastNormalization](mpscnnlocalcontrastnormalization.md): A local-contrast normalization kernel.
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md): A gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md): A spatial normalization kernel.
- [MPSCNNSpatialNormalizationGradient](mpscnnspatialnormalizationgradient.md): A gradient spatial normalization kernel.
- [MPSCNNBatchNormalization](mpscnnbatchnormalization.md): A batch normalization kernel.
- [MPSCNNBatchNormalizationGradient](mpscnnbatchnormalizationgradient.md): A gradient batch normalization kernel.
- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md): An object that stores data required to execute batch normalization.
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md): An object that stores mean and variance terms used to execute batch normalization.
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalization](mpscnninstancenormalization.md): An instance normalization kernel.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.

### Upsampling Layers

- [MPSCNNUpsampling](mpscnnupsampling.md): A filter that resamples an existing MPS image.
- [MPSCNNUpsamplingBilinear](mpscnnupsamplingbilinear.md): A bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearest](mpscnnupsamplingnearest.md): A nearest spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradient](mpscnnupsamplingbilineargradient.md): A gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingGradient](mpscnnupsamplinggradient.md): A gradient filter that upsamples an existing Metal Performance Shaders image.
- [MPSCNNUpsamplingNearestGradient](mpscnnupsamplingnearestgradient.md): A gradient upsampling filter that samples the pixel nearest to the source when upsampling to the destination pixel.

### Dropout Layers

- [MPSCNNDropout](mpscnndropout.md): A dropout filter.
- [MPSCNNDropoutGradient](mpscnndropoutgradient.md): A gradient dropout filter.
- [MPSCNNDropoutGradientState](mpscnndropoutgradientstate.md): A class that stores the mask used by dropout and gradient dropout filters.

### Loss Layers

- [MPSCNNLoss](mpscnnloss.md): A kernel that computes the loss and loss gradient between specified predictions and labels.
- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.

### Reduction Layers

- [MPSNNReduceRowMax](mpsnnreducerowmax.md): A reduction filter that returns the maximum value for each row in an image.
- [MPSNNReduceRowMin](mpsnnreducerowmin.md): A reduction filter that returns the minimum value for each row in an image.
- [MPSNNReduceRowSum](mpsnnreducerowsum.md): A reduction filter that returns the sum of all values for each row in an image.
- [MPSNNReduceRowMean](mpsnnreducerowmean.md): A reduction filter that returns the mean value for each row in an image.
- [MPSNNReduceColumnMax](mpsnnreducecolumnmax.md): A reduction filter that returns the maximum value for each column in an image.
- [MPSNNReduceColumnMin](mpsnnreducecolumnmin.md): A reduction filter that returns the minimum value for each column in an image.
- [MPSNNReduceColumnSum](mpsnnreducecolumnsum.md): A reduction filter that returns the sum of all values for each column in an image.
- [MPSNNReduceColumnMean](mpsnnreducecolumnmean.md): A reduction filter that returns the mean value for each column in an image.
- [MPSNNReduceFeatureChannelsMax](mpsnnreducefeaturechannelsmax.md): A reduction filter that returns the maximum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsMin](mpsnnreducefeaturechannelsmin.md): A reduction filter that returns the minimum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsSum](mpsnnreducefeaturechannelssum.md): A reduction filter that returns the sum of all values for each feature channel in an image.
- [MPSNNReduceFeatureChannelsMean](mpsnnreducefeaturechannelsmean.md): A reduction filter that returns the mean value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMax](mpsnnreducefeaturechannelsargumentmax.md): A reduction filter that returns the index of the location of the maximum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMin](mpsnnreducefeaturechannelsargumentmin.md): A reduction filter that returns the index of the location of the minimum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsAndWeightsSum](mpsnnreducefeaturechannelsandweightssum.md): A reduction filter that returns the weighted sum of all values for each feature channel in an image.
- [MPSNNReduceFeatureChannelsAndWeightsMean](mpsnnreducefeaturechannelsandweightsmean.md): A reduction filter that returns the weighted sum for each feature channel in an image.
- [MPSNNReduceUnary](mpsnnreduceunary.md): The base class for unary reduction filters.
- [MPSNNReduceBinary](mpsnnreducebinary.md): The base class for binary reduction filters.

### Reshape Layer

- [MPSNNReshape](mpsnnreshape.md): The base class for reshape operations.

### Slice Layer

- [MPSNNSlice](mpsnnslice.md): A kernel that extracts a slice from an image.

### Optimization Layers

- [MPSNNOptimizerAdam](mpsnnoptimizeradam.md): An optimization layer that performs an Adam pdate.
- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md): An optimization layer that performs a root mean square propagation update.
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md): An optimization layer that performs a gradient descent with an optional momentum update.
- [MPSNNOptimizer](mpsnnoptimizer.md): The base class for optimization layers.
- [MPSNNOptimizerDescriptor](mpsnnoptimizerdescriptor.md): An object that specifies properties used by an optimizer kernel.

### Layer Base Classes

- [MPSCNNKernel](mpscnnkernel.md): Base class for neural network layers.
- [MPSCNNBinaryKernel](mpscnnbinarykernel.md): A convolution neural network kernel.
- [MPSCNNGradientKernel](mpscnngradientkernel.md): The base class for gradient layers.

### Predefined Padding Policies

- [MPSNNDefaultPadding](mpsnndefaultpadding.md): A class that provides predefined padding policies for common tasks.

## See Also

### Neural Networks

- [Training a Neural Network with Metal Performance Shaders](training-a-neural-network-with-metal-performance-shaders.md): Use an MPS neural network graph to train a simple neural network digit classifier.
- [MPSImage](mpsimage.md): A texture that may have more than four channels for use in convolutional neural networks.
- [MPSTemporaryImage](mpstemporaryimage.md): A texture for use in convolutional neural networks that stores transient data to be used and discarded promptly.
- [Objects that Simplify the Creation of Neural Networks](objects-that-simplify-the-creation-of-neural-networks.md): Simplify the creation of neural networks using networks of filter, image, and state nodes.
- [Recurrent Neural Networks](recurrent-neural-networks.md): Create recurrent neural networks.
