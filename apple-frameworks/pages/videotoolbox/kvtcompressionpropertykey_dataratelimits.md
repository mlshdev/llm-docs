> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_dataratelimits](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_dataratelimits)

# kVTCompressionPropertyKey_DataRateLimits (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Zero, one, or two hard limits on data rate.

## Declaration

```swift
let kVTCompressionPropertyKey_DataRateLimits: CFString
```

<a id="Discussion"></a>

## Discussion

Each hard limit is described by a data size in bytes and a duration in seconds, and requires that the total size of compressed data for any contiguous segment of that duration (in decode time) not exceed the data size. By default, no data rate limits are set.  The property is a [CFArray](../corefoundation/cfarray.md) of an even number of [CFNumber](../corefoundation/cfnumber.md) objects, alternating between bytes and seconds. Note that data rate settings only have an effect when timing information is provided for source frames, and that some codecs do not support limiting to specified data rates.

## See Also

### Rate Control

- [kVTCompressionPropertyKey_AverageBitRate](kvtcompressionpropertykey_averagebitrate.md): The long-term desired average bit rate in bits per second.
- [kVTCompressionPropertyKey_ConstantBitRate](kvtcompressionpropertykey_constantbitrate.md): Requires that the encoder use a Constant Bit Rate algorithm.
- [kVTCompressionPropertyKey_EstimatedAverageBytesPerFrame](kvtcompressionpropertykey_estimatedaveragebytesperframe.md): An estimate of the expected size in bytes of a single encoded frame based on the current configuration.
- [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md): A Boolean value indicating whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md): A Boolean value that indicates whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_Quality](kvtcompressionpropertykey_quality.md): The desired compression quality.
- [kVTCompressionPropertyKey_TargetQualityForAlpha](kvtcompressionpropertykey_targetqualityforalpha.md): The target quality to use for encoding the alpha channel.
- [kVTCompressionPropertyKey_VariableBitRate](kvtcompressionpropertykey_variablebitrate.md)
- [kVTCompressionPropertyKey_VBVBufferDuration](kvtcompressionpropertykey_vbvbufferduration.md)
- [kVTCompressionPropertyKey_VBVInitialDelayPercentage](kvtcompressionpropertykey_vbvinitialdelaypercentage.md)
- [kVTCompressionPropertyKey_VBVMaxBitRate](kvtcompressionpropertykey_vbvmaxbitrate.md)

# kVTCompressionPropertyKey_DataRateLimits (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Zero, one, or two hard limits on data rate.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_DataRateLimits;
```

<a id="Discussion"></a>

## Discussion

Each hard limit is described by a data size in bytes and a duration in seconds, and requires that the total size of compressed data for any contiguous segment of that duration (in decode time) not exceed the data size. By default, no data rate limits are set.  The property is a [CFArrayRef](../corefoundation/cfarray.md) of an even number of [CFNumberRef](../corefoundation/cfnumber.md) objects, alternating between bytes and seconds. Note that data rate settings only have an effect when timing information is provided for source frames, and that some codecs do not support limiting to specified data rates.

## See Also

### Rate Control

- [kVTCompressionPropertyKey_AverageBitRate](kvtcompressionpropertykey_averagebitrate.md): The long-term desired average bit rate in bits per second.
- [kVTCompressionPropertyKey_ConstantBitRate](kvtcompressionpropertykey_constantbitrate.md): Requires that the encoder use a Constant Bit Rate algorithm.
- [kVTCompressionPropertyKey_EstimatedAverageBytesPerFrame](kvtcompressionpropertykey_estimatedaveragebytesperframe.md): An estimate of the expected size in bytes of a single encoded frame based on the current configuration.
- [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md): A Boolean value indicating whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md): A Boolean value that indicates whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_Quality](kvtcompressionpropertykey_quality.md): The desired compression quality.
- [kVTCompressionPropertyKey_TargetQualityForAlpha](kvtcompressionpropertykey_targetqualityforalpha.md): The target quality to use for encoding the alpha channel.
- [kVTCompressionPropertyKey_VariableBitRate](kvtcompressionpropertykey_variablebitrate.md)
- [kVTCompressionPropertyKey_VBVBufferDuration](kvtcompressionpropertykey_vbvbufferduration.md)
- [kVTCompressionPropertyKey_VBVInitialDelayPercentage](kvtcompressionpropertykey_vbvinitialdelaypercentage.md)
- [kVTCompressionPropertyKey_VBVMaxBitRate](kvtcompressionpropertykey_vbvmaxbitrate.md)
