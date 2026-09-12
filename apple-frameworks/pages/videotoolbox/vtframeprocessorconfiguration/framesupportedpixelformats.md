> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorconfiguration/framesupportedpixelformats](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorconfiguration/framesupportedpixelformats)

# frameSupportedPixelFormats

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A list of supported pixel formats for the current configuration.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * frameSupportedPixelFormats;
```

## See Also

### Inspecting pixel buffer attributes

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes that define what the source and reference frames passed to the processor must conform to.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes that define which output frames passed to the processor must conform to.
