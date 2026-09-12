> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/optimizationstrategy](https://developer.apple.com/documentation/createmlcomponents/optimizationstrategy)

# OptimizationStrategy

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

A linear optimization strategy.

## Declaration

```swift
enum OptimizationStrategy
```

## Topics

### Optimization strategies

- [OptimizationStrategy.automatic](optimizationstrategy/automatic.md): Chooses the best optimization strategy based on the problem size and configuration.
- [OptimizationStrategy.fast](optimizationstrategy/fast.md): An optimization strategy that minimizes computation time.
- [OptimizationStrategy.lowMemory](optimizationstrategy/lowmemory.md): An optimization strategy that minimizes memory use.
- [OptimizationStrategy.nonSmooth](optimizationstrategy/nonsmooth.md): An optimization strategy that can handle non-smooth problems.

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
- [MultivariateLinearRegressorConfiguration](multivariatelinearregressorconfiguration.md): A linear regressor configuration.
- [MultivariateLinearRegressor.Model](multivariatelinearregressor/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [FullyConnectedNetworkRegressor](fullyconnectednetworkregressor.md): A regressor that uses a fully connected network.
- [FullyConnectedNetworkRegressorModel](fullyconnectednetworkregressormodel.md): A regressor model that uses a fully connected network.
- [BoostedTreeRegressor](boostedtreeregressor.md): A gradient boosted decision tree regressor.
- [TreeRegressorModel](treeregressormodel.md): A trained tree regressor model.
