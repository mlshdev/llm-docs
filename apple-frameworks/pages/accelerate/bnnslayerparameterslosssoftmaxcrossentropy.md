> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterslosssoftmaxcrossentropy](https://developer.apple.com/documentation/accelerate/bnnslayerparameterslosssoftmaxcrossentropy)

# BNNSLayerParametersLossSoftmaxCrossEntropy (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a softmax cross entropy loss layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersLossSoftmaxCrossEntropy
```

## Topics

### Initializers

- [init(function:i_desc:o_desc:reduction:label_smooth:)](bnnslayerparameterslosssoftmaxcrossentropy/init%28function_i_desc_o_desc_reduction_label_smooth_%29.md): Deprecated. Returns a new softmax cross entropy loss layer parameters structure from the specified parameters.
- [init()](bnnslayerparameterslosssoftmaxcrossentropy/init%28%29.md): Deprecated. Returns a new softmax cross entropy loss layer parameters structure.

### Instance Properties

- [function](bnnslayerparameterslosssoftmaxcrossentropy/function.md): Deprecated. The function that’s used to compute loss.
- [i_desc](bnnslayerparameterslosssoftmaxcrossentropy/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparameterslosssoftmaxcrossentropy/o_desc.md): Deprecated. The descriptor of the output.
- [reduction](bnnslayerparameterslosssoftmaxcrossentropy/reduction.md): Deprecated. The function that’s used to reduce the computed loss.
- [label_smooth](bnnslayerparameterslosssoftmaxcrossentropy/label_smooth.md): Deprecated. A value that defines the smoothing that the loss function applies to the labels.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Loss layers

- [BNNS.LossLayer](bnns/losslayer.md): Deprecated. A layer object that wraps a loss filter and manages its deinitialization.
- [BNNSLossFunction](bnnslossfunction.md): Constants that describe loss functions.
- [BNNSLossReductionFunction](bnnslossreductionfunction.md): Constants that describe reduction functions used by a loss layer.
- [BNNSLayerParametersLossBase](bnnslayerparameterslossbase.md): Deprecated. A structure that contains the parameters of a loss layer.
- [BNNSLayerParametersLossHuber](bnnslayerparameterslosshuber.md): Deprecated. A structure that contains the parameters of a Huber loss layer.
- [BNNSLayerParametersLossSigmoidCrossEntropy](bnnslayerparameterslosssigmoidcrossentropy.md): Deprecated. A structure that contains the parameters of a sigmoid cross entropy loss layer.
- [BNNSLayerParametersLossYolo](bnnslayerparameterslossyolo.md): Deprecated. A structure that contains the parameters of a You Only Look Once (YOLO) loss layer.
- [BNNSFilterCreateLayerLoss(\_:\_:)](bnnsfiltercreatelayerloss%28____%29.md): Deprecated. Returns a new loss layer.
- [BNNSLossFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnslossfilterapplybatch%28______________________%29.md): Deprecated. Applies a loss filter to a set of input objects, writing the result to a set of output objects.
- [BNNSLossFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnslossfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a loss filter backward to generate gradients.

# BNNSLayerParametersLossSoftmaxCrossEntropy (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a softmax cross entropy loss layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersLossSoftmaxCrossEntropy;
```

## Topics

### Instance Properties

- [function](bnnslayerparameterslosssoftmaxcrossentropy/function.md): Deprecated. The function that’s used to compute loss.
- [i_desc](bnnslayerparameterslosssoftmaxcrossentropy/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparameterslosssoftmaxcrossentropy/o_desc.md): Deprecated. The descriptor of the output.
- [reduction](bnnslayerparameterslosssoftmaxcrossentropy/reduction.md): Deprecated. The function that’s used to reduce the computed loss.
- [label_smooth](bnnslayerparameterslosssoftmaxcrossentropy/label_smooth.md): Deprecated. A value that defines the smoothing that the loss function applies to the labels.

## See Also

### Loss layers

- [BNNSLossFunction](bnnslossfunction.md): Constants that describe loss functions.
- [BNNSLossReductionFunction](bnnslossreductionfunction.md): Constants that describe reduction functions used by a loss layer.
- [BNNSLayerParametersLossBase](bnnslayerparameterslossbase.md): Deprecated. A structure that contains the parameters of a loss layer.
- [BNNSLayerParametersLossHuber](bnnslayerparameterslosshuber.md): Deprecated. A structure that contains the parameters of a Huber loss layer.
- [BNNSLayerParametersLossSigmoidCrossEntropy](bnnslayerparameterslosssigmoidcrossentropy.md): Deprecated. A structure that contains the parameters of a sigmoid cross entropy loss layer.
- [BNNSLayerParametersLossYolo](bnnslayerparameterslossyolo.md): Deprecated. A structure that contains the parameters of a You Only Look Once (YOLO) loss layer.
- [BNNSFilterCreateLayerLoss](bnnsfiltercreatelayerloss%28____%29.md): Deprecated. Returns a new loss layer.
- [BNNSLossFilterApplyBatch](bnnslossfilterapplybatch%28______________________%29.md): Deprecated. Applies a loss filter to a set of input objects, writing the result to a set of output objects.
- [BNNSLossFilterApplyBackwardBatch](bnnslossfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a loss filter backward to generate gradients.
