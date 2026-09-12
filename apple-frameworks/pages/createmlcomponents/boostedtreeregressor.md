> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/boostedtreeregressor](https://developer.apple.com/documentation/createmlcomponents/boostedtreeregressor)

# BoostedTreeRegressor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A gradient boosted decision tree regressor.

## Declaration

```swift
struct BoostedTreeRegressor<Annotation>
```

## Topics

### Creating a regressor

- [init(annotationColumnName:featureColumnNames:configuration:)](boostedtreeregressor/init%28annotationcolumnname_featurecolumnnames_configuration_%29.md): Creates a boosted tree regressor.

### Getting the properties

- [annotationColumnID](boostedtreeregressor/annotationcolumnid.md): The annotation column identifier.
- [configuration](boostedtreeregressor/configuration.md): Boosted tree configuration.
- [featureColumnNames](boostedtreeregressor/featurecolumnnames.md): The names of the columns containing feature values.

### Fitting a regressor model

- [fitted(to:validateOn:eventHandler:)](boostedtreeregressor/fitted%28to_validateon_eventhandler_%29.md): Fits a boosted tree regressor model to a collection of examples.
- [BoostedTreeRegressor.Transformer](boostedtreeregressor/transformer.md): The transformer type created by this estimator.

### Encoding and decoding a regressor

- [encodeWithOptimizer(\_:to:)](boostedtreeregressor/encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](boostedtreeregressor/decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer with a decoder.

### Default Implementations

- [UpdatableSupervisedTabularEstimator Implementations](boostedtreeregressor/updatablesupervisedtabularestimator-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedTabularEstimator](supervisedtabularestimator.md)
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md)

## See Also

### Regressors

- [Regressor](regressor.md): A transformer that predicts a float value.
- [LinearRegressor](linearregressor.md): A linear regressor.
- [LinearRegressorModel](linearregressormodel.md): A trained linear regressor model.
- [MultivariateLinearRegressor](multivariatelinearregressor.md): A multivariate linear regressor.
- [MultivariateLinearRegressorConfiguration](multivariatelinearregressorconfiguration.md): A linear regressor configuration.
- [MultivariateLinearRegressor.Model](multivariatelinearregressor/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [FullyConnectedNetworkRegressor](fullyconnectednetworkregressor.md): A regressor that uses a fully connected network.
- [FullyConnectedNetworkRegressorModel](fullyconnectednetworkregressormodel.md): A regressor model that uses a fully connected network.
- [TreeRegressorModel](treeregressormodel.md): A trained tree regressor model.
- [OptimizationStrategy](optimizationstrategy.md): A linear optimization strategy.
