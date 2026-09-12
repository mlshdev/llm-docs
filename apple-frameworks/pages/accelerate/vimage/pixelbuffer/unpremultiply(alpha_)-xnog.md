> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/unpremultiply(alpha:)-xnog](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/unpremultiply(alpha:)-xnog)

# unpremultiply(alpha:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Transforms an 8-bit planar pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.

## Declaration

```swift
func unpremultiply(alpha: vImage.PixelBuffer<Format>)
```

## Parameters

- `alpha`: An 8-bit planar pixel buffer that contains the alpha.

<a id="Discussion"></a>

## Discussion

This function divides the color values in `self` by the corresponding alpha values. The function treats the values `0 ... 255` in both pixel buffers as the values `0 ... 1`. For example, the following code premultiplies a 4 x 1 planar pixel buffer with the corresponding pixels in a separate planar alpha buffer:

```swift
let src = vImage.PixelBuffer<vImage.Planar8>(
    pixelValues: [32, 64, 128, 255],
    size: vImage.Size(width: 4, height: 1))

let alpha = vImage.PixelBuffer<vImage.Planar8>(
    pixelValues: [0, 128, 128, 255],
    size: vImage.Size(width: 4, height: 1))

src.unpremultiply(alpha: alpha)

// Prints "[0, 128, 255, 255]".
print(src.array)
```

## See Also

### Unpremultiply

- [unpremultiply(alpha:)](unpremultiply%28alpha_%29-i0ri.md): Conforms when `Format` is `vImage.PlanarF`. Transforms a 32-bit planar pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](unpremultiply%28channelordering_%29-1pkat.md): Conforms when `Format` is `vImage.Interleaved8x4`. Transforms an 8-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](unpremultiply%28channelordering_%29-19l0s.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Transforms an unsigned 16-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply()](unpremultiply%28%29.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Transforms a floating-point 16-bit RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](unpremultiply%28channelordering_%29-82uq3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Transforms a 32-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
