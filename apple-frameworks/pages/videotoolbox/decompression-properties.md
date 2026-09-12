> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/decompression-properties](https://developer.apple.com/documentation/videotoolbox/decompression-properties)

# Decompression Properties (Swift)

**Framework:** Video Toolbox  
**Kind:** API Collection

Properties used to configure a VideoToolbox decompression session.

## Topics

### Asynchronous State

- [kVTDecompressionPropertyKey_MaxOutputPresentationTimeStampOfFramesBeingDecoded](kvtdecompressionpropertykey_maxoutputpresentationtimestampofframesbeingdecoded.md): The maximum output presentation timestamp of the frames currently being decoded.
- [kVTDecompressionPropertyKey_MinOutputPresentationTimeStampOfFramesBeingDecoded](kvtdecompressionpropertykey_minoutputpresentationtimestampofframesbeingdecoded.md): The minimum output presentation timestamp of the frames currently being decoded.
- [kVTDecompressionPropertyKey_NumberOfFramesBeingDecoded](kvtdecompressionpropertykey_numberofframesbeingdecoded.md): Returns the number of frames currently being decoded.

### Content

- [kVTDecompressionPropertyKey_ContentHasInterframeDependencies](kvtdecompressionpropertykey_contenthasinterframedependencies.md): An optional Boolean property indicating if the content being decoded has interframe dependencies, if the decoder knows.

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
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance](kvtdecompressionpropertykey_supportedpixelformatsorderedbyperformance.md): An array indicating speed tradeoffs between pixel formats (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByQuality](kvtdecompressionpropertykey_supportedpixelformatsorderedbyquality.md): An array indicating quality levels among pixel formats.
- [kVTDecompressionPropertyKey_ThreadCount](kvtdecompressionpropertykey_threadcount.md): The number of threads used by a codec or the suggested number of threads to use (optional).

### Hardware Acceleration

- [kVTDecompressionPropertyKey_UsingHardwareAcceleratedVideoDecoder](kvtdecompressionpropertykey_usinghardwareacceleratedvideodecoder.md): Indicates if a hardware-accelerated video decoder is being used.
- [kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_enablehardwareacceleratedvideodecoder.md): A Boolean value indicating whether VideoToolbox uses a hardware-accelerated video decoder, if available.
- [kVTVideoDecoderSpecification_RequireHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_requirehardwareacceleratedvideodecoder.md): A Boolean value indicating whether to require hardware-accelerated decoding.

### Multi-Image Decompression

- [kVTDecompressionPropertyKey_RequestedMVHEVCVideoLayerIDs](kvtdecompressionpropertykey_requestedmvhevcvideolayerids.md): Requests multi-image decoding of specific MV-HEVC video layers.

### Per-Frame Decoder Options

- [kVTDecodeFrameOptionKey_ContentAnalyzerCropRectangle](kvtdecodeframeoptionkey_contentanalyzercroprectangle.md)
- [kVTDecodeFrameOptionKey_ContentAnalyzerRotation](kvtdecodeframeoptionkey_contentanalyzerrotation.md)

### Pixel Buffer Pools

- [kVTDecompressionPropertyKey_OutputPoolRequestedMinimumBufferCount](kvtdecompressionpropertykey_outputpoolrequestedminimumbuffercount.md): The requested minimum buffer count that a decompression session should use for its output pixel buffer pool, without releasing buffers while the number in use is below this level.
- [kVTDecompressionPropertyKey_PixelBufferPool](kvtdecompressionpropertykey_pixelbufferpool.md): A pixel buffer pool for pixel buffers being output by the decompression session.
- [kVTDecompressionPropertyKey_PixelBufferPoolIsShared](kvtdecompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether a common pixel buffer pool is shared between the video decoder and the session client.

### Post-Decompression Processing

- [kVTDecompressionPropertyKey_DecoderProducesRAWOutput](kvtdecompressionpropertykey_decoderproducesrawoutput.md): A value that indicates whether the decoder can produce RAW output requiring a RAW processing session for post-decode processing.
- [kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_generateperframehdrdisplaymetadata.md): A key that indicates to generate per frame HDR Metadata and attach it to the resulting decoded pixel buffers.
- [kVTDecompressionPropertyKey_PixelTransferProperties](kvtdecompressionpropertykey_pixeltransferproperties.md): Specific pixel transfer features to be used during decompression.
- [kVTDecompressionPropertyKey_PropagatePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_propagateperframehdrdisplaymetadata.md)
- [kVTDecompressionPropertyKey_RequestRAWOutput](kvtdecompressionpropertykey_requestrawoutput.md): For decoders that produce RAW output, this property requests that the decompression session provides unprocessed output.
- [kVTDecompressionPropertyKey_UsingGPURegistryID](kvtdecompressionpropertykey_usinggpuregistryid.md)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](kvtvideodecoderspecification_preferreddecodergpuregistryid.md)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](kvtvideodecoderspecification_requireddecodergpuregistryid.md)

## See Also

### Configuring a Session

