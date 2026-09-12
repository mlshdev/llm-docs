> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformertoupdatableestimatoradaptor/encode(_:to:)](https://developer.apple.com/documentation/createmlcomponents/temporaltransformertoupdatableestimatoradaptor/encode(_:to:))

# encode(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Does nothing since this estimator uses a pre-defined transformer.

## Declaration

```swift
func encode(_ transformer: Transformer, to encoder: inout any EstimatorEncoder) throws
```

## See Also

### Encoding and decoding

- [decode(from:)](decode%28from_%29.md): Deprecated. Returns the pre-defined transformer.
- [encodeWithOptimizer(\_:to:)](encodewithoptimizer%28__to_%29.md): Deprecated. This method is part of the conformance. It doesn’t encode anything since the transformer is pre-defined, so don’t call it.
- [decodeWithOptimizer(from:)](decodewithoptimizer%28from_%29.md): Deprecated. Returns the pre-defined transformer.
