> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/premultiply(alpha:)-76rr](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/premultiply(alpha:)-76rr)

# premultiply(alpha:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Transforms a 32-bit planar pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.

## Declaration

```swift
func premultiply(alpha: vImage.PixelBuffer<Format>)
```

## Parameters

- `alpha`: An 32-bit planar pixel buffer that contains the alpha.

<a id="Discussion"></a>

## Discussion

This function multiplies the color values in `self` by the corresponding alpha values. For example, the following code premultiplies a 4 x 1 planar pixel buffer with the corresponding pixels in a separate planar alpha buffer:

```swift
let src = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [0.125, 0.25, 0.5, 1],
    size: vImage.Size(width: 4, height: 1))

let alpha = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [0, 0.25, 0.5, 1],
    size: vImage.Size(width: 4, height: 1))

src.premultiply(alpha: alpha)

// Prints "[0, 0.0625, 0.25, 1]".
print(src.array)

```

## See Also

### Premultiply

- [premultiply(alpha:)](premultiply%28alpha_%29-11gly.md): Conforms when `Format` is `vImage.Planar8`. Transforms an 8-bit planar pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(channelOrdering:)](premultiply%28channelordering_%29-4xpq9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Transforms an 8-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(channelOrdering:)](premultiply%28channelordering_%29-302ci.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Transforms an unsigned 16-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply()](premultiply%28%29.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Transforms a floating-point 16-bit RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(channelOrdering:)](premultiply%28channelordering_%29-fzwd.md): Conforms when `Format` is `vImage.InterleavedFx4`. Transforms a floating-point 32-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
