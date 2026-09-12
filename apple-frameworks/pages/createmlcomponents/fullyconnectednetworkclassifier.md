> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkclassifier](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkclassifier)

# FullyConnectedNetworkClassifier

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A classifier that uses a fully connected network.

## Declaration

```swift
struct FullyConnectedNetworkClassifier<Scalar, Label> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint, Label : Comparable, Label : Decodable, Label : Encodable, Label : Hashable
```

## Mentioned In

- [Creating a multi-label image classifier](creating-a-multi-label-image-classifier.md)

## Topics

### Creating the classifier

- [init(labels:configuration:)](fullyconnectednetworkclassifier/init%28labels_configuration_%29.md): Creates a fully connected network classifier.

### Getting the properties

- [labels](fullyconnectednetworkclassifier/labels.md): The set of possible labels.
- [configuration](fullyconnectednetworkclassifier/configuration.md): The fully-connected-network configuration.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](fullyconnectednetworkclassifier/encodewithoptimizer%28__to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Encodes a fitted transformer with an optimizer.
- [decode(from:)](fullyconnectednetworkclassifier/decode%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Decodes the estimator.

### Fitting a classifier

- [fitted(to:eventHandler:)](fullyconnectednetworkclassifier/fitted%28to_eventhandler_%29.md): Fits a fully connected network classifier model to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](fullyconnectednetworkclassifier/fitted%28to_validateon_eventhandler_%29.md): Fits a fully connected network classifier model to a sequence of examples.
- [FullyConnectedNetworkClassifier.Annotation](fullyconnectednetworkclassifier/annotation.md): The annotation type.
- [FullyConnectedNetworkClassifier.Transformer](fullyconnectednetworkclassifier/transformer.md): The transformer type created by this estimator.

### Default Implementations

- [SupervisedEstimator Implementations](fullyconnectednetworkclassifier/supervisedestimator-implementations.md)
- [UpdatableSupervisedEstimator Implementations](fullyconnectednetworkclassifier/updatablesupervisedestimator-implementations.md)

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
- [FullyConnectedNetworkClassifierModel](fullyconnectednetworkclassifiermodel.md): A classifier model that uses a fully connected network.
- [FullyConnectedNetworkMultiLabelClassifier](fullyconnectednetworkmultilabelclassifier.md): A classifier that uses a multi-label fully-connected network.
- [FullyConnectedNetworkMultiLabelClassifierModel](fullyconnectednetworkmultilabelclassifiermodel.md): A multi-label classifier model that uses a fully-connected network.
- [FullyConnectedNetworkConfiguration](fullyconnectednetworkconfiguration.md): A fully connected network configuration.
- [TreeClassifierModel](treeclassifiermodel.md): A trained tree classifier model.
- [TimeSeriesClassifier](timeseriesclassifier.md)
- [TimeSeriesClassifierConfiguration](timeseriesclassifierconfiguration.md): The configuration for a time-series classifier.
