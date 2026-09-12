> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersresize](https://developer.apple.com/documentation/accelerate/bnnslayerparametersresize)

# BNNSLayerParametersResize (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a resize layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersResize
```

## Topics

### Initializers

- [init(method:i_desc:o_desc:align_corners:)](bnnslayerparametersresize/init%28method_i_desc_o_desc_align_corners_%29.md): Deprecated. Returns a new resize-layer parameters structure from the specified parameters.
- [init()](bnnslayerparametersresize/init%28%29.md): Deprecated. Returns a new resize-layer parameters structure.

### Instance Properties

- [method](bnnslayerparametersresize/method.md): Deprecated. The interpolation method for resizing.
- [i_desc](bnnslayerparametersresize/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparametersresize/o_desc.md): Deprecated. The descriptor of the output.
- [align_corners](bnnslayerparametersresize/align_corners.md): Deprecated. A Boolean value that specifies whether to align the corners of the upscaling grid to the center of scaling dimensions instead of to the edges.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Resize layers

- [BNNS.ResizeLayer](bnns/resizelayer.md): Deprecated. A layer object that wraps a resize filter and manages its deinitialization.
- [BNNSInterpolationMethod](bnnsinterpolationmethod.md): Constants that describe interpolation methods.
- [BNNSFilterCreateLayerResize(\_:\_:)](bnnsfiltercreatelayerresize%28____%29.md): Deprecated. Returns a new resize layer.

# BNNSLayerParametersResize (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a resize layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersResize;
```

## Topics

### Instance Properties

- [method](bnnslayerparametersresize/method.md): Deprecated. The interpolation method for resizing.
- [i_desc](bnnslayerparametersresize/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparametersresize/o_desc.md): Deprecated. The descriptor of the output.
- [align_corners](bnnslayerparametersresize/align_corners.md): Deprecated. A Boolean value that specifies whether to align the corners of the upscaling grid to the center of scaling dimensions instead of to the edges.

## See Also

### Resize layers

- [BNNSInterpolationMethod](bnnsinterpolationmethod.md): Constants that describe interpolation methods.
- [BNNSFilterCreateLayerResize](bnnsfiltercreatelayerresize%28____%29.md): Deprecated. Returns a new resize layer.
