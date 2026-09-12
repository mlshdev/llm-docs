> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerconfiguration/usesprecomputedflow](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerconfiguration/usesprecomputedflow)

# usesPrecomputedFlow (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Indicates that you provide optical flow.

## Declaration

```swift
var usesPrecomputedFlow: Bool { get }
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [scaleFactor](scalefactor.md): Indicates the scale factor between input and output.
- [inputType](inputtype-swift.property.md): Indicates the type of input.
- [VTSuperResolutionScalerConfiguration.InputType](inputtype-swift.enum.md): Available super-resolution processor input types.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [supportedPixelFormats](supportedpixelformats.md)
- [qualityPrioritization](qualityprioritization-swift.property.md): A parameter to control quality and performance levels.
- [VTSuperResolutionScalerConfiguration.QualityPrioritization](qualityprioritization-swift.enum.md): Configuration value you set to prioritize quality or performance.

# precomputedFlow (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Indicates that you provide optical flow.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=usesPrecomputedFlow) BOOL precomputedFlow;
```

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [scaleFactor](scalefactor.md): Indicates the scale factor between input and output.
- [inputType](inputtype-swift.property.md): Indicates the type of input.
- [VTSuperResolutionScalerConfigurationInputType](inputtype-swift.enum.md): Available super-resolution processor input types.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](framesupportedpixelformats.md): Available supported pixel formats for source frames for current configuration.
- [qualityPrioritization](qualityprioritization-swift.property.md): A parameter to control quality and performance levels.
- [VTSuperResolutionScalerConfigurationQualityPrioritization](qualityprioritization-swift.enum.md): Configuration value you set to prioritize quality or performance.
