> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor)

# MultivariateLinearRegressor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A multivariate linear regressor.

## Declaration

```swift
struct MultivariateLinearRegressor<Scalar> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint
```

<a id="overview"></a>

## Overview

Unlike a [LinearRegressor](linearregressor.md), a [MultivariateLinearRegressor](multivariatelinearregressor.md) supports shaped array outputs with any number of elements. It also provides a wider range of training options better suited for large multi-dimensional regression.

> **Note**

> Only `Float` and `Double` are currently supported as the Scalar type. You may get faster training when using `Float`.

## Topics

### Creating a regressor

- [init(configuration:)](multivariatelinearregressor/init%28configuration_%29.md): Creates a multivariate linear regressor.

### Getting the configuration

- [configuration](multivariatelinearregressor/configuration-swift.property.md): The linear regressor configuration.

### Fitting

- [fitted(to:eventHandler:)](multivariatelinearregressor/fitted%28to_eventhandler_%29.md): Fits a linear regressor model to a sequence of annotated features.
- [fitted(to:validateOn:eventHandler:)](multivariatelinearregressor/fitted%28to_validateon_eventhandler_%29.md): Fits a linear regressor model to shaped arrays of features and annotations.

### Fitting Progressively

- [makeTransformer()](multivariatelinearregressor/maketransformer%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Creates a default-initialized model suitable for incremental fitting.
- [update(\_:with:eventHandler:)](multivariatelinearregressor/update%28__with_eventhandler_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a new sequence of examples.
- [update(\_:with:)](multivariatelinearregressor/update%28__with_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a new shaped array of examples.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](multivariatelinearregressor/encodewithoptimizer%28__to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Encodes the model and optimizer to an encoder.
- [decodeWithOptimizer(from:)](multivariatelinearregressor/decodewithoptimizer%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Reads the encoded model and optimizer with a decoder.

### Supporting types

- [MultivariateLinearRegressor.Model](multivariatelinearregressor/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [MultivariateLinearRegressor.Annotation](multivariatelinearregressor/annotation.md): The annotation type.
- [MultivariateLinearRegressor.Configuration](multivariatelinearregressor/configuration-swift.typealias.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`.
- [MultivariateLinearRegressor.Feature](multivariatelinearregressor/feature.md): The feature type.
- [MultivariateLinearRegressor.Transformer](multivariatelinearregressor/transformer.md): The transformer type created by this estimator.

### Default Implementations

- [UpdatableSupervisedEstimator Implementations](multivariatelinearregressor/updatablesupervisedestimator-implementations.md)

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
- [MultivariateLinearRegressorConfiguration](multivariatelinearregressorconfiguration.md): A linear regressor configuration.
- [MultivariateLinearRegressor.Model](multivariatelinearregressor/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [FullyConnectedNetworkRegressor](fullyconnectednetworkregressor.md): A regressor that uses a fully connected network.
- [FullyConnectedNetworkRegressorModel](fullyconnectednetworkregressormodel.md): A regressor model that uses a fully connected network.
- [BoostedTreeRegressor](boostedtreeregressor.md): A gradient boosted decision tree regressor.
- [TreeRegressorModel](treeregressormodel.md): A trained tree regressor model.
- [OptimizationStrategy](optimizationstrategy.md): A linear optimization strategy.
