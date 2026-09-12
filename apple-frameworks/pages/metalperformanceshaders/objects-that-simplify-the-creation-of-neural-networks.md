> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/objects-that-simplify-the-creation-of-neural-networks](https://developer.apple.com/documentation/metalperformanceshaders/objects-that-simplify-the-creation-of-neural-networks)

# Objects that Simplify the Creation of Neural Networks

**Interface languages:** Swift, Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** API Collection

Simplify the creation of neural networks using networks of filter, image, and state nodes.

<a id="overview"></a>

## Overview

Graphs in Metal Performance Shaders offer a higher level graph API, intended to simplify the creation of neural networks. The graph is a network of [MPSNNFilterNode](mpsnnfilternode.md), [MPSNNImageNode](mpsnnimagenode.md) and [MPSNNStateNode](mpsnnstatenode.md) objects.

- [MPSNNImageNode](mpsnnimagenode.md) represents [MPSImage](mpsimage.md) or [MPSTemporaryImage](mpstemporaryimage.md) objects
- [MPSNNFilterNode](mpsnnfilternode.md) represents [MPSCNNKernel](mpscnnkernel.md) objects—each of the lower level [MPSCNNKernel](mpscnnkernel.md) subclasses has an associated object that is a subclass of the [MPSNNFilterNode](mpsnnfilternode.md)
- [MPSNNStateNode](mpsnnstatenode.md) represents [MPSState](mpsstate.md) objects

## Topics

### Neural Network Graphs

- [MPSNNGraph](mpsnngraph.md): An optimized representation of a graph of neural network image and filter nodes.
- [MPSNNImageNode](mpsnnimagenode.md): A placeholder node denoting the position of a neural network image in a graph.
- [MPSHandle](mpshandle.md): The protocol that provides resource identification.

### Arithmetic Layer Nodes

- [MPSNNAdditionNode](mpsnnadditionnode.md): A representation of an addition operator.
- [MPSNNAdditionGradientNode](mpsnnadditiongradientnode.md): A representation of a gradient addition operator.
- [MPSNNSubtractionNode](mpsnnsubtractionnode.md): A representation of an subtraction operator.
- [MPSNNSubtractionGradientNode](mpsnnsubtractiongradientnode.md): A representation of a gradient subtraction operator.
- [MPSNNMultiplicationNode](mpsnnmultiplicationnode.md): A representation of a multiplication operator.
- [MPSNNMultiplicationGradientNode](mpsnnmultiplicationgradientnode.md): A representation of a gradient multiplication operator.
- [MPSNNDivisionNode](mpsnndivisionnode.md): A representation of a division operator.
- [MPSNNBinaryArithmeticNode](mpsnnbinaryarithmeticnode.md): Virtual base class for basic arithmetic nodes.
- [MPSNNArithmeticGradientNode](mpsnnarithmeticgradientnode.md): A representation of the base class for gradient arithmetic operators.
- [MPSNNArithmeticGradientStateNode](mpsnnarithmeticgradientstatenode.md): A representation of the clamp mask used by gradient arithmetic operators.

### Convolution Layer Nodes

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md): A representation of a convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md): A representation of a convolution kernel.
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md): A representation of a transposed convolution.
- [MPSCNNConvolutionGradientNode](mpscnnconvolutiongradientnode.md): A representation of a gradient convolution kernel.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.
- [MPSCNNCrossChannelNormalizationGradientNode](mpscnncrosschannelnormalizationgradientnode.md): A representation of a gradient normalization kernel applied across feature channels.

### Pooling Layer Nodes

