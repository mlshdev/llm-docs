> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/floodfill(from:newcolor:connectivity:)-219lg](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/floodfill(from:newcolor:connectivity:)-219lg)

# floodFill(from:newColor:connectivity:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Applies an in-place flood-fill operation to the unsigned 16-bit planar image.

## Declaration

```swift
func floodFill(from seed: CGPoint, newColor: Pixel_16U, connectivity: vImage.FloodFillConnectivity)
```

## Parameters

- `seed`: The coordinates that define the position of the seed pixel inside the connected component.
- `newColor`: The new pixel value that overwrites the pixels in the connected component.
- `connectivity`: An enumeration that specifies which pixels the operation includes as neighbors. Pass [vImage.FloodFillConnectivity.edges](../floodfillconnectivity/edges.md) to specify a four-connected neighborhood of a pixel that includes the pixels to the left and right, and those above and below. Pass [vImage.FloodFillConnectivity.edgesAndCorners](../floodfillconnectivity/edgesandcorners.md) to specify an eight-connected neighborhood that includes the four-connected neighborhood and the pixels on the four diagonals.

<a id="Discussion"></a>

## Discussion

The flood-fill function sets all pixels that are neighboring and identical to the seed pixel to a new color. The operation continues until it reaches the image boundary or until it sets all pixels within the connected component to the new value.

The following code applies a flood fill to an unsigned 16-bit planar pixel buffer and uses the image’s center pixel as the seed.

```swift
// `pixelBuffer` is a `vImage.PixelBuffer<vImage.Planar16U>`.

pixelBuffer.floodFill(from: CGPoint(x: pixelBuffer.width / 2,
                                    y: pixelBuffer.height / 2),
                      newColor: fillColor,
                      connectivity: .edgesAndCorners)
```

The image below shows the original line-art image on the left, and the flood-filled image on the right:

![Two versions of a line drawing of a star. On the left is the original outline drawing of a star, and on the right is the same star but flood-filled with a solid color.](https://developer.apple.com/images/com.apple.accelerate/media-4165185@2x.png)

## See Also

### Related Documentation

- [Applying flood fills to an image](../../applying-flood-fills-to-an-image.md): Fill consistently colored connected parts of an image with a new color.

### Applying a flood fill to an image

- [floodFill(from:newColor:connectivity:)](floodfill%28from_newcolor_connectivity_%29-44z7t.md): Conforms when `Format` is `vImage.Planar8`. Applies an in-place flood-fill operation to the 8-bit planar image.
- [floodFill(from:newColor:connectivity:)](floodfill%28from_newcolor_connectivity_%29-56w4b.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies an in-place flood-fill operation to the interleaved 4-channel, 8-bit-per-pixel image.
- [floodFill(from:newColor:connectivity:)](floodfill%28from_newcolor_connectivity_%29-6hsrg.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Applies an in-place flood-fill operation to the interleaved 4-channel, unsigned16-bit-per-pixel image.
