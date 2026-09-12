> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/unpremultiply(channelordering:)-1pkat](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/unpremultiply(channelordering:)-1pkat)

# unpremultiply(channelOrdering:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Transforms an 8-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.

## Declaration

```swift
func unpremultiply(channelOrdering: vImage.ChannelOrdering)
```

## Parameters

- `channelOrdering`: The channel ordering of the source buffer.

<a id="Discussion"></a>

## Discussion

This function divides the color values in each pixel `self` by the corresponding alpha value and copies the alpha value to the destination unchanged. The function treats the values `0 ... 255` in the pixel buffer as the values `0 ... 1`.

For example, the following code divides the RGB values `[32, 64, 128]` by  the alpha value `128` (interpreted as `0.5`):

```swift
let src = vImage.PixelBuffer<vImage.Interleaved8x4>(
    pixelValues: [127, 32, 64, 128],
    size: vImage.Size(width: 1, height: 1))

src.unpremultiply(channelOrdering: .ARGB)

// Prints "[127, 64, 129, 255]".
print(src.array)
```

## See Also

### Unpremultiply

- [unpremultiply(alpha:)](unpremultiply%28alpha_%29-xnog.md): Conforms when `Format` is `vImage.Planar8`. Transforms an 8-bit planar pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(alpha:)](unpremultiply%28alpha_%29-i0ri.md): Conforms when `Format` is `vImage.PlanarF`. Transforms a 32-bit planar pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](unpremultiply%28channelordering_%29-19l0s.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Transforms an unsigned 16-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply()](unpremultiply%28%29.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Transforms a floating-point 16-bit RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](unpremultiply%28channelordering_%29-82uq3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Transforms a 32-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
