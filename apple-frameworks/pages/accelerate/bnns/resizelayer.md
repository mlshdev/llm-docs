> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/resizelayer](https://developer.apple.com/documentation/accelerate/bnns/resizelayer)

# BNNS.ResizeLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a resize filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class ResizeLayer
```

## Topics

### Creating a Resize Layer

- [init(interpolationMethod:input:output:alignsCorners:filterParameters:)](resizelayer/init%28interpolationmethod_input_output_alignscorners_filterparameters_%29.md): Deprecated. Returns a new resize layer.

### Specifying an Interpolation Method

- [BNNS.InterpolationMethod](interpolationmethod.md): Deprecated. Constants that specify interpolation methods for resize operations.

## Relationships

### Inherits From

- [BNNS.UnaryLayer](unarylayer.md)

## See Also

### Resize layers

- [BNNSInterpolationMethod](../bnnsinterpolationmethod.md): Constants that describe interpolation methods.
- [BNNSLayerParametersResize](../bnnslayerparametersresize.md): Deprecated. A structure that contains the parameters of a resize layer.
- [BNNSFilterCreateLayerResize(\_:\_:)](../bnnsfiltercreatelayerresize%28____%29.md): Deprecated. Returns a new resize layer.
