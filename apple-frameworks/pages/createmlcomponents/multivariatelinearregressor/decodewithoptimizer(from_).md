> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/decodewithoptimizer(from:)](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/decodewithoptimizer(from:))

# decodeWithOptimizer(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Reads the encoded model and optimizer with a decoder.

## Declaration

```swift
func decodeWithOptimizer(from decoder: inout any EstimatorDecoder) throws -> MultivariateLinearRegressor<Scalar>.Model
```

## Parameters

- `decoder`: A decoder.

<a id="return-value"></a>

## Return Value

The decoded model.

## See Also

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](encodewithoptimizer%28__to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Encodes the model and optimizer to an encoder.
