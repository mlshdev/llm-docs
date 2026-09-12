> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformertoupdatableestimatoradaptor/decodewithoptimizer(from:)](https://developer.apple.com/documentation/createmlcomponents/transformertoupdatableestimatoradaptor/decodewithoptimizer(from:))

# decodeWithOptimizer(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Returns the pre-defined transformer.

## Declaration

```swift
func decodeWithOptimizer(from decoder: inout any EstimatorDecoder) throws -> Transformer
```

## See Also

### Encoding and decoding

- [encode(\_:to:)](encode%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](decode%28from_%29.md): Returns the pre-defined transformer.
- [encodeWithOptimizer(\_:to:)](encodewithoptimizer%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
