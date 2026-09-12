> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnspoolinglayerparameters/init(x_stride:y_stride:x_padding:y_padding:k_width:k_height:in_channels:out_channels:pooling_function:bias:activation:)](https://developer.apple.com/documentation/accelerate/bnnspoolinglayerparameters/init(x_stride:y_stride:x_padding:y_padding:k_width:k_height:in_channels:out_channels:pooling_function:bias:activation:))

# init(x_stride:y_stride:x_padding:y_padding:k_width:k_height:in_channels:out_channels:pooling_function:bias:activation:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns a new pooling layer parameters structure

## Declaration

```swift
init(x_stride: Int, y_stride: Int, x_padding: Int, y_padding: Int, k_width: Int, k_height: Int, in_channels: Int, out_channels: Int, pooling_function: BNNSPoolingFunction, bias: BNNSLayerData, activation: BNNSActivation)
```

## Parameters

- `x_stride`: The X increment in the input image.
- `y_stride`: The Y increment in the input image.
- `x_padding`: The X padding.
- `y_padding`: The Y padding.
- `k_width`: The width of the convolution kernel.
- `k_height`: The height of the convolution kernel.
- `in_channels`: The number of input channels.
- `out_channels`: The number of output channels.
- `pooling_function`: The pooling function to apply to each sample
- `bias`: Layer bias, one for each output channel.
- `activation`: The layer activation function

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated.
- [init(x_stride:y_stride:x_padding:y_padding:k_width:k_height:in_channels:out_channels:pooling_function:)](init%28x_stride_y_stride_x_padding_y_padding_k_width_k_height_in_channels_out_channels_pooling_function_%29.md): Deprecated.
