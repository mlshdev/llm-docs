> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersconvolution](https://developer.apple.com/documentation/accelerate/bnnslayerparametersconvolution)

# BNNSLayerParametersConvolution (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a convolution layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersConvolution
```

## Topics

### Initializers

- [init(i_desc:w_desc:o_desc:bias:activation:x_stride:y_stride:x_dilation_stride:y_dilation_stride:x_padding:y_padding:groups:pad:)](bnnslayerparametersconvolution/init%28i_desc_w_desc_o_desc_bias_activation_x_stride_y_stride_x_dilation_stride_y_dilation_stride_x_padding_y_padding_groups_pad_%29.md): Deprecated. Returns a new convolution layer parameters structure from the specified parameters.
- [init()](bnnslayerparametersconvolution/init%28%29.md): Deprecated. Returns a new convolution layer parameters structure.

### Instance Properties

- [i_desc](bnnslayerparametersconvolution/i_desc.md): Deprecated. The descriptor of the input.
- [w_desc](bnnslayerparametersconvolution/w_desc.md): Deprecated. The descriptor of the weights.
- [o_desc](bnnslayerparametersconvolution/o_desc.md): Deprecated. The descriptor of the output.
- [bias](bnnslayerparametersconvolution/bias.md): Deprecated. The bias descriptor.
- [activation](bnnslayerparametersconvolution/activation.md): Deprecated. The activation function that the layer applies to the output.
- [x_stride](bnnslayerparametersconvolution/x_stride.md): Deprecated. The width increment of the input image.
- [y_stride](bnnslayerparametersconvolution/y_stride.md): Deprecated. The height increment of the input image.
- [x_dilation_stride](bnnslayerparametersconvolution/x_dilation_stride.md): Deprecated. The width increment between elements in the input image during convolution.
- [y_dilation_stride](bnnslayerparametersconvolution/y_dilation_stride.md): Deprecated. The height increment between elements in the input image during convolution.
- [x_padding](bnnslayerparametersconvolution/x_padding.md): Deprecated. The width padding, which is the number of virtual zeros added to the left and right of each channel.
- [y_padding](bnnslayerparametersconvolution/y_padding.md): Deprecated. The height padding, which is the number of virtual zeros added to the top and bottom of each channel.
- [groups](bnnslayerparametersconvolution/groups.md): Deprecated. Convolution group size.
- [pad](bnnslayerparametersconvolution/pad.md): Deprecated. Padding which is asymmetric and ignored if the width or height padding values are greater than zero.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Convolution layers

- [BNNSConvolutionLayerParameters](bnnsconvolutionlayerparameters.md): Deprecated. A structure containing convolution parameters.
- [BNNSFilterCreateConvolutionLayer(\_:\_:\_:\_:)](bnnsfiltercreateconvolutionlayer%28________%29.md): Deprecated. Returns a convolution filter, initialized with input, output, layer, and filter parameters.
- [BNNS.ConvolutionLayer](bnns/convolutionlayer.md): Deprecated. A layer object that wraps a convolution filter and manages its deinitialization.
- [BNNSFilterCreateLayerConvolution(\_:\_:)](bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.
- [BNNSFilterCreateLayerTransposedConvolution(\_:\_:)](bnnsfiltercreatelayertransposedconvolution%28____%29.md): Deprecated. Returns a new transposed convolution layer.

# BNNSLayerParametersConvolution (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a convolution layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersConvolution;
```

## Topics

### Instance Properties

- [i_desc](bnnslayerparametersconvolution/i_desc.md): Deprecated. The descriptor of the input.
- [w_desc](bnnslayerparametersconvolution/w_desc.md): Deprecated. The descriptor of the weights.
- [o_desc](bnnslayerparametersconvolution/o_desc.md): Deprecated. The descriptor of the output.
- [bias](bnnslayerparametersconvolution/bias.md): Deprecated. The bias descriptor.
- [activation](bnnslayerparametersconvolution/activation.md): Deprecated. The activation function that the layer applies to the output.
- [x_stride](bnnslayerparametersconvolution/x_stride.md): Deprecated. The width increment of the input image.
- [y_stride](bnnslayerparametersconvolution/y_stride.md): Deprecated. The height increment of the input image.
- [x_dilation_stride](bnnslayerparametersconvolution/x_dilation_stride.md): Deprecated. The width increment between elements in the input image during convolution.
- [y_dilation_stride](bnnslayerparametersconvolution/y_dilation_stride.md): Deprecated. The height increment between elements in the input image during convolution.
- [x_padding](bnnslayerparametersconvolution/x_padding.md): Deprecated. The width padding, which is the number of virtual zeros added to the left and right of each channel.
- [y_padding](bnnslayerparametersconvolution/y_padding.md): Deprecated. The height padding, which is the number of virtual zeros added to the top and bottom of each channel.
- [groups](bnnslayerparametersconvolution/groups.md): Deprecated. Convolution group size.
- [pad](bnnslayerparametersconvolution/pad.md): Deprecated. Padding which is asymmetric and ignored if the width or height padding values are greater than zero.

## See Also

### Convolution layers

- [BNNSConvolutionLayerParameters](bnnsconvolutionlayerparameters.md): Deprecated. A structure containing convolution parameters.
- [BNNSFilterCreateConvolutionLayer](bnnsfiltercreateconvolutionlayer%28________%29.md): Deprecated. Returns a convolution filter, initialized with input, output, layer, and filter parameters.
- [BNNSFilterCreateLayerConvolution](bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.
- [BNNSFilterCreateLayerTransposedConvolution](bnnsfiltercreatelayertransposedconvolution%28____%29.md): Deprecated. Returns a new transposed convolution layer.
