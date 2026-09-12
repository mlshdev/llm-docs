> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/logisticregressionclassifier/configuration-swift.struct](https://developer.apple.com/documentation/createmlcomponents/logisticregressionclassifier/configuration-swift.struct)

# LogisticRegressionClassifier.Configuration

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A logistic regression classifier configuration.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init()](configuration-swift.struct/init%28%29.md): Creates a default logistic regression classifier configuration.

### Getting the properties

- [convergenceThreshold](configuration-swift.struct/convergencethreshold.md): The convergence threshold.
- [earlyStopIterationCount](configuration-swift.struct/earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [l1Penalty](configuration-swift.struct/l1penalty.md): Weight of the L1 regularization term.
- [l2Penalty](configuration-swift.struct/l2penalty.md): Weight of the L2 regularization term.
- [maximumIterations](configuration-swift.struct/maximumiterations.md): The maximum number of allowed passes through the data.
- [optimizationStrategy](configuration-swift.struct/optimizationstrategy.md): The optimization strategy.
- [scaleFeatures](configuration-swift.struct/scalefeatures.md): A Boolean value indicating whether to scale the input features.
- [stepSize](configuration-swift.struct/stepsize.md): The starting step size to use for the solver.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a classifier

- [init(labels:configuration:)](init%28labels_configuration_%29.md): Creates a logistic regression classifier.
