> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionproperty_temporallevellimit](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionproperty_temporallevellimit)

# kVTDecompressionProperty_TemporalLevelLimit (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.4+ · visionOS 1.0+

## Declaration

```swift
let kVTDecompressionProperty_TemporalLevelLimit: CFString
```

## See Also

### Decoder Behavior

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
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance](kvtdecompressionpropertykey_supportedpixelformatsorderedbyperformance.md): An array indicating speed tradeoffs between pixel formats (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByQuality](kvtdecompressionpropertykey_supportedpixelformatsorderedbyquality.md): An array indicating quality levels among pixel formats.
- [kVTDecompressionPropertyKey_ThreadCount](kvtdecompressionpropertykey_threadcount.md): The number of threads used by a codec or the suggested number of threads to use (optional).

# kVTDecompressionProperty_TemporalLevelLimit (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.4+ · visionOS 1.0+

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionProperty_TemporalLevelLimit;
```

## See Also

### Decoder Behavior

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
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance](kvtdecompressionpropertykey_supportedpixelformatsorderedbyperformance.md): An array indicating speed tradeoffs between pixel formats (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByQuality](kvtdecompressionpropertykey_supportedpixelformatsorderedbyquality.md): An array indicating quality levels among pixel formats.
- [kVTDecompressionPropertyKey_ThreadCount](kvtdecompressionpropertykey_threadcount.md): The number of threads used by a codec or the suggested number of threads to use (optional).
