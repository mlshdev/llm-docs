> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnscropresizebackward(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnscropresizebackward(_:_:_:_:_:))

# BNNSCropResizeBackward(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Applies a crop-resize filter backward to generate gradients.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSCropResizeBackward(_ layer_params: UnsafePointer<BNNSLayerParametersCropResize>, _ in_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ roi: UnsafePointer<BNNSNDArrayDescriptor>, _ out_delta: UnsafePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `layer_params`: A pointer to the layer parameters.
- `in_delta`: A pointer to the input delta descriptor.
- `roi`: A pointer to the regions of interest array descriptor.
- `out_delta`: A pointer to the output delta descriptor.
- `filter_params`: Runtime filter parameters.

## See Also

### Crop-resize layers

- [BNNS.CropResizeLayer](bnns/cropresizelayer.md): Deprecated. A layer object that wraps a crop-resize filter and manages its deinitialization.
- [BNNSCropResize(\_:\_:\_:\_:\_:)](bnnscropresize%28__________%29.md): Deprecated. Extracts and resizes regions of interest of an input tensor.
- [BNNSLayerParametersCropResize](bnnslayerparameterscropresize.md): Deprecated. A set of parameters that describe a crop-resize operation.
- [BNNSBoxCoordinateMode](bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.
- [BNNSLinearSamplingMode](bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.

# BNNSCropResizeBackward (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Applies a crop-resize filter backward to generate gradients.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSCropResizeBackward(const BNNSLayerParametersCropResize *layer_params, BNNSNDArrayDescriptor *in_delta, const BNNSNDArrayDescriptor *roi, const BNNSNDArrayDescriptor *out_delta, const BNNSFilterParameters *filter_params);
```

## Parameters

- `layer_params`: A pointer to the layer parameters.
- `in_delta`: A pointer to the input delta descriptor.
- `roi`: A pointer to the regions of interest array descriptor.
- `out_delta`: A pointer to the output delta descriptor.
- `filter_params`: Runtime filter parameters.

## See Also

### Crop-resize layers

- [BNNSCropResize](bnnscropresize%28__________%29.md): Deprecated. Extracts and resizes regions of interest of an input tensor.
- [BNNSLayerParametersCropResize](bnnslayerparameterscropresize.md): Deprecated. A set of parameters that describe a crop-resize operation.
- [BNNSBoxCoordinateMode](bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.
- [BNNSLinearSamplingMode](bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.
