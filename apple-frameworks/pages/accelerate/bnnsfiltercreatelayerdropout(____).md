> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfiltercreatelayerdropout(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfiltercreatelayerdropout(_:_:))

# BNNSFilterCreateLayerDropout(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new dropout layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFilterCreateLayerDropout(_ layer_params: UnsafePointer<BNNSLayerParametersDropout>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSFilter?
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: Filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use a dropout layer to randomly set the elements—or entire dimensions—of a tensor to 0. The layer scales the unchanged elements by `1 / (1 -` [rate](bnnslayerparametersdropout/rate.md) `)`. The following code randomly drops half the elements from a 4 x 4 matrix:

```swift
let input: [Float] = [1, 1, 1, 1,
                      1, 1, 1, 1,
                      1, 1, 1, 1,
                      1, 1, 1, 1]

var output = [Float](repeating: 0,
                     count: input.count)

let descriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                       layout: BNNSDataLayoutRowMajorMatrix,
                                       size: (4, 4, 0, 0, 0, 0, 0, 0),
                                       stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                       data: nil,
                                       data_type: .float,
                                       table_data: nil,
                                       table_data_type: .float,
                                       data_scale: 0,
                                       data_bias: 0)

let control: UInt8 = 0b0000
let rate: Float = 0.5

var dropoutParams = BNNSLayerParametersDropout(i_desc: descriptor,
                                               o_desc: descriptor,
                                               rate: rate,
                                               seed: 0,
                                               control: control)

let dropoutFilter = BNNSFilterCreateLayerDropout(&dropoutParams, nil)

BNNSFilterApply(dropoutFilter, input, &output)
```

On return, output contains the following values:

```c
[ 2.0, 2.0, 0.0, 0.0, 
  2.0, 2.0, 0.0, 2.0, 
  2.0, 0.0, 0.0, 2.0, 
  0.0, 0.0, 0.0, 2.0 ]
```

Use the [control](bnnslayerparametersdropout/control.md) parameter to dropout entire dimensions. For example, setting `control` to `0b0010` and `rate` to `0.75` drops three quarters of the columns, and scales the remaining values by 4:

```c
[ 0.0, 4.0, 0.0, 0.0, 
  0.0, 4.0, 0.0, 0.0, 
  0.0, 4.0, 0.0, 0.0, 
  0.0, 4.0, 0.0, 0.0 ]
```

## See Also

### Dropout layers

- [BNNS.DropoutLayer](bnns/dropoutlayer.md): Deprecated. A layer object that wraps a dropout filter and manages its deinitialization.
- [BNNSLayerParametersDropout](bnnslayerparametersdropout.md): Deprecated. A structure that contains the parameters of a dropout layer.

# BNNSFilterCreateLayerDropout (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new dropout layer.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
BNNSFilterBNNSFilterCreateLayerDropout(const BNNSLayerParametersDropout *layer_params, const BNNSFilterParameters *filter_params);
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: Filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use a dropout layer to randomly set the elements—or entire dimensions—of a tensor to 0. The layer scales the unchanged elements by `1 / (1 -` [rate](bnnslayerparametersdropout/rate.md) `)`. The following code randomly drops half the elements from a 4 x 4 matrix:

```swift
let input: [Float] = [1, 1, 1, 1,
                      1, 1, 1, 1,
                      1, 1, 1, 1,
                      1, 1, 1, 1]

var output = [Float](repeating: 0,
                     count: input.count)

let descriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                       layout: BNNSDataLayoutRowMajorMatrix,
                                       size: (4, 4, 0, 0, 0, 0, 0, 0),
                                       stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                       data: nil,
                                       data_type: .float,
                                       table_data: nil,
                                       table_data_type: .float,
                                       data_scale: 0,
                                       data_bias: 0)

let control: UInt8 = 0b0000
let rate: Float = 0.5

var dropoutParams = BNNSLayerParametersDropout(i_desc: descriptor,
                                               o_desc: descriptor,
                                               rate: rate,
                                               seed: 0,
                                               control: control)

let dropoutFilter = BNNSFilterCreateLayerDropout(&dropoutParams, nil)

BNNSFilterApply(dropoutFilter, input, &output)
```

On return, output contains the following values:

```c
[ 2.0, 2.0, 0.0, 0.0, 
  2.0, 2.0, 0.0, 2.0, 
  2.0, 0.0, 0.0, 2.0, 
  0.0, 0.0, 0.0, 2.0 ]
```

Use the [control](bnnslayerparametersdropout/control.md) parameter to dropout entire dimensions. For example, setting `control` to `0b0010` and `rate` to `0.75` drops three quarters of the columns, and scales the remaining values by 4:

```c
[ 0.0, 4.0, 0.0, 0.0, 
  0.0, 4.0, 0.0, 0.0, 
  0.0, 4.0, 0.0, 0.0, 
  0.0, 4.0, 0.0, 0.0 ]
```

## See Also

### Dropout layers

- [BNNSLayerParametersDropout](bnnslayerparametersdropout.md): Deprecated. A structure that contains the parameters of a dropout layer.
