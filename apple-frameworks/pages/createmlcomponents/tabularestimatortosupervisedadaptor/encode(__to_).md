> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/tabularestimatortosupervisedadaptor/encode(_:to:)

# encode(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Encodes a fitted transformer.

## Declaration

```swift
func encode(_ transformer: Estimator.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## See Also

### Encoding and decoding

- [decode(from:)](decode%28from_%29.md): Decodes a previously fitted transformer.
