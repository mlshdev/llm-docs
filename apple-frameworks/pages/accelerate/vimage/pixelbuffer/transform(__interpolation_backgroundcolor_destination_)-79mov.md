> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/transform(_:interpolation:backgroundcolor:destination:)-79mov](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/transform(_:interpolation:backgroundcolor:destination:)-79mov)

# transform(\_:interpolation:backgroundColor:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Applies a perspective warp to a floating-point 16-bit planar image.

## Declaration

```swift
func transform(_ transform: vImage_PerpsectiveTransform, interpolation: vImage_PerpsectiveTransform.Interpolation, backgroundColor: Pixel_16F, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `transform`: The projective-transformation matrix that the function applies.
- `interpolation`: An enumeration that specifies the interpolation mode.
- `backgroundColor`: The background color.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

Use this function to apply a projective-transformation structure to a pixel buffer. Projective transformations warp an image in 3D and allow you to, for example, map a 2D asset to an image of a billboard or television screen.

The following code defines source and destination quadrilaterals that specify a projective-transformation structure:

```swift
let sourceQuadrilateral = (CGPoint(x: 0, y: 0),             // Top-left.
                           CGPoint(x: 1000, y: 0),          // Top-right.
                           CGPoint(x: 1000, y: 1000),       // Bottom-right.
                           CGPoint(x: 0, y: 1000))          // Bottom-left.

let destinationQuadrilateral = (CGPoint(x: 300, y: 375),    // Top-left.
                                CGPoint(x: 700, y: 125),    // Top-right.
                                CGPoint(x: 700, y: 875),    // Bottom-right.
                                CGPoint(x: 300, y: 625))    // Bottom-left.

guard let warp = vImage_PerpsectiveTransform(
    source: sourceQuadrilateral,
    destination: destinationQuadrilateral) else {
    return
}
```

You pass the `vImage_PerpsectiveTransform` structure to this function to apply the warp to the source pixel buffer and write the result to the destination buffer.

```swift
sourceBuffer.transform(warp,
                       interpolation: .linear,
                       backgroundColor: backgroundColor,
                       destination: destinationBuffer)
```

The illustration below shows the original image on the left and the warped image on the right:

![Two versions of a grid divided by dotted lines into a 4 by 4 partition. The version on the left is a square grid and appears as a straight-on view. The version on the right is a square containing a grid warped so that the left edge of the square grid appears to be receding into the distance.](https://developer.apple.com/images/com.apple.accelerate/media-4165206@2x.png)

> **Important**

>  This function doesn’t work in place — that is, the source and destination buffers need to point to different memory.

## See Also

### Related Documentation

- [Transforming an image in three dimensions](../../transforming-an-image-in-three-dimensions.md): Create and use a projective transformation to apply a perspective warp to an image.

### Applying projective transformations to images

- [transform(\_:interpolation:backgroundColor:destination:)](transform%28__interpolation_backgroundcolor_destination_%29-94t75.md): Conforms when `Format` is `vImage.Planar8`. Applies a perspective warp to an 8-bit planar image.
- [transform(\_:interpolation:backgroundColor:destination:)](transform%28__interpolation_backgroundcolor_destination_%29-902c9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a perspective warp to an interleaved 4-channel, 8-bit planar image.
- [transform(\_:interpolation:backgroundColor:destination:)](transform%28__interpolation_backgroundcolor_destination_%29-9pv8u.md): Conforms when `Format` is `vImage.Planar16U`. Applies a perspective warp to an unsigned-integer 16-bit planar image.
- [transform(\_:interpolation:backgroundColor:destination:)](transform%28__interpolation_backgroundcolor_destination_%29-4wvdj.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Applies a perspective warp to an interleaved 4-channel, unsigned 16-bit planar image.
- [transform(\_:interpolation:backgroundColor:destination:)](transform%28__interpolation_backgroundcolor_destination_%29-7qnl8.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Applies a perspective warp to an interleaved 4-channel, floating-point 16-bit planar image.
