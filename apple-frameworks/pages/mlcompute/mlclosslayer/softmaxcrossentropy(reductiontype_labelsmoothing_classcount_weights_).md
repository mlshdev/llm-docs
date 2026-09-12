> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclosslayer/softmaxcrossentropy(reductiontype:labelsmoothing:classcount:weights:)](https://developer.apple.com/documentation/mlcompute/mlclosslayer/softmaxcrossentropy(reductiontype:labelsmoothing:classcount:weights:))

# softmaxCrossEntropy(reductionType:labelSmoothing:classCount:weights:) (Swift)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a softmax cross entropy loss layer with the reduction type, label smoothing, number of classes, and weights you specify.

## Declaration

```swift
class func softmaxCrossEntropy(reductionType: MLCReductionType, labelSmoothing: Float, classCount: Int, weights: MLCTensor?) -> Self
```

## Parameters

- `reductionType`: The reduction operation type.
- `labelSmoothing`: Label smoothing value.
- `classCount`: The number of classes.
- `weights`: The loss label weights tensor.

<a id="return-value"></a>

## Return Value

A softmax cross entropy loss layer.

## See Also

### Creating Loss Layers with Tensor Weights

- [categoricalCrossEntropy(reductionType:labelSmoothing:classCount:weights:)](categoricalcrossentropy%28reductiontype_labelsmoothing_classcount_weights_%29.md): Deprecated. Creates a categorical cross entropy loss layer with the reduction type, label smoothing, number of classes, and weights you specify.
- [sigmoidCrossEntropy(reductionType:labelSmoothing:weights:)](sigmoidcrossentropy%28reductiontype_labelsmoothing_weights_%29.md): Deprecated. Creates a sigmoid cross entropy loss layer with the reduction type, label smoothing, and weights you specify.
- [log(reductionType:epsilon:weights:)](log%28reductiontype_epsilon_weights_%29.md): Deprecated. Creates a log loss layer with the reduction type, epsilon, and weights you specify.
- [huberLoss(reductionType:delta:weights:)](huberloss%28reductiontype_delta_weights_%29.md): Deprecated. Creates a huber loss layer with the reduction type, delta, and weights you specify.
- [meanAbsoluteError(reductionType:weights:)](meanabsoluteerror%28reductiontype_weights_%29.md): Deprecated. Creates a mean absolute loss layer with the reduction type and weights you specify.
- [meanSquaredError(reductionType:weights:)](meansquarederror%28reductiontype_weights_%29.md): Deprecated. Creates a mean squared loss layer with the reduction type and weights you specify.
- [hingeLoss(reductionType:weights:)](hingeloss%28reductiontype_weights_%29.md): Deprecated. Creates a hinge loss layer with the reduction type and weights you specify.
- [cosineDistance(reductionType:weights:)](cosinedistance%28reductiontype_weights_%29.md): Deprecated. Creates a cosine distance loss layer with the reduction type and weights you specify.

# softmaxCrossEntropyLossWithReductionType:labelSmoothing:classCount:weights: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a softmax cross entropy loss layer with the reduction type, label smoothing, number of classes, and weights you specify.

## Declaration

```objectivec
+ (instancetype) softmaxCrossEntropyLossWithReductionType:(MLCReductionType) reductionType labelSmoothing:(float) labelSmoothing classCount:(NSUInteger) classCount weights:(MLCTensor *) weights;
```

## Parameters

- `reductionType`: The reduction operation type.
- `labelSmoothing`: Label smoothing value.
- `classCount`: The number of classes.
- `weights`: The loss label weights tensor.

<a id="return-value"></a>

## Return Value

A softmax cross entropy loss layer.

## See Also

### Creating Loss Layers with Tensor Weights

- [categoricalCrossEntropyLossWithReductionType:labelSmoothing:classCount:weights:](categoricalcrossentropy%28reductiontype_labelsmoothing_classcount_weights_%29.md): Deprecated. Creates a categorical cross entropy loss layer with the reduction type, label smoothing, number of classes, and weights you specify.
- [sigmoidCrossEntropyLossWithReductionType:labelSmoothing:weights:](sigmoidcrossentropy%28reductiontype_labelsmoothing_weights_%29.md): Deprecated. Creates a sigmoid cross entropy loss layer with the reduction type, label smoothing, and weights you specify.
- [logLossWithReductionType:epsilon:weights:](log%28reductiontype_epsilon_weights_%29.md): Deprecated. Creates a log loss layer with the reduction type, epsilon, and weights you specify.
- [huberLossWithReductionType:delta:weights:](huberloss%28reductiontype_delta_weights_%29.md): Deprecated. Creates a huber loss layer with the reduction type, delta, and weights you specify.
- [meanAbsoluteErrorLossWithReductionType:weights:](meanabsoluteerror%28reductiontype_weights_%29.md): Deprecated. Creates a mean absolute loss layer with the reduction type and weights you specify.
- [meanSquaredErrorLossWithReductionType:weights:](meansquarederror%28reductiontype_weights_%29.md): Deprecated. Creates a mean squared loss layer with the reduction type and weights you specify.
- [hingeLossWithReductionType:weights:](hingeloss%28reductiontype_weights_%29.md): Deprecated. Creates a hinge loss layer with the reduction type and weights you specify.
- [cosineDistanceLossWithReductionType:weights:](cosinedistance%28reductiontype_weights_%29.md): Deprecated. Creates a cosine distance loss layer with the reduction type and weights you specify.
