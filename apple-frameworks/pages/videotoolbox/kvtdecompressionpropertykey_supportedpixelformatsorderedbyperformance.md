> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_supportedpixelformatsorderedbyperformance](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_supportedpixelformatsorderedbyperformance)

# kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

An array indicating speed tradeoffs between pixel formats (optional).

## Declaration

```swift
let kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance: CFString
```

<a id="Discussion"></a>

## Discussion

This is an optional property for video decoders to implement. This property value is an array containing [CFNumber](../corefoundation/cfnumber.md) objects holding [CMPixelFormatType](../coremedia/cmpixelformattype.md) values,	ordered by speed from fastest to slowest.

## See Also

### Decoder Behavior

- [kVTDecompressionProperty_TemporalLevelLimit](kvtdecompressionproperty_temporallevellimit.md)
- [kVTDecompressionPropertyKey_AllowBitstreamToChangeFrameDimensions](kvtdecompressionpropertykey_allowbitstreamtochangeframedimensions.md): A Boolean value that indicates whether a decoder is allowed to output buffers matching reduced frame dimensions in the bitstream rather than under-filling them.
- [kVTDecompressionPropertyKey_DeinterlaceMode](kvtdecompressionpropertykey_deinterlacemode.md): Modes for requesting a specific deinterlacing technique.
- [kVTDecompressionPropertyKey_FieldMode](kvtdecompressionpropertykey_fieldmode.md): Modes for special handling of interlaced content (optional).
- [kVTDecompressionPropertyKey_MaximizePowerEfficiency](kvtdecompressionpropertykey_maximizepowerefficiency.md)
- [kVTDecompressionPropertyKey_OnlyTheseFrames](kvtdecompressionpropertykey_onlytheseframes.md): Requests that frames be filtered by type.
- [kVTDecompressionPropertyKey_PixelFormatsWithReducedResolutionSupport](kvtdecompressionpropertykey_pixelformatswithreducedresolutionsupport.md): Pixel formats that support reduced-resolution decoding (optional).
- [kVTDecompressionPropertyKey_RealTime](kvtdecompressionpropertykey_realtime.md): A Boolean value indicating whether it’s recommended that the video decoder perform decompression in real time.
- [kVTDecompressionPropertyKey_ReducedCoefficientDecode](kvtdecompressionpropertykey_reducedcoefficientdecode.md): Requests approximation during decoding.
- [kVTDecompressionPropertyKey_ReducedFrameDelivery](kvtdecompressionpropertykey_reducedframedelivery.md): The proportion of frames that should be delivered, indicating that the rest may be dropped.
- [kVTDecompressionPropertyKey_ReducedResolutionDecode](kvtdecompressionpropertykey_reducedresolutiondecode.md): Request decoding at smaller resolutions than full-size (optional).
- [kVTDecompressionPropertyKey_SuggestedQualityOfServiceTiers](kvtdecompressionpropertykey_suggestedqualityofservicetiers.md): An array of dictionaries that describe decreasing quality-of-service levels that clients can use to maintain realtime playback (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByQuality](kvtdecompressionpropertykey_supportedpixelformatsorderedbyquality.md): An array indicating quality levels among pixel formats.
- [kVTDecompressionPropertyKey_ThreadCount](kvtdecompressionpropertykey_threadcount.md): The number of threads used by a codec or the suggested number of threads to use (optional).

# kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

An array indicating speed tradeoffs between pixel formats (optional).

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance;
```

<a id="Discussion"></a>

## Discussion

This is an optional property for video decoders to implement. This property value is an array containing [CFNumberRef](../corefoundation/cfnumber.md) objects holding [CMPixelFormatType](../coremedia/cmpixelformattype.md) values,	ordered by speed from fastest to slowest.

## See Also

### Decoder Behavior

- [kVTDecompressionProperty_TemporalLevelLimit](kvtdecompressionproperty_temporallevellimit.md)
- [kVTDecompressionPropertyKey_AllowBitstreamToChangeFrameDimensions](kvtdecompressionpropertykey_allowbitstreamtochangeframedimensions.md): A Boolean value that indicates whether a decoder is allowed to output buffers matching reduced frame dimensions in the bitstream rather than under-filling them.
- [kVTDecompressionPropertyKey_DeinterlaceMode](kvtdecompressionpropertykey_deinterlacemode.md): Modes for requesting a specific deinterlacing technique.
- [kVTDecompressionPropertyKey_FieldMode](kvtdecompressionpropertykey_fieldmode.md): Modes for special handling of interlaced content (optional).
- [kVTDecompressionPropertyKey_MaximizePowerEfficiency](kvtdecompressionpropertykey_maximizepowerefficiency.md)
- [kVTDecompressionPropertyKey_OnlyTheseFrames](kvtdecompressionpropertykey_onlytheseframes.md): Requests that frames be filtered by type.
- [kVTDecompressionPropertyKey_PixelFormatsWithReducedResolutionSupport](kvtdecompressionpropertykey_pixelformatswithreducedresolutionsupport.md): Pixel formats that support reduced-resolution decoding (optional).
- [kVTDecompressionPropertyKey_RealTime](kvtdecompressionpropertykey_realtime.md): A Boolean value indicating whether it’s recommended that the video decoder perform decompression in real time.
- [kVTDecompressionPropertyKey_ReducedCoefficientDecode](kvtdecompressionpropertykey_reducedcoefficientdecode.md): Requests approximation during decoding.
- [kVTDecompressionPropertyKey_ReducedFrameDelivery](kvtdecompressionpropertykey_reducedframedelivery.md): The proportion of frames that should be delivered, indicating that the rest may be dropped.
- [kVTDecompressionPropertyKey_ReducedResolutionDecode](kvtdecompressionpropertykey_reducedresolutiondecode.md): Request decoding at smaller resolutions than full-size (optional).
- [kVTDecompressionPropertyKey_SuggestedQualityOfServiceTiers](kvtdecompressionpropertykey_suggestedqualityofservicetiers.md): An array of dictionaries that describe decreasing quality-of-service levels that clients can use to maintain realtime playback (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByQuality](kvtdecompressionpropertykey_supportedpixelformatsorderedbyquality.md): An array indicating quality levels among pixel formats.
- [kVTDecompressionPropertyKey_ThreadCount](kvtdecompressionpropertykey_threadcount.md): The number of threads used by a codec or the suggested number of threads to use (optional).
