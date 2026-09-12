> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/unpremultiply(alpha:)-i0ri](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/unpremultiply(alpha:)-i0ri)

# unpremultiply(alpha:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Transforms a 32-bit planar pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.

## Declaration

```swift
func unpremultiply(alpha: vImage.PixelBuffer<Format>)
```

## Parameters

- `alpha`: An 32-bit planar pixel buffer that contains the alpha.

<a id="Discussion"></a>

## Discussion

This function divides the color values in `self` by the corresponding alpha values. For example, the following code premultiplies a 4 x 1 planar pixel buffer with the corresponding pixels in a separate planar alpha buffer:

```swift
let src = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [0.125, 0.25, 0.5, 1],
    size: vImage.Size(width: 4, height: 1))

let alpha = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [0, 0.25, 0.5, 1],
    size: vImage.Size(width: 4, height: 1))

src.unpremultiply(alpha: alpha)

// Prints "[0.0, ~1.0, ~1.0, ~1.0]".
print(src.array)

```

## See Also

### Unpremultiply

- [unpremultiply(alpha:)](unpremultiply%28alpha_%29-xnog.md): Conforms when `Format` is `vImage.Planar8`. Transforms an 8-bit planar pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](unpremultiply%28channelordering_%29-1pkat.md): Conforms when `Format` is `vImage.Interleaved8x4`. Transforms an 8-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](unpremultiply%28channelordering_%29-19l0s.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Transforms an unsigned 16-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply()](unpremultiply%28%29.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Transforms a floating-point 16-bit RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](unpremultiply%28channelordering_%29-82uq3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Transforms a 32-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
