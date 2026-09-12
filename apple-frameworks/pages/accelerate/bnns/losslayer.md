> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/losslayer](https://developer.apple.com/documentation/accelerate/bnns/losslayer)

# BNNS.LossLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a loss filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class LossLayer
```

## Topics

### Creating a Loss Layer

- [init(input:output:lossFunction:lossReduction:filterParameters:)](losslayer/init%28input_output_lossfunction_lossreduction_filterparameters_%29.md): Deprecated. Returns a new loss layer.

### Specifying a Loss Function

- [BNNS.LossFunction](lossfunction.md): Deprecated. Constants that describe loss functions.

### Specifying a Loss Reduction Function

- [BNNS.LossReduction](lossreduction.md): Deprecated. An enumeration that describes loss reduction functions.

### Applying a Loss Layer

- [apply(batchSize:input:labels:output:generatingInputGradient:)](losslayer/apply%28batchsize_input_labels_output_generatinginputgradient_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.

### Instance Methods

- [apply(batchSize:input:labels:output:weights:broadcastsWeights:generatingInputGradient:)](losslayer/apply%28batchsize_input_labels_output_weights_broadcastsweights_generatinginputgradient_%29.md): Deprecated.

## Relationships

### Inherits From

- [BNNS.Layer](layer.md)

## See Also

### Loss layers

- [BNNSLossFunction](../bnnslossfunction.md): Constants that describe loss functions.
- [BNNSLossReductionFunction](../bnnslossreductionfunction.md): Constants that describe reduction functions used by a loss layer.
- [BNNSLayerParametersLossBase](../bnnslayerparameterslossbase.md): Deprecated. A structure that contains the parameters of a loss layer.
- [BNNSLayerParametersLossHuber](../bnnslayerparameterslosshuber.md): Deprecated. A structure that contains the parameters of a Huber loss layer.
- [BNNSLayerParametersLossSigmoidCrossEntropy](../bnnslayerparameterslosssigmoidcrossentropy.md): Deprecated. A structure that contains the parameters of a sigmoid cross entropy loss layer.
- [BNNSLayerParametersLossSoftmaxCrossEntropy](../bnnslayerparameterslosssoftmaxcrossentropy.md): Deprecated. A structure that contains the parameters of a softmax cross entropy loss layer.
- [BNNSLayerParametersLossYolo](../bnnslayerparameterslossyolo.md): Deprecated. A structure that contains the parameters of a You Only Look Once (YOLO) loss layer.
- [BNNSFilterCreateLayerLoss(\_:\_:)](../bnnsfiltercreatelayerloss%28____%29.md): Deprecated. Returns a new loss layer.
- [BNNSLossFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnslossfilterapplybatch%28______________________%29.md): Deprecated. Applies a loss filter to a set of input objects, writing the result to a set of output objects.
- [BNNSLossFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnslossfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a loss filter backward to generate gradients.
