> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclosslayer](https://developer.apple.com/documentation/mlcompute/mlclosslayer)

# MLCLossLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that estimates the inaccuracies of the model to reduce the loss on the next evaluation.

## Declaration

```swift
class MLCLossLayer
```

## Topics

### Creating Loss Layers with Descriptors

- [init(descriptor:)](mlclosslayer/init%28descriptor_%29.md): Deprecated. Creates a loss layer with the descriptor you specify.
- [init(descriptor:weights:)](mlclosslayer/init%28descriptor_weights_%29.md): Deprecated. Creates a loss layer with the descriptor and weights you specify.
- [MLCLossDescriptor](mlclossdescriptor.md): Deprecated. A configuration object you use to create a loss layer.
- [MLCLossType](mlclosstype.md): Deprecated. A loss function.

### Creating Loss Layers with Scalar Weights

- [softmaxCrossEntropy(reductionType:labelSmoothing:classCount:weight:)](mlclosslayer/softmaxcrossentropy%28reductiontype_labelsmoothing_classcount_weight_%29.md): Deprecated. Creates a softmax cross entropy loss layer with the reduction type, label smoothing, number of classes, and weight you specify.
- [categoricalCrossEntropy(reductionType:labelSmoothing:classCount:weight:)](mlclosslayer/categoricalcrossentropy%28reductiontype_labelsmoothing_classcount_weight_%29.md): Deprecated. Creates a categorical cross entropy loss layer with the reduction type, label smoothing, number of classes, and weight you specify.
- [sigmoidCrossEntropy(reductionType:labelSmoothing:weight:)](mlclosslayer/sigmoidcrossentropy%28reductiontype_labelsmoothing_weight_%29.md): Deprecated. Creates a sigmoid cross entropy loss layer with the reduction type, label smoothing, and weight you specify.
- [log(reductionType:epsilon:weight:)](mlclosslayer/log%28reductiontype_epsilon_weight_%29.md): Deprecated. Creates a log loss layer with the reduction type, epsilon, and weight you specify.
- [huberLoss(reductionType:delta:weight:)](mlclosslayer/huberloss%28reductiontype_delta_weight_%29.md): Deprecated. Creates a huber loss layer with the reduction type, delta, and weight you specify.
- [meanAbsoluteError(reductionType:weight:)](mlclosslayer/meanabsoluteerror%28reductiontype_weight_%29.md): Deprecated. Creates a mean absolute loss layer with the reduction type and weight.
- [meanSquaredError(reductionType:weight:)](mlclosslayer/meansquarederror%28reductiontype_weight_%29.md): Deprecated. Creates a mean squared loss layer with the reduction type and weight you specify.
- [hingeLoss(reductionType:weight:)](mlclosslayer/hingeloss%28reductiontype_weight_%29.md): Deprecated. Creates a hinge loss layer with the reduction type and weight you specify.
- [cosineDistance(reductionType:weight:)](mlclosslayer/cosinedistance%28reductiontype_weight_%29.md): Deprecated. Creates a cosine distance loss layer with the reduction type and weight you specify.

### Creating Loss Layers with Tensor Weights

- [softmaxCrossEntropy(reductionType:labelSmoothing:classCount:weights:)](mlclosslayer/softmaxcrossentropy%28reductiontype_labelsmoothing_classcount_weights_%29.md): Deprecated. Creates a softmax cross entropy loss layer with the reduction type, label smoothing, number of classes, and weights you specify.
- [categoricalCrossEntropy(reductionType:labelSmoothing:classCount:weights:)](mlclosslayer/categoricalcrossentropy%28reductiontype_labelsmoothing_classcount_weights_%29.md): Deprecated. Creates a categorical cross entropy loss layer with the reduction type, label smoothing, number of classes, and weights you specify.
- [sigmoidCrossEntropy(reductionType:labelSmoothing:weights:)](mlclosslayer/sigmoidcrossentropy%28reductiontype_labelsmoothing_weights_%29.md): Deprecated. Creates a sigmoid cross entropy loss layer with the reduction type, label smoothing, and weights you specify.
- [log(reductionType:epsilon:weights:)](mlclosslayer/log%28reductiontype_epsilon_weights_%29.md): Deprecated. Creates a log loss layer with the reduction type, epsilon, and weights you specify.
- [huberLoss(reductionType:delta:weights:)](mlclosslayer/huberloss%28reductiontype_delta_weights_%29.md): Deprecated. Creates a huber loss layer with the reduction type, delta, and weights you specify.
- [meanAbsoluteError(reductionType:weights:)](mlclosslayer/meanabsoluteerror%28reductiontype_weights_%29.md): Deprecated. Creates a mean absolute loss layer with the reduction type and weights you specify.
- [meanSquaredError(reductionType:weights:)](mlclosslayer/meansquarederror%28reductiontype_weights_%29.md): Deprecated. Creates a mean squared loss layer with the reduction type and weights you specify.
- [hingeLoss(reductionType:weights:)](mlclosslayer/hingeloss%28reductiontype_weights_%29.md): Deprecated. Creates a hinge loss layer with the reduction type and weights you specify.
- [cosineDistance(reductionType:weights:)](mlclosslayer/cosinedistance%28reductiontype_weights_%29.md): Deprecated. Creates a cosine distance loss layer with the reduction type and weights you specify.

### Inspecting Loss Layers

- [descriptor](mlclosslayer/descriptor.md): Deprecated. The configuration object you use to create the loss layer.
- [weights](mlclosslayer/weights.md): Deprecated. The loss label weights tensor.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Inherited By

- [MLCYOLOLossLayer](mlcyololosslayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Loss Layers

- [MLCYOLOLossLayer](mlcyololosslayer.md): Deprecated. A layer that estimates loss for the YOLO algorithm.

# MLCLossLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that estimates the inaccuracies of the model to reduce the loss on the next evaluation.

## Declaration

```objectivec
@interface MLCLossLayer : MLCLayer
```

## Topics

### Creating Loss Layers with Descriptors

- [layerWithDescriptor:](mlclosslayer/init%28descriptor_%29.md): Deprecated. Creates a loss layer with the descriptor you specify.
- [layerWithDescriptor:weights:](mlclosslayer/init%28descriptor_weights_%29.md): Deprecated. Creates a loss layer with the descriptor and weights you specify.
- [MLCLossDescriptor](mlclossdescriptor.md): Deprecated. A configuration object you use to create a loss layer.
- [MLCLossType](mlclosstype.md): Deprecated. A loss function.

### Creating Loss Layers with Scalar Weights

- [softmaxCrossEntropyLossWithReductionType:labelSmoothing:classCount:weight:](mlclosslayer/softmaxcrossentropy%28reductiontype_labelsmoothing_classcount_weight_%29.md): Deprecated. Creates a softmax cross entropy loss layer with the reduction type, label smoothing, number of classes, and weight you specify.
- [categoricalCrossEntropyLossWithReductionType:labelSmoothing:classCount:weight:](mlclosslayer/categoricalcrossentropy%28reductiontype_labelsmoothing_classcount_weight_%29.md): Deprecated. Creates a categorical cross entropy loss layer with the reduction type, label smoothing, number of classes, and weight you specify.
- [sigmoidCrossEntropyLossWithReductionType:labelSmoothing:weight:](mlclosslayer/sigmoidcrossentropy%28reductiontype_labelsmoothing_weight_%29.md): Deprecated. Creates a sigmoid cross entropy loss layer with the reduction type, label smoothing, and weight you specify.
- [logLossWithReductionType:epsilon:weight:](mlclosslayer/log%28reductiontype_epsilon_weight_%29.md): Deprecated. Creates a log loss layer with the reduction type, epsilon, and weight you specify.
- [huberLossWithReductionType:delta:weight:](mlclosslayer/huberloss%28reductiontype_delta_weight_%29.md): Deprecated. Creates a huber loss layer with the reduction type, delta, and weight you specify.
- [meanAbsoluteErrorLossWithReductionType:weight:](mlclosslayer/meanabsoluteerror%28reductiontype_weight_%29.md): Deprecated. Creates a mean absolute loss layer with the reduction type and weight.
- [meanSquaredErrorLossWithReductionType:weight:](mlclosslayer/meansquarederror%28reductiontype_weight_%29.md): Deprecated. Creates a mean squared loss layer with the reduction type and weight you specify.
- [hingeLossWithReductionType:weight:](mlclosslayer/hingeloss%28reductiontype_weight_%29.md): Deprecated. Creates a hinge loss layer with the reduction type and weight you specify.
- [cosineDistanceLossWithReductionType:weight:](mlclosslayer/cosinedistance%28reductiontype_weight_%29.md): Deprecated. Creates a cosine distance loss layer with the reduction type and weight you specify.

### Creating Loss Layers with Tensor Weights

- [softmaxCrossEntropyLossWithReductionType:labelSmoothing:classCount:weights:](mlclosslayer/softmaxcrossentropy%28reductiontype_labelsmoothing_classcount_weights_%29.md): Deprecated. Creates a softmax cross entropy loss layer with the reduction type, label smoothing, number of classes, and weights you specify.
- [categoricalCrossEntropyLossWithReductionType:labelSmoothing:classCount:weights:](mlclosslayer/categoricalcrossentropy%28reductiontype_labelsmoothing_classcount_weights_%29.md): Deprecated. Creates a categorical cross entropy loss layer with the reduction type, label smoothing, number of classes, and weights you specify.
- [sigmoidCrossEntropyLossWithReductionType:labelSmoothing:weights:](mlclosslayer/sigmoidcrossentropy%28reductiontype_labelsmoothing_weights_%29.md): Deprecated. Creates a sigmoid cross entropy loss layer with the reduction type, label smoothing, and weights you specify.
- [logLossWithReductionType:epsilon:weights:](mlclosslayer/log%28reductiontype_epsilon_weights_%29.md): Deprecated. Creates a log loss layer with the reduction type, epsilon, and weights you specify.
- [huberLossWithReductionType:delta:weights:](mlclosslayer/huberloss%28reductiontype_delta_weights_%29.md): Deprecated. Creates a huber loss layer with the reduction type, delta, and weights you specify.
- [meanAbsoluteErrorLossWithReductionType:weights:](mlclosslayer/meanabsoluteerror%28reductiontype_weights_%29.md): Deprecated. Creates a mean absolute loss layer with the reduction type and weights you specify.
- [meanSquaredErrorLossWithReductionType:weights:](mlclosslayer/meansquarederror%28reductiontype_weights_%29.md): Deprecated. Creates a mean squared loss layer with the reduction type and weights you specify.
- [hingeLossWithReductionType:weights:](mlclosslayer/hingeloss%28reductiontype_weights_%29.md): Deprecated. Creates a hinge loss layer with the reduction type and weights you specify.
- [cosineDistanceLossWithReductionType:weights:](mlclosslayer/cosinedistance%28reductiontype_weights_%29.md): Deprecated. Creates a cosine distance loss layer with the reduction type and weights you specify.

### Inspecting Loss Layers

- [descriptor](mlclosslayer/descriptor.md): Deprecated. The configuration object you use to create the loss layer.
- [weights](mlclosslayer/weights.md): Deprecated. The loss label weights tensor.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Inherited By

- [MLCYOLOLossLayer](mlcyololosslayer.md)

## See Also

### Loss Layers

- [MLCYOLOLossLayer](mlcyololosslayer.md): Deprecated. A layer that estimates loss for the YOLO algorithm.
