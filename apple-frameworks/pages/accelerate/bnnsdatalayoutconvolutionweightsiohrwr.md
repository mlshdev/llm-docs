> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayoutconvolutionweightsiohrwr](https://developer.apple.com/documentation/accelerate/bnnsdatalayoutconvolutionweightsiohrwr)

# BNNSDataLayoutConvolutionWeightsIOHrWr (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 4D array of rotated convolution weights.

## Declaration

```swift
var BNNSDataLayoutConvolutionWeightsIOHrWr: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The value `(kx, ky, InChannel, OutChannel)` is at index:

`(kw - 1 - kx) * stride[0] + (kh - 1 - ky) * stride[1] +  InChannel * stride[2] + OutChannel * stride[3]`.

- `size[0]` is the convolution kernel width in pixels.
- `size[1]` is the convolution kernel height in pixels.
- `size[2]` is the number of input channels.
- `size[3]` is the number of output channels.
- `kw` is `size[0]` and `kx` is between `0` to `kw-1`.
- `kh` is `size[1]` and `ky` is between `0` to `kh-1`.

## See Also

### 4D Data Layouts

- [BNNSDataLayoutConvolutionWeightsOIHW](bnnsdatalayoutconvolutionweightsoihw.md): A constant that represents a 4D array of convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHrWr](bnnsdatalayoutconvolutionweightsoihrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHW_Pack32](bnnsdatalayoutconvolutionweightsoihw_pack32.md): A constant that represents a 4D array of packed convolution weights with 32-output channel packing and 128-byte array address alignment.
- [BNNSDataLayout4DFirstMajor](bnnsdatalayout4dfirstmajor.md): A constant that represents a 4D first-major tensor.
- [BNNSDataLayout4DLastMajor](bnnsdatalayout4dlastmajor.md): A constant that represents a 4D last-major tensor.

# BNNSDataLayoutConvolutionWeightsIOHrWr (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 4D array of rotated convolution weights.

## Declaration

```objectivec
BNNSDataLayoutConvolutionWeightsIOHrWr
```

<a id="Discussion"></a>

## Discussion

The value `(kx, ky, InChannel, OutChannel)` is at index:

`(kw - 1 - kx) * stride[0] + (kh - 1 - ky) * stride[1] +  InChannel * stride[2] + OutChannel * stride[3]`.

- `size[0]` is the convolution kernel width in pixels.
- `size[1]` is the convolution kernel height in pixels.
- `size[2]` is the number of input channels.
- `size[3]` is the number of output channels.
- `kw` is `size[0]` and `kx` is between `0` to `kw-1`.
- `kh` is `size[1]` and `ky` is between `0` to `kh-1`.

## See Also

### 4D Data Layouts

- [BNNSDataLayoutConvolutionWeightsOIHW](bnnsdatalayoutconvolutionweightsoihw.md): A constant that represents a 4D array of convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHrWr](bnnsdatalayoutconvolutionweightsoihrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHW_Pack32](bnnsdatalayoutconvolutionweightsoihw_pack32.md): A constant that represents a 4D array of packed convolution weights with 32-output channel packing and 128-byte array address alignment.
- [BNNSDataLayout4DFirstMajor](bnnsdatalayout4dfirstmajor.md): A constant that represents a 4D first-major tensor.
- [BNNSDataLayout4DLastMajor](bnnsdatalayout4dlastmajor.md): A constant that represents a 4D last-major tensor.
