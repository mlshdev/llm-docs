> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressorconfiguration](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressorconfiguration)

# MultivariateLinearRegressorConfiguration

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A linear regressor configuration.

## Declaration

```swift
struct MultivariateLinearRegressorConfiguration
```

## Topics

### Creating a configuration

- [init()](multivariatelinearregressorconfiguration/init%28%29.md): Creates a default linear regressor configuration.

### Getting the properties

- [batchSize](multivariatelinearregressorconfiguration/batchsize.md): The number of examples in each training batch.
- [maximumIterationCount](multivariatelinearregressorconfiguration/maximumiterationcount.md): The maximum number of allowed passes through the data.
- [earlyStoppingTolerance](multivariatelinearregressorconfiguration/earlystoppingtolerance.md): The early-stopping tolerance.
- [earlyStoppingIterationCount](multivariatelinearregressorconfiguration/earlystoppingiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [learningRate](multivariatelinearregressorconfiguration/learningrate.md): The optimizer learning rate.
- [randomSeed](multivariatelinearregressorconfiguration/randomseed.md): A seed to generate reproducible results from random operations.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Regressors

- [Regressor](regressor.md): A transformer that predicts a float value.
- [LinearRegressor](linearregressor.md): A linear regressor.
- [LinearRegressorModel](linearregressormodel.md): A trained linear regressor model.
- [MultivariateLinearRegressor](multivariatelinearregressor.md): A multivariate linear regressor.
- [MultivariateLinearRegressor.Model](multivariatelinearregressor/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [FullyConnectedNetworkRegressor](fullyconnectednetworkregressor.md): A regressor that uses a fully connected network.
- [FullyConnectedNetworkRegressorModel](fullyconnectednetworkregressormodel.md): A regressor model that uses a fully connected network.
- [BoostedTreeRegressor](boostedtreeregressor.md): A gradient boosted decision tree regressor.
- [TreeRegressorModel](treeregressormodel.md): A trained tree regressor model.
- [OptimizationStrategy](optimizationstrategy.md): A linear optimization strategy.
