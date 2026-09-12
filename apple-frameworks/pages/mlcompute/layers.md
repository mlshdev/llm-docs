> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/layers](https://developer.apple.com/documentation/mlcompute/layers)

# Layers (Swift)

**Framework:** ML Compute  
**Kind:** API Collection

Create and inspect layers that encapsulate operations and configuration details to receive, process, and output tensors.

## Topics

### Activation Layers

- [MLCActivationLayer](mlcactivationlayer.md): Deprecated. A layer that applies an activation function to the source tensor and produces an output.
- [MLCMultiheadAttentionLayer](mlcmultiheadattentionlayer.md): Deprecated. A multihead, scaled dot-product attention layer that attends to one or more entries in the input key-value pairs.
- [MLCSoftmaxLayer](mlcsoftmaxlayer.md): Deprecated. A layer that outputs a probability distribution as attention weights.

### Math Layers

- [MLCArithmeticLayer](mlcarithmeticlayer.md): Deprecated. A layer that performs an arithmetic operation.
- [MLCReductionLayer](mlcreductionlayer.md): Deprecated. A layer that reduces tensor values across a specific dimension to a scalar value.
- [MLCMatMulLayer](mlcmatmullayer.md): Deprecated. A layer that multiplies matrices.
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.

### Transformation Layers

- [MLCTransposeLayer](mlctransposelayer.md): Deprecated. A layer that permutes the dimensions you specify.
- [MLCConcatenationLayer](mlcconcatenationlayer.md): Deprecated. A layer that combines tensors into a single tensor.
- [MLCReshapeLayer](mlcreshapelayer.md): Deprecated. A layer that reshapes a tensor with the shape you specify.
- [MLCSliceLayer](mlcslicelayer.md): Deprecated. A layer that extracts a slice from a tensor.
- [MLCSplitLayer](mlcsplitlayer.md): Deprecated. A layer that splits a tensor value into a list of subtensors.
- [MLCPaddingLayer](mlcpaddinglayer.md): Deprecated. A layer that pads a tensor with the padding sizes you specify.
- [MLCScatterLayer](mlcscatterlayer.md): Deprecated. A layer that updates the output at an index you specify.
- [MLCSelectionLayer](mlcselectionlayer.md): Deprecated. A layer for selecting elements from two tensors.
- [MLCGatherLayer](mlcgatherlayer.md): Deprecated. A layer that fetches data at the locations you specify.

### Normalization Layers

- [MLCLayerNormalizationLayer](mlclayernormalizationlayer.md): Deprecated. A layer that applies layer normalization over inputs.
- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md): Deprecated. A layer that normalizes a batch of inputs.
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md): Deprecated. A layer that divides the channels into groups for normalization.
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md): Deprecated. A layer that normalizes all features of one channel.
- [MLCDropoutLayer](mlcdropoutlayer.md): Deprecated. A layer that deactivates neurons randomly to avoid overfitting.

### Convolution and Recurrent Layers

- [MLCConvolutionLayer](mlcconvolutionlayer.md): Deprecated. A layer that applies a convolution over a signal.
- [MLCLSTMLayer](mlclstmlayer.md): Deprecated. A layer that represents long short-term memory (LSTM) networks.
- [MLCPoolingLayer](mlcpoolinglayer.md): Deprecated. A layer that summarizes the average presence of a feature.
- [MLCUpsampleLayer](mlcupsamplelayer.md): Deprecated. A layer that applies upsampling with the shape you specify.
- [MLCEmbeddingLayer](mlcembeddinglayer.md): Deprecated. A layer that stores a word embedding.

### Loss Layers

- [MLCLossLayer](mlclosslayer.md): Deprecated. A layer that estimates the inaccuracies of the model to reduce the loss on the next evaluation.
- [MLCYOLOLossLayer](mlcyololosslayer.md): Deprecated. A layer that estimates loss for the YOLO algorithm.

### Base Layer

- [MLCLayer](mlclayer.md): Deprecated. The base class for all framework layers.

### Supporting Types

- [MLCPaddingPolicy](mlcpaddingpolicy-3hic8.md): Deprecated. A padding policy that you specify for a convolution or pooling layer.
- [MLCPaddingType](mlcpaddingtype.md): Deprecated. A padding type that you specify for a padding layer.

## See Also

### Components

