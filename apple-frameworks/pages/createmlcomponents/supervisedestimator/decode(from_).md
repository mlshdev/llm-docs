> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedestimator/decode(from:)](https://developer.apple.com/documentation/createmlcomponents/supervisedestimator/decode(from:))

# decode(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Decodes a previously fitted transformer.

## Declaration

```swift
func decode(from decoder: inout any EstimatorDecoder) throws -> Self.Transformer
```

## Default Implementations

### SupervisedEstimator Implementations

- [decode(from:)](decode%28from_%29-3b51s.md): Conforms when `Transformer` conforms to `Decodable`. Decodes a previously fitted decodable transformer.

## See Also

### Encoding and decoding

- [encode(\_:to:)](encode%28__to_%29.md): Encodes a fitted transformer.
