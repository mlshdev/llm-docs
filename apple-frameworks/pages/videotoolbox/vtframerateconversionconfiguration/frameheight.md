> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionconfiguration/frameheight](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionconfiguration/frameheight)

# frameHeight (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The height of a source frame in pixels.

## Declaration

```swift
var frameHeight: Int { get }
```

<a id="discussion"></a>

## Discussion

The maximum value is 4320 pixels for macOS, and 2160 pixels for iOS.

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): The width of a source frame in pixels.
- [usePrecomputedFlow](useprecomputedflow.md): A Boolean value to indicates whether the optical flow will be provided by the user.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [supportedPixelFormats](supportedpixelformats.md)
- [qualityPrioritization](qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTFrameRateConversionConfiguration.QualityPrioritization](qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.

# frameHeight (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The height of a source frame in pixels.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger frameHeight;
```

<a id="discussion"></a>

## Discussion

The maximum value is 4320 pixels for macOS, and 2160 pixels for iOS.

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): The width of a source frame in pixels.
- [usePrecomputedFlow](useprecomputedflow.md): A Boolean value to indicates whether the optical flow will be provided by the user.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [qualityPrioritization](qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTFrameRateConversionConfigurationQualityPrioritization](qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.
