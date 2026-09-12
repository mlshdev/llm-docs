> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/encodewithoptimizer(_:to:)](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/encodewithoptimizer(_:to:))

# encodeWithOptimizer(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Encodes a fitted transformer with an optimizer.

## Declaration

```swift
func encodeWithOptimizer(_ transformer: FullyConnectedNetworkMultiLabelClassifier<Scalar, Label>.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## Parameters

- `transformer`: A fully-connected network multi-label classifier model.
- `encoder`: An encoder for the estimator.
