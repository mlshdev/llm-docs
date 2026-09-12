> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_allowbitstreamtochangeframedimensions](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_allowbitstreamtochangeframedimensions)

# kVTDecompressionPropertyKey_AllowBitstreamToChangeFrameDimensions (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether a decoder is allowed to output buffers matching reduced frame dimensions in the bitstream rather than under-filling them.

## Declaration

```swift
let kVTDecompressionPropertyKey_AllowBitstreamToChangeFrameDimensions: CFString
```

<a id="discussion"></a>

## Discussion

This is an optional property only supported by video decoders for bitstream formats that have a provision for specifying output dimensions per-frame, such as AV1.

If a decoder doesn’t support this property or if the property value is set to `kCFBooleanFalse`, all decoded frames have the same dimensions as specified in the format description. In this case, if the bitstream changes the frame dimensions, the output buffer is padded to the dimensions specified in the format description.

When this property is set to `kCFBooleanTrue`, the decoder sets the dimensions of each output buffer to match the dimensions specified in the bitstream for that frame.

In all cases, output buffer dimensions will never exceed the dimensions specified in the format description.

In apps linked to SDK versions before this property was added, the AV1 decoder will behave as if this property is set to `kCFBooleanFalse`. Otherwise, value of this property defaults to `kCFBooleanTrue` where supported.

## See Also

### Decoder Behavior

- [kVTDecompressionProperty_TemporalLevelLimit](kvtdecompressionproperty_temporallevellimit.md)
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

# kVTDecompressionPropertyKey_AllowBitstreamToChangeFrameDimensions (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether a decoder is allowed to output buffers matching reduced frame dimensions in the bitstream rather than under-filling them.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_AllowBitstreamToChangeFrameDimensions;
```

<a id="discussion"></a>

## Discussion

This is an optional property only supported by video decoders for bitstream formats that have a provision for specifying output dimensions per-frame, such as AV1.

If a decoder doesn’t support this property or if the property value is set to `kCFBooleanFalse`, all decoded frames have the same dimensions as specified in the format description. In this case, if the bitstream changes the frame dimensions, the output buffer is padded to the dimensions specified in the format description.

When this property is set to `kCFBooleanTrue`, the decoder sets the dimensions of each output buffer to match the dimensions specified in the bitstream for that frame.

In all cases, output buffer dimensions will never exceed the dimensions specified in the format description.

In apps linked to SDK versions before this property was added, the AV1 decoder will behave as if this property is set to `kCFBooleanFalse`. Otherwise, value of this property defaults to `kCFBooleanTrue` where supported.

## See Also

### Decoder Behavior

- [kVTDecompressionProperty_TemporalLevelLimit](kvtdecompressionproperty_temporallevellimit.md)
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
