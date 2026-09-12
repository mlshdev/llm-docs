> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayout4dfirstmajor](https://developer.apple.com/documentation/accelerate/bnnsdatalayout4dfirstmajor)

# BNNSDataLayout4DFirstMajor (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 4D first-major tensor.

## Declaration

```swift
var BNNSDataLayout4DFirstMajor: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The value `(i, j, k, l)` is at index:

`l * stride[0] + k * stride[1] + j * stride[2] + i * stride[3]`

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).
- `size[2]` is the size of the third dimension (`k`).
- `size[3]` is the size of the fourth dimension (`l`).

## See Also

### 4D Data Layouts

- [BNNSDataLayoutConvolutionWeightsOIHW](bnnsdatalayoutconvolutionweightsoihw.md): A constant that represents a 4D array of convolution weights.
- [BNNSDataLayoutConvolutionWeightsIOHrWr](bnnsdatalayoutconvolutionweightsiohrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHrWr](bnnsdatalayoutconvolutionweightsoihrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHW_Pack32](bnnsdatalayoutconvolutionweightsoihw_pack32.md): A constant that represents a 4D array of packed convolution weights with 32-output channel packing and 128-byte array address alignment.
- [BNNSDataLayout4DLastMajor](bnnsdatalayout4dlastmajor.md): A constant that represents a 4D last-major tensor.

# BNNSDataLayout4DFirstMajor (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 4D first-major tensor.

## Declaration

```objectivec
BNNSDataLayout4DFirstMajor
```

<a id="Discussion"></a>

## Discussion

The value `(i, j, k, l)` is at index:

`l * stride[0] + k * stride[1] + j * stride[2] + i * stride[3]`

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).
- `size[2]` is the size of the third dimension (`k`).
- `size[3]` is the size of the fourth dimension (`l`).

## See Also

### 4D Data Layouts

- [BNNSDataLayoutConvolutionWeightsOIHW](bnnsdatalayoutconvolutionweightsoihw.md): A constant that represents a 4D array of convolution weights.
- [BNNSDataLayoutConvolutionWeightsIOHrWr](bnnsdatalayoutconvolutionweightsiohrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHrWr](bnnsdatalayoutconvolutionweightsoihrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHW_Pack32](bnnsdatalayoutconvolutionweightsoihw_pack32.md): A constant that represents a 4D array of packed convolution weights with 32-output channel packing and 128-byte array address alignment.
- [BNNSDataLayout4DLastMajor](bnnsdatalayout4dlastmajor.md): A constant that represents a 4D last-major tensor.
