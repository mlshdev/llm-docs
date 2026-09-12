> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkconfiguration](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkconfiguration)

# FullyConnectedNetworkConfiguration

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A fully connected network configuration.

## Declaration

```swift
struct FullyConnectedNetworkConfiguration
```

## Topics

### Creating a network configuration

- [init()](fullyconnectednetworkconfiguration/init%28%29.md): Creates a default fully-connected-network configuration.

### Getting the properties

- [batchSize](fullyconnectednetworkconfiguration/batchsize.md): The number of examples to use per mini-batch.
- [dropoutProbability](fullyconnectednetworkconfiguration/dropoutprobability.md): The dropout probability.
- [earlyStopIterationCount](fullyconnectednetworkconfiguration/earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](fullyconnectednetworkconfiguration/earlystoppingtolerance.md): The early-stopping tolerance.
- [hiddenUnitCounts](fullyconnectednetworkconfiguration/hiddenunitcounts.md): The number of neurons in each hidden layer.
- [learningRate](fullyconnectednetworkconfiguration/learningrate.md): The learning rate.
- [maximumIterations](fullyconnectednetworkconfiguration/maximumiterations.md): The maximum number of iterations.
- [randomSeed](fullyconnectednetworkconfiguration/randomseed.md): A seed to generate reproducible results from random operations such as column and row subsampling.

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
- [TreeClassifierModel](treeclassifiermodel.md): A trained tree classifier model.
- [TimeSeriesClassifier](timeseriesclassifier.md)
- [TimeSeriesClassifierConfiguration](timeseriesclassifierconfiguration.md): The configuration for a time-series classifier.
