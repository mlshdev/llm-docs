> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/treeregressormodel](https://developer.apple.com/documentation/createmlcomponents/treeregressormodel)

# TreeRegressorModel

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A trained tree regressor model.

## Declaration

```swift
struct TreeRegressorModel
```

## Topics

### Getting the column names

- [featureColumnNames](treeregressormodel/featurecolumnnames.md): The names of the columns containing feature values.
- [predictionColumnName](treeregressormodel/predictioncolumnname.md): The name of the column containing the predicted values.

### Applying

- [applied(to:eventHandler:)](treeregressormodel/applied%28to_eventhandler_%29.md): Performs a regression on a data frame.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabularTransformer](tabulartransformer.md)
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
- [FullyConnectedNetworkRegressorModel](fullyconnectednetworkregressormodel.md): A regressor model that uses a fully connected network.
- [BoostedTreeRegressor](boostedtreeregressor.md): A gradient boosted decision tree regressor.
- [OptimizationStrategy](optimizationstrategy.md): A linear optimization strategy.
