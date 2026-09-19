> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtopticalflowconfiguration/supportedpixelformats

# supportedPixelFormats

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

## Declaration

```swift
var supportedPixelFormats: [OSType] { get }
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): The width of a source frame in pixels.
- [frameHeight](frameheight.md): The height of source frame in pixels.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [qualityPrioritization](qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTOpticalFlowConfiguration.QualityPrioritization](qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.
