> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/cropresizelayer](https://developer.apple.com/documentation/accelerate/bnns/cropresizelayer)

# BNNS.CropResizeLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A layer object that wraps a crop-resize filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class CropResizeLayer
```

## Topics

### Creating a Crop-Resize Layer

- [init(coordinatesAreNormalized:spatialScale:extrapolationValue:samplingMode:boxCoordinateMode:)](cropresizelayer/init%28coordinatesarenormalized_spatialscale_extrapolationvalue_samplingmode_boxcoordinatemode_%29.md): Deprecated. Returns a new crop-resize layer.

### Applying a Crop-Resize Layer

- [apply(input:regionOfInterest:output:filterParameters:)](cropresizelayer/apply%28input_regionofinterest_output_filterparameters_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
- [applyBackward(regionOfInterest:outputGradient:generatingInputGradient:filterParameters:)](cropresizelayer/applybackward%28regionofinterest_outputgradient_generatinginputgradient_filterparameters_%29.md): Deprecated. Applies a crop-resize filter backward to generate an input gradient.

### Suporting Types

- [BNNS.CropResizeLayer.BoxCoordinateMode](cropresizelayer/boxcoordinatemode.md): Deprecated. An enumeration that defines the convention for specifying the bounding box coordinates of a 2D image.
- [BNNS.CropResizeLayer.LinearSamplingMode](cropresizelayer/linearsamplingmode.md): Deprecated. An enumeration that specifies the interpolation sampling mode.

## See Also

### Crop-resize layers

- [BNNSCropResize(\_:\_:\_:\_:\_:)](../bnnscropresize%28__________%29.md): Deprecated. Extracts and resizes regions of interest of an input tensor.
- [BNNSCropResizeBackward(\_:\_:\_:\_:\_:)](../bnnscropresizebackward%28__________%29.md): Deprecated. Applies a crop-resize filter backward to generate gradients.
- [BNNSLayerParametersCropResize](../bnnslayerparameterscropresize.md): Deprecated. A set of parameters that describe a crop-resize operation.
- [BNNSBoxCoordinateMode](../bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.
- [BNNSLinearSamplingMode](../bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.
