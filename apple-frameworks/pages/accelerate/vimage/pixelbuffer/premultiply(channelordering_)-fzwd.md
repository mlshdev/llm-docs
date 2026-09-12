> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/premultiply(channelordering:)-fzwd](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/premultiply(channelordering:)-fzwd)

# premultiply(channelOrdering:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Transforms a floating-point 32-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.

## Declaration

```swift
func premultiply(channelOrdering: vImage.ChannelOrdering)
```

## Parameters

- `channelOrdering`: The channel ordering of the source buffer.

<a id="Discussion"></a>

## Discussion

This function multiplies the color values in each pixel `self` by the corresponding alpha value and copies the alpha value to the destination unchanged.

For example, the following code multiplies the RGB values `[0.125, 0.25, 0.5]` by the alpha value `0.5`:

```swift
let src = vImage.PixelBuffer<vImage.InterleavedFx4>(
    pixelValues: [0.5,
                  0.125, 0.25, 0.5],
    size: vImage.Size(width: 1, height: 1))

src.premultiply(channelOrdering: .ARGB)

// Prints "[0.5, 0.0625, 0.125, 0.25"
print(src.array)
```

## See Also

### Premultiply

- [premultiply(alpha:)](premultiply%28alpha_%29-11gly.md): Conforms when `Format` is `vImage.Planar8`. Transforms an 8-bit planar pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(alpha:)](premultiply%28alpha_%29-76rr.md): Conforms when `Format` is `vImage.PlanarF`. Transforms a 32-bit planar pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(channelOrdering:)](premultiply%28channelordering_%29-4xpq9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Transforms an 8-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(channelOrdering:)](premultiply%28channelordering_%29-302ci.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Transforms an unsigned 16-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply()](premultiply%28%29.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Transforms a floating-point 16-bit RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