- [MPSCNNPoolingAverageNode](mpscnnpoolingaveragenode.md): A representation of an average pooling filter.
- [MPSCNNDilatedPoolingMaxNode](mpscnndilatedpoolingmaxnode.md): A representation of a dilated max pooling filter.
- [MPSCNNPoolingL2NormNode](mpscnnpoolingl2normnode.md): A representation of a L2-norm pooling filter.
- [MPSCNNPoolingMaxNode](mpscnnpoolingmaxnode.md): A representation of a max pooling filter.
- [MPSCNNPoolingNode](mpscnnpoolingnode.md): A representation of a MPS CNN pooling kernel.
- [MPSCNNDilatedPoolingMaxGradientNode](mpscnndilatedpoolingmaxgradientnode.md): A representation of a gradient dilated max pooling filter.
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md): A representation of a gradient average pooling filter.
- [MPSCNNPoolingGradientNode](mpscnnpoolinggradientnode.md): A representation of a gradient pooling kernel.
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md): A representation of a gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md): A representation of a gradient max pooling filter.

### Fully Connected Layer Nodes

- [MPSCNNBinaryFullyConnectedNode](mpscnnbinaryfullyconnectednode.md): A representation of a fully connected convolution layer with binary weights and optionally binarized input image.
- [MPSCNNFullyConnectedNode](mpscnnfullyconnectednode.md): A representation of a fully connected convolution layer, also known as an inner product layer.

### Neuron Layer Nodes

- [MPSCNNNeuronAbsoluteNode](mpscnnneuronabsolutenode.md): A representation of an absolute neuron filter.
- [MPSCNNNeuronELUNode](mpscnnneuronelunode.md): A representation of a parametric ELU neuron filter.
- [MPSCNNNeuronHardSigmoidNode](mpscnnneuronhardsigmoidnode.md): A representation of a hard sigmoid neuron filter.
- [MPSCNNNeuronLinearNode](mpscnnneuronlinearnode.md): A representation of a linear neuron filter.
- [MPSCNNNeuronPReLUNode](mpscnnneuronprelunode.md): A representation a PReLU neuron filter.
- [MPSCNNNeuronReLUNNode](mpscnnneuronrelunnode.md): A representation a ReLUN neuron filter.
- [MPSCNNNeuronReLUNode](mpscnnneuronrelunode.md): A representation a ReLU neuron filter.
- [MPSCNNNeuronSigmoidNode](mpscnnneuronsigmoidnode.md): A representation of a sigmoid neuron filter.
- [MPSCNNNeuronSoftPlusNode](mpscnnneuronsoftplusnode.md): A representation of a parametric softplus neuron filter.
- [MPSCNNNeuronSoftSignNode](mpscnnneuronsoftsignnode.md): A representation of a softsign neuron filter.
- [MPSCNNNeuronTanHNode](mpscnnneurontanhnode.md): A representation of a hyperbolic tangent neuron filter.
- [MPSCNNNeuronExponentialNode](mpscnnneuronexponentialnode.md): A representation of an exponential neuron filter.
- [MPSCNNNeuronGradientNode](mpscnnneurongradientnode.md): A representation of a gradient exponential neuron filter.
- [MPSCNNNeuronLogarithmNode](mpscnnneuronlogarithmnode.md): A representation of a logarithm neuron filter.
- [MPSCNNNeuronPowerNode](mpscnnneuronpowernode.md): A representation of a power neuron filter.
- [MPSCNNNeuronNode](mpscnnneuronnode.md): The virtual base class for MPS CNN neuron nodes.

### Softmax Layer Nodes

- [MPSCNNSoftMaxNode](mpscnnsoftmaxnode.md): A representation of a softmax filter.
- [MPSCNNLogSoftMaxNode](mpscnnlogsoftmaxnode.md): A representation of a logarithmic softmax filter kernel.
- [MPSCNNLogSoftMaxGradientNode](mpscnnlogsoftmaxgradientnode.md): A representation of a gradient logarithmic softmax filter kernel.
- [MPSCNNSoftMaxGradientNode](mpscnnsoftmaxgradientnode.md): A representation of a gradient softmax filter.

### Normalization Layer Nodes

