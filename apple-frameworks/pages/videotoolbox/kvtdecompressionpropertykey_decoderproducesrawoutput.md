> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_decoderproducesrawoutput](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_decoderproducesrawoutput)

# kVTDecompressionPropertyKey_DecoderProducesRAWOutput (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A value that indicates whether the decoder can produce RAW output requiring a RAW processing session for post-decode processing.

## Declaration

```swift
let kVTDecompressionPropertyKey_DecoderProducesRAWOutput: CFString
```

<a id="discussion"></a>

## Discussion

If this property isn’t implemented, it’s assumed that the decoder does not produce RAW output. If the decoder reports that it produces RAW output, the [VTDecompressionSession](vtdecompressionsession.md) internally invokes a [VTRAWProcessingSession](vtrawprocessingsession.md) by default to produce processed output.

If the client sets [kVTDecompressionPropertyKey_RequestRAWOutput](kvtdecompressionpropertykey_requestrawoutput.md), the [VTDecompressionSession](vtdecompressionsession.md) performs no processing and returns the decoder’s native RAW output, and ignores any requested image buffer attributes.

## See Also

### Post-Decompression Processing

- [kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_generateperframehdrdisplaymetadata.md): A key that indicates to generate per frame HDR Metadata and attach it to the resulting decoded pixel buffers.
- [kVTDecompressionPropertyKey_PixelTransferProperties](kvtdecompressionpropertykey_pixeltransferproperties.md): Specific pixel transfer features to be used during decompression.
- [kVTDecompressionPropertyKey_PropagatePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_propagateperframehdrdisplaymetadata.md)
- [kVTDecompressionPropertyKey_RequestRAWOutput](kvtdecompressionpropertykey_requestrawoutput.md): For decoders that produce RAW output, this property requests that the decompression session provides unprocessed output.
- [kVTDecompressionPropertyKey_UsingGPURegistryID](kvtdecompressionpropertykey_usinggpuregistryid.md)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](kvtvideodecoderspecification_preferreddecodergpuregistryid.md)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](kvtvideodecoderspecification_requireddecodergpuregistryid.md)

# kVTDecompressionPropertyKey_DecoderProducesRAWOutput (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A value that indicates whether the decoder can produce RAW output requiring a RAW processing session for post-decode processing.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_DecoderProducesRAWOutput;
```

<a id="discussion"></a>

## Discussion

If this property isn’t implemented, it’s assumed that the decoder does not produce RAW output. If the decoder reports that it produces RAW output, the [VTDecompressionSessionRef](vtdecompressionsession.md) internally invokes a [VTRAWProcessingSessionRef](vtrawprocessingsession.md) by default to produce processed output.

If the client sets [kVTDecompressionPropertyKey_RequestRAWOutput](kvtdecompressionpropertykey_requestrawoutput.md), the [VTDecompressionSessionRef](vtdecompressionsession.md) performs no processing and returns the decoder’s native RAW output, and ignores any requested image buffer attributes.

## See Also

### Post-Decompression Processing

- [kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_generateperframehdrdisplaymetadata.md): A key that indicates to generate per frame HDR Metadata and attach it to the resulting decoded pixel buffers.
- [kVTDecompressionPropertyKey_PixelTransferProperties](kvtdecompressionpropertykey_pixeltransferproperties.md): Specific pixel transfer features to be used during decompression.
- [kVTDecompressionPropertyKey_PropagatePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_propagateperframehdrdisplaymetadata.md)
- [kVTDecompressionPropertyKey_RequestRAWOutput](kvtdecompressionpropertykey_requestrawoutput.md): For decoders that produce RAW output, this property requests that the decompression session provides unprocessed output.
- [kVTDecompressionPropertyKey_UsingGPURegistryID](kvtdecompressionpropertykey_usinggpuregistryid.md)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](kvtvideodecoderspecification_preferreddecodergpuregistryid.md)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](kvtvideodecoderspecification_requireddecodergpuregistryid.md)
