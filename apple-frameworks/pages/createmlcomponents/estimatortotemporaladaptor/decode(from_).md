> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/estimatortotemporaladaptor/decode(from:)](https://developer.apple.com/documentation/createmlcomponents/estimatortotemporaladaptor/decode(from:))

# decode(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Decodes the transformer.

## Declaration

```swift
func decode(from decoder: inout any EstimatorDecoder) throws -> EstimatorToTemporalAdaptor<Base>.Transformer
```

## See Also

### Encoding and decoding

- [encode(\_:to:)](encode%28__to_%29.md): Deprecated. Encodes a fitted transformer.
