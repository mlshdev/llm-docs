> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/supervisedestimator/decode(from:)-3b51s

# decode(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Decodes a previously fitted decodable transformer.

## Declaration

```swift
func decode(from decoder: inout any EstimatorDecoder) throws -> Self.Transformer
```

## Parameters

- `decoder`: An estimator decoder.

<a id="return-value"></a>

## Return Value

The decoded transformer.
