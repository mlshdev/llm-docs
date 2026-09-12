> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/boostedtreeconfiguration](https://developer.apple.com/documentation/createmlcomponents/boostedtreeconfiguration)

# BoostedTreeConfiguration

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A boosted tree configuration.

## Declaration

```swift
struct BoostedTreeConfiguration
```

## Topics

### Creating a configuration

- [init()](boostedtreeconfiguration/init%28%29.md): Creates a default boosted tree configuration.

### Inspecting the configuration

- [columnSubsample](boostedtreeconfiguration/columnsubsample.md): Subsample ratio of the columns in each iteration of tree construction.
- [earlyStoppingIterationCount](boostedtreeconfiguration/earlystoppingiterationcount.md): Stops training after this number of iterations where the validation metric does not improve.
- [learningRate](boostedtreeconfiguration/learningrate.md): The learning rate.
- [maximumDepth](boostedtreeconfiguration/maximumdepth.md): Maximum tree depth.
- [maximumIterations](boostedtreeconfiguration/maximumiterations.md): Maximum number of iterations.
- [minimumChildWeight](boostedtreeconfiguration/minimumchildweight.md): The minimum weight of each leaf node.
- [minimumLossReduction](boostedtreeconfiguration/minimumlossreduction.md): Minimum loss reduction required to further split a node during the tree learning phase.
- [parallelTreeCount](boostedtreeconfiguration/paralleltreecount.md): The number of parallel trees constructed during each iteration.
- [randomSeed](boostedtreeconfiguration/randomseed.md): A seed to generate reproducible results from random operations such as column and row subsampling.
- [rowSubsample](boostedtreeconfiguration/rowsubsample.md): Subsample ratio of the training set in each iteration of tree construction.
- [stepSize](boostedtreeconfiguration/stepsize.md): Deprecated. The step size shrinking.

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
- [FullyConnectedNetworkClassifier](fullyconnectednetworkclassifier.md): A classifier that uses a fully connected network.
- [FullyConnectedNetworkClassifierModel](fullyconnectednetworkclassifiermodel.md): A classifier model that uses a fully connected network.
- [FullyConnectedNetworkMultiLabelClassifier](fullyconnectednetworkmultilabelclassifier.md): A classifier that uses a multi-label fully-connected network.
- [FullyConnectedNetworkMultiLabelClassifierModel](fullyconnectednetworkmultilabelclassifiermodel.md): A multi-label classifier model that uses a fully-connected network.
- [FullyConnectedNetworkConfiguration](fullyconnectednetworkconfiguration.md): A fully connected network configuration.
- [TreeClassifierModel](treeclassifiermodel.md): A trained tree classifier model.
- [TimeSeriesClassifier](timeseriesclassifier.md)
- [TimeSeriesClassifierConfiguration](timeseriesclassifierconfiguration.md): The configuration for a time-series classifier.
