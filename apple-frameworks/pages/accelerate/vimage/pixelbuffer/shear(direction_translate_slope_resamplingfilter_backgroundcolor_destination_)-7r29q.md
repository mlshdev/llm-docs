> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/shear(direction:translate:slope:resamplingfilter:backgroundcolor:destination:)-7r29q](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/shear(direction:translate:slope:resamplingfilter:backgroundcolor:destination:)-7r29q)

# shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Performs a horizontal or vertical shear operation on a 32-bit-per-channel, four-channel interleaved pixel buffer.

## Declaration

```swift
func shear<T>(direction: vImage.ShearDirection, translate: T, slope: T, resamplingFilter: ResamplingFilter, backgroundColor: Pixel_FFFF? = (0, 0, 0, 0), destination: vImage.PixelBuffer<Format>) where T : BinaryFloatingPoint
```

## Parameters

- `direction`: An enumeration that specifies the shear direction.
- `translate`: A value that specifies the translation.
- `slope`: The slope of the front edge of the sheared image.
- `resamplingFilter`: The resampling filter that the function uses. For more information, see [Reducing artifacts with custom resampling filters](../../reducing-artifacts-with-custom-resampling-filters.md).
- `backgroundColor`: An optional background color. If you pass `nil`, the operation uses the [kvImageEdgeExtend](../../kvimageedgeextend.md) flag to extend the edges of the image infinitely.
- `destination`: The destination pixel buffer.

## See Also

### Related Documentation

- [Applying geometric transforms to images](../../applying-geometric-transforms-to-images.md): Reflect, shear, rotate, and scale image buffers using vImage.

### Shearing images

- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-2gf4y.md): Conforms when `Format` is `vImage.Planar8`. Performs a horizontal or vertical shear operation on an 8-bit planar pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-5busu.md): Conforms when `Format` is `vImage.Planar16U`. Performs a horizontal or vertical shear operation on an unsigned 16-bit planar pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:useFloat16Accumulator:destination:)](shear%28direction_translate_slope_resamplingfilter_backgroundcolor_usefloat16accumulator_destination_%29-26sh4.md): Conforms when `Format` is `vImage.Planar16F`. Performs a horizontal or vertical shear operation on a floating-point 16-bit planar pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-85o1n.md): Conforms when `Format` is `vImage.PlanarF`. Performs a horizontal or vertical shear operation on a 32-bit planar pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-57dzf.md): Conforms when `Format` is `vImage.Interleaved16Ux2`. Performs a horizontal or vertical shear operation on an unsigned 16-bit-per-channel, two-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-7fou8.md): Conforms when `Format` is `vImage.Interleaved8x2`. Performs a horizontal or vertical shear operation on an 8-bit-per-channel, two-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:useFloat16Accumulator:destination:)](shear%28direction_translate_slope_resamplingfilter_backgroundcolor_usefloat16accumulator_destination_%29-7nh4n.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Performs a horizontal or vertical shear operation on a floating-point 16-bit-per-channel, two-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-95446.md): Conforms when `Format` is `vImage.Interleaved8x4`. Performs a horizontal or vertical shear operation on an 8-bit-per-channel, four-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-2ezuh.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Performs a horizontal or vertical shear operation on an unsigned 16-bit-per-channel, four-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:useFloat16Accumulator:destination:)](shear%28direction_translate_slope_resamplingfilter_backgroundcolor_usefloat16accumulator_destination_%29-7kddt.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Performs a horizontal or vertical shear operation on a floating-point 16-bit-per-channel, four-channel interleaved pixel buffer.
- [vImage.ShearDirection](../sheardirection.md): The shear direction.
