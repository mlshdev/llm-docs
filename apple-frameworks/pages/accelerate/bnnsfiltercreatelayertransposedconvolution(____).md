> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfiltercreatelayertransposedconvolution(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfiltercreatelayertransposedconvolution(_:_:))

# BNNSFilterCreateLayerTransposedConvolution(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new transposed convolution layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFilterCreateLayerTransposedConvolution(_ layer_params: UnsafePointer<BNNSLayerParametersConvolution>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSFilter?
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use transposed convolution to upsample a tensor by performing an operation that’s effectively the inverse of a convolution.

The following figure illustrates the process of transposed convolution. The operation multiplies each element in the input by the kernel to produce the corresponding values in the output. The final output, pictured at the bottom of the figure, is the sum of the products:

![Figure that describes a transposed convolution operation over a two times two source matrix using a three times three kernel. Each step is illustrated as a row, showing scalar multiplication of the source element multiplied by the kernel, and the transposed convolution result is the sum of each scalar multiplication.](https://developer.apple.com/images/com.apple.accelerate/media-3633105@2x.png)

Use the following code to perform the illustrated transposed convolution:

```swift
let input = [Float](repeating: 1, count: 2 * 2)

var kernel = [Float](repeating: 1, count: 3 * 3)

var output = [Float](repeating: 0, count: 4 * 4)

kernel.withUnsafeMutableBufferPointer { kernelPtr in
    
    let inDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                             layout: BNNSDataLayoutImageCHW,
                                             size: (2, 2, 1, 0, 0, 0, 0, 0),
                                             stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                             data: nil,
                                             data_type: .float,
                                             table_data: nil,
                                             table_data_type: .float,
                                             data_scale: 1,
                                             data_bias: 0)
    
    let weightsDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                  layout: BNNSDataLayoutConvolutionWeightsOIHW,
                                                  size: (3, 3, 1, 1, 0, 0, 0, 0),
                                                  stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                  data: kernelPtr.baseAddress,
                                                  data_type: .float,
                                                  table_data: nil,
                                                  table_data_type: .float,
                                                  data_scale: 1,
                                                  data_bias: 0)
    
    let outDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                              layout: BNNSDataLayoutImageCHW,
                                              size: (4, 4, 1, 0, 0, 0, 0, 0),
                                              stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                              data: nil,
                                              data_type: .float,
                                              table_data: nil,
                                              table_data_type: .float,
                                              data_scale: 1,
                                              data_bias: 0)
    
    var parameters = BNNSLayerParametersConvolution(i_desc: inDescriptor,
                                                    w_desc: weightsDescriptor,
                                                    o_desc: outDescriptor,
                                                    bias: BNNSNDArrayDescriptor(),
                                                    activation: .identity,
                                                    x_stride: 1, y_stride: 1,
                                                    x_dilation_stride: 0, y_dilation_stride: 0,
                                                    x_padding: 0, y_padding: 0,
                                                    groups: 1,
                                                    pad: (0, 0, 0, 0))

    let filter = BNNSFilterCreateLayerTransposedConvolution(&parameters,
                                                            nil)
    defer {
        BNNSFilterDestroy(filter)
    }
    
    BNNSFilterApply(filter,
                    input,
                    &output)
}
```

On return, `output` contains the following values:

```swift
[ 1.0, 2.0, 2.0, 1.0, 
  2.0, 4.0, 4.0, 2.0, 
  2.0, 4.0, 4.0, 2.0, 
  1.0, 2.0, 2.0, 1.0 ]
```

## See Also

### Convolution layers

- [BNNSConvolutionLayerParameters](bnnsconvolutionlayerparameters.md): Deprecated. A structure containing convolution parameters.
- [BNNSFilterCreateConvolutionLayer(\_:\_:\_:\_:)](bnnsfiltercreateconvolutionlayer%28________%29.md): Deprecated. Returns a convolution filter, initialized with input, output, layer, and filter parameters.
- [BNNS.ConvolutionLayer](bnns/convolutionlayer.md): Deprecated. A layer object that wraps a convolution filter and manages its deinitialization.
- [BNNSLayerParametersConvolution](bnnslayerparametersconvolution.md): Deprecated. A structure that contains the parameters of a convolution layer.
- [BNNSFilterCreateLayerConvolution(\_:\_:)](bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.

# BNNSFilterCreateLayerTransposedConvolution (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new transposed convolution layer.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
BNNSFilterBNNSFilterCreateLayerTransposedConvolution(const BNNSLayerParametersConvolution *layer_params, const BNNSFilterParameters *filter_params);
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use transposed convolution to upsample a tensor by performing an operation that’s effectively the inverse of a convolution.

The following figure illustrates the process of transposed convolution. The operation multiplies each element in the input by the kernel to produce the corresponding values in the output. The final output, pictured at the bottom of the figure, is the sum of the products:

![Figure that describes a transposed convolution operation over a two times two source matrix using a three times three kernel. Each step is illustrated as a row, showing scalar multiplication of the source element multiplied by the kernel, and the transposed convolution result is the sum of each scalar multiplication.](https://developer.apple.com/images/com.apple.accelerate/media-3633105@2x.png)

Use the following code to perform the illustrated transposed convolution:

```swift
let input = [Float](repeating: 1, count: 2 * 2)

var kernel = [Float](repeating: 1, count: 3 * 3)

var output = [Float](repeating: 0, count: 4 * 4)

kernel.withUnsafeMutableBufferPointer { kernelPtr in
    
    let inDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                             layout: BNNSDataLayoutImageCHW,
                                             size: (2, 2, 1, 0, 0, 0, 0, 0),
                                             stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                             data: nil,
                                             data_type: .float,
                                             table_data: nil,
                                             table_data_type: .float,
                                             data_scale: 1,
                                             data_bias: 0)
    
    let weightsDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                  layout: BNNSDataLayoutConvolutionWeightsOIHW,
                                                  size: (3, 3, 1, 1, 0, 0, 0, 0),
                                                  stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                  data: kernelPtr.baseAddress,
                                                  data_type: .float,
                                                  table_data: nil,
                                                  table_data_type: .float,
                                                  data_scale: 1,
                                                  data_bias: 0)
    
    let outDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                              layout: BNNSDataLayoutImageCHW,
                                              size: (4, 4, 1, 0, 0, 0, 0, 0),
                                              stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                              data: nil,
                                              data_type: .float,
                                              table_data: nil,
                                              table_data_type: .float,
                                              data_scale: 1,
                                              data_bias: 0)
    
    var parameters = BNNSLayerParametersConvolution(i_desc: inDescriptor,
                                                    w_desc: weightsDescriptor,
                                                    o_desc: outDescriptor,
                                                    bias: BNNSNDArrayDescriptor(),
                                                    activation: .identity,
                                                    x_stride: 1, y_stride: 1,
                                                    x_dilation_stride: 0, y_dilation_stride: 0,
                                                    x_padding: 0, y_padding: 0,
                                                    groups: 1,
                                                    pad: (0, 0, 0, 0))

    let filter = BNNSFilterCreateLayerTransposedConvolution(&parameters,
                                                            nil)
    defer {
        BNNSFilterDestroy(filter)
    }
    
    BNNSFilterApply(filter,
                    input,
                    &output)
}
```

On return, `output` contains the following values:

```swift
[ 1.0, 2.0, 2.0, 1.0, 
  2.0, 4.0, 4.0, 2.0, 
  2.0, 4.0, 4.0, 2.0, 
  1.0, 2.0, 2.0, 1.0 ]
```

## See Also

### Convolution layers

- [BNNSConvolutionLayerParameters](bnnsconvolutionlayerparameters.md): Deprecated. A structure containing convolution parameters.
- [BNNSFilterCreateConvolutionLayer](bnnsfiltercreateconvolutionlayer%28________%29.md): Deprecated. Returns a convolution filter, initialized with input, output, layer, and filter parameters.
- [BNNSLayerParametersConvolution](bnnslayerparametersconvolution.md): Deprecated. A structure that contains the parameters of a convolution layer.
- [BNNSFilterCreateLayerConvolution](bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.
