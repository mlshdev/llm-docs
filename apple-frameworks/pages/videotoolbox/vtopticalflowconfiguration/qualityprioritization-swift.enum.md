> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowconfiguration/qualityprioritization-swift.enum](https://developer.apple.com/documentation/videotoolbox/vtopticalflowconfiguration/qualityprioritization-swift.enum)

# VTOpticalFlowConfiguration.QualityPrioritization (Swift)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

Values that specify whether to prioritize quality or performance.

## Declaration

```swift
enum QualityPrioritization
```

<a id="overview"></a>

## Overview

See VEFrameRateConversionConfigurationQualityPrioritization for more info.

## Topics

### Enumeration Cases

- [VTOpticalFlowConfiguration.QualityPrioritization.normal](qualityprioritization-swift.enum/normal.md): A normal quality prioritization level.
- [VTOpticalFlowConfiguration.QualityPrioritization.quality](qualityprioritization-swift.enum/quality.md): A quality prioritization level.

### Initializers

- [init(rawValue:)](qualityprioritization-swift.enum/init%28rawvalue_%29.md)

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

- [frameWidth](framewidth.md): The width of a source frame in pixels.
- [frameHeight](frameheight.md): The height of source frame in pixels.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [supportedPixelFormats](supportedpixelformats.md)
- [qualityPrioritization](qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.

# VTOpticalFlowConfigurationQualityPrioritization (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Values that specify whether to prioritize quality or performance.

## Declaration

```objectivec
enum VTOpticalFlowConfigurationQualityPrioritization : NSInteger;
```

<a id="overview"></a>

## Overview

See VEFrameRateConversionConfigurationQualityPrioritization for more info.

## Topics

### Enumeration Cases

- [VTOpticalFlowConfigurationQualityPrioritizationNormal](qualityprioritization-swift.enum/normal.md): A normal quality prioritization level.
- [VTOpticalFlowConfigurationQualityPrioritizationQuality](qualityprioritization-swift.enum/quality.md): A quality prioritization level.

## See Also

### Inspecting the configuration

- [frameWidth](framewidth.md): The width of a source frame in pixels.
- [frameHeight](frameheight.md): The height of source frame in pixels.
- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [qualityPrioritization](qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
