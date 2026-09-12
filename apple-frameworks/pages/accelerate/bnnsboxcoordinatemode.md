> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsboxcoordinatemode](https://developer.apple.com/documentation/accelerate/bnnsboxcoordinatemode)

# BNNSBoxCoordinateMode (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.

## Declaration

```swift
struct BNNSBoxCoordinateMode
```

## Topics

### Constants

- [init(\_:)](bnnsboxcoordinatemode/init%28__%29.md)
- [init(rawValue:)](bnnsboxcoordinatemode/init%28rawvalue_%29.md)
- [rawValue](bnnsboxcoordinatemode/rawvalue.md)
- [BNNSCenterSizeHeightFirst](bnnscentersizeheightfirst.md): Specifies coordinates as corners with the order: height start, width start, height end, width end.
- [BNNSCenterSizeWidthFirst](bnnscentersizewidthfirst.md): Specifies coordinates as corners with the order: width start, height start, width end, height end.
- [BNNSCornersHeightFirst](bnnscornersheightfirst.md): Specifies coordinates as center and size with the order: height center, width center, height, width.
- [BNNSCornersWidthFirst](bnnscornerswidthfirst.md): Specifies coordinates as center and size with the order: width center, height center, width, height.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Crop-resize layers

- [BNNS.CropResizeLayer](bnns/cropresizelayer.md): Deprecated. A layer object that wraps a crop-resize filter and manages its deinitialization.
- [BNNSCropResize(\_:\_:\_:\_:\_:)](bnnscropresize%28__________%29.md): Deprecated. Extracts and resizes regions of interest of an input tensor.
- [BNNSCropResizeBackward(\_:\_:\_:\_:\_:)](bnnscropresizebackward%28__________%29.md): Deprecated. Applies a crop-resize filter backward to generate gradients.
- [BNNSLayerParametersCropResize](bnnslayerparameterscropresize.md): Deprecated. A set of parameters that describe a crop-resize operation.
- [BNNSLinearSamplingMode](bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.

# BNNSBoxCoordinateMode (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.

## Declaration

```objectivec
typedef enum { ... } BNNSBoxCoordinateMode;
```

## Topics

### Constants

- [BNNSCenterSizeHeightFirst](bnnscentersizeheightfirst.md): Specifies coordinates as corners with the order: height start, width start, height end, width end.
- [BNNSCenterSizeWidthFirst](bnnscentersizewidthfirst.md): Specifies coordinates as corners with the order: width start, height start, width end, height end.
- [BNNSCornersHeightFirst](bnnscornersheightfirst.md): Specifies coordinates as center and size with the order: height center, width center, height, width.
- [BNNSCornersWidthFirst](bnnscornerswidthfirst.md): Specifies coordinates as center and size with the order: width center, height center, width, height.

## See Also

### Crop-resize layers

- [BNNSCropResize](bnnscropresize%28__________%29.md): Deprecated. Extracts and resizes regions of interest of an input tensor.
- [BNNSCropResizeBackward](bnnscropresizebackward%28__________%29.md): Deprecated. Applies a crop-resize filter backward to generate gradients.
- [BNNSLayerParametersCropResize](bnnslayerparameterscropresize.md): Deprecated. A set of parameters that describe a crop-resize operation.
- [BNNSLinearSamplingMode](bnnslinearsamplingmode.md): Constants that specify how a crop-resize layer samples a grid.
