> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkclassifier/decodewithoptimizer(from:)

# decodeWithOptimizer(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Decodes a previously fitted transformer with an optimizer.

## Declaration

```swift
func decodeWithOptimizer(from decoder: inout any EstimatorDecoder) throws -> FullyConnectedNetworkClassifier<Scalar, Label>.Transformer
```

## Parameters

- `decoder`: A decoder for the estimator.

<a id="return-value"></a>

## Return Value

A fully connected network classifier model.
