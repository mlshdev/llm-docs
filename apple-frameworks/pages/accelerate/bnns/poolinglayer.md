> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/poolinglayer](https://developer.apple.com/documentation/accelerate/bnns/poolinglayer)

# BNNS.PoolingLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a pooling filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class PoolingLayer
```

## Topics

### Creating a Pooling Layer

- [init(type:input:output:bias:activation:kernelSize:stride:padding:filterParameters:)](poolinglayer/init%28type_input_output_bias_activation_kernelsize_stride_padding_filterparameters_%29.md): Deprecated. Returns a new pooling layer.

### Specifying a Pooling Type

- [BNNS.PoolingType](poolingtype.md): Deprecated. Constants that describe pooling types.

### Applying a Pooling Layer

- [apply(batchSize:input:output:)](poolinglayer/apply%28batchsize_input_output_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
- [applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingBiasGradient:)](poolinglayer/applybackward%28batchsize_input_output_outputgradient_generatinginputgradient_generatingbiasgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.

## Relationships

### Inherits From

- [BNNS.Layer](layer.md)

## See Also

### Pooling layers

- [BNNSPoolingLayerParameters](../bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNSFilterCreatePoolingLayer(\_:\_:\_:\_:)](../bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNSPoolingFunction](../bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSPoolingFunctionAverage](../bnnspoolingfunctionaverage.md): Deprecated.
- [BNNSPoolingFunctionMax](../bnnspoolingfunctionmax.md): Deprecated.
- [BNNSLayerParametersPooling](../bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling(\_:\_:)](../bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.
