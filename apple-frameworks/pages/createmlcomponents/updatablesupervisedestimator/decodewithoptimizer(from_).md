> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedestimator/decodewithoptimizer(from:)](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedestimator/decodewithoptimizer(from:))

# decodeWithOptimizer(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Reads the encoded transformer and optimizer with a decoder.

## Declaration

```swift
func decodeWithOptimizer(from decoder: inout any EstimatorDecoder) throws -> Self.Transformer
```

## Parameters

- `decoder`: A decoder.

<a id="return-value"></a>

## Return Value

The decoded transformer.

## See Also

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
