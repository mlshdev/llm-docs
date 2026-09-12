> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnspoolinglayerparameters](https://developer.apple.com/documentation/accelerate/bnnspoolinglayerparameters)

# BNNSPoolingLayerParameters (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A structure containing pooling layer parameters.

> Use [BNNSLayerParametersPooling](bnnslayerparameterspooling.md) instead.

## Declaration

```swift
struct BNNSPoolingLayerParameters
```

## Topics

### Initializers

- [init()](bnnspoolinglayerparameters/init%28%29.md): Deprecated.
- [init(x_stride:y_stride:x_padding:y_padding:k_width:k_height:in_channels:out_channels:pooling_function:bias:activation:)](bnnspoolinglayerparameters/init%28x_stride_y_stride_x_padding_y_padding_k_width_k_height_in_channels_out_channels_pooling_function_bias_activation_%29.md): Deprecated. Returns a new pooling layer parameters structure
- [init(x_stride:y_stride:x_padding:y_padding:k_width:k_height:in_channels:out_channels:pooling_function:)](bnnspoolinglayerparameters/init%28x_stride_y_stride_x_padding_y_padding_k_width_k_height_in_channels_out_channels_pooling_function_%29.md): Deprecated.

### Instance Properties

- [activation](bnnspoolinglayerparameters/activation.md): Deprecated. The layer activation function.
- [bias](bnnspoolinglayerparameters/bias.md): Deprecated. Layer bias, one for each output channel.
- [in_channels](bnnspoolinglayerparameters/in_channels.md): Deprecated. The number of input channels.
- [k_height](bnnspoolinglayerparameters/k_height.md): Deprecated. The height of the convolution kernel.
- [k_width](bnnspoolinglayerparameters/k_width.md): Deprecated. The width of the convolution kernel.
- [out_channels](bnnspoolinglayerparameters/out_channels.md): Deprecated. The number of output channels.
- [pooling_function](bnnspoolinglayerparameters/pooling_function.md): Deprecated. The pooling function to apply to each sample.
- [x_padding](bnnspoolinglayerparameters/x_padding.md): Deprecated. The X padding.
- [x_stride](bnnspoolinglayerparameters/x_stride.md): Deprecated. The X increment in the input image.
- [y_padding](bnnspoolinglayerparameters/y_padding.md): Deprecated. The Y padding.
- [y_stride](bnnspoolinglayerparameters/y_stride.md): Deprecated. The Y increment in the input image.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Pooling layers

- [BNNSFilterCreatePoolingLayer(\_:\_:\_:\_:)](bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNS.PoolingLayer](bnns/poolinglayer.md): Deprecated. A layer object that wraps a pooling filter and manages its deinitialization.
- [BNNSPoolingFunction](bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSPoolingFunctionAverage](bnnspoolingfunctionaverage.md): Deprecated.
- [BNNSPoolingFunctionMax](bnnspoolingfunctionmax.md): Deprecated.
- [BNNSLayerParametersPooling](bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling(\_:\_:)](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.

# BNNSPoolingLayerParameters (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A structure containing pooling layer parameters.

> Use [BNNSLayerParametersPooling](bnnslayerparameterspooling.md) instead.

## Declaration

```objectivec
typedef struct { ... } BNNSPoolingLayerParameters;
```

## Topics

### Instance Properties

- [activation](bnnspoolinglayerparameters/activation.md): Deprecated. The layer activation function.
- [bias](bnnspoolinglayerparameters/bias.md): Deprecated. Layer bias, one for each output channel.
- [in_channels](bnnspoolinglayerparameters/in_channels.md): Deprecated. The number of input channels.
- [k_height](bnnspoolinglayerparameters/k_height.md): Deprecated. The height of the convolution kernel.
- [k_width](bnnspoolinglayerparameters/k_width.md): Deprecated. The width of the convolution kernel.
- [out_channels](bnnspoolinglayerparameters/out_channels.md): Deprecated. The number of output channels.
- [pooling_function](bnnspoolinglayerparameters/pooling_function.md): Deprecated. The pooling function to apply to each sample.
- [x_padding](bnnspoolinglayerparameters/x_padding.md): Deprecated. The X padding.
- [x_stride](bnnspoolinglayerparameters/x_stride.md): Deprecated. The X increment in the input image.
- [y_padding](bnnspoolinglayerparameters/y_padding.md): Deprecated. The Y padding.
- [y_stride](bnnspoolinglayerparameters/y_stride.md): Deprecated. The Y increment in the input image.

## See Also

### Pooling layers

- [BNNSFilterCreatePoolingLayer](bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNSPoolingFunction](bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSLayerParametersPooling](bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx](bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.
