> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsconvolutionlayerparameters/weights](https://developer.apple.com/documentation/accelerate/bnnsconvolutionlayerparameters/weights)

# weights (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Convolution weights.

## Declaration

```swift
var weights: BNNSLayerData
```

<a id="Discussion"></a>

## Discussion

This parameter should contain [k_width](k_width.md) `*` [k_height](k_height.md) `*` [in_channels](in_channels.md) `*` [out_channels](out_channels.md) values.

## See Also

### Instance Properties

- [activation](activation.md): Deprecated. The layer activation function.
- [bias](bias.md): Deprecated. Layer bias, one for each output channel.
- [in_channels](in_channels.md): Deprecated. The number of input channels.
- [k_height](k_height.md): Deprecated. The height of the convolution kernel.
- [k_width](k_width.md): Deprecated. The width of the convolution kernel.
- [out_channels](out_channels.md): Deprecated. The number of output channels.
- [x_padding](x_padding.md): Deprecated. The X padding.
- [x_stride](x_stride.md): Deprecated. The X increment in the input image.
- [y_padding](y_padding.md): Deprecated. The Y padding.
- [y_stride](y_stride.md): Deprecated. The Y increment in the input image.

# weights (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Convolution weights.

## Declaration

```objectivec
BNNSLayerData weights;
```

<a id="Discussion"></a>

## Discussion

This parameter should contain [k_width](k_width.md) `*` [k_height](k_height.md) `*` [in_channels](in_channels.md) `*` [out_channels](out_channels.md) values.

## See Also

### Instance Properties

- [activation](activation.md): Deprecated. The layer activation function.
- [bias](bias.md): Deprecated. Layer bias, one for each output channel.
- [in_channels](in_channels.md): Deprecated. The number of input channels.
- [k_height](k_height.md): Deprecated. The height of the convolution kernel.
- [k_width](k_width.md): Deprecated. The width of the convolution kernel.
- [out_channels](out_channels.md): Deprecated. The number of output channels.
- [x_padding](x_padding.md): Deprecated. The X padding.
- [x_stride](x_stride.md): Deprecated. The X increment in the input image.
- [y_padding](y_padding.md): Deprecated. The Y padding.
- [y_stride](y_stride.md): Deprecated. The Y increment in the input image.
