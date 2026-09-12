> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatabletemporalestimatortosupervisedadaptor/encodewithoptimizer(_:to:)](https://developer.apple.com/documentation/createmlcomponents/updatabletemporalestimatortosupervisedadaptor/encodewithoptimizer(_:to:))

# encodeWithOptimizer(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Encodes the transformer and optimizer to an encoder.

## Declaration

```swift
func encodeWithOptimizer(_ transformer: UpdatableTemporalEstimatorToSupervisedAdaptor<Estimator, Annotation>.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## Parameters

- `transformer`: A transformer this estimator creates.
- `encoder`: An encoder.

## See Also

### Encoding and decoding

- [encode(\_:to:)](encode%28__to_%29.md): Deprecated. Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](decode%28from_%29.md): Deprecated. Returns the pre-defined transformer.
- [decodeWithOptimizer(from:)](decodewithoptimizer%28from_%29.md): Deprecated. Reads the encoded transformer and optimizer with a decoder.
