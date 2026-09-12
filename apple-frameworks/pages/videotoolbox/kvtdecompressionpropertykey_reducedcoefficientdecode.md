> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_reducedcoefficientdecode](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_reducedcoefficientdecode)

# kVTDecompressionPropertyKey_ReducedCoefficientDecode (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Requests approximation during decoding.

## Declaration

```swift
let kVTDecompressionPropertyKey_ReducedCoefficientDecode: CFString
```

<a id="Discussion"></a>

## Discussion

This is an optional property for video decoders to implement. Only decoders for which such approximations make sense should implement this property. The meaning of the number of coefficients will be decoder-specific.

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
- [kVTDecompressionPropertyKey_ReducedFrameDelivery](kvtdecompressionpropertykey_reducedframedelivery.md): The proportion of frames that should be delivered, indicating that the rest may be dropped.
- [kVTDecompressionPropertyKey_ReducedResolutionDecode](kvtdecompressionpropertykey_reducedresolutiondecode.md): Request decoding at smaller resolutions than full-size (optional).
- [kVTDecompressionPropertyKey_SuggestedQualityOfServiceTiers](kvtdecompressionpropertykey_suggestedqualityofservicetiers.md): An array of dictionaries that describe decreasing quality-of-service levels that clients can use to maintain realtime playback (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance](kvtdecompressionpropertykey_supportedpixelformatsorderedbyperformance.md): An array indicating speed tradeoffs between pixel formats (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByQuality](kvtdecompressionpropertykey_supportedpixelformatsorderedbyquality.md): An array indicating quality levels among pixel formats.
- [kVTDecompressionPropertyKey_ThreadCount](kvtdecompressionpropertykey_threadcount.md): The number of threads used by a codec or the suggested number of threads to use (optional).

# kVTDecompressionPropertyKey_ReducedCoefficientDecode (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Requests approximation during decoding.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_ReducedCoefficientDecode;
```

<a id="Discussion"></a>

## Discussion

This is an optional property for video decoders to implement. Only decoders for which such approximations make sense should implement this property. The meaning of the number of coefficients will be decoder-specific.

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
- [kVTDecompressionPropertyKey_ReducedFrameDelivery](kvtdecompressionpropertykey_reducedframedelivery.md): The proportion of frames that should be delivered, indicating that the rest may be dropped.
- [kVTDecompressionPropertyKey_ReducedResolutionDecode](kvtdecompressionpropertykey_reducedresolutiondecode.md): Request decoding at smaller resolutions than full-size (optional).
- [kVTDecompressionPropertyKey_SuggestedQualityOfServiceTiers](kvtdecompressionpropertykey_suggestedqualityofservicetiers.md): An array of dictionaries that describe decreasing quality-of-service levels that clients can use to maintain realtime playback (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance](kvtdecompressionpropertykey_supportedpixelformatsorderedbyperformance.md): An array indicating speed tradeoffs between pixel formats (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByQuality](kvtdecompressionpropertykey_supportedpixelformatsorderedbyquality.md): An array indicating quality levels among pixel formats.
- [kVTDecompressionPropertyKey_ThreadCount](kvtdecompressionpropertykey_threadcount.md): The number of threads used by a codec or the suggested number of threads to use (optional).
