> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslossfunction/init(_:)](https://developer.apple.com/documentation/accelerate/bnnslossfunction/init(_:))

# init(\_:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
init(_ rawValue: UInt32)
```

## See Also

### Loss Functions

- [init(rawValue:)](init%28rawvalue_%29.md)
- [rawValue](rawvalue.md)
- [BNNSLossFunctionCategoricalCrossEntropy](../bnnslossfunctioncategoricalcrossentropy.md): Performs categorical cross entropy computation between input prediction and labels.
- [BNNSLossFunctionCosineDistance](../bnnslossfunctioncosinedistance.md): Performs cosine distance loss computation between input predictions and labels.
- [BNNSLossFunctionHinge](../bnnslossfunctionhinge.md): Performs Hinge loss computation between labels and unbounded zero-centered binary predictions.
- [BNNSLossFunctionHuber](../bnnslossfunctionhuber.md): Huber loss computation between input logits and one-hot encoded labels.
- [BNNSLossFunctionLog](../bnnslossfunctionlog.md): Log loss computation between labels and predictions.
- [BNNSLossFunctionMeanAbsoluteError](../bnnslossfunctionmeanabsoluteerror.md): Mean absolute error (MAE) computation between input prediction and labels.
- [BNNSLossFunctionMeanSquareError](../bnnslossfunctionmeansquareerror.md): Mean square error (MSE) computation between input logits and one-hot encoded labels.
- [BNNSLossFunctionSigmoidCrossEntropy](../bnnslossfunctionsigmoidcrossentropy.md): Sigmoid activation on input logits, and independent computation of cross-entropy loss for each class.
- [BNNSLossFunctionSoftmaxCrossEntropy](../bnnslossfunctionsoftmaxcrossentropy.md): Softmax activation on input logits, and computation of cross-entropy loss with one-hot encoded labels.
- [BNNSLossFunctionYolo](../bnnslossfunctionyolo.md): You Only Look Once (YOLO) loss computation between prediction and ground truth labels.
