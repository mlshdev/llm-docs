> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifiermodel](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifiermodel)

# FullyConnectedNetworkMultiLabelClassifierModel

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A multi-label classifier model that uses a fully-connected network.

## Declaration

```swift
struct FullyConnectedNetworkMultiLabelClassifierModel<Scalar, Label> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint, Label : Comparable, Label : Decodable, Label : Encodable, Label : Hashable
```

## Topics

### Performing a classification

- [applied(to:eventHandler:)](fullyconnectednetworkmultilabelclassifiermodel/applied%28to_eventhandler_%29.md): Performs a classification on a shaped array.

### Computing evaluation metrics

- [evaluation(on:confidenceThresholds:)](fullyconnectednetworkmultilabelclassifiermodel/evaluation%28on_confidencethresholds_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Computes evaluation metrics on annotated examples.

### Performing a prediction

- [prediction(from:confidenceThresholds:)](fullyconnectednetworkmultilabelclassifiermodel/prediction%28from_confidencethresholds_%29.md): Performs a prediction and keeps label-confidence pairs that are greater than or equal to the provided confidence thresholds.

### Updating the precision recall curve

- [updatePrecisionRecallCurves(\_:)](fullyconnectednetworkmultilabelclassifiermodel/updateprecisionrecallcurves%28__%29.md): Updates the per-label precision-recall curve using the input data.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](transformer.md)

## See Also

### Classifiers

- [Classifier](classifier.md): An estimator that predicts classification probabilities.
- [LogisticRegressionClassifier](logisticregressionclassifier.md): A logistic regression classifier.
- [LogisticRegressionClassifierModel](logisticregressionclassifiermodel.md): A trained logistic regression classifier model.
- [BoostedTreeClassifier](boostedtreeclassifier.md): A gradient boosted decision tree classifier.
- [BoostedTreeConfiguration](boostedtreeconfiguration.md): A boosted tree configuration.
- [FullyConnectedNetworkClassifier](fullyconnectednetworkclassifier.md): A classifier that uses a fully connected network.
- [FullyConnectedNetworkClassifierModel](fullyconnectednetworkclassifiermodel.md): A classifier model that uses a fully connected network.
- [FullyConnectedNetworkMultiLabelClassifier](fullyconnectednetworkmultilabelclassifier.md): A classifier that uses a multi-label fully-connected network.
- [FullyConnectedNetworkConfiguration](fullyconnectednetworkconfiguration.md): A fully connected network configuration.
- [TreeClassifierModel](treeclassifiermodel.md): A trained tree classifier model.
- [TimeSeriesClassifier](timeseriesclassifier.md)
- [TimeSeriesClassifierConfiguration](timeseriesclassifierconfiguration.md): The configuration for a time-series classifier.
