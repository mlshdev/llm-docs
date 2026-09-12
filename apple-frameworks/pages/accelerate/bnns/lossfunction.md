> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/lossfunction](https://developer.apple.com/documentation/accelerate/bnns/lossfunction)

# BNNS.LossFunction

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Constants that describe loss functions.

> Use the BNNSGraph API instead.

## Declaration

```swift
enum LossFunction
```

## Topics

### Loss Functions

- [BNNS.LossFunction.categoricalCrossEntropy](lossfunction/categoricalcrossentropy.md): Deprecated. Categorical cross-entropy computation between input prediction and labels.
- [BNNS.LossFunction.cosineDistance](lossfunction/cosinedistance.md): Deprecated. Cosine distance loss computation between input predictions and labels.
- [BNNS.LossFunction.hinge](lossfunction/hinge.md): Deprecated. Hinge loss computation between labels and unbounded, zero-centered binary predictions.
- [BNNS.LossFunction.huber(huberDelta:)](lossfunction/huber%28huberdelta_%29.md): Deprecated. Huber loss computation between input logits and one-hot encoded labels.
- [BNNS.LossFunction.log](lossfunction/log.md): Deprecated. Log loss computation between labels and predictions.
- [BNNS.LossFunction.meanAbsoluteError](lossfunction/meanabsoluteerror.md): Deprecated. Mean absolute error (MAE) computation between input prediction and labels.
- [BNNS.LossFunction.meanSquareError](lossfunction/meansquareerror.md): Deprecated. Mean square error (MSE) computation between input logits and one-hot encoded labels.
- [BNNS.LossFunction.sigmoidCrossEntropy(labelSmoothing:)](lossfunction/sigmoidcrossentropy%28labelsmoothing_%29.md): Deprecated. Sigmoid activation on input logits, and independent computation of cross-entropy loss for each class.
- [BNNS.LossFunction.softmaxCrossEntropy(labelSmoothing:)](lossfunction/softmaxcrossentropy%28labelsmoothing_%29.md): Deprecated. Softmax activation on input logits, and computation of cross-entropy loss with one-hot encoded labels.
- [BNNS.LossFunction.yolo(parameters:)](lossfunction/yolo%28parameters_%29.md): Deprecated. You Only Look Once (YOLO) loss computation between prediction and ground truth labels.
- [BNNS.LossFunction.YoloParameters](lossfunction/yoloparameters.md): Deprecated. A structure that contains the parameters for You Only Look Once (YOLO) loss computation.

### Instance Properties

- [bnnsLossFunction](lossfunction/bnnslossfunction.md): Deprecated. The underlying loss function structure.
