> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatableestimatortosupervisedadaptor/encode(_:to:)](https://developer.apple.com/documentation/createmlcomponents/updatableestimatortosupervisedadaptor/encode(_:to:))

# encode(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Does nothing since this estimator uses a pre-defined transformer.

## Declaration

```swift
func encode(_ transformer: UpdatableEstimatorToSupervisedAdaptor<Estimator, Annotation>.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## See Also

### Encoding and decoding

- [decode(from:)](decode%28from_%29.md): Returns the pre-defined transformer.
- [encodeWithOptimizer(\_:to:)](encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer.
