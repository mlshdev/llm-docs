> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterspooling/y_padding](https://developer.apple.com/documentation/accelerate/bnnslayerparameterspooling/y_padding)

# y_padding (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

The height padding, which is the number of virtual zeros added to the top and bottom of each channel.

> Use BNNSGraph\* APIs

## Declaration

```swift
var y_padding: Int
```

## See Also

### Instance Properties

- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [bias](bias.md): Deprecated. The descriptor of the bias.
- [activation](activation.md): Deprecated. The activation function that the layer applies to the output.
- [pooling_function](pooling_function.md): Deprecated. The variable that specifies the pooling function.
- [k_width](k_width.md): Deprecated. The width of the kernel.
- [k_height](k_height.md): Deprecated. The height of the kernel.
- [x_stride](x_stride.md): Deprecated. The width increment of the input image.
- [y_stride](y_stride.md): Deprecated. The height increment of the input image.
- [x_dilation_stride](x_dilation_stride.md): Deprecated. The width increment between elements in the input image during convolution.
- [y_dilation_stride](y_dilation_stride.md): Deprecated. The height increment between elements in the input image during convolution.
- [x_padding](x_padding.md): Deprecated. The width padding, which is the number of virtual zeros added to the left and right of each channel.
- [pad](pad.md): Deprecated. Asymmetric padding, ignored if `x_padding` or `y_padding` are greater than zero.

# y_padding (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The height padding, which is the number of virtual zeros added to the top and bottom of each channel.

## Declaration

```objectivec
size_t y_padding;
```

## See Also

### Instance Properties

- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [bias](bias.md): Deprecated. The descriptor of the bias.
- [activation](activation.md): Deprecated. The activation function that the layer applies to the output.
- [pooling_function](pooling_function.md): Deprecated. The variable that specifies the pooling function.
- [k_width](k_width.md): Deprecated. The width of the kernel.
- [k_height](k_height.md): Deprecated. The height of the kernel.
- [x_stride](x_stride.md): Deprecated. The width increment of the input image.
- [y_stride](y_stride.md): Deprecated. The height increment of the input image.
- [x_dilation_stride](x_dilation_stride.md): Deprecated. The width increment between elements in the input image during convolution.
- [y_dilation_stride](y_dilation_stride.md): Deprecated. The height increment between elements in the input image during convolution.
- [x_padding](x_padding.md): Deprecated. The width padding, which is the number of virtual zeros added to the left and right of each channel.
- [pad](pad.md): Deprecated. Asymmetric padding, ignored if `x_padding` or `y_padding` are greater than zero.
