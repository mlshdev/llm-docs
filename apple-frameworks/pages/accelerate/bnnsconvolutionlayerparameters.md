> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsconvolutionlayerparameters](https://developer.apple.com/documentation/accelerate/bnnsconvolutionlayerparameters)

# BNNSConvolutionLayerParameters (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A structure containing convolution parameters.

> Use [BNNSLayerParametersConvolution](bnnslayerparametersconvolution.md) instead.

## Declaration

```swift
struct BNNSConvolutionLayerParameters
```

## Topics

### Initializers

- [init()](bnnsconvolutionlayerparameters/init%28%29.md): Deprecated.
- [init(x_stride:y_stride:x_padding:y_padding:k_width:k_height:in_channels:out_channels:weights:bias:activation:)](bnnsconvolutionlayerparameters/init%28x_stride_y_stride_x_padding_y_padding_k_width_k_height_in_channels_out_channels_weights_bias_activation_%29.md): Deprecated. Returns a new convolution parameters structure.
- [init(x_stride:y_stride:x_padding:y_padding:k_width:k_height:in_channels:out_channels:weights:)](bnnsconvolutionlayerparameters/init%28x_stride_y_stride_x_padding_y_padding_k_width_k_height_in_channels_out_channels_weights_%29.md): Deprecated.

### Instance Properties

- [activation](bnnsconvolutionlayerparameters/activation.md): Deprecated. The layer activation function.
- [bias](bnnsconvolutionlayerparameters/bias.md): Deprecated. Layer bias, one for each output channel.
- [in_channels](bnnsconvolutionlayerparameters/in_channels.md): Deprecated. The number of input channels.
- [k_height](bnnsconvolutionlayerparameters/k_height.md): Deprecated. The height of the convolution kernel.
- [k_width](bnnsconvolutionlayerparameters/k_width.md): Deprecated. The width of the convolution kernel.
- [out_channels](bnnsconvolutionlayerparameters/out_channels.md): Deprecated. The number of output channels.
- [weights](bnnsconvolutionlayerparameters/weights.md): Deprecated. Convolution weights.
- [x_padding](bnnsconvolutionlayerparameters/x_padding.md): Deprecated. The X padding.
- [x_stride](bnnsconvolutionlayerparameters/x_stride.md): Deprecated. The X increment in the input image.
- [y_padding](bnnsconvolutionlayerparameters/y_padding.md): Deprecated. The Y padding.
- [y_stride](bnnsconvolutionlayerparameters/y_stride.md): Deprecated. The Y increment in the input image.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Convolution layers

- [BNNSFilterCreateConvolutionLayer(\_:\_:\_:\_:)](bnnsfiltercreateconvolutionlayer%28________%29.md): Deprecated. Returns a convolution filter, initialized with input, output, layer, and filter parameters.
- [BNNS.ConvolutionLayer](bnns/convolutionlayer.md): Deprecated. A layer object that wraps a convolution filter and manages its deinitialization.
- [BNNSLayerParametersConvolution](bnnslayerparametersconvolution.md): Deprecated. A structure that contains the parameters of a convolution layer.
- [BNNSFilterCreateLayerConvolution(\_:\_:)](bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.
- [BNNSFilterCreateLayerTransposedConvolution(\_:\_:)](bnnsfiltercreatelayertransposedconvolution%28____%29.md): Deprecated. Returns a new transposed convolution layer.

# BNNSConvolutionLayerParameters (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A structure containing convolution parameters.

> Use [BNNSLayerParametersConvolution](bnnslayerparametersconvolution.md) instead.

## Declaration

```objectivec
typedef struct { ... } BNNSConvolutionLayerParameters;
```

## Topics

### Instance Properties

- [activation](bnnsconvolutionlayerparameters/activation.md): Deprecated. The layer activation function.
- [bias](bnnsconvolutionlayerparameters/bias.md): Deprecated. Layer bias, one for each output channel.
- [in_channels](bnnsconvolutionlayerparameters/in_channels.md): Deprecated. The number of input channels.
- [k_height](bnnsconvolutionlayerparameters/k_height.md): Deprecated. The height of the convolution kernel.
- [k_width](bnnsconvolutionlayerparameters/k_width.md): Deprecated. The width of the convolution kernel.
- [out_channels](bnnsconvolutionlayerparameters/out_channels.md): Deprecated. The number of output channels.
- [weights](bnnsconvolutionlayerparameters/weights.md): Deprecated. Convolution weights.
- [x_padding](bnnsconvolutionlayerparameters/x_padding.md): Deprecated. The X padding.
- [x_stride](bnnsconvolutionlayerparameters/x_stride.md): Deprecated. The X increment in the input image.
- [y_padding](bnnsconvolutionlayerparameters/y_padding.md): Deprecated. The Y padding.
- [y_stride](bnnsconvolutionlayerparameters/y_stride.md): Deprecated. The Y increment in the input image.

## See Also

### Convolution layers

- [BNNSFilterCreateConvolutionLayer](bnnsfiltercreateconvolutionlayer%28________%29.md): Deprecated. Returns a convolution filter, initialized with input, output, layer, and filter parameters.
- [BNNSLayerParametersConvolution](bnnslayerparametersconvolution.md): Deprecated. A structure that contains the parameters of a convolution layer.
- [BNNSFilterCreateLayerConvolution](bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.
- [BNNSFilterCreateLayerTransposedConvolution](bnnsfiltercreatelayertransposedconvolution%28____%29.md): Deprecated. Returns a new transposed convolution layer.