- [VTVideoDecoderExtensionProperties(\_:)](vtvideodecoderextensionproperties%28__%29.md)

# Decompression Properties (Objective-C)

**Framework:** Video Toolbox  
**Kind:** API Collection

Properties used to configure a VideoToolbox decompression session.

## Topics

### Asynchronous State

- [kVTDecompressionPropertyKey_MaxOutputPresentationTimeStampOfFramesBeingDecoded](kvtdecompressionpropertykey_maxoutputpresentationtimestampofframesbeingdecoded.md): The maximum output presentation timestamp of the frames currently being decoded.
- [kVTDecompressionPropertyKey_MinOutputPresentationTimeStampOfFramesBeingDecoded](kvtdecompressionpropertykey_minoutputpresentationtimestampofframesbeingdecoded.md): The minimum output presentation timestamp of the frames currently being decoded.
- [kVTDecompressionPropertyKey_NumberOfFramesBeingDecoded](kvtdecompressionpropertykey_numberofframesbeingdecoded.md): Returns the number of frames currently being decoded.

### Content

- [kVTDecompressionPropertyKey_ContentHasInterframeDependencies](kvtdecompressionpropertykey_contenthasinterframedependencies.md): An optional Boolean property indicating if the content being decoded has interframe dependencies, if the decoder knows.

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
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByPerformance](kvtdecompressionpropertykey_supportedpixelformatsorderedbyperformance.md): An array indicating speed tradeoffs between pixel formats (optional).
- [kVTDecompressionPropertyKey_SupportedPixelFormatsOrderedByQuality](kvtdecompressionpropertykey_supportedpixelformatsorderedbyquality.md): An array indicating quality levels among pixel formats.
- [kVTDecompressionPropertyKey_ThreadCount](kvtdecompressionpropertykey_threadcount.md): The number of threads used by a codec or the suggested number of threads to use (optional).

### Hardware Acceleration

- [kVTDecompressionPropertyKey_UsingHardwareAcceleratedVideoDecoder](kvtdecompressionpropertykey_usinghardwareacceleratedvideodecoder.md): Indicates if a hardware-accelerated video decoder is being used.
- [kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_enablehardwareacceleratedvideodecoder.md): A Boolean value indicating whether VideoToolbox uses a hardware-accelerated video decoder, if available.
- [kVTVideoDecoderSpecification_RequireHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_requirehardwareacceleratedvideodecoder.md): A Boolean value indicating whether to require hardware-accelerated decoding.

### Multi-Image Decompression

- [kVTDecompressionPropertyKey_RequestedMVHEVCVideoLayerIDs](kvtdecompressionpropertykey_requestedmvhevcvideolayerids.md): Requests multi-image decoding of specific MV-HEVC video layers.

### Per-Frame Decoder Options

- [kVTDecodeFrameOptionKey_ContentAnalyzerCropRectangle](kvtdecodeframeoptionkey_contentanalyzercroprectangle.md)
- [kVTDecodeFrameOptionKey_ContentAnalyzerRotation](kvtdecodeframeoptionkey_contentanalyzerrotation.md)

### Pixel Buffer Pools

- [kVTDecompressionPropertyKey_OutputPoolRequestedMinimumBufferCount](kvtdecompressionpropertykey_outputpoolrequestedminimumbuffercount.md): The requested minimum buffer count that a decompression session should use for its output pixel buffer pool, without releasing buffers while the number in use is below this level.
- [kVTDecompressionPropertyKey_PixelBufferPool](kvtdecompressionpropertykey_pixelbufferpool.md): A pixel buffer pool for pixel buffers being output by the decompression session.
- [kVTDecompressionPropertyKey_PixelBufferPoolIsShared](kvtdecompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether a common pixel buffer pool is shared between the video decoder and the session client.

### Post-Decompression Processing

- [kVTDecompressionPropertyKey_DecoderProducesRAWOutput](kvtdecompressionpropertykey_decoderproducesrawoutput.md): A value that indicates whether the decoder can produce RAW output requiring a RAW processing session for post-decode processing.
- [kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_generateperframehdrdisplaymetadata.md): A key that indicates to generate per frame HDR Metadata and attach it to the resulting decoded pixel buffers.
- [kVTDecompressionPropertyKey_PixelTransferProperties](kvtdecompressionpropertykey_pixeltransferproperties.md): Specific pixel transfer features to be used during decompression.
- [kVTDecompressionPropertyKey_PropagatePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_propagateperframehdrdisplaymetadata.md)
- [kVTDecompressionPropertyKey_RequestRAWOutput](kvtdecompressionpropertykey_requestrawoutput.md): For decoders that produce RAW output, this property requests that the decompression session provides unprocessed output.
- [kVTDecompressionPropertyKey_UsingGPURegistryID](kvtdecompressionpropertykey_usinggpuregistryid.md)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](kvtvideodecoderspecification_preferreddecodergpuregistryid.md)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](kvtvideodecoderspecification_requireddecodergpuregistryid.md)
