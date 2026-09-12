> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/linearregressor](https://developer.apple.com/documentation/createmlcomponents/linearregressor)

# LinearRegressor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A linear regressor.

## Declaration

```swift
struct LinearRegressor<Scalar> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint
```

## Topics

### Creating a regressor

- [init(configuration:)](linearregressor/init%28configuration_%29.md): Creates a linear regressor.
- [LinearRegressor.Configuration](linearregressor/configuration-swift.struct.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A linear regressor configuration.

### Getting the configuration

- [configuration](linearregressor/configuration-swift.property.md): The linear regressor configuration.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](linearregressor/encodewithoptimizer%28__to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](linearregressor/decodewithoptimizer%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Reads the encoded transformer and optimizer with a decoder.

### Fitting

- [fitted(to:eventHandler:)](linearregressor/fitted%28to_eventhandler_%29.md): Fits a linear regressor model to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](linearregressor/fitted%28to_validateon_eventhandler_%29.md): Fits a linear regressor model to a sequence of examples.
- [LinearRegressor.Annotation](linearregressor/annotation.md): The annotation type.
- [LinearRegressor.Transformer](linearregressor/transformer.md): The transformer type created by this estimator.

### Default Implementations

- [UpdatableSupervisedEstimator Implementations](linearregressor/updatablesupervisedestimator-implementations.md)

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
- [LinearRegressorModel](linearregressormodel.md): A trained linear regressor model.
- [MultivariateLinearRegressor](multivariatelinearregressor.md): A multivariate linear regressor.
- [MultivariateLinearRegressorConfiguration](multivariatelinearregressorconfiguration.md): A linear regressor configuration.
- [MultivariateLinearRegressor.Model](multivariatelinearregressor/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [FullyConnectedNetworkRegressor](fullyconnectednetworkregressor.md): A regressor that uses a fully connected network.
- [FullyConnectedNetworkRegressorModel](fullyconnectednetworkregressormodel.md): A regressor model that uses a fully connected network.
- [BoostedTreeRegressor](boostedtreeregressor.md): A gradient boosted decision tree regressor.
- [TreeRegressorModel](treeregressormodel.md): A trained tree regressor model.
- [OptimizationStrategy](optimizationstrategy.md): A linear optimization strategy.
