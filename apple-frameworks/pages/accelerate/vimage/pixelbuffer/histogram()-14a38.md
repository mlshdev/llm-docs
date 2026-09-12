> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/histogram()-14a38](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/histogram()-14a38)

# histogram()

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Calculates the histogram of an 8-bit-per-channel, 4-channel interleaved pixel buffer.

## Declaration

```swift
func histogram() -> vImage.PixelBuffer<Format>.Histogram8888
```

<a id="return-value"></a>

## Return Value

The histogram of the pixel buffer.

## See Also

### Related Documentation

- [specifyHistogram(\_:destination:)](specifyhistogram%28__destination_%29-7xiz4.md): Conforms when `Format` is `vImage.Interleaved8x4`. Performs a histogram specification operation on an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [Specifying histograms with vImage](../../specifying-histograms-with-vimage.md): Calculate the histogram of one image, and apply it to a second image.

### Histogram calculation

- [histogram(binCount:)](histogram%28bincount_%29-6pkfv.md): Conforms when `Format` is `vImage.InterleavedFx4`. Calculates the histogram of a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [histogram()](histogram%28%29-30tsp.md): Conforms when `Format` is `vImage.Planar8x3`. Calculates the histogram of an 8-bit-per-channel, 3-channel multiple-plane pixel buffer.
- [histogram(binCount:)](histogram%28bincount_%29-8wymg.md): Conforms when `Format` is `vImage.PlanarFx3`. Calculates the histogram of a 32-bit-per-channel, 3-channel multiple-plane pixel buffer.
- [histogram()](histogram%28%29-6wxl5.md): Conforms when `Format` is `vImage.Planar8x4`. Calculates the histogram of an 8-bit-per-channel, 4-channel multiple-plane pixel buffer.
- [histogram(binCount:)](histogram%28bincount_%29-5bqka.md): Conforms when `Format` is `vImage.PlanarFx4`. Calculates the histogram of a 32-bit-per-channel, 4-channel multiple-plane pixel buffer.
