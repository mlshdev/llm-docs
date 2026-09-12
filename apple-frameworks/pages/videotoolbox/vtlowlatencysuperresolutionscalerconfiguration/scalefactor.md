> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/scalefactor](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/scalefactor)

# scaleFactor (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Scale factor with which you initialized the configuration.

## Declaration

```swift
var scaleFactor: Float { get }
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [supportedPixelFormats](supportedpixelformats.md)

# scaleFactor (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Scale factor with which you initialized the configuration.

## Declaration

```objectivec
@property (nonatomic, readonly) float scaleFactor;
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](framesupportedpixelformats.md): Available supported pixel formats for source frames for current configuration.
