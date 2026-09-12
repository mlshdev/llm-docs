> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/lossfunction/yoloparameters](https://developer.apple.com/documentation/accelerate/bnns/lossfunction/yoloparameters)

# BNNS.LossFunction.YoloParameters

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A structure that contains the parameters for You Only Look Once (YOLO) loss computation.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct YoloParameters
```

## Topics

### Instance Properties

- [anchorBoxCount](yoloparameters/anchorboxcount.md): Deprecated. The number of anchor boxes in each cell.
- [anchorBoxSize](yoloparameters/anchorboxsize.md): Deprecated. The size of the anchor box.
- [anchorsData](yoloparameters/anchorsdata.md): Deprecated. Maximum IOU for treating as no object.
- [classificationScale](yoloparameters/classificationscale.md): Deprecated. The value that specifies the classification scaling factor.
- [gridColumnCount](yoloparameters/gridcolumncount.md): Deprecated. The number of columns in the grid.
- [gridRowsCount](yoloparameters/gridrowscount.md): Deprecated. The number of rows in the grid.
- [huberDelta](yoloparameters/huberdelta.md): Deprecated. A value that’s interpreted as width-height loss.
- [noObjectMaximumIoU](yoloparameters/noobjectmaximumiou.md): Deprecated. The value that specifies intersection over union (IOU) that’s the maximum the function treats as not an object.
- [noObjectScale](yoloparameters/noobjectscale.md): Deprecated. The value that specifies the no-object confidence scaling factor.
- [objectMinimumIoU](yoloparameters/objectminimumiou.md): Deprecated. The value that specifies intersection over union (IOU) that’s the minimum the function treats as an object.
- [objectScale](yoloparameters/objectscale.md): Deprecated. The value that specifies the object confidence loss-scaling factor.
- [rescore](yoloparameters/rescore.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [whScale](yoloparameters/whscale.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [xyScale](yoloparameters/xyscale.md): Deprecated. The value that specifies the x, y loss-scaling factor.

### Initializers

- [init(huberDelta:gridColumnCount:gridRowsCount:anchorBoxCount:anchorBoxSize:rescore:xyScale:whScale:objectScale:noObjectScale:classificationScale:objectMinimumIoU:noObjectMaximumIoU:anchorsData:)](yoloparameters/init%28huberdelta_gridcolumncount_gridrowscount_anchorboxcount_anchorboxsize_rescore_xyscale_whscale_objectscale_noobjectscale_classificationscale_objectminimumiou_noobjectmaximumiou~1124d552.md): Deprecated.

## See Also

### Loss Functions

- [BNNS.LossFunction.categoricalCrossEntropy](categoricalcrossentropy.md): Deprecated. Categorical cross-entropy computation between input prediction and labels.
- [BNNS.LossFunction.cosineDistance](cosinedistance.md): Deprecated. Cosine distance loss computation between input predictions and labels.
- [BNNS.LossFunction.hinge](hinge.md): Deprecated. Hinge loss computation between labels and unbounded, zero-centered binary predictions.
- [BNNS.LossFunction.huber(huberDelta:)](huber%28huberdelta_%29.md): Deprecated. Huber loss computation between input logits and one-hot encoded labels.
- [BNNS.LossFunction.log](log.md): Deprecated. Log loss computation between labels and predictions.
- [BNNS.LossFunction.meanAbsoluteError](meanabsoluteerror.md): Deprecated. Mean absolute error (MAE) computation between input prediction and labels.
- [BNNS.LossFunction.meanSquareError](meansquareerror.md): Deprecated. Mean square error (MSE) computation between input logits and one-hot encoded labels.
- [BNNS.LossFunction.sigmoidCrossEntropy(labelSmoothing:)](sigmoidcrossentropy%28labelsmoothing_%29.md): Deprecated. Sigmoid activation on input logits, and independent computation of cross-entropy loss for each class.
- [BNNS.LossFunction.softmaxCrossEntropy(labelSmoothing:)](softmaxcrossentropy%28labelsmoothing_%29.md): Deprecated. Softmax activation on input logits, and computation of cross-entropy loss with one-hot encoded labels.
- [BNNS.LossFunction.yolo(parameters:)](yolo%28parameters_%29.md): Deprecated. You Only Look Once (YOLO) loss computation between prediction and ground truth labels.
