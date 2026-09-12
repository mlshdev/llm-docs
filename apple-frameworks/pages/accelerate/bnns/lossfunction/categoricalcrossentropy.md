> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/lossfunction/categoricalcrossentropy](https://developer.apple.com/documentation/accelerate/bnns/lossfunction/categoricalcrossentropy)

# BNNS.LossFunction.categoricalCrossEntropy

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Categorical cross-entropy computation between input prediction and labels.

> Use the BNNSGraph API instead.

## Declaration

```swift
case categoricalCrossEntropy
```

## See Also

### Loss Functions

- [BNNS.LossFunction.cosineDistance](cosinedistance.md): Deprecated. Cosine distance loss computation between input predictions and labels.
- [BNNS.LossFunction.hinge](hinge.md): Deprecated. Hinge loss computation between labels and unbounded, zero-centered binary predictions.
- [BNNS.LossFunction.huber(huberDelta:)](huber%28huberdelta_%29.md): Deprecated. Huber loss computation between input logits and one-hot encoded labels.
- [BNNS.LossFunction.log](log.md): Deprecated. Log loss computation between labels and predictions.
- [BNNS.LossFunction.meanAbsoluteError](meanabsoluteerror.md): Deprecated. Mean absolute error (MAE) computation between input prediction and labels.
- [BNNS.LossFunction.meanSquareError](meansquareerror.md): Deprecated. Mean square error (MSE) computation between input logits and one-hot encoded labels.
- [BNNS.LossFunction.sigmoidCrossEntropy(labelSmoothing:)](sigmoidcrossentropy%28labelsmoothing_%29.md): Deprecated. Sigmoid activation on input logits, and independent computation of cross-entropy loss for each class.
- [BNNS.LossFunction.softmaxCrossEntropy(labelSmoothing:)](softmaxcrossentropy%28labelsmoothing_%29.md): Deprecated. Softmax activation on input logits, and computation of cross-entropy loss with one-hot encoded labels.
- [BNNS.LossFunction.yolo(parameters:)](yolo%28parameters_%29.md): Deprecated. You Only Look Once (YOLO) loss computation between prediction and ground truth labels.
- [BNNS.LossFunction.YoloParameters](yoloparameters.md): Deprecated. A structure that contains the parameters for You Only Look Once (YOLO) loss computation.