- [MPSCNNCrossChannelNormalizationNode](mpscnncrosschannelnormalizationnode.md): A representation of a normalization kernel across feature channels.
- [MPSCNNLocalContrastNormalizationNode](mpscnnlocalcontrastnormalizationnode.md): A representation of a local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationNode](mpscnnspatialnormalizationnode.md): A representation of a spatial normalization kernel.
- [MPSCNNBatchNormalizationGradientNode](mpscnnbatchnormalizationgradientnode.md): A representation of a gradient batch normalization kernel.
- [MPSCNNBatchNormalizationNode](mpscnnbatchnormalizationnode.md): A representation of a batch normalization kernel.
- [MPSCNNBatchNormalizationDataSource](mpscnnbatchnormalizationdatasource.md): A protocol that defines methods that a batch normalization state uses to initialize scale factors, bias terms, and batch statistics.
- [MPSCNNInstanceNormalizationGradientNode](mpscnninstancenormalizationgradientnode.md): A representation of a gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationDataSource](mpscnninstancenormalizationdatasource.md): A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.

### Upsampling Layer Nodes

- [MPSCNNUpsamplingBilinearNode](mpscnnupsamplingbilinearnode.md): A representation of a bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearestNode](mpscnnupsamplingnearestnode.md): A representation of a nearest spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradientNode](mpscnnupsamplingbilineargradientnode.md): A representation of a gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearestGradientNode](mpscnnupsamplingnearestgradientnode.md): A representation of a gradient nearest spatial upsampling filter.

### Resampling Nodes

- [MPSNNBilinearScaleNode](mpsnnbilinearscalenode.md): A representation of a bilinear resampling filter.
- [MPSNNLanczosScaleNode](mpsnnlanczosscalenode.md): A representation of a Lanczos resampling filter.
- [MPSNNScaleNode](mpsnnscalenode.md): Abstract node representing an image resampling filter.
- [MPSImageTransformProvider](mpsimagetransformprovider.md): A general interface for objects that provide image resampling.

### Dropout Layer Nodes

- [MPSCNNDropoutNode](mpscnndropoutnode.md): A representation of a dropout filter.
- [MPSCNNDropoutGradientNode](mpscnndropoutgradientnode.md): A representation of a gradient dropout filter.

### Kernel Concatenation Nodes

- [MPSNNConcatenationNode](mpsnnconcatenationnode.md): A representation of the results from one or more kernels.
- [MPSNNConcatenationGradientNode](mpsnnconcatenationgradientnode.md): A representation of the results from one or more gradient kernels.

### Loss Layer Nodes

- [MPSCNNLossNode](mpscnnlossnode.md): A representation of a loss kernel.
- [MPSCNNYOLOLossNode](mpscnnyololossnode.md): A representation of a YOLO loss kernel.
- [MPSNNLabelsNode](mpsnnlabelsnode.md): A placeholder node denoting the per-element weight buffer used by loss and gradient loss kernels.

### Filter Node Base Classes

- [MPSNNFilterNode](mpsnnfilternode.md): A placeholder node denoting a neural network filter stage.
- [MPSNNGradientFilterNode](mpsnngradientfilternode.md): A representation of a gradient filter.

### Protocols

- [MPSNNTrainableNode](mpsnntrainablenode.md): A protocol that defines methods that determine whether and when neural network training parameters are updated.

## See Also

### Neural Networks

- [Training a Neural Network with Metal Performance Shaders](training-a-neural-network-with-metal-performance-shaders.md): Use an MPS neural network graph to train a simple neural network digit classifier.
- [MPSImage](mpsimage.md): A texture that may have more than four channels for use in convolutional neural networks.
- [MPSTemporaryImage](mpstemporaryimage.md): A texture for use in convolutional neural networks that stores transient data to be used and discarded promptly.
- [Convolutional Neural Network Kernels](convolutional-neural-network-kernels.md): Build neural networks with layers.
- [Recurrent Neural Networks](recurrent-neural-networks.md): Create recurrent neural networks.
