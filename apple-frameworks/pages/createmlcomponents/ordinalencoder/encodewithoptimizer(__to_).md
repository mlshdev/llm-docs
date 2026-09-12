> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/ordinalencoder/encodewithoptimizer(_:to:)](https://developer.apple.com/documentation/createmlcomponents/ordinalencoder/encodewithoptimizer(_:to:))

# encodeWithOptimizer(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Encodes the transformer to an encoder.

## Declaration

```swift
func encodeWithOptimizer(_ transformer: OrdinalEncoder<Category>.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## Parameters

- `transformer`: A transformer this estimator creates.
- `encoder`: An encoder.
