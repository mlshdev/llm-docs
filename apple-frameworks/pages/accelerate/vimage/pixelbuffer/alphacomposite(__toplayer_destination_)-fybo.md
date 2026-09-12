> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/alphacomposite(_:toplayer:destination:)-fybo](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/alphacomposite(_:toplayer:destination:)-fybo)

# alphaComposite(\_:topLayer:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Performs alpha compositing of two 4-channel interleaved ARGB 8-bit pixel buffers using the specified composite mode.

## Declaration

```swift
func alphaComposite(_ compositeMode: vImage.CompositeMode<Pixel_8>, topLayer: vImage.PixelBuffer<Format>, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `compositeMode`: The composite mode.
- `topLayer`: The composite top layer.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

This function treats `self` as the bottom layer and both pixel buffers must have alpha as their first channel.

## See Also

### Related Documentation

- [Compositing images with alpha blending](../../compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Alpha compositing

- [alphaComposite(\_:topLayer:destination:)](alphacomposite%28__toplayer_destination_%29-w1zc.md): Conforms when `Format` is `vImage.InterleavedFx4`. Performs alpha compositing of two 4-channel interleaved ARGB 32-bit pixel buffers using the specified composite mode.
- [vImage.CompositeMode](../compositemode.md): Constants that specify whether the format of layers is premultiplied or nonpremultiplied.
