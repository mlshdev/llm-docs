> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration/frameheight](https://developer.apple.com/documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration/frameheight)

# frameHeight (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Height of source frames in pixels.

## Declaration

```swift
var frameHeight: Int { get }
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frames in pixels.
- [numberOfInterpolatedFrames](numberofinterpolatedframes.md): Number of uniformly spaced frames for which you configured the processor.
- [spatialScaleFactor](spatialscalefactor.md): Configured spatial scale factor as an integer.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [supportedPixelFormats](supportedpixelformats.md)

# frameHeight (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Height of source frames in pixels.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger frameHeight;
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frames in pixels.
- [numberOfInterpolatedFrames](numberofinterpolatedframes.md): Number of uniformly spaced frames for which you configured the processor.
- [spatialScaleFactor](spatialscalefactor.md): Configured spatial scale factor as an integer.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](framesupportedpixelformats.md): Available supported pixel formats for current configuration.
