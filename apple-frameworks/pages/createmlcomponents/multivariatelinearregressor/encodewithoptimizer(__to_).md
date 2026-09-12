> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/encodewithoptimizer(_:to:)](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/encodewithoptimizer(_:to:))

# encodeWithOptimizer(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Encodes the model and optimizer to an encoder.

## Declaration

```swift
func encodeWithOptimizer(_ model: MultivariateLinearRegressor<Scalar>.Model, to encoder: inout any EstimatorEncoder) throws
```

## Parameters

- `model`: A model this estimator creates.
- `encoder`: An encoder.

## See Also

### Encoding and decoding

- [decodeWithOptimizer(from:)](decodewithoptimizer%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Reads the encoded model and optimizer with a decoder.
