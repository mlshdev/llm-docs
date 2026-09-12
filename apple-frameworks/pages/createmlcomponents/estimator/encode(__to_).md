> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/estimator/encode(_:to:)](https://developer.apple.com/documentation/createmlcomponents/estimator/encode(_:to:))

# encode(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Encodes a fitted transformer.

## Declaration

```swift
func encode(_ transformer: Self.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## Default Implementations

### Estimator Implementations

- [encode(\_:to:)](encode%28__to_%29-2ayb4.md): Conforms when `Transformer` conforms to `Encodable`. Encodes a fitted encodable transformer.

## See Also

### Encoding and decoding

- [decode(from:)](decode%28from_%29.md): Decodes a previously fitted transformer.
