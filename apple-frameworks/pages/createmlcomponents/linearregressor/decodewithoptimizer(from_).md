> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/linearregressor/decodewithoptimizer(from:)

# decodeWithOptimizer(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Reads the encoded transformer and optimizer with a decoder.

## Declaration

```swift
func decodeWithOptimizer(from decoder: inout any EstimatorDecoder) throws -> LinearRegressorModel<Scalar>
```

## Parameters

- `decoder`: A decoder.

<a id="return-value"></a>

## Return Value

The decoded transformer.

## See Also

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](encodewithoptimizer%28__to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Encodes the transformer and optimizer to an encoder.
