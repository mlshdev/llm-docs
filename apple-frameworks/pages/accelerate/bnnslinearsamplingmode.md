> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslinearsamplingmode](https://developer.apple.com/documentation/accelerate/bnnslinearsamplingmode)

# BNNSLinearSamplingMode (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify how a crop-resize layer samples a grid.

## Declaration

```swift
struct BNNSLinearSamplingMode
```

## Topics

### Constants

- [init(\_:)](bnnslinearsamplingmode/init%28__%29.md)
- [init(rawValue:)](bnnslinearsamplingmode/init%28rawvalue_%29.md)
- [rawValue](bnnslinearsamplingmode/rawvalue.md)
- [BNNSLinearSamplingDefault](bnnslinearsamplingdefault.md): The default linear sampling mode.
- [BNNSLinearSamplingAlignCorners](bnnslinearsamplingaligncorners.md): The align corners sampling mode.
- [BNNSLinearSamplingUnalignCorners](bnnslinearsamplingunaligncorners.md): The unalign corners sampling mode.
- [BNNSLinearSamplingStrictAlignCorners](bnnslinearsamplingstrictaligncorners.md): The strict align corners sampling mode.
- [BNNSLinearSamplingOffsetCorners](bnnslinearsamplingoffsetcorners.md): The offset corners sampling mode.

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
- [BNNSBoxCoordinateMode](bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.

# BNNSLinearSamplingMode (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify how a crop-resize layer samples a grid.

## Declaration

```objectivec
typedef enum { ... } BNNSLinearSamplingMode;
```

## Topics

### Constants

- [BNNSLinearSamplingDefault](bnnslinearsamplingdefault.md): The default linear sampling mode.
- [BNNSLinearSamplingAlignCorners](bnnslinearsamplingaligncorners.md): The align corners sampling mode.
- [BNNSLinearSamplingUnalignCorners](bnnslinearsamplingunaligncorners.md): The unalign corners sampling mode.
- [BNNSLinearSamplingStrictAlignCorners](bnnslinearsamplingstrictaligncorners.md): The strict align corners sampling mode.
- [BNNSLinearSamplingOffsetCorners](bnnslinearsamplingoffsetcorners.md): The offset corners sampling mode.

## See Also

### Crop-resize layers

- [BNNSCropResize](bnnscropresize%28__________%29.md): Deprecated. Extracts and resizes regions of interest of an input tensor.
- [BNNSCropResizeBackward](bnnscropresizebackward%28__________%29.md): Deprecated. Applies a crop-resize filter backward to generate gradients.
- [BNNSLayerParametersCropResize](bnnslayerparameterscropresize.md): Deprecated. A set of parameters that describe a crop-resize operation.
- [BNNSBoxCoordinateMode](bnnsboxcoordinatemode.md): Constants that define the convention to specify the four bounding box coordinates for crop-resize operations.
