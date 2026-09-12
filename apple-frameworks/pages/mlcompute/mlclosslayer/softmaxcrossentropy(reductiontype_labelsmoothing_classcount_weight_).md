> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclosslayer/softmaxcrossentropy(reductiontype:labelsmoothing:classcount:weight:)](https://developer.apple.com/documentation/mlcompute/mlclosslayer/softmaxcrossentropy(reductiontype:labelsmoothing:classcount:weight:))

# softmaxCrossEntropy(reductionType:labelSmoothing:classCount:weight:) (Swift)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a softmax cross entropy loss layer with the reduction type, label smoothing, number of classes, and weight you specify.

## Declaration

```swift
class func softmaxCrossEntropy(reductionType: MLCReductionType, labelSmoothing: Float, classCount: Int, weight: Float) -> Self
```

## Parameters

- `reductionType`: The reduction operation type.
- `labelSmoothing`: Label smoothing value.
- `classCount`: The number of classes
- `weight`: A scalar floating-point weight value.

<a id="return-value"></a>

## Return Value

A softmax cross entropy loss layer.

## See Also

### Creating Loss Layers with Scalar Weights

- [categoricalCrossEntropy(reductionType:labelSmoothing:classCount:weight:)](categoricalcrossentropy%28reductiontype_labelsmoothing_classcount_weight_%29.md): Deprecated. Creates a categorical cross entropy loss layer with the reduction type, label smoothing, number of classes, and weight you specify.
- [sigmoidCrossEntropy(reductionType:labelSmoothing:weight:)](sigmoidcrossentropy%28reductiontype_labelsmoothing_weight_%29.md): Deprecated. Creates a sigmoid cross entropy loss layer with the reduction type, label smoothing, and weight you specify.
- [log(reductionType:epsilon:weight:)](log%28reductiontype_epsilon_weight_%29.md): Deprecated. Creates a log loss layer with the reduction type, epsilon, and weight you specify.
- [huberLoss(reductionType:delta:weight:)](huberloss%28reductiontype_delta_weight_%29.md): Deprecated. Creates a huber loss layer with the reduction type, delta, and weight you specify.
- [meanAbsoluteError(reductionType:weight:)](meanabsoluteerror%28reductiontype_weight_%29.md): Deprecated. Creates a mean absolute loss layer with the reduction type and weight.
- [meanSquaredError(reductionType:weight:)](meansquarederror%28reductiontype_weight_%29.md): Deprecated. Creates a mean squared loss layer with the reduction type and weight you specify.
- [hingeLoss(reductionType:weight:)](hingeloss%28reductiontype_weight_%29.md): Deprecated. Creates a hinge loss layer with the reduction type and weight you specify.
- [cosineDistance(reductionType:weight:)](cosinedistance%28reductiontype_weight_%29.md): Deprecated. Creates a cosine distance loss layer with the reduction type and weight you specify.

# softmaxCrossEntropyLossWithReductionType:labelSmoothing:classCount:weight: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a softmax cross entropy loss layer with the reduction type, label smoothing, number of classes, and weight you specify.

## Declaration

```objectivec
+ (instancetype) softmaxCrossEntropyLossWithReductionType:(MLCReductionType) reductionType labelSmoothing:(float) labelSmoothing classCount:(NSUInteger) classCount weight:(float) weight;
```

## Parameters

- `reductionType`: The reduction operation type.
- `labelSmoothing`: Label smoothing value.
- `classCount`: The number of classes
- `weight`: A scalar floating-point weight value.

<a id="return-value"></a>

## Return Value

A softmax cross entropy loss layer.

## See Also

### Creating Loss Layers with Scalar Weights

- [categoricalCrossEntropyLossWithReductionType:labelSmoothing:classCount:weight:](categoricalcrossentropy%28reductiontype_labelsmoothing_classcount_weight_%29.md): Deprecated. Creates a categorical cross entropy loss layer with the reduction type, label smoothing, number of classes, and weight you specify.
- [sigmoidCrossEntropyLossWithReductionType:labelSmoothing:weight:](sigmoidcrossentropy%28reductiontype_labelsmoothing_weight_%29.md): Deprecated. Creates a sigmoid cross entropy loss layer with the reduction type, label smoothing, and weight you specify.
- [logLossWithReductionType:epsilon:weight:](log%28reductiontype_epsilon_weight_%29.md): Deprecated. Creates a log loss layer with the reduction type, epsilon, and weight you specify.
- [huberLossWithReductionType:delta:weight:](huberloss%28reductiontype_delta_weight_%29.md): Deprecated. Creates a huber loss layer with the reduction type, delta, and weight you specify.
- [meanAbsoluteErrorLossWithReductionType:weight:](meanabsoluteerror%28reductiontype_weight_%29.md): Deprecated. Creates a mean absolute loss layer with the reduction type and weight.
- [meanSquaredErrorLossWithReductionType:weight:](meansquarederror%28reductiontype_weight_%29.md): Deprecated. Creates a mean squared loss layer with the reduction type and weight you specify.
- [hingeLossWithReductionType:weight:](hingeloss%28reductiontype_weight_%29.md): Deprecated. Creates a hinge loss layer with the reduction type and weight you specify.
- [cosineDistanceLossWithReductionType:weight:](cosinedistance%28reductiontype_weight_%29.md): Deprecated. Creates a cosine distance loss layer with the reduction type and weight you specify.
