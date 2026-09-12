> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayoutconvolutionweightsoihw_pack32](https://developer.apple.com/documentation/accelerate/bnnsdatalayoutconvolutionweightsoihw_pack32)

# BNNSDataLayoutConvolutionWeightsOIHW_Pack32 (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 4D array of packed convolution weights with 32-output channel packing and 128-byte array address alignment.

## Declaration

```swift
var BNNSDataLayoutConvolutionWeightsOIHW_Pack32: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The Value `(kx, ky, InChannel, OutChannel)` is at index:

`OutChannelPositionInGroup + kw * 32 + ky * kernel_width * 32 + InChannel * kernel_height * kernel_width * 32 + OutChannelGroup * input_channels * kernel_height * kernel_width * 32`

Where:

- `kernel_width` is the kernel width.
- `kernel_height` is the kernel height.
- `input_channels` is the number of input channels.
- `output_channels` is the number of output channels.
- `OutChannelGroup = OutChannel / 32`.
- `OutChannelPositionInGroup = OutChannel % 32`.
- `kw` is `size[0]` and `kx` is between `0` to `kw-1`.
- `kh` is `size[1]` and `ky` is between `0` to `kh-1`.

## See Also

### 4D Data Layouts

- [BNNSDataLayoutConvolutionWeightsOIHW](bnnsdatalayoutconvolutionweightsoihw.md): A constant that represents a 4D array of convolution weights.
- [BNNSDataLayoutConvolutionWeightsIOHrWr](bnnsdatalayoutconvolutionweightsiohrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHrWr](bnnsdatalayoutconvolutionweightsoihrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayout4DFirstMajor](bnnsdatalayout4dfirstmajor.md): A constant that represents a 4D first-major tensor.
- [BNNSDataLayout4DLastMajor](bnnsdatalayout4dlastmajor.md): A constant that represents a 4D last-major tensor.

# BNNSDataLayoutConvolutionWeightsOIHW_Pack32 (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 4D array of packed convolution weights with 32-output channel packing and 128-byte array address alignment.

## Declaration

```objectivec
BNNSDataLayoutConvolutionWeightsOIHW_Pack32
```

<a id="Discussion"></a>

## Discussion

The Value `(kx, ky, InChannel, OutChannel)` is at index:

`OutChannelPositionInGroup + kw * 32 + ky * kernel_width * 32 + InChannel * kernel_height * kernel_width * 32 + OutChannelGroup * input_channels * kernel_height * kernel_width * 32`

Where:

- `kernel_width` is the kernel width.
- `kernel_height` is the kernel height.
- `input_channels` is the number of input channels.
- `output_channels` is the number of output channels.
- `OutChannelGroup = OutChannel / 32`.
- `OutChannelPositionInGroup = OutChannel % 32`.
- `kw` is `size[0]` and `kx` is between `0` to `kw-1`.
- `kh` is `size[1]` and `ky` is between `0` to `kh-1`.

## See Also

### 4D Data Layouts

- [BNNSDataLayoutConvolutionWeightsOIHW](bnnsdatalayoutconvolutionweightsoihw.md): A constant that represents a 4D array of convolution weights.
- [BNNSDataLayoutConvolutionWeightsIOHrWr](bnnsdatalayoutconvolutionweightsiohrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHrWr](bnnsdatalayoutconvolutionweightsoihrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayout4DFirstMajor](bnnsdatalayout4dfirstmajor.md): A constant that represents a 4D first-major tensor.
- [BNNSDataLayout4DLastMajor](bnnsdatalayout4dlastmajor.md): A constant that represents a 4D last-major tensor.
