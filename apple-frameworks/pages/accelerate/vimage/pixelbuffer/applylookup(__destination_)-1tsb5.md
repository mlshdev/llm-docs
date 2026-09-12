> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/applylookup(_:destination:)-1tsb5](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/applylookup(_:destination:)-1tsb5)

# applyLookup(\_:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Applies a lookup table to transform an 8-bit planar image to a 32-bit-per-channel, three-channel interleaved image.

## Declaration

```swift
func applyLookup(_ lookupTable: [Pixel_FFFF], destination: vImage.PixelBuffer<vImage.InterleavedFx3>)
```

## Parameters

- `lookupTable`: A lookup table that contains 256 [Pixel_FFFF](../../pixel_ffff.md) ARGB values. The function discards the alpha component.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

You can use this function to create pseudo-color images by transforming a grayscale image to an RGB image.

The following code creates a simple lookup table with a high red response for low values, a high green response for middle values, and a high blue response for large values:

```swift
let window = vDSP.window(ofType: Float.self,
                         usingSequence: .blackman,
                         count: 256,
                         isHalfWindow: false)

let lookup: [Pixel_FFFF] = (0 ..< 256).map { i in
    
    let red = window[ max(0, min(127 - i, 255))]
    let green = window[i]
    let blue = window[ max(0, min(382 - i, 255))]
    
    return Pixel_FFFF(0, red, green, blue)
}
```

The graph below visualizes the values in the lookup table:

![A line chart with three series. The dotted line represents the red values that peaks at the left and curves to zero at the middle. The solid line represents the green values that starts on the left at zero, peaks in the middle, and drops to zero at the right. The dashed line represents the blue values that starts at zero in the middle and peaks at the right.](https://developer.apple.com/images/com.apple.accelerate/media-4165175@2x.png)

Use the following code to apply the lookup table to a [vImage.Planar8](../planar8.md) source buffer with a [vImage.InterleavedFx3](../interleavedfx3.md) destination buffer:

```swift
let destinationBuffer = vImage.PixelBuffer (
    size: sourceBuffer.size,
    pixelFormat: vImage.InterleavedFx3.self)

sourceBuffer.applyLookup(lookup, destination: destinationBuffer)
```

The images below show an example grayscale source image on the left and the pseudo-color result on the right. The operation converts dark areas in the source to red in the destination, and light areas in the source to blue in the destination.

![Two versions of a close-up image of a fruit tree. On the left is the original grayscale image, and on the right is the transformed RGB color image.](https://developer.apple.com/images/com.apple.accelerate/media-4165172@2x.png)

## See Also

### Transforming with a lookup table

- [applyLookup(\_:destination:)](applylookup%28__destination_%29-5r7bq.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image.
- [applyLookup(\_:destination:)](applylookup%28__destination_%29-14pjo.md): Conforms when `Format` is `vImage.PlanarF`. Applies a lookup table to transform an 8-bit planar image to a 32-bit planar image.
- [applyLookup(\_:destination:)](applylookup%28__destination_%29-5oi4o.md): Conforms when `Format` is `vImage.Planar16U`. Applies a lookup table to transform an 8-bit planar image to a 16-bit planar image.
- [applyLookup(\_:destination:)](applylookup%28__destination_%29-3ruls.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image to an 8-bit-per-channel, three-channel interleaved image.
- [applyLookup(alphaTable:redTable:greenTable:blueTable:destination:)](applylookup%28alphatable_redtable_greentable_bluetable_destination_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a set of four lookup tables to transform an interleaved, four-channel 8-bit image.
