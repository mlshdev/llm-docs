> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/decode(from:)

# decode(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Decodes the estimator.

## Declaration

```swift
func decode(from decoder: inout any EstimatorDecoder) throws -> FullyConnectedNetworkMultiLabelClassifierModel<Scalar, Label>
```

## Parameters

- `decoder`: A decoder for the estimator.

<a id="return-value"></a>

## Return Value

A fully-connected network multi-label classifier model.
