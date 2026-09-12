> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vttemporalnoisefilterconfiguration/previousframecount](https://developer.apple.com/documentation/videotoolbox/vttemporalnoisefilterconfiguration/previousframecount)

# previousFrameCount

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Maximum number of past reference frames that the processor can use to process a source frame.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger previousFrameCount;
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [nextFrameCount](nextframecount.md): Maximum number of future reference frames that the processor can use to process a source frame.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](framesupportedpixelformats.md): Supported pixel formats for source frames for current configuration.
