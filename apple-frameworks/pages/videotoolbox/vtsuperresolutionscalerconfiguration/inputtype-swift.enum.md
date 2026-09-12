> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerconfiguration/inputtype-swift.enum](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerconfiguration/inputtype-swift.enum)

# VTSuperResolutionScalerConfiguration.InputType (Swift)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Available super-resolution processor input types.

## Declaration

```swift
enum InputType
```

## Topics

### Enumeration Cases

- [VTSuperResolutionScalerConfiguration.InputType.image](inputtype-swift.enum/image.md)
- [VTSuperResolutionScalerConfiguration.InputType.video](inputtype-swift.enum/video.md)

### Initializers

- [init(rawValue:)](inputtype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [scaleFactor](scalefactor.md): Indicates the scale factor between input and output.
- [inputType](inputtype-swift.property.md): Indicates the type of input.
- [usesPrecomputedFlow](usesprecomputedflow.md): Indicates that you provide optical flow.
- [usesPrecomputedFlow](usesprecomputedflow.md): Indicates that you provide optical flow.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [supportedPixelFormats](supportedpixelformats.md)
- [qualityPrioritization](qualityprioritization-swift.property.md): A parameter to control quality and performance levels.
- [VTSuperResolutionScalerConfiguration.QualityPrioritization](qualityprioritization-swift.enum.md): Configuration value you set to prioritize quality or performance.

# VTSuperResolutionScalerConfigurationInputType (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Available super-resolution processor input types.

## Declaration

```objectivec
enum VTSuperResolutionScalerConfigurationInputType : NSInteger;
```

## Topics

### Enumeration Cases

- [VTSuperResolutionScalerConfigurationInputTypeImage](inputtype-swift.enum/image.md)
- [VTSuperResolutionScalerConfigurationInputTypeVideo](inputtype-swift.enum/video.md)

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): Width of source frame in pixels.
- [frameHeight](frameheight.md): Height of source frame in pixels.
- [scaleFactor](scalefactor.md): Indicates the scale factor between input and output.
- [inputType](inputtype-swift.property.md): Indicates the type of input.
- [precomputedFlow](usesprecomputedflow.md): Indicates that you provide optical flow.
- [precomputedFlow](usesprecomputedflow.md): Indicates that you provide optical flow.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](framesupportedpixelformats.md): Available supported pixel formats for source frames for current configuration.
- [qualityPrioritization](qualityprioritization-swift.property.md): A parameter to control quality and performance levels.
- [VTSuperResolutionScalerConfigurationQualityPrioritization](qualityprioritization-swift.enum.md): Configuration value you set to prioritize quality or performance.
