> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/treeclassifiermodel](https://developer.apple.com/documentation/createmlcomponents/treeclassifiermodel)

# TreeClassifierModel

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A trained tree classifier model.

## Declaration

```swift
struct TreeClassifierModel<Label> where Label : Hashable
```

## Topics

### Getting the properties

- [classCount](treeclassifiermodel/classcount.md): The number of classes.
- [featureColumnNames](treeclassifiermodel/featurecolumnnames.md): The names of the columns containing feature values.
- [predictionColumnName](treeclassifiermodel/predictioncolumnname.md): The name of the column containing the predicted labels.

### Building a data frame

- [buildDataFrame(\_:)](treeclassifiermodel/builddataframe%28__%29.md): Builds a data frame containing a labels column and a probability distribution column.

### Applying

- [applied(to:eventHandler:)](treeclassifiermodel/applied%28to_eventhandler_%29.md): Performs a classification on a data frame.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabularTransformer](tabulartransformer.md)
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
- [FullyConnectedNetworkMultiLabelClassifierModel](fullyconnectednetworkmultilabelclassifiermodel.md): A multi-label classifier model that uses a fully-connected network.
- [FullyConnectedNetworkConfiguration](fullyconnectednetworkconfiguration.md): A fully connected network configuration.
- [TimeSeriesClassifier](timeseriesclassifier.md)
- [TimeSeriesClassifierConfiguration](timeseriesclassifierconfiguration.md): The configuration for a time-series classifier.
