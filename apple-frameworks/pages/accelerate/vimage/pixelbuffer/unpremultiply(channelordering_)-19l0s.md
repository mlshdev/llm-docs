> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/unpremultiply(channelordering:)-19l0s](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/unpremultiply(channelordering:)-19l0s)

# unpremultiply(channelOrdering:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Transforms an unsigned 16-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.

## Declaration

```swift
func unpremultiply(channelOrdering: vImage.ChannelOrdering)
```

## Parameters

- `channelOrdering`: The channel ordering of the source buffer.

<a id="Discussion"></a>

## Discussion

This function divides the color values in each pixel `self` by the corresponding alpha value and copies the alpha value to the destination unchanged. The function treats the values `0 ... UInt16.max` in the pixel buffer as the values `0 ... 1`.

For example, the following code divides the RGB values `[UInt16.max / 8, UInt16.max / 4, UInt16.max / 2]` by the alpha value `UInt16.max / 2`:

```swift
let src = vImage.PixelBuffer<vImage.Interleaved16Ux4>(
    pixelValues: [UInt16.max / 2,
                  UInt16.max / 8, UInt16.max / 4, UInt16.max / 2],
    size: vImage.Size(width: 1, height: 1))

src.unpremultiply(channelOrdering: .ARGB)

// Prints "[32767, 16383, 32767, 65535]"
//  ≅ [UInt16.max / 2, UInt16.max / 4, UInt16.max / 2, UInt16.max]
print(src.array)
```

## See Also

### Unpremultiply

- [unpremultiply(alpha:)](unpremultiply%28alpha_%29-xnog.md): Conforms when `Format` is `vImage.Planar8`. Transforms an 8-bit planar pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(alpha:)](unpremultiply%28alpha_%29-i0ri.md): Conforms when `Format` is `vImage.PlanarF`. Transforms a 32-bit planar pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](unpremultiply%28channelordering_%29-1pkat.md): Conforms when `Format` is `vImage.Interleaved8x4`. Transforms an 8-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply()](unpremultiply%28%29.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Transforms a floating-point 16-bit RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](unpremultiply%28channelordering_%29-82uq3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Transforms a 32-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
