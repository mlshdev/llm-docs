> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/configuration/rastersamplecount](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/configuration/rastersamplecount)

# rasterSampleCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The number of samples per pixel for MSAA.

## Declaration

```swift
var rasterSampleCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLRenderPassDescriptor.rasterSampleCount`.

## See Also

### Tuning rendering options

- [enableTonemap](enabletonemap.md): A Boolean value that indicates whether output values are tone-mapped to the target pixel format’s range before being written to the output texture.
- [enableColorMatch](enablecolormatch.md): A Boolean value that indicates whether the renderer applies a gamut conversion matrix during resolve, converting from the renderer’s working color space to the output display’s color space.
- [alphaPremultiply](alphapremultiply.md): A Boolean value that indicates whether the renderer divides content by alpha before applying tonemap and color match, then multiplies by alpha before final texture output.
- [maxCameraCount](maxcameracount.md): The maximum number of simultaneous cameras supported.
