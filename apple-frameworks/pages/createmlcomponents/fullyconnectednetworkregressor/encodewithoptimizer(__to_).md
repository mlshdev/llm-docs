> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkregressor/encodewithoptimizer(_:to:)](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkregressor/encodewithoptimizer(_:to:))

# encodeWithOptimizer(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Encodes a fitted transformer with an optimizer.

## Declaration

```swift
func encodeWithOptimizer(_ transformer: FullyConnectedNetworkRegressor<Scalar>.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## Parameters

- `transformer`: A fully connected network regressor model.
- `encoder`: An encoder for the estimator.
