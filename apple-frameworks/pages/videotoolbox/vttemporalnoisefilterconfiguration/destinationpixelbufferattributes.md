> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vttemporalnoisefilterconfiguration/destinationpixelbufferattributes](https://developer.apple.com/documentation/videotoolbox/vttemporalnoisefilterconfiguration/destinationpixelbufferattributes)

# destinationPixelBufferAttributes (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.

## Declaration

```swift
var destinationPixelBufferAttributes: [String : any Sendable] { get }
```

<a id="discussion"></a>

## Discussion

Use `CVPixelBufferCreateResolvedAttributesDictionary` to combine this dictionary with your pixel buffer attributes dictionary.

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [supportedPixelFormats](supportedpixelformats.md)
- [supportedSourcePixelFormats](supportedsourcepixelformats-4ipcg.md)

# destinationPixelBufferAttributes (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * destinationPixelBufferAttributes;
```

<a id="discussion"></a>

## Discussion

Use `CVPixelBufferCreateResolvedAttributesDictionary` to combine this dictionary with your pixel buffer attributes dictionary.

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [nextFrameCount](nextframecount.md): Maximum number of future reference frames that the processor can use to process a source frame.
- [previousFrameCount](previousframecount.md): Maximum number of past reference frames that the processor can use to process a source frame.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [frameSupportedPixelFormats](framesupportedpixelformats.md): Supported pixel formats for source frames for current configuration.
