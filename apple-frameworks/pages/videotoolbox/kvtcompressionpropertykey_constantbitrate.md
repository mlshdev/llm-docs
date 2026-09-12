> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_constantbitrate](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_constantbitrate)

# kVTCompressionPropertyKey_ConstantBitRate (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Requires that the encoder use a Constant Bit Rate algorithm.

## Declaration

```swift
let kVTCompressionPropertyKey_ConstantBitRate: CFString
```

## See Also

### Rate Control

- [kVTCompressionPropertyKey_AverageBitRate](kvtcompressionpropertykey_averagebitrate.md): The long-term desired average bit rate in bits per second.
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

# kVTCompressionPropertyKey_ConstantBitRate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Requires that the encoder use a Constant Bit Rate algorithm.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_ConstantBitRate;
```

## See Also

### Rate Control

- [kVTCompressionPropertyKey_AverageBitRate](kvtcompressionpropertykey_averagebitrate.md): The long-term desired average bit rate in bits per second.
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
