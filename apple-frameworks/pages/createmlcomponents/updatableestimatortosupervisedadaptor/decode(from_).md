> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/updatableestimatortosupervisedadaptor/decode(from:)

# decode(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Returns the pre-defined transformer.

## Declaration

```swift
func decode(from decoder: inout any EstimatorDecoder) throws -> UpdatableEstimatorToSupervisedAdaptor<Estimator, Annotation>.Transformer
```

## See Also

### Encoding and decoding

- [encode(\_:to:)](encode%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
- [encodeWithOptimizer(\_:to:)](encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer.
