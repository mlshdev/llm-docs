> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterspadding](https://developer.apple.com/documentation/accelerate/bnnslayerparameterspadding)

# BNNSLayerParametersPadding (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a padding layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersPadding
```

## Topics

### Initializers

- [init(i_desc:o_desc:padding_size:padding_mode:padding_value:)](bnnslayerparameterspadding/init%28i_desc_o_desc_padding_size_padding_mode_padding_value_%29.md): Deprecated. Returns a new padding-layer parameters structure from the specified parameters.
- [init()](bnnslayerparameterspadding/init%28%29.md): Deprecated. Returns a new padding-layer parameters structure.

### Instance Properties

- [i_desc](bnnslayerparameterspadding/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparameterspadding/o_desc.md): Deprecated. The descriptor of the output.
- [padding_size](bnnslayerparameterspadding/padding_size.md): Deprecated. The number of padding elements to add before and after the original data.
- [padding_mode](bnnslayerparameterspadding/padding_mode.md): Deprecated. The mode the operation uses to pad.
- [padding_value](bnnslayerparameterspadding/padding_value.md): Deprecated. The value the operation uses to fill the padding area when the mode is constant.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Padding layers

- [BNNS.PaddingLayer](bnns/paddinglayer.md): Deprecated. A layer object that wraps a padding filter and manages its deinitialization.
- [BNNSPaddingMode](bnnspaddingmode.md): Constants that define padding modes.
- [BNNSFilterCreateLayerPadding(\_:\_:)](bnnsfiltercreatelayerpadding%28____%29.md): Deprecated. Returns a new loss layer.

# BNNSLayerParametersPadding (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a padding layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersPadding;
```

## Topics

### Instance Properties

- [i_desc](bnnslayerparameterspadding/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparameterspadding/o_desc.md): Deprecated. The descriptor of the output.
- [padding_size](bnnslayerparameterspadding/padding_size.md): Deprecated. The number of padding elements to add before and after the original data.
- [padding_mode](bnnslayerparameterspadding/padding_mode.md): Deprecated. The mode the operation uses to pad.
- [padding_value](bnnslayerparameterspadding/padding_value.md): Deprecated. The value the operation uses to fill the padding area when the mode is constant.

## See Also

### Padding layers

- [BNNSPaddingMode](bnnspaddingmode.md): Constants that define padding modes.
- [BNNSFilterCreateLayerPadding](bnnsfiltercreatelayerpadding%28____%29.md): Deprecated. Returns a new loss layer.
