> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowconfiguration/destinationpixelbufferattributes](https://developer.apple.com/documentation/videotoolbox/vtopticalflowconfiguration/destinationpixelbufferattributes)

# destinationPixelBufferAttributes (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.

## Declaration

```swift
var destinationPixelBufferAttributes: [String : any Sendable] { get }
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): The width of a source frame in pixels.
- [frameHeight](frameheight.md): The height of source frame in pixels.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [supportedPixelFormats](supportedpixelformats.md)
- [qualityPrioritization](qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTOpticalFlowConfiguration.QualityPrioritization](qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.

# destinationPixelBufferAttributes (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * destinationPixelBufferAttributes;
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): The width of a source frame in pixels.
- [frameHeight](frameheight.md): The height of source frame in pixels.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [qualityPrioritization](qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTOpticalFlowConfigurationQualityPrioritization](qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.
