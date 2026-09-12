> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnscropresize(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnscropresize(_:_:_:_:_:))

# BNNSCropResize(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Extracts and resizes regions of interest of an input tensor.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSCropResize(_ layer_params: UnsafePointer<BNNSLayerParametersCropResize>, _ input: UnsafePointer<BNNSNDArrayDescriptor>, _ roi: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `layer_params`: A pointer to the layer parameters.
- `input`: A pointer to the input array descriptor.
- `roi`: A pointer to the regions of interest array descriptor.
- `output`: A pointer to the output array descriptor.
- `filter_params`: Runtime filter parameters.

<a id="Discussion"></a>

## Discussion

Use this function to resize the spatial dimensions (two dimensions with the smallest strides) of the first input according to the bounding boxes and box indices specified in the second input.

The operation works over contiguous 2D data and provides support for multiple channels and batches that contain more than one input-output pair.

For example, the following code defines a 6x5 matrix of single-precision values:

```swift
let batchSize = 1
let channelCount = 1

let values: [Float] = [ 0, 1, 0, 0, 0, 0,
                        1, 1, 1, 0, 0, 0,
                        0, 1, 0, 9, 0, 9,
                        0, 0, 0, 0, 9, 0,
                        0, 0, 0, 9, 0, 9 ]

var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .tensor4DLastMajor(6,
                              5,
                              channelCount,
                              batchSize))
```

Define the regions of interest as sets of four coordinates. The code below specifies the regions of interest with [BNNSCenterSizeWidthFirst](bnnscentersizewidthfirst.md) coordinate mode, that is the coordinates are ordered as horizontal center, vertical center, width, and height.

```swift
// Extracts:
//      0.0, 1.0, 0.0,
//      1.0, 1.0, 1.0,
//      0.0, 1.0, 0.0
let roiValues0: [Float] = [1, // w_center
                           1, // h_center
                           3, // box_width
                           3] // box_height

// Extracts:
//      9.0, 0.0, 9.0,
//      0.0, 9.0, 0.0,
//      9.0, 0.0, 9.0
let roiValues1: [Float] = [4, // w_center
                           3, // h_center
                           3, // box_width
                           3] // box_height
let boxCount = 2

var roiDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: roiValues0 + roiValues1,
    shape: .matrixLastMajor(4,
                            boxCount))
```

Specify the output descriptor as a 5D tensor.

```swift
let outputWidth = 3
let outputHeight = 3

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .tensor5DLastMajor(outputWidth,
                              outputHeight,
                              channelCount,
                              batchSize,
                              boxCount))
```

To perform the crop-resize, create a parameters structure and call [BNNSCropResize(\_:\_:\_:\_:\_:)](bnnscropresize%28__________%29.md).

```swift
var params = BNNSLayerParametersCropResize(
    normalized_coordinates: false,
    spatial_scale: 1,
    extrapolation_value: 0,
    sampling_mode: BNNSLinearSamplingOffsetCorners,
    box_coordinate_mode: BNNSCenterSizeWidthFirst,
    method: BNNSInterpolationMethodLinear)

BNNSCropResize(&params,
               &inputDescriptor,
               &roiDescriptor,
               &outputDescriptor, nil)
```

On return, `outputDescriptor` contains `boxCount` slices that contain the data with the regions of interest of the input tensor:

```swift
[ 0.0, 1.0, 0.0,
  1.0, 1.0, 1.0,
  0.0, 1.0, 0.0,

  9.0, 0.0, 9.0,
  0.0, 9.0, 0.0,
  9.0, 0.0, 9.0 ]
```

## See Also

### Crop-resize layers

