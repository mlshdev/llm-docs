> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersconvolution/groups](https://developer.apple.com/documentation/accelerate/bnnslayerparametersconvolution/groups)

# groups (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Convolution group size.

> Use BNNSGraph\* APIs

## Declaration

```swift
var groups: Int
```

## See Also

### Instance Properties

- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [w_desc](w_desc.md): Deprecated. The descriptor of the weights.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [bias](bias.md): Deprecated. The bias descriptor.
- [activation](activation.md): Deprecated. The activation function that the layer applies to the output.
- [x_stride](x_stride.md): Deprecated. The width increment of the input image.
- [y_stride](y_stride.md): Deprecated. The height increment of the input image.
- [x_dilation_stride](x_dilation_stride.md): Deprecated. The width increment between elements in the input image during convolution.
- [y_dilation_stride](y_dilation_stride.md): Deprecated. The height increment between elements in the input image during convolution.
- [x_padding](x_padding.md): Deprecated. The width padding, which is the number of virtual zeros added to the left and right of each channel.
- [y_padding](y_padding.md): Deprecated. The height padding, which is the number of virtual zeros added to the top and bottom of each channel.
- [pad](pad.md): Deprecated. Padding which is asymmetric and ignored if the width or height padding values are greater than zero.

# groups (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Convolution group size.

## Declaration

```objectivec
size_t groups;
```

## See Also

### Instance Properties

- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [w_desc](w_desc.md): Deprecated. The descriptor of the weights.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [bias](bias.md): Deprecated. The bias descriptor.
- [activation](activation.md): Deprecated. The activation function that the layer applies to the output.
- [x_stride](x_stride.md): Deprecated. The width increment of the input image.
- [y_stride](y_stride.md): Deprecated. The height increment of the input image.
- [x_dilation_stride](x_dilation_stride.md): Deprecated. The width increment between elements in the input image during convolution.
- [y_dilation_stride](y_dilation_stride.md): Deprecated. The height increment between elements in the input image during convolution.
- [x_padding](x_padding.md): Deprecated. The width padding, which is the number of virtual zeros added to the left and right of each channel.
- [y_padding](y_padding.md): Deprecated. The height padding, which is the number of virtual zeros added to the top and bottom of each channel.
- [pad](pad.md): Deprecated. Padding which is asymmetric and ignored if the width or height padding values are greater than zero.
