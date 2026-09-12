> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkregressormodel](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkregressormodel)

# FullyConnectedNetworkRegressorModel

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A regressor model that uses a fully connected network.

## Declaration

```swift
struct FullyConnectedNetworkRegressorModel<Scalar> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint
```

## Topics

### Performing a regression

- [applied(to:eventHandler:)](fullyconnectednetworkregressormodel/applied%28to_eventhandler_%29.md): Performs regression on a shaped array.
- [FullyConnectedNetworkRegressorModel.Target](fullyconnectednetworkregressormodel/target.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Regressor](regressor.md)
- [Transformer](transformer.md)

## See Also

### Regressors

- [Regressor](regressor.md): A transformer that predicts a float value.
- [LinearRegressor](linearregressor.md): A linear regressor.
- [LinearRegressorModel](linearregressormodel.md): A trained linear regressor model.
- [MultivariateLinearRegressor](multivariatelinearregressor.md): A multivariate linear regressor.
- [MultivariateLinearRegressorConfiguration](multivariatelinearregressorconfiguration.md): A linear regressor configuration.
- [MultivariateLinearRegressor.Model](multivariatelinearregressor/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [FullyConnectedNetworkRegressor](fullyconnectednetworkregressor.md): A regressor that uses a fully connected network.
- [BoostedTreeRegressor](boostedtreeregressor.md): A gradient boosted decision tree regressor.
- [TreeRegressorModel](treeregressormodel.md): A trained tree regressor model.
- [OptimizationStrategy](optimizationstrategy.md): A linear optimization strategy.
