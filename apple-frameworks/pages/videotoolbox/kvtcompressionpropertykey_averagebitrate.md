> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_averagebitrate](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_averagebitrate)

# kVTCompressionPropertyKey_AverageBitRate (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The long-term desired average bit rate in bits per second.

## Declaration

```swift
let kVTCompressionPropertyKey_AverageBitRate: CFString
```

<a id="Discussion"></a>

## Discussion

This value is not a hard limit; the bit rate may peak above this. The default bit rate is zero, which indicates that the video encoder should determine the size of compressed data. Note that bit rate settings only have an effect when timing information is provided for source frames, and that some codecs do not support limiting to specified bit rates.

## See Also

### Rate Control

- [kVTCompressionPropertyKey_ConstantBitRate](kvtcompressionpropertykey_constantbitrate.md): Requires that the encoder use a Constant Bit Rate algorithm.
- [kVTCompressionPropertyKey_DataRateLimits](kvtcompressionpropertykey_dataratelimits.md): Zero, one, or two hard limits on data rate.
- [kVTCompressionPropertyKey_EstimatedAverageBytesPerFrame](kvtcompressionpropertykey_estimatedaveragebytesperframe.md): An estimate of the expected size in bytes of a single encoded frame based on the current configuration.
- [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md): A Boolean value indicating whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md): A Boolean value that indicates whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_Quality](kvtcompressionpropertykey_quality.md): The desired compression quality.
- [kVTCompressionPropertyKey_TargetQualityForAlpha](kvtcompressionpropertykey_targetqualityforalpha.md): The target quality to use for encoding the alpha channel.
- [kVTCompressionPropertyKey_VariableBitRate](kvtcompressionpropertykey_variablebitrate.md)
- [kVTCompressionPropertyKey_VBVBufferDuration](kvtcompressionpropertykey_vbvbufferduration.md)
- [kVTCompressionPropertyKey_VBVInitialDelayPercentage](kvtcompressionpropertykey_vbvinitialdelaypercentage.md)
- [kVTCompressionPropertyKey_VBVMaxBitRate](kvtcompressionpropertykey_vbvmaxbitrate.md)

# kVTCompressionPropertyKey_AverageBitRate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The long-term desired average bit rate in bits per second.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_AverageBitRate;
```

<a id="Discussion"></a>

## Discussion

This value is not a hard limit; the bit rate may peak above this. The default bit rate is zero, which indicates that the video encoder should determine the size of compressed data. Note that bit rate settings only have an effect when timing information is provided for source frames, and that some codecs do not support limiting to specified bit rates.

## See Also

### Rate Control

- [kVTCompressionPropertyKey_ConstantBitRate](kvtcompressionpropertykey_constantbitrate.md): Requires that the encoder use a Constant Bit Rate algorithm.
- [kVTCompressionPropertyKey_DataRateLimits](kvtcompressionpropertykey_dataratelimits.md): Zero, one, or two hard limits on data rate.
- [kVTCompressionPropertyKey_EstimatedAverageBytesPerFrame](kvtcompressionpropertykey_estimatedaveragebytesperframe.md): An estimate of the expected size in bytes of a single encoded frame based on the current configuration.
- [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md): A Boolean value indicating whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md): A Boolean value that indicates whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_Quality](kvtcompressionpropertykey_quality.md): The desired compression quality.
- [kVTCompressionPropertyKey_TargetQualityForAlpha](kvtcompressionpropertykey_targetqualityforalpha.md): The target quality to use for encoding the alpha channel.
- [kVTCompressionPropertyKey_VariableBitRate](kvtcompressionpropertykey_variablebitrate.md)
- [kVTCompressionPropertyKey_VBVBufferDuration](kvtcompressionpropertykey_vbvbufferduration.md)
- [kVTCompressionPropertyKey_VBVInitialDelayPercentage](kvtcompressionpropertykey_vbvinitialdelaypercentage.md)
- [kVTCompressionPropertyKey_VBVMaxBitRate](kvtcompressionpropertykey_vbvmaxbitrate.md)