- [BNNS.CropResizeLayer](bnns/cropresizelayer.md): Deprecated. A layer object that wraps a crop-resize filter and manages its deinitialization.
- [BNNSCropResizeBackward(\_:\_:\_:\_:\_:)](bnnscropresizebackward%28__________%29.md): Deprecated. Applies a crop-resize filter backward to generate gradients.
- [BNNSLayerParametersCropResize](bnnslayerparameterscropresize.md): Deprecated. A set of parameters that describe a crop-resize operation.
- [BNNSBoxCoordinateMode](bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.
- [BNNSLinearSamplingMode](bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.

# BNNSCropResize (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Extracts and resizes regions of interest of an input tensor.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSCropResize(const BNNSLayerParametersCropResize *layer_params, const BNNSNDArrayDescriptor *input, const BNNSNDArrayDescriptor *roi, BNNSNDArrayDescriptor *output, const BNNSFilterParameters *filter_params);
```

## Parameters

- `layer_params`: A pointer to the layer parameters.
- `input`: A pointer to the input array descriptor.
- `roi`: A pointer to the regions of interest array descriptor.
- `output`: A pointer to the output array descriptor.
- `filter_params`: Runtime filter parameters.

<a id="Discussion"></a>

## Discussion

Use this function to resize the spatial dimensions (two dimensions with the smallest strides) of the first input according to the bounding boxes and box indices specified in the second input.

The operation works over contiguous 2D data and provides support for multiple channels and batches that contain more than one input-output pair.

For example, the following code defines a 6x5 matrix of single-precision values:

```swift
let batchSize = 1
let channelCount = 1

let values: [Float] = [ 0, 1, 0, 0, 0, 0,
                        1, 1, 1, 0, 0, 0,
                        0, 1, 0, 9, 0, 9,
                        0, 0, 0, 0, 9, 0,
                        0, 0, 0, 9, 0, 9 ]

var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .tensor4DLastMajor(6,
                              5,
                              channelCount,
                              batchSize))
```

Define the regions of interest as sets of four coordinates. The code below specifies the regions of interest with [BNNSCenterSizeWidthFirst](bnnscentersizewidthfirst.md) coordinate mode, that is the coordinates are ordered as horizontal center, vertical center, width, and height.

```swift
// Extracts:
//      0.0, 1.0, 0.0,
//      1.0, 1.0, 1.0,
//      0.0, 1.0, 0.0
let roiValues0: [Float] = [1, // w_center
                           1, // h_center
                           3, // box_width
                           3] // box_height

// Extracts:
//      9.0, 0.0, 9.0,
//      0.0, 9.0, 0.0,
//      9.0, 0.0, 9.0
let roiValues1: [Float] = [4, // w_center
                           3, // h_center
                           3, // box_width
                           3] // box_height
let boxCount = 2

var roiDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: roiValues0 + roiValues1,
    shape: .matrixLastMajor(4,
                            boxCount))
```

Specify the output descriptor as a 5D tensor.

```swift
let outputWidth = 3
let outputHeight = 3

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .tensor5DLastMajor(outputWidth,
                              outputHeight,
                              channelCount,
                              batchSize,
                              boxCount))
```

To perform the crop-resize, create a parameters structure and call [BNNSCropResize](bnnscropresize%28__________%29.md).

```swift
var params = BNNSLayerParametersCropResize(
    normalized_coordinates: false,
    spatial_scale: 1,
    extrapolation_value: 0,
    sampling_mode: BNNSLinearSamplingOffsetCorners,
    box_coordinate_mode: BNNSCenterSizeWidthFirst,
    method: BNNSInterpolationMethodLinear)

BNNSCropResize(&params,
               &inputDescriptor,
               &roiDescriptor,
               &outputDescriptor, nil)
```

On return, `outputDescriptor` contains `boxCount` slices that contain the data with the regions of interest of the input tensor:

```swift
[ 0.0, 1.0, 0.0,
  1.0, 1.0, 1.0,
  0.0, 1.0, 0.0,

  9.0, 0.0, 9.0,
  0.0, 9.0, 0.0,
  9.0, 0.0, 9.0 ]
```

## See Also

### Crop-resize layers

- [BNNSCropResizeBackward](bnnscropresizebackward%28__________%29.md): Deprecated. Applies a crop-resize filter backward to generate gradients.
- [BNNSLayerParametersCropResize](bnnslayerparameterscropresize.md): Deprecated. A set of parameters that describe a crop-resize operation.
- [BNNSBoxCoordinateMode](bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.
- [BNNSLinearSamplingMode](bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.
