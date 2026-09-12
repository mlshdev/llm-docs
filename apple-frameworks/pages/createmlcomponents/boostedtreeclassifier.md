> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/boostedtreeclassifier](https://developer.apple.com/documentation/createmlcomponents/boostedtreeclassifier)

# BoostedTreeClassifier

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A gradient boosted decision tree classifier.

## Declaration

```swift
struct BoostedTreeClassifier<Label> where Label : Comparable, Label : Decodable, Label : Encodable, Label : Hashable
```

## Topics

### Creating a classifier

- [init(labels:annotationColumnName:featureColumnNames:configuration:)](boostedtreeclassifier/init%28labels_annotationcolumnname_featurecolumnnames_configuration_%29.md): Creates a boosted tree classifier.

### Getting the properties

- [annotationColumnID](boostedtreeclassifier/annotationcolumnid.md): The annotation column identifier.
- [featureColumnNames](boostedtreeclassifier/featurecolumnnames.md): The names of the columns containing feature values.
- [configuration](boostedtreeclassifier/configuration.md): Boosted tree configuration.
- [labels](boostedtreeclassifier/labels.md): The set of possible labels.

### Fitting the classifier

- [fitted(to:validateOn:eventHandler:)](boostedtreeclassifier/fitted%28to_validateon_eventhandler_%29.md): Fits a boosted tree classifier model to a collection of examples.
- [BoostedTreeClassifier.Annotation](boostedtreeclassifier/annotation.md): The annotation type.
- [BoostedTreeClassifier.Transformer](boostedtreeclassifier/transformer.md): The transformer type created by this estimator.

### Encoding the classifier labels

- [encodeLabels(\_:)](boostedtreeclassifier/encodelabels%28__%29.md)

### Default Implementations

- [UpdatableSupervisedTabularEstimator Implementations](boostedtreeclassifier/updatablesupervisedtabularestimator-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedTabularEstimator](supervisedtabularestimator.md)
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md)

## See Also

### Classifiers

- [Classifier](classifier.md): An estimator that predicts classification probabilities.
- [LogisticRegressionClassifier](logisticregressionclassifier.md): A logistic regression classifier.
- [LogisticRegressionClassifierModel](logisticregressionclassifiermodel.md): A trained logistic regression classifier model.
- [BoostedTreeConfiguration](boostedtreeconfiguration.md): A boosted tree configuration.
- [FullyConnectedNetworkClassifier](fullyconnectednetworkclassifier.md): A classifier that uses a fully connected network.
- [FullyConnectedNetworkClassifierModel](fullyconnectednetworkclassifiermodel.md): A classifier model that uses a fully connected network.
- [FullyConnectedNetworkMultiLabelClassifier](fullyconnectednetworkmultilabelclassifier.md): A classifier that uses a multi-label fully-connected network.
- [FullyConnectedNetworkMultiLabelClassifierModel](fullyconnectednetworkmultilabelclassifiermodel.md): A multi-label classifier model that uses a fully-connected network.
- [FullyConnectedNetworkConfiguration](fullyconnectednetworkconfiguration.md): A fully connected network configuration.
- [TreeClassifierModel](treeclassifiermodel.md): A trained tree classifier model.
- [TimeSeriesClassifier](timeseriesclassifier.md)
- [TimeSeriesClassifierConfiguration](timeseriesclassifierconfiguration.md): The configuration for a time-series classifier.
