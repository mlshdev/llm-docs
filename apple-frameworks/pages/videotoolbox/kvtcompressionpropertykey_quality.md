> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_quality](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_quality)

# kVTCompressionPropertyKey_Quality (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The desired compression quality.

## Declaration

```swift
let kVTCompressionPropertyKey_Quality: CFString
```

<a id="Discussion"></a>

## Discussion

Some encoders, such as JPEG, describe the compression level of each image with a quality value.  This value should be specified as a number in the range of 0.0 to 1.0, where low = 0.25, normal = 0.50, high = 0.75, and 1.0 implies lossless compression for encoders that support it.

## See Also

### Rate Control

- [kVTCompressionPropertyKey_AverageBitRate](kvtcompressionpropertykey_averagebitrate.md): The long-term desired average bit rate in bits per second.
- [kVTCompressionPropertyKey_ConstantBitRate](kvtcompressionpropertykey_constantbitrate.md): Requires that the encoder use a Constant Bit Rate algorithm.
- [kVTCompressionPropertyKey_DataRateLimits](kvtcompressionpropertykey_dataratelimits.md): Zero, one, or two hard limits on data rate.
- [kVTCompressionPropertyKey_EstimatedAverageBytesPerFrame](kvtcompressionpropertykey_estimatedaveragebytesperframe.md): An estimate of the expected size in bytes of a single encoded frame based on the current configuration.
- [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md): A Boolean value indicating whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md): A Boolean value that indicates whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_TargetQualityForAlpha](kvtcompressionpropertykey_targetqualityforalpha.md): The target quality to use for encoding the alpha channel.
- [kVTCompressionPropertyKey_VariableBitRate](kvtcompressionpropertykey_variablebitrate.md)
- [kVTCompressionPropertyKey_VBVBufferDuration](kvtcompressionpropertykey_vbvbufferduration.md)
- [kVTCompressionPropertyKey_VBVInitialDelayPercentage](kvtcompressionpropertykey_vbvinitialdelaypercentage.md)
- [kVTCompressionPropertyKey_VBVMaxBitRate](kvtcompressionpropertykey_vbvmaxbitrate.md)

# kVTCompressionPropertyKey_Quality (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The desired compression quality.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_Quality;
```

<a id="Discussion"></a>

## Discussion

Some encoders, such as JPEG, describe the compression level of each image with a quality value.  This value should be specified as a number in the range of 0.0 to 1.0, where low = 0.25, normal = 0.50, high = 0.75, and 1.0 implies lossless compression for encoders that support it.

## See Also

### Rate Control

- [kVTCompressionPropertyKey_AverageBitRate](kvtcompressionpropertykey_averagebitrate.md): The long-term desired average bit rate in bits per second.
- [kVTCompressionPropertyKey_ConstantBitRate](kvtcompressionpropertykey_constantbitrate.md): Requires that the encoder use a Constant Bit Rate algorithm.
- [kVTCompressionPropertyKey_DataRateLimits](kvtcompressionpropertykey_dataratelimits.md): Zero, one, or two hard limits on data rate.
- [kVTCompressionPropertyKey_EstimatedAverageBytesPerFrame](kvtcompressionpropertykey_estimatedaveragebytesperframe.md): An estimate of the expected size in bytes of a single encoded frame based on the current configuration.
- [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md): A Boolean value indicating whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md): A Boolean value that indicates whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_TargetQualityForAlpha](kvtcompressionpropertykey_targetqualityforalpha.md): The target quality to use for encoding the alpha channel.
- [kVTCompressionPropertyKey_VariableBitRate](kvtcompressionpropertykey_variablebitrate.md)
- [kVTCompressionPropertyKey_VBVBufferDuration](kvtcompressionpropertykey_vbvbufferduration.md)
- [kVTCompressionPropertyKey_VBVInitialDelayPercentage](kvtcompressionpropertykey_vbvinitialdelaypercentage.md)
- [kVTCompressionPropertyKey_VBVMaxBitRate](kvtcompressionpropertykey_vbvmaxbitrate.md)
