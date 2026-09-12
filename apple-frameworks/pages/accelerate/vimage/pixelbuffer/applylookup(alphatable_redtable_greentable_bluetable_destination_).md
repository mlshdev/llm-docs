> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/applylookup(alphatable:redtable:greentable:bluetable:destination:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/applylookup(alphatable:redtable:greentable:bluetable:destination:))

# applyLookup(alphaTable:redTable:greenTable:blueTable:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Applies a set of four lookup tables to transform an interleaved, four-channel 8-bit image.

## Declaration

```swift
func applyLookup(alphaTable: [Pixel_8]?, redTable: [Pixel_8]?, greenTable: [Pixel_8]?, blueTable: [Pixel_8]?, destination: vImage.PixelBuffer<vImage.Interleaved8x4>)
```

## Parameters

- `alphaTable`: A lookup table for the alpha channel that contains 256 [Pixel_8](../../pixel_8.md) values. Pass `nil` to specify that the function copies the alpha channel unchanged to the destination buffer.
- `redTable`: A lookup table for the red channel that contains 256 [Pixel_8](../../pixel_8.md) values. Pass `nil` to specify that the function copies the red channel unchanged to the destination buffer.
- `greenTable`: A lookup table for the green channel that contains 256 [Pixel_8](../../pixel_8.md) values. Pass `nil` to specify that the function copies the green channel unchanged to the destination buffer.
- `blueTable`: A lookup table for the blue channel that contains 256 [Pixel_8](../../pixel_8.md) values. Pass `nil` to specify that the function copies the blue channel unchanged to the destination buffer.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

Use this function to apply individual lookup tables to each channel in an interleaved, four-channel image. Adjust the order of the tables for images that don’t use ARGB channel ordering. For example, use the `blueTable` parameter for the alpha lookup table to transform an RGBA image.

The following code creates a simple lookup table that transforms a [vImage.Interleaved8x4](../interleaved8x4.md) pixel buffer into its negative. For example, when an input pixel has the value `255, 255, 255, 255`, the output pixel has the value `0, 0, 0, 0`. Conversely, when an input pixel has the value `0, 0, 0, 0`, the output pixel has the value `255, 255, 255, 255`.

```swift

let lookup: [Pixel_8] = (0 ..< 256).map { i in
    Pixel_8(255 - i)
}

let destinationBuffer = vImage.PixelBuffer(
    size: sourceBuffer.size,
    pixelFormat: vImage.Interleaved8x4.self)

sourceBuffer.applyLookup(alphaTable: nil,
                         redTable: lookup,
                         greenTable: lookup,
                         blueTable: lookup,
                         destination: destinationBuffer)
```

The images below show an example source image on the left and the negative result on the right.

![Two versions of a close-up image of a fruit tree. On the left is the original color image, and on the right is the transformed, negative image with its colors inverted.](https://developer.apple.com/images/com.apple.accelerate/media-4165177@2x.png)

## See Also

### Transforming with a lookup table

- [applyLookup(\_:destination:)](applylookup%28__destination_%29-5r7bq.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image.
- [applyLookup(\_:destination:)](applylookup%28__destination_%29-14pjo.md): Conforms when `Format` is `vImage.PlanarF`. Applies a lookup table to transform an 8-bit planar image to a 32-bit planar image.
- [applyLookup(\_:destination:)](applylookup%28__destination_%29-5oi4o.md): Conforms when `Format` is `vImage.Planar16U`. Applies a lookup table to transform an 8-bit planar image to a 16-bit planar image.
- [applyLookup(\_:destination:)](applylookup%28__destination_%29-3ruls.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image to an 8-bit-per-channel, three-channel interleaved image.
- [applyLookup(\_:destination:)](applylookup%28__destination_%29-1tsb5.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image to a 32-bit-per-channel, three-channel interleaved image.
