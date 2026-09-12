> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/premultiply(channelordering:)-302ci](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/premultiply(channelordering:)-302ci)

# premultiply(channelOrdering:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Transforms an unsigned 16-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.

## Declaration

```swift
func premultiply(channelOrdering: vImage.ChannelOrdering)
```

## Parameters

- `channelOrdering`: The channel ordering of the source buffer.

<a id="Discussion"></a>

## Discussion

This function multiplies the color values in each pixel\`self\` by the corresponding alpha value and copies the alpha value to the destination unchanged. The function treats the values `0 ... UInt16.max` in the pixel buffer as the values `0 ... 1`.

For example, the following code multiplies the RGB values `[UInt16.max / 8, UInt16.max / 4, UInt16.max / 2]` by the alpha value `UInt16.max / 2`:

```swift
let src = vImage.PixelBuffer<vImage.Interleaved16Ux4>(
    pixelValues: [UInt16.max / 2,
                  UInt16.max / 8, UInt16.max / 4, UInt16.max / 2],
    size: vImage.Size(width: 1, height: 1))

src.premultiply(channelOrdering: .ARGB)

// Prints "[32767, 4095, 8191, 16383]
//  = [UInt16.max / 2, UInt16.max / 16, UInt16.max / 8, UInt16.max / 4]
print(src.array)
```

## See Also

### Premultiply

- [premultiply(alpha:)](premultiply%28alpha_%29-11gly.md): Conforms when `Format` is `vImage.Planar8`. Transforms an 8-bit planar pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(alpha:)](premultiply%28alpha_%29-76rr.md): Conforms when `Format` is `vImage.PlanarF`. Transforms a 32-bit planar pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(channelOrdering:)](premultiply%28channelordering_%29-4xpq9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Transforms an 8-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply()](premultiply%28%29.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Transforms a floating-point 16-bit RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(channelOrdering:)](premultiply%28channelordering_%29-fzwd.md): Conforms when `Format` is `vImage.InterleavedFx4`. Transforms a floating-point 32-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
