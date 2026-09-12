> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslossfunctionhuber](https://developer.apple.com/documentation/accelerate/bnnslossfunctionhuber)

# BNNSLossFunctionHuber (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Huber loss computation between input logits and one-hot encoded labels.

## Declaration

```swift
var BNNSLossFunctionHuber: BNNSLossFunction { get }
```

<a id="Discussion"></a>

## Discussion

[BNNSLossFunctionHuber](bnnslossfunctionhuber.md) performs huber loss computation between input logits and one hot encoded labels.

You can scale the loss with either a scalar value or weight matrix, and reduce the loss according to a reduction function.

## See Also

### Loss Functions

- [init(\_:)](bnnslossfunction/init%28__%29.md)
- [init(rawValue:)](bnnslossfunction/init%28rawvalue_%29.md)
- [rawValue](bnnslossfunction/rawvalue.md)
- [BNNSLossFunctionCategoricalCrossEntropy](bnnslossfunctioncategoricalcrossentropy.md): Performs categorical cross entropy computation between input prediction and labels.
- [BNNSLossFunctionCosineDistance](bnnslossfunctioncosinedistance.md): Performs cosine distance loss computation between input predictions and labels.
- [BNNSLossFunctionHinge](bnnslossfunctionhinge.md): Performs Hinge loss computation between labels and unbounded zero-centered binary predictions.
- [BNNSLossFunctionLog](bnnslossfunctionlog.md): Log loss computation between labels and predictions.
- [BNNSLossFunctionMeanAbsoluteError](bnnslossfunctionmeanabsoluteerror.md): Mean absolute error (MAE) computation between input prediction and labels.
- [BNNSLossFunctionMeanSquareError](bnnslossfunctionmeansquareerror.md): Mean square error (MSE) computation between input logits and one-hot encoded labels.
- [BNNSLossFunctionSigmoidCrossEntropy](bnnslossfunctionsigmoidcrossentropy.md): Sigmoid activation on input logits, and independent computation of cross-entropy loss for each class.
- [BNNSLossFunctionSoftmaxCrossEntropy](bnnslossfunctionsoftmaxcrossentropy.md): Softmax activation on input logits, and computation of cross-entropy loss with one-hot encoded labels.
- [BNNSLossFunctionYolo](bnnslossfunctionyolo.md): You Only Look Once (YOLO) loss computation between prediction and ground truth labels.

# BNNSLossFunctionHuber (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Huber loss computation between input logits and one-hot encoded labels.

## Declaration

```objectivec
BNNSLossFunctionHuber
```

<a id="Discussion"></a>

## Discussion

[BNNSLossFunctionHuber](bnnslossfunctionhuber.md) performs huber loss computation between input logits and one hot encoded labels.

You can scale the loss with either a scalar value or weight matrix, and reduce the loss according to a reduction function.

## See Also

### Loss Functions

- [BNNSLossFunctionCategoricalCrossEntropy](bnnslossfunctioncategoricalcrossentropy.md): Performs categorical cross entropy computation between input prediction and labels.
- [BNNSLossFunctionCosineDistance](bnnslossfunctioncosinedistance.md): Performs cosine distance loss computation between input predictions and labels.
- [BNNSLossFunctionHinge](bnnslossfunctionhinge.md): Performs Hinge loss computation between labels and unbounded zero-centered binary predictions.
- [BNNSLossFunctionLog](bnnslossfunctionlog.md): Log loss computation between labels and predictions.
- [BNNSLossFunctionMeanAbsoluteError](bnnslossfunctionmeanabsoluteerror.md): Mean absolute error (MAE) computation between input prediction and labels.
- [BNNSLossFunctionMeanSquareError](bnnslossfunctionmeansquareerror.md): Mean square error (MSE) computation between input logits and one-hot encoded labels.
- [BNNSLossFunctionSigmoidCrossEntropy](bnnslossfunctionsigmoidcrossentropy.md): Sigmoid activation on input logits, and independent computation of cross-entropy loss for each class.
- [BNNSLossFunctionSoftmaxCrossEntropy](bnnslossfunctionsoftmaxcrossentropy.md): Softmax activation on input logits, and computation of cross-entropy loss with one-hot encoded labels.
- [BNNSLossFunctionYolo](bnnslossfunctionyolo.md): You Only Look Once (YOLO) loss computation between prediction and ground truth labels.
