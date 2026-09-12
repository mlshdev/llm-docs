> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfullyconnectedlayerparameters/init(in_size:out_size:weights:bias:activation:)](https://developer.apple.com/documentation/accelerate/bnnsfullyconnectedlayerparameters/init(in_size:out_size:weights:bias:activation:))

# init(in_size:out_size:weights:bias:activation:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns a new fully connected layer parameters structure.

## Declaration

```swift
init(in_size: Int, out_size: Int, weights: BNNSLayerData, bias: BNNSLayerData, activation: BNNSActivation)
```

## Parameters

- `in_size`: The size of the input vector.
- `out_size`: The size of the output vector.
- `weights`: Matrix coefficients, containing [in_size](in_size.md) `*` [out_size](out_size.md) values.
- `bias`: Layer bias, containing [out_size](out_size.md) values, one for each output component.
- `activation`: The layer activation function.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated.
- [init(in_size:out_size:weights:)](init%28in_size_out_size_weights_%29.md): Deprecated.
