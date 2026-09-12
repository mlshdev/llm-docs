> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/regressor](https://developer.apple.com/documentation/createmlcomponents/regressor)

# Regressor

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that predicts a float value.

## Declaration

```swift
protocol Regressor : Transformer where Self.Output : FloatingPoint
```

## Topics

### Performing the prediction

- [prediction(from:)](regressor/prediction%28from_%29.md): Performs a prediction from a single input.

## Relationships

### Inherits From

- [Transformer](transformer.md)

### Conforming Types

- [FullyConnectedNetworkRegressorModel](fullyconnectednetworkregressormodel.md)
- [LinearRegressorModel](linearregressormodel.md)
- [MLModelRegressorAdaptor](mlmodelregressoradaptor.md)

## See Also

### Regressors

- [LinearRegressor](linearregressor.md): A linear regressor.
- [LinearRegressorModel](linearregressormodel.md): A trained linear regressor model.
- [MultivariateLinearRegressor](multivariatelinearregressor.md): A multivariate linear regressor.
- [MultivariateLinearRegressorConfiguration](multivariatelinearregressorconfiguration.md): A linear regressor configuration.
- [MultivariateLinearRegressor.Model](multivariatelinearregressor/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [FullyConnectedNetworkRegressor](fullyconnectednetworkregressor.md): A regressor that uses a fully connected network.
- [FullyConnectedNetworkRegressorModel](fullyconnectednetworkregressormodel.md): A regressor model that uses a fully connected network.
- [BoostedTreeRegressor](boostedtreeregressor.md): A gradient boosted decision tree regressor.
- [TreeRegressorModel](treeregressormodel.md): A trained tree regressor model.
- [OptimizationStrategy](optimizationstrategy.md): A linear optimization strategy.