- [MLCTensor](mlctensor.md): Deprecated. The data object you use throughout the framework.
- [MLCPlatform](mlcplatform.md): Deprecated. A utility class for setting global properties in the framework.
- [Training and Validation](training-and-validation.md): Create, train, and validate a graph to produce acceptable prediction results.

# Layers (Objective-C)

**Framework:** ML Compute  
**Kind:** API Collection

Create and inspect layers that encapsulate operations and configuration details to receive, process, and output tensors.

## Topics

### Activation Layers

- [MLCActivationLayer](mlcactivationlayer.md): Deprecated. A layer that applies an activation function to the source tensor and produces an output.
- [MLCMultiheadAttentionLayer](mlcmultiheadattentionlayer.md): Deprecated. A multihead, scaled dot-product attention layer that attends to one or more entries in the input key-value pairs.
- [MLCSoftmaxLayer](mlcsoftmaxlayer.md): Deprecated. A layer that outputs a probability distribution as attention weights.

### Math Layers

- [MLCArithmeticLayer](mlcarithmeticlayer.md): Deprecated. A layer that performs an arithmetic operation.
- [MLCReductionLayer](mlcreductionlayer.md): Deprecated. A layer that reduces tensor values across a specific dimension to a scalar value.
- [MLCMatMulLayer](mlcmatmullayer.md): Deprecated. A layer that multiplies matrices.
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.

### Transformation Layers

- [MLCTransposeLayer](mlctransposelayer.md): Deprecated. A layer that permutes the dimensions you specify.
- [MLCConcatenationLayer](mlcconcatenationlayer.md): Deprecated. A layer that combines tensors into a single tensor.
- [MLCReshapeLayer](mlcreshapelayer.md): Deprecated. A layer that reshapes a tensor with the shape you specify.
- [MLCSliceLayer](mlcslicelayer.md): Deprecated. A layer that extracts a slice from a tensor.
- [MLCSplitLayer](mlcsplitlayer.md): Deprecated. A layer that splits a tensor value into a list of subtensors.
- [MLCPaddingLayer](mlcpaddinglayer.md): Deprecated. A layer that pads a tensor with the padding sizes you specify.
- [MLCScatterLayer](mlcscatterlayer.md): Deprecated. A layer that updates the output at an index you specify.
- [MLCSelectionLayer](mlcselectionlayer.md): Deprecated. A layer for selecting elements from two tensors.
- [MLCGatherLayer](mlcgatherlayer.md): Deprecated. A layer that fetches data at the locations you specify.

### Normalization Layers

- [MLCLayerNormalizationLayer](mlclayernormalizationlayer.md): Deprecated. A layer that applies layer normalization over inputs.
- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md): Deprecated. A layer that normalizes a batch of inputs.
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md): Deprecated. A layer that divides the channels into groups for normalization.
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md): Deprecated. A layer that normalizes all features of one channel.
- [MLCDropoutLayer](mlcdropoutlayer.md): Deprecated. A layer that deactivates neurons randomly to avoid overfitting.

### Convolution and Recurrent Layers

- [MLCConvolutionLayer](mlcconvolutionlayer.md): Deprecated. A layer that applies a convolution over a signal.
- [MLCLSTMLayer](mlclstmlayer.md): Deprecated. A layer that represents long short-term memory (LSTM) networks.
- [MLCPoolingLayer](mlcpoolinglayer.md): Deprecated. A layer that summarizes the average presence of a feature.
- [MLCUpsampleLayer](mlcupsamplelayer.md): Deprecated. A layer that applies upsampling with the shape you specify.
- [MLCEmbeddingLayer](mlcembeddinglayer.md): Deprecated. A layer that stores a word embedding.

### Loss Layers

- [MLCLossLayer](mlclosslayer.md): Deprecated. A layer that estimates the inaccuracies of the model to reduce the loss on the next evaluation.
- [MLCYOLOLossLayer](mlcyololosslayer.md): Deprecated. A layer that estimates loss for the YOLO algorithm.

### Base Layer

- [MLCLayer](mlclayer.md): Deprecated. The base class for all framework layers.

### Supporting Types

- [MLCPaddingType](mlcpaddingtype.md): Deprecated. A padding type that you specify for a padding layer.

## See Also

### Components

- [MLCTensor](mlctensor.md): Deprecated. The data object you use throughout the framework.
- [MLCPlatform](mlcplatform.md): Deprecated. A utility class for setting global properties in the framework.
- [Training and Validation](training-and-validation.md): Create, train, and validate a graph to produce acceptable prediction results.
