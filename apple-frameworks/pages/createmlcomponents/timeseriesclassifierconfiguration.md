> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifierconfiguration](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifierconfiguration)

# TimeSeriesClassifierConfiguration

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The configuration for a time-series classifier.

## Declaration

```swift
struct TimeSeriesClassifierConfiguration
```

## Topics

### Creating a time series classifier configuration

- [init()](timeseriesclassifierconfiguration/init%28%29.md): Creates a configuration.

### Inspecting a time series classifier configuration

- [batchSize](timeseriesclassifierconfiguration/batchsize.md): The number of examples in each training batch.
- [earlyStoppingIterationCount](timeseriesclassifierconfiguration/earlystoppingiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](timeseriesclassifierconfiguration/earlystoppingtolerance.md): The early-stopping tolerance.
- [learningRate](timeseriesclassifierconfiguration/learningrate.md): The starting learning rate.
- [maximumIterationCount](timeseriesclassifierconfiguration/maximumiterationcount.md): The maximum number of allowed passes through the data.
- [maximumSequenceLength](timeseriesclassifierconfiguration/maximumsequencelength.md): The maximum number of samples that can be classified.
- [minimumSequenceLength](timeseriesclassifierconfiguration/minimumsequencelength.md): The minimum number of samples required to produce a classification.
- [randomSeed](timeseriesclassifierconfiguration/randomseed.md): A seed to generate reproducible results from random operations.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [TimeSeriesClassifier](timeseriesclassifier.md)
