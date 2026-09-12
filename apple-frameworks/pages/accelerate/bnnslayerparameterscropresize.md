> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterscropresize](https://developer.apple.com/documentation/accelerate/bnnslayerparameterscropresize)

# BNNSLayerParametersCropResize (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

A set of parameters that describe a crop-resize operation.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersCropResize
```

## Topics

### Initializers

- [init(normalized_coordinates:spatial_scale:extrapolation_value:sampling_mode:box_coordinate_mode:method:)](bnnslayerparameterscropresize/init%28normalized_coordinates_spatial_scale_extrapolation_value_sampling_mode_box_coordinate_mode_method_%29.md): Deprecated. Creates a new layer parameters structure.
- [init()](bnnslayerparameterscropresize/init%28%29.md): Deprecated. Creates a new empty layer parameters structure.

### Instance Properties

- [normalized_coordinates](bnnslayerparameterscropresize/normalized_coordinates.md): Deprecated. A Boolean value that specifies whether the operation treats the coordinates as normalized to `0...1`.
- [spatial_scale](bnnslayerparameterscropresize/spatial_scale.md): Deprecated. An additional spatial scale that mutliplies the bounding box coordinates.
- [extrapolation_value](bnnslayerparameterscropresize/extrapolation_value.md): Deprecated. A value that the operation uses for extrapolation. Default value is `0`.
- [sampling_mode](bnnslayerparameterscropresize/sampling_mode.md): Deprecated. The sampling mode that the operation uses to select sample points.
- [box_coordinate_mode](bnnslayerparameterscropresize/box_coordinate_mode.md): Deprecated. A constant that defines the convention that the operation uses to specify the four bounding box coordinates.
- [method](bnnslayerparameterscropresize/method.md): Deprecated. The interpolation method.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Crop-resize layers

- [BNNS.CropResizeLayer](bnns/cropresizelayer.md): Deprecated. A layer object that wraps a crop-resize filter and manages its deinitialization.
- [BNNSCropResize(\_:\_:\_:\_:\_:)](bnnscropresize%28__________%29.md): Deprecated. Extracts and resizes regions of interest of an input tensor.
- [BNNSCropResizeBackward(\_:\_:\_:\_:\_:)](bnnscropresizebackward%28__________%29.md): Deprecated. Applies a crop-resize filter backward to generate gradients.
- [BNNSBoxCoordinateMode](bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.
- [BNNSLinearSamplingMode](bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.

# BNNSLayerParametersCropResize (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of parameters that describe a crop-resize operation.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersCropResize;
```

## Topics

### Instance Properties

- [normalized_coordinates](bnnslayerparameterscropresize/normalized_coordinates.md): Deprecated. A Boolean value that specifies whether the operation treats the coordinates as normalized to `0...1`.
- [spatial_scale](bnnslayerparameterscropresize/spatial_scale.md): Deprecated. An additional spatial scale that mutliplies the bounding box coordinates.
- [extrapolation_value](bnnslayerparameterscropresize/extrapolation_value.md): Deprecated. A value that the operation uses for extrapolation. Default value is `0`.
- [sampling_mode](bnnslayerparameterscropresize/sampling_mode.md): Deprecated. The sampling mode that the operation uses to select sample points.
- [box_coordinate_mode](bnnslayerparameterscropresize/box_coordinate_mode.md): Deprecated. A constant that defines the convention that the operation uses to specify the four bounding box coordinates.
- [method](bnnslayerparameterscropresize/method.md): Deprecated. The interpolation method.

## See Also

### Crop-resize layers

- [BNNSCropResize](bnnscropresize%28__________%29.md): Deprecated. Extracts and resizes regions of interest of an input tensor.
- [BNNSCropResizeBackward](bnnscropresizebackward%28__________%29.md): Deprecated. Applies a crop-resize filter backward to generate gradients.
- [BNNSBoxCoordinateMode](bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.
- [BNNSLinearSamplingMode](bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.
