> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_reducedframedelivery](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_reducedframedelivery)

# kVTDecompressionPropertyKey_ReducedFrameDelivery (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The proportion of frames that should be delivered, indicating that the rest may be dropped.

## Declaration

```swift
let kVTDecompressionPropertyKey_ReducedFrameDelivery: CFString
```

<a id="Discussion"></a>

## Discussion

This is an optional property for video decoders to implement. If supported, it requests that frame delivery be reduced by the specified amount.

This number is a fraction between 0.0 and 1.0 that indicates what proportion of frames should be delivered–others may be dropped. For example, `0.25` would indicate that only one frame in every four should be delivered. This is a guideline;  the actual selection of frames is up to the decoder, which knows which frames can be skipped without harm.

You can use this key on its own, or in the dictionaries returned in the array obtained from [kVTDecompressionPropertyKey_SuggestedQualityOfServiceTiers](kvtdecompressionpropertykey_suggestedqualityofservicetiers.md). This key may also be used in conjunction with [kVTDecompressionPropertyKey_OnlyTheseFrames](kvtdecompressionpropertykey_onlytheseframes.md).  For example, the dictionary containing `[{kVTDecompressionPropertyKey_OnlyTheseFrames, kVTDecompressionProperty_OnlyTheseFrames_KeyFrames}, {kVTDecompressionPropertyKey_ReducedFrameDelivery, 0.25}]` requests that the decoder only deliver a quarter of keyframes.

If the decoder does not support this property directly, but reports that the content has no interframe dependencies, VideoToolbox may step in and perform simple frame dropping.

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
- [kVTDecompressionPropertyKey_ReducedResolutionDecode](kvtdecompressionpropertykey_reducedresolutiondecode.md): Request decoding at smaller resolutions than full-size (optional).
- [kVTDecompressionPropertyKey_SuggestedQualityOfServiceTiers](kvtdecompressionpropertykey_suggestedqualityofservicetiers.md): An array of dictionaries that describe decreasing quality-of-service levels that clients can use to maintain realtime playback (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance](kvtdecompressionpropertykey_supportedpixelformatsorderedbyperformance.md): An array indicating speed tradeoffs between pixel formats (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByQuality](kvtdecompressionpropertykey_supportedpixelformatsorderedbyquality.md): An array indicating quality levels among pixel formats.
- [kVTDecompressionPropertyKey_ThreadCount](kvtdecompressionpropertykey_threadcount.md): The number of threads used by a codec or the suggested number of threads to use (optional).

# kVTDecompressionPropertyKey_ReducedFrameDelivery (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The proportion of frames that should be delivered, indicating that the rest may be dropped.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_ReducedFrameDelivery;
```

<a id="Discussion"></a>

## Discussion

This is an optional property for video decoders to implement. If supported, it requests that frame delivery be reduced by the specified amount.

This number is a fraction between 0.0 and 1.0 that indicates what proportion of frames should be delivered–others may be dropped. For example, `0.25` would indicate that only one frame in every four should be delivered. This is a guideline;  the actual selection of frames is up to the decoder, which knows which frames can be skipped without harm.

You can use this key on its own, or in the dictionaries returned in the array obtained from [kVTDecompressionPropertyKey_SuggestedQualityOfServiceTiers](kvtdecompressionpropertykey_suggestedqualityofservicetiers.md). This key may also be used in conjunction with [kVTDecompressionPropertyKey_OnlyTheseFrames](kvtdecompressionpropertykey_onlytheseframes.md).  For example, the dictionary containing `[{kVTDecompressionPropertyKey_OnlyTheseFrames, kVTDecompressionProperty_OnlyTheseFrames_KeyFrames}, {kVTDecompressionPropertyKey_ReducedFrameDelivery, 0.25}]` requests that the decoder only deliver a quarter of keyframes.

If the decoder does not support this property directly, but reports that the content has no interframe dependencies, VideoToolbox may step in and perform simple frame dropping.

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
- [kVTDecompressionPropertyKey_ReducedResolutionDecode](kvtdecompressionpropertykey_reducedresolutiondecode.md): Request decoding at smaller resolutions than full-size (optional).
- [kVTDecompressionPropertyKey_SuggestedQualityOfServiceTiers](kvtdecompressionpropertykey_suggestedqualityofservicetiers.md): An array of dictionaries that describe decreasing quality-of-service levels that clients can use to maintain realtime playback (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance](kvtdecompressionpropertykey_supportedpixelformatsorderedbyperformance.md): An array indicating speed tradeoffs between pixel formats (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByQuality](kvtdecompressionpropertykey_supportedpixelformatsorderedbyquality.md): An array indicating quality levels among pixel formats.
- [kVTDecompressionPropertyKey_ThreadCount](kvtdecompressionpropertykey_threadcount.md): The number of threads used by a codec or the suggested number of threads to use (optional).
