> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/model](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/model)

# MultivariateLinearRegressor.Model

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A trained multivariate linear regressor model.

## Declaration

```swift
struct Model
```

<a id="overview"></a>

## Overview

> **Note**

> Only `Float` and `Double` are currently supported as the Scalar type.

## Topics

### Creating a regressor model

- [init(weight:bias:)](model/init%28weight_bias_%29.md): Creates a multivariate linear regressor.

### Getting the properties

- [inputSize](model/inputsize.md): The input size.
- [outputSize](model/outputsize.md): The output size.
- [weight](model/weight.md): The linear coefficients.
- [bias](model/bias.md): The bias coefficients.

### Performing the regression

- [applied(to:eventHandler:)](model/applied%28to_eventhandler_%29.md): Performs a prediction on a shaped array.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](../transformer.md)

## See Also

### Regressors

- [Regressor](../regressor.md): A transformer that predicts a float value.
- [LinearRegressor](../linearregressor.md): A linear regressor.
- [LinearRegressorModel](../linearregressormodel.md): A trained linear regressor model.
- [MultivariateLinearRegressor](../multivariatelinearregressor.md): A multivariate linear regressor.
- [MultivariateLinearRegressorConfiguration](../multivariatelinearregressorconfiguration.md): A linear regressor configuration.
- [FullyConnectedNetworkRegressor](../fullyconnectednetworkregressor.md): A regressor that uses a fully connected network.
- [FullyConnectedNetworkRegressorModel](../fullyconnectednetworkregressormodel.md): A regressor model that uses a fully connected network.
- [BoostedTreeRegressor](../boostedtreeregressor.md): A gradient boosted decision tree regressor.
- [TreeRegressorModel](../treeregressormodel.md): A trained tree regressor model.
- [OptimizationStrategy](../optimizationstrategy.md): A linear optimization strategy.
