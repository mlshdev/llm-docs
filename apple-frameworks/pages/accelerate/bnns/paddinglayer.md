> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/paddinglayer](https://developer.apple.com/documentation/accelerate/bnns/paddinglayer)

# BNNS.PaddingLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a padding filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class PaddingLayer
```

## Topics

### Creating a Padding Layer

- [init(input:output:mode:size:filterParameters:)](paddinglayer/init%28input_output_mode_size_filterparameters_%29.md): Deprecated. Returns a new padding layer.

### Specifying the Padding Mode

- [BNNS.PaddingMode](paddingmode.md): Deprecated. Constants that define padding modes.

## Relationships

### Inherits From

- [BNNS.UnaryLayer](unarylayer.md)

## See Also

### Padding layers

- [BNNSPaddingMode](../bnnspaddingmode.md): Constants that define padding modes.
- [BNNSLayerParametersPadding](../bnnslayerparameterspadding.md): Deprecated. A structure that contains the parameters of a padding layer.
- [BNNSFilterCreateLayerPadding(\_:\_:)](../bnnsfiltercreatelayerpadding%28____%29.md): Deprecated. Returns a new loss layer.
