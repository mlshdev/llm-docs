> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/separableconvolve(horizontalkernel:verticalkernel:bias:edgemode:usefloat16accumulator:destination:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/separableconvolve(horizontalkernel:verticalkernel:bias:edgemode:usefloat16accumulator:destination:))

# separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:useFloat16Accumulator:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Performs separable convolution on a 16-bit planar pixel buffer.

## Declaration

```swift
func separableConvolve(horizontalKernel: [Float], verticalKernel: [Float], bias: Float = 0, edgeMode: vImage.EdgeMode<Pixel_16F>, useFloat16Accumulator: Bool = false, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `horizontalKernel`: The 1D horizontal convolution kernel.
- `verticalKernel`: The 1D vertical convolution kernel.
- `bias`: A value that the operation adds to each element in the convolution result, before performing any clipping.
- `edgeMode`: The convolution edge mode. The background color must be a single `Pixel_16F` value.
- `useFloat16Accumulator`: A Boolean value that specifies that the function uses faster but lower-precision internal arithmetic. For more information, see [kvImageUseFP16Accumulator](../../kvimageusefp16accumulator.md).
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

The following code shows how to apply a Gaussian blur using separable convolution to a planar buffer:

```swift
let srcImage =  imageLiteral(resourceName: " ... ").cgImage(
    forProposedRect: nil,
    context: nil,
    hints: nil)!

var cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 16,
    bitsPerPixel: 16 * 1,
    colorSpace: CGColorSpaceCreateDeviceGray(),
    bitmapInfo: CGBitmapInfo(rawValue: kCGBitmapByteOrder16Host.rawValue |
                             CGBitmapInfo.floatComponents.rawValue |
                             CGImageAlphaInfo.none.rawValue))!

let src = try vImage.PixelBuffer(
    cgImage: srcImage,
    cgImageFormat: &cgImageFormat,
    pixelFormat: vImage.Planar16F.self)

let dest = vImage.PixelBuffer(
    size: src.size,
    pixelFormat: vImage.Planar16F.self)

src.separableConvolve(
    horizontalKernel: vImage.ConvolutionKernel.gaussian1Dx7,
    verticalKernel:  vImage.ConvolutionKernel.gaussian1Dx7,
    edgeMode: .truncateKernel,
    destination: dest)

let outputImage = dest.makeCGImage(cgImageFormat: cgImageFormat)
```

## See Also

### Related Documentation

- [Blurring an image](../../blurring-an-image.md): Filter an image by convolving it with custom and high-speed kernels.

### Separable convolution

- [separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:destination:)](separableconvolve%28horizontalkernel_verticalkernel_bias_edgemode_destination_%29-2iyq6.md): Conforms when `Format` is `vImage.Planar8`. Performs separable convolution on an 8-bit planar pixel buffer.
- [separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:destination:)](separableconvolve%28horizontalkernel_verticalkernel_bias_edgemode_destination_%29-2qofv.md): Conforms when `Format` is `vImage.PlanarF`. Performs separable convolution on a 32-bit planar pixel buffer.
- [separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:destination:)](separableconvolve%28horizontalkernel_verticalkernel_bias_edgemode_destination_%29-6t9b3.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Performs separable convolution on a multiple plane 8-bit pixel buffer.
- [separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:destination:)](separableconvolve%28horizontalkernel_verticalkernel_bias_edgemode_destination_%29-6q5ro.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Performs separable convolution on a multiple plane 32-bit pixel buffer.
- [vImage.ConvolutionKernel](../convolutionkernel.md): Constants that describe 1D convolution kernels.
