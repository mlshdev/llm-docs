> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifier](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier)

# TimeSeriesClassifier

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
struct TimeSeriesClassifier<Scalar, Label> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint, Label : Comparable, Label : Decodable, Label : Encodable, Label : Hashable
```

## Topics

### Creating a time series classifier

- [init(labels:configuration:)](timeseriesclassifier/init%28labels_configuration_%29.md): Creates a time series classifier.

### Inspecting a time series classifier

- [configuration](timeseriesclassifier/configuration-swift.property.md): The configuration.
- [labels](timeseriesclassifier/labels.md): The set of possible labels.

### Fitting a time series classifier

- [fitted(to:eventHandler:)](timeseriesclassifier/fitted%28to_eventhandler_%29.md): Fits a time series classifier model to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](timeseriesclassifier/fitted%28to_validateon_eventhandler_%29.md): Fits a time series classifier model to a sequence of examples.

### Supporting types

- [TimeSeriesClassifier.Configuration](timeseriesclassifier/configuration-swift.typealias.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`.
- [TimeSeriesClassifier.Model](timeseriesclassifier/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. A time-series classifier model.

### Default Implementations

- [UpdatableSupervisedEstimator Implementations](timeseriesclassifier/updatablesupervisedestimator-implementations.md)

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
- [FullyConnectedNetworkMultiLabelClassifier](fullyconnectednetworkmultilabelclassifier.md): A classifier that uses a multi-label fully-connected network.
- [FullyConnectedNetworkMultiLabelClassifierModel](fullyconnectednetworkmultilabelclassifiermodel.md): A multi-label classifier model that uses a fully-connected network.
- [FullyConnectedNetworkConfiguration](fullyconnectednetworkconfiguration.md): A fully connected network configuration.
- [TreeClassifierModel](treeclassifiermodel.md): A trained tree classifier model.
- [TimeSeriesClassifierConfiguration](timeseriesclassifierconfiguration.md): The configuration for a time-series classifier.
