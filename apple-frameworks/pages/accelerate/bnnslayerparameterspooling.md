> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterspooling](https://developer.apple.com/documentation/accelerate/bnnslayerparameterspooling)

# BNNSLayerParametersPooling (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a pooling layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersPooling
```

## Topics

### Initializers

- [init(i_desc:o_desc:bias:activation:pooling_function:k_width:k_height:x_stride:y_stride:x_dilation_stride:y_dilation_stride:x_padding:y_padding:pad:)](bnnslayerparameterspooling/init%28i_desc_o_desc_bias_activation_pooling_function_k_width_k_height_x_stride_y_stride_x_dilation_stride_y_dilation_stride_x_padding_y_padding_pad_%29.md): Deprecated. Returns a new pooling layer parameters structure from the specified parameters.
- [init()](bnnslayerparameterspooling/init%28%29.md): Deprecated. Returns a new pooling layer parameters structure.

### Instance Properties

- [i_desc](bnnslayerparameterspooling/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparameterspooling/o_desc.md): Deprecated. The descriptor of the output.
- [bias](bnnslayerparameterspooling/bias.md): Deprecated. The descriptor of the bias.
- [activation](bnnslayerparameterspooling/activation.md): Deprecated. The activation function that the layer applies to the output.
- [pooling_function](bnnslayerparameterspooling/pooling_function.md): Deprecated. The variable that specifies the pooling function.
- [k_width](bnnslayerparameterspooling/k_width.md): Deprecated. The width of the kernel.
- [k_height](bnnslayerparameterspooling/k_height.md): Deprecated. The height of the kernel.
- [x_stride](bnnslayerparameterspooling/x_stride.md): Deprecated. The width increment of the input image.
- [y_stride](bnnslayerparameterspooling/y_stride.md): Deprecated. The height increment of the input image.
- [x_dilation_stride](bnnslayerparameterspooling/x_dilation_stride.md): Deprecated. The width increment between elements in the input image during convolution.
- [y_dilation_stride](bnnslayerparameterspooling/y_dilation_stride.md): Deprecated. The height increment between elements in the input image during convolution.
- [x_padding](bnnslayerparameterspooling/x_padding.md): Deprecated. The width padding, which is the number of virtual zeros added to the left and right of each channel.
- [y_padding](bnnslayerparameterspooling/y_padding.md): Deprecated. The height padding, which is the number of virtual zeros added to the top and bottom of each channel.
- [pad](bnnslayerparameterspooling/pad.md): Deprecated. Asymmetric padding, ignored if `x_padding` or `y_padding` are greater than zero.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Pooling layers

- [BNNSPoolingLayerParameters](bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNSFilterCreatePoolingLayer(\_:\_:\_:\_:)](bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNS.PoolingLayer](bnns/poolinglayer.md): Deprecated. A layer object that wraps a pooling filter and manages its deinitialization.
- [BNNSPoolingFunction](bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSPoolingFunctionAverage](bnnspoolingfunctionaverage.md): Deprecated.
- [BNNSPoolingFunctionMax](bnnspoolingfunctionmax.md): Deprecated.
- [BNNSFilterCreateLayerPooling(\_:\_:)](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.

# BNNSLayerParametersPooling (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a pooling layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersPooling;
```

## Topics

### Instance Properties

- [i_desc](bnnslayerparameterspooling/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparameterspooling/o_desc.md): Deprecated. The descriptor of the output.
- [bias](bnnslayerparameterspooling/bias.md): Deprecated. The descriptor of the bias.
- [activation](bnnslayerparameterspooling/activation.md): Deprecated. The activation function that the layer applies to the output.
- [pooling_function](bnnslayerparameterspooling/pooling_function.md): Deprecated. The variable that specifies the pooling function.
- [k_width](bnnslayerparameterspooling/k_width.md): Deprecated. The width of the kernel.
- [k_height](bnnslayerparameterspooling/k_height.md): Deprecated. The height of the kernel.
- [x_stride](bnnslayerparameterspooling/x_stride.md): Deprecated. The width increment of the input image.
- [y_stride](bnnslayerparameterspooling/y_stride.md): Deprecated. The height increment of the input image.
- [x_dilation_stride](bnnslayerparameterspooling/x_dilation_stride.md): Deprecated. The width increment between elements in the input image during convolution.
- [y_dilation_stride](bnnslayerparameterspooling/y_dilation_stride.md): Deprecated. The height increment between elements in the input image during convolution.
- [x_padding](bnnslayerparameterspooling/x_padding.md): Deprecated. The width padding, which is the number of virtual zeros added to the left and right of each channel.
- [y_padding](bnnslayerparameterspooling/y_padding.md): Deprecated. The height padding, which is the number of virtual zeros added to the top and bottom of each channel.
- [pad](bnnslayerparameterspooling/pad.md): Deprecated. Asymmetric padding, ignored if `x_padding` or `y_padding` are greater than zero.

## See Also

### Pooling layers

- [BNNSPoolingLayerParameters](bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNSFilterCreatePoolingLayer](bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNSPoolingFunction](bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSFilterCreateLayerPooling](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx](bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.
