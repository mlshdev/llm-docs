> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/framewidth](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/framewidth)

# frameWidth (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Width of source frame in pixels.

## Declaration

```swift
var frameWidth: Int { get }
```

## See Also

### Inspecting the configuration

- [frameHeight](frameheight.md): Height of source frame in pixels.
- [scaleFactor](scalefactor.md): Scale factor with which you initialized the configuration.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [supportedPixelFormats](supportedpixelformats.md)

# frameWidth (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Width of source frame in pixels.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger frameWidth;
```

## See Also

### Inspecting the configuration

- [frameHeight](frameheight.md): Height of source frame in pixels.
- [scaleFactor](scalefactor.md): Scale factor with which you initialized the configuration.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](framesupportedpixelformats.md): Available supported pixel formats for source frames for current configuration.
