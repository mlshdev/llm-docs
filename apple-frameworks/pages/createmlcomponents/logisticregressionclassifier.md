> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/logisticregressionclassifier](https://developer.apple.com/documentation/createmlcomponents/logisticregressionclassifier)

# LogisticRegressionClassifier

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A logistic regression classifier.

## Declaration

```swift
struct LogisticRegressionClassifier<Scalar, Label> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint, Label : Comparable, Label : Decodable, Label : Encodable, Label : Hashable
```

## Topics

### Creating a classifier

- [init(labels:configuration:)](logisticregressionclassifier/init%28labels_configuration_%29.md): Creates a logistic regression classifier.
- [LogisticRegressionClassifier.Configuration](logisticregressionclassifier/configuration-swift.struct.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. A logistic regression classifier configuration.

### Getting the properties

- [configuration](logisticregressionclassifier/configuration-swift.property.md): The logistic regression classifier configuration.
- [labels](logisticregressionclassifier/labels.md): The set of possible labels.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](logisticregressionclassifier/encodewithoptimizer%28__to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](logisticregressionclassifier/decodewithoptimizer%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Reads the encoded transformer and optimizer with a decoder.

### Fitting

- [fitted(to:eventHandler:)](logisticregressionclassifier/fitted%28to_eventhandler_%29.md): Fits a logistic regression classifier model to a sequence of examples while validating with a validation sequence.
- [fitted(to:validateOn:eventHandler:)](logisticregressionclassifier/fitted%28to_validateon_eventhandler_%29.md): Fits a logistic regression classifier model to a sequence of examples.
- [LogisticRegressionClassifier.Annotation](logisticregressionclassifier/annotation.md): The annotation type.
- [LogisticRegressionClassifier.Transformer](logisticregressionclassifier/transformer.md): The transformer type created by this estimator.

### Default Implementations

- [UpdatableSupervisedEstimator Implementations](logisticregressionclassifier/updatablesupervisedestimator-implementations.md)

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
- [LogisticRegressionClassifierModel](logisticregressionclassifiermodel.md): A trained logistic regression classifier model.
- [BoostedTreeClassifier](boostedtreeclassifier.md): A gradient boosted decision tree classifier.
- [BoostedTreeConfiguration](boostedtreeconfiguration.md): A boosted tree configuration.
- [FullyConnectedNetworkClassifier](fullyconnectednetworkclassifier.md): A classifier that uses a fully connected network.
- [FullyConnectedNetworkClassifierModel](fullyconnectednetworkclassifiermodel.md): A classifier model that uses a fully connected network.
- [FullyConnectedNetworkMultiLabelClassifier](fullyconnectednetworkmultilabelclassifier.md): A classifier that uses a multi-label fully-connected network.
- [FullyConnectedNetworkMultiLabelClassifierModel](fullyconnectednetworkmultilabelclassifiermodel.md): A multi-label classifier model that uses a fully-connected network.
- [FullyConnectedNetworkConfiguration](fullyconnectednetworkconfiguration.md): A fully connected network configuration.
- [TreeClassifierModel](treeclassifiermodel.md): A trained tree classifier model.
- [TimeSeriesClassifier](timeseriesclassifier.md)
- [TimeSeriesClassifierConfiguration](timeseriesclassifierconfiguration.md): The configuration for a time-series classifier.
