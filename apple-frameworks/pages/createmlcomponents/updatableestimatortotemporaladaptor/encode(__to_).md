> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/updatableestimatortotemporaladaptor/encode(_:to:)

# encode(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Encodes a fitted transformer.

## Declaration

```swift
func encode(_ transformer: UpdatableEstimatorToTemporalAdaptor<Base>.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## See Also

### Encoding and decoding

- [decode(from:)](decode%28from_%29.md): Deprecated. Decodes the transformer.
- [encodeWithOptimizer(\_:to:)](encodewithoptimizer%28__to_%29.md): Deprecated. Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](decodewithoptimizer%28from_%29.md): Deprecated. Reads the encoded transformer and optimizer with a decoder.
