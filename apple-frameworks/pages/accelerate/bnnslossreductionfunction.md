> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslossreductionfunction](https://developer.apple.com/documentation/accelerate/bnnslossreductionfunction)

# BNNSLossReductionFunction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe reduction functions used by a loss layer.

## Declaration

```swift
struct BNNSLossReductionFunction
```

## Topics

### Reduction Functions

- [rawValue](bnnslossreductionfunction/rawvalue.md)
- [init(\_:)](bnnslossreductionfunction/init%28__%29.md)
- [init(rawValue:)](bnnslossreductionfunction/init%28rawvalue_%29.md)
- [BNNSLossReductionMean](bnnslossreductionmean.md): Sums the loss of all samples in the batch and divides by the number of samples.
- [BNNSLossReductionNonZeroWeightMean](bnnslossreductionnonzeroweightmean.md): Sums the loss of all samples in the batch and divides by the number of non-zero weights.
- [BNNSLossReductionSum](bnnslossreductionsum.md): Sums the loss of all samples in the batch.
- [BNNSLossReductionWeightedMean](bnnslossreductionweightedmean.md): Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNSLossReductionNone](bnnslossreductionnone.md): Returns the loss without any reduction.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Loss layers

- [BNNS.LossLayer](bnns/losslayer.md): Deprecated. A layer object that wraps a loss filter and manages its deinitialization.
- [BNNSLossFunction](bnnslossfunction.md): Constants that describe loss functions.
- [BNNSLayerParametersLossBase](bnnslayerparameterslossbase.md): Deprecated. A structure that contains the parameters of a loss layer.
- [BNNSLayerParametersLossHuber](bnnslayerparameterslosshuber.md): Deprecated. A structure that contains the parameters of a Huber loss layer.
- [BNNSLayerParametersLossSigmoidCrossEntropy](bnnslayerparameterslosssigmoidcrossentropy.md): Deprecated. A structure that contains the parameters of a sigmoid cross entropy loss layer.
- [BNNSLayerParametersLossSoftmaxCrossEntropy](bnnslayerparameterslosssoftmaxcrossentropy.md): Deprecated. A structure that contains the parameters of a softmax cross entropy loss layer.
- [BNNSLayerParametersLossYolo](bnnslayerparameterslossyolo.md): Deprecated. A structure that contains the parameters of a You Only Look Once (YOLO) loss layer.
- [BNNSFilterCreateLayerLoss(\_:\_:)](bnnsfiltercreatelayerloss%28____%29.md): Deprecated. Returns a new loss layer.
- [BNNSLossFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnslossfilterapplybatch%28______________________%29.md): Deprecated. Applies a loss filter to a set of input objects, writing the result to a set of output objects.
- [BNNSLossFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnslossfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a loss filter backward to generate gradients.

# BNNSLossReductionFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe reduction functions used by a loss layer.

## Declaration

```objectivec
typedef enum { ... } BNNSLossReductionFunction;
```

## Topics

### Reduction Functions

- [BNNSLossReductionMean](bnnslossreductionmean.md): Sums the loss of all samples in the batch and divides by the number of samples.
- [BNNSLossReductionNonZeroWeightMean](bnnslossreductionnonzeroweightmean.md): Sums the loss of all samples in the batch and divides by the number of non-zero weights.
- [BNNSLossReductionSum](bnnslossreductionsum.md): Sums the loss of all samples in the batch.
- [BNNSLossReductionWeightedMean](bnnslossreductionweightedmean.md): Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNSLossReductionNone](bnnslossreductionnone.md): Returns the loss without any reduction.

## See Also

### Loss layers

- [BNNSLossFunction](bnnslossfunction.md): Constants that describe loss functions.
- [BNNSLayerParametersLossBase](bnnslayerparameterslossbase.md): Deprecated. A structure that contains the parameters of a loss layer.
- [BNNSLayerParametersLossHuber](bnnslayerparameterslosshuber.md): Deprecated. A structure that contains the parameters of a Huber loss layer.
- [BNNSLayerParametersLossSigmoidCrossEntropy](bnnslayerparameterslosssigmoidcrossentropy.md): Deprecated. A structure that contains the parameters of a sigmoid cross entropy loss layer.
- [BNNSLayerParametersLossSoftmaxCrossEntropy](bnnslayerparameterslosssoftmaxcrossentropy.md): Deprecated. A structure that contains the parameters of a softmax cross entropy loss layer.
- [BNNSLayerParametersLossYolo](bnnslayerparameterslossyolo.md): Deprecated. A structure that contains the parameters of a You Only Look Once (YOLO) loss layer.
- [BNNSFilterCreateLayerLoss](bnnsfiltercreatelayerloss%28____%29.md): Deprecated. Returns a new loss layer.
- [BNNSLossFilterApplyBatch](bnnslossfilterapplybatch%28______________________%29.md): Deprecated. Applies a loss filter to a set of input objects, writing the result to a set of output objects.
- [BNNSLossFilterApplyBackwardBatch](bnnslossfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a loss filter backward to generate gradients.
