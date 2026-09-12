> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration/supportedpixelformats](https://developer.apple.com/documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration/supportedpixelformats)

# supportedPixelFormats

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
var supportedPixelFormats: [OSType] { get }
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frames in pixels.
- [frameHeight](frameheight.md): Height of source frames in pixels.
- [numberOfInterpolatedFrames](numberofinterpolatedframes.md): Number of uniformly spaced frames for which you configured the processor.
- [spatialScaleFactor](spatialscalefactor.md): Configured spatial scale factor as an integer.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
