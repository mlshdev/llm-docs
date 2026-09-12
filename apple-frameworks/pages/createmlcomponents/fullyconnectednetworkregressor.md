> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkregressor](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkregressor)

# FullyConnectedNetworkRegressor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A regressor that uses a fully connected network.

## Declaration

```swift
struct FullyConnectedNetworkRegressor<Scalar> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint
```

## Topics

### Creating the regressor

- [init(configuration:)](fullyconnectednetworkregressor/init%28configuration_%29.md): Creates a fully connected network regressor.

### Getting the configuration

- [configuration](fullyconnectednetworkregressor/configuration.md): The fully-connected-network configuration.

### Decoding a regressor

- [decode(from:)](fullyconnectednetworkregressor/decode%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Decodes the estimator.

### Fitting a regressor

- [fitted(to:eventHandler:)](fullyconnectednetworkregressor/fitted%28to_eventhandler_%29.md): Fits a fully connected network regressor model to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](fullyconnectednetworkregressor/fitted%28to_validateon_eventhandler_%29.md): Fits a fully connected network regressor model to a sequence of examples.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

### Default Implementations

- [SupervisedEstimator Implementations](fullyconnectednetworkregressor/supervisedestimator-implementations.md)
- [UpdatableSupervisedEstimator Implementations](fullyconnectednetworkregressor/updatablesupervisedestimator-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedEstimator](supervisedestimator.md)
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md)

## See Also

### Regressors

- [Regressor](regressor.md): A transformer that predicts a float value.
- [LinearRegressor](linearregressor.md): A linear regressor.
- [LinearRegressorModel](linearregressormodel.md): A trained linear regressor model.
- [MultivariateLinearRegressor](multivariatelinearregressor.md): A multivariate linear regressor.
- [MultivariateLinearRegressorConfiguration](multivariatelinearregressorconfiguration.md): A linear regressor configuration.
- [MultivariateLinearRegressor.Model](multivariatelinearregressor/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [FullyConnectedNetworkRegressorModel](fullyconnectednetworkregressormodel.md): A regressor model that uses a fully connected network.
- [BoostedTreeRegressor](boostedtreeregressor.md): A gradient boosted decision tree regressor.
- [TreeRegressorModel](treeregressormodel.md): A trained tree regressor model.
- [OptimizationStrategy](optimizationstrategy.md): A linear optimization strategy.
