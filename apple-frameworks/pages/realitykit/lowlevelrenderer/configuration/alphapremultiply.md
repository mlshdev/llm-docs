> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/configuration/alphapremultiply](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/configuration/alphapremultiply)

# alphaPremultiply

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether the renderer divides content by alpha before applying tonemap and color match, then multiplies by alpha before final texture output.

## Declaration

```swift
var alphaPremultiply: Bool { get set }
```

## See Also

### Tuning rendering options

- [rasterSampleCount](rastersamplecount.md): The number of samples per pixel for MSAA.
- [enableTonemap](enabletonemap.md): A Boolean value that indicates whether output values are tone-mapped to the target pixel format’s range before being written to the output texture.
- [enableColorMatch](enablecolormatch.md): A Boolean value that indicates whether the renderer applies a gamut conversion matrix during resolve, converting from the renderer’s working color space to the output display’s color space.
- [maxCameraCount](maxcameracount.md): The maximum number of simultaneous cameras supported.
