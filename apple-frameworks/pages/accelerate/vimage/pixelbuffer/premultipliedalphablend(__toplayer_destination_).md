> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/premultipliedalphablend(_:toplayer:destination:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/premultipliedalphablend(_:toplayer:destination:))

# premultipliedAlphaBlend(\_:topLayer:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Performs alpha compositing of two 4-channel interleaved RGBA 8-bit pixel buffers using the specified blend mode to produce a premultiplied result.

## Declaration

```swift
func premultipliedAlphaBlend(_ blendMode: vImage.BlendMode, topLayer: vImage.PixelBuffer<Format>, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `blendMode`: The blend mode.
- `topLayer`: The blend top layer.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

This function treats `self` as the bottom layer and both pixel buffers must have alpha as their last channel.

## See Also

### Related Documentation

- [Compositing images with alpha blending](../../compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Alpha blending

- [vImage.BlendMode](../blendmode.md): Constants that specify an alpha blending mode.
