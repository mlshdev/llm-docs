> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerconfiguration/qualityprioritization-swift.property](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerconfiguration/qualityprioritization-swift.property)

# qualityPrioritization (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A parameter to control quality and performance levels.

## Declaration

```swift
var qualityPrioritization: VTSuperResolutionScalerConfiguration.QualityPrioritization { get }
```

<a id="discussion"></a>

## Discussion

For more information about supported levels, see [VTSuperResolutionScalerConfiguration.QualityPrioritization](qualityprioritization-swift.enum.md).

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [scaleFactor](scalefactor.md): Indicates the scale factor between input and output.
- [inputType](inputtype-swift.property.md): Indicates the type of input.
- [VTSuperResolutionScalerConfiguration.InputType](inputtype-swift.enum.md): Available super-resolution processor input types.
- [usesPrecomputedFlow](usesprecomputedflow.md): Indicates that you provide optical flow.
- [usesPrecomputedFlow](usesprecomputedflow.md): Indicates that you provide optical flow.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [supportedPixelFormats](supportedpixelformats.md)
- [VTSuperResolutionScalerConfiguration.QualityPrioritization](qualityprioritization-swift.enum.md): Configuration value you set to prioritize quality or performance.

# qualityPrioritization (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A parameter to control quality and performance levels.

## Declaration

```objectivec
@property (nonatomic, readonly) VTSuperResolutionScalerConfigurationQualityPrioritization qualityPrioritization;
```

<a id="discussion"></a>

## Discussion

For more information about supported levels, see [VTSuperResolutionScalerConfigurationQualityPrioritization](qualityprioritization-swift.enum.md).

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [scaleFactor](scalefactor.md): Indicates the scale factor between input and output.
- [inputType](inputtype-swift.property.md): Indicates the type of input.
- [VTSuperResolutionScalerConfigurationInputType](inputtype-swift.enum.md): Available super-resolution processor input types.
- [precomputedFlow](usesprecomputedflow.md): Indicates that you provide optical flow.
- [precomputedFlow](usesprecomputedflow.md): Indicates that you provide optical flow.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](framesupportedpixelformats.md): Available supported pixel formats for source frames for current configuration.
- [VTSuperResolutionScalerConfigurationQualityPrioritization](qualityprioritization-swift.enum.md): Configuration value you set to prioritize quality or performance.
