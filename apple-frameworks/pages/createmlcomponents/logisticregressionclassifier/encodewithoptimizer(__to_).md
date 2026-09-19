> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/logisticregressionclassifier/encodewithoptimizer(_:to:)

# encodeWithOptimizer(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Encodes the transformer and optimizer to an encoder.

## Declaration

```swift
func encodeWithOptimizer(_ transformer: LogisticRegressionClassifier<Scalar, Label>.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## Parameters

- `transformer`: A transformer this estimator creates.
- `encoder`: An encoder.

## See Also

### Encoding and decoding

- [decodeWithOptimizer(from:)](decodewithoptimizer%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Reads the encoded transformer and optimizer with a decoder.
