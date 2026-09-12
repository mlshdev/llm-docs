> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier)

# FullyConnectedNetworkMultiLabelClassifier

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A classifier that uses a multi-label fully-connected network.

## Declaration

```swift
struct FullyConnectedNetworkMultiLabelClassifier<Scalar, Label> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint, Scalar : Decodable, Scalar : Encodable, Label : Comparable, Label : Decodable, Label : Encodable, Label : Hashable
```

## Mentioned In

- [Creating a multi-label image classifier](creating-a-multi-label-image-classifier.md)

## Topics

### Creating a classifier

- [init(labels:configuration:)](fullyconnectednetworkmultilabelclassifier/init%28labels_configuration_%29.md): Creates a full-connected network multi-label classifier.

### Getting the properties

- [configuration](fullyconnectednetworkmultilabelclassifier/configuration.md): The fully-connected network configuration.
- [defaultConfiguration](fullyconnectednetworkmultilabelclassifier/defaultconfiguration.md): The default fully-connected network configration.
- [labels](fullyconnectednetworkmultilabelclassifier/labels.md): The set of possible labels.

### Fitting a classifier

- [fitted(to:eventHandler:)](fullyconnectednetworkmultilabelclassifier/fitted%28to_eventhandler_%29.md): Fits a fully-connected network multi-label classifier model to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](fullyconnectednetworkmultilabelclassifier/fitted%28to_validateon_eventhandler_%29.md): Fits a fully-connected network multi-label classifier model to a sequence of examples.
- [FullyConnectedNetworkMultiLabelClassifier.Annotation](fullyconnectednetworkmultilabelclassifier/annotation.md): The annotation type.
- [FullyConnectedNetworkMultiLabelClassifier.Transformer](fullyconnectednetworkmultilabelclassifier/transformer.md): The transformer type created by this estimator.

### Default Implementations

- [SupervisedEstimator Implementations](fullyconnectednetworkmultilabelclassifier/supervisedestimator-implementations.md)
- [UpdatableSupervisedEstimator Implementations](fullyconnectednetworkmultilabelclassifier/updatablesupervisedestimator-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedEstimator](supervisedestimator.md)
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md)

## See Also

### Classifiers

- [Classifier](classifier.md): An estimator that predicts classification probabilities.
- [LogisticRegressionClassifier](logisticregressionclassifier.md): A logistic regression classifier.
- [LogisticRegressionClassifierModel](logisticregressionclassifiermodel.md): A trained logistic regression classifier model.
- [BoostedTreeClassifier](boostedtreeclassifier.md): A gradient boosted decision tree classifier.
- [BoostedTreeConfiguration](boostedtreeconfiguration.md): A boosted tree configuration.
- [FullyConnectedNetworkClassifier](fullyconnectednetworkclassifier.md): A classifier that uses a fully connected network.
- [FullyConnectedNetworkClassifierModel](fullyconnectednetworkclassifiermodel.md): A classifier model that uses a fully connected network.
- [FullyConnectedNetworkMultiLabelClassifierModel](fullyconnectednetworkmultilabelclassifiermodel.md): A multi-label classifier model that uses a fully-connected network.
- [FullyConnectedNetworkConfiguration](fullyconnectednetworkconfiguration.md): A fully connected network configuration.
- [TreeClassifierModel](treeclassifiermodel.md): A trained tree classifier model.
- [TimeSeriesClassifier](timeseriesclassifier.md)
- [TimeSeriesClassifierConfiguration](timeseriesclassifierconfiguration.md): The configuration for a time-series classifier.
