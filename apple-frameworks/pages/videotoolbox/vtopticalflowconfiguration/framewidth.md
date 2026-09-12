> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowconfiguration/framewidth](https://developer.apple.com/documentation/videotoolbox/vtopticalflowconfiguration/framewidth)

# frameWidth (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The width of a source frame in pixels.

## Declaration

```swift
var frameWidth: Int { get }
```

<a id="discussion"></a>

## Discussion

The maximum value is 8192 pixels for macOS, and 4096 pixels for iOS.

## See Also

### Inspecting the configuration

- [frameHeight](frameheight.md): The height of source frame in pixels.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [supportedPixelFormats](supportedpixelformats.md)
- [qualityPrioritization](qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTOpticalFlowConfiguration.QualityPrioritization](qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.

# frameWidth (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The width of a source frame in pixels.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger frameWidth;
```

<a id="discussion"></a>

## Discussion

The maximum value is 8192 pixels for macOS, and 4096 pixels for iOS.

## See Also

### Inspecting the configuration

- [frameHeight](frameheight.md): The height of source frame in pixels.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [qualityPrioritization](qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTOpticalFlowConfigurationQualityPrioritization](qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.
