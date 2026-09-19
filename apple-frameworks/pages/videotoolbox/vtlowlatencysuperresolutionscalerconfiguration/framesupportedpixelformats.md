> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/framesupportedpixelformats

# frameSupportedPixelFormats

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Available supported pixel formats for source frames for current configuration.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * frameSupportedPixelFormats;
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [scaleFactor](scalefactor.md): Scale factor with which you initialized the configuration.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
