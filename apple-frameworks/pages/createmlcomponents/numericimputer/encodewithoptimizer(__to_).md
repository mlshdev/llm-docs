> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/numericimputer/encodewithoptimizer(_:to:)

# encodeWithOptimizer(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Encodes the transformer to an encoder.

## Declaration

```swift
func encodeWithOptimizer(_ transformer: NumericImputer<Element>.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## Parameters

- `transformer`: A transformer this estimator creates.
- `encoder`: An encoder.
