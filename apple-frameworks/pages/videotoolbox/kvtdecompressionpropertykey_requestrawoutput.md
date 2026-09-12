> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_requestrawoutput](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_requestrawoutput)

# kVTDecompressionPropertyKey_RequestRAWOutput (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

For decoders that produce RAW output, this property requests that the decompression session provides unprocessed output.

## Declaration

```swift
let kVTDecompressionPropertyKey_RequestRAWOutput: CFString
```

<a id="discussion"></a>

## Discussion

When a decoder produces RAW output the [VTDecompressionSession](vtdecompressionsession.md) automatically invokes a [VTRAWProcessingSession](vtrawprocessingsession.md) with default settings and emits processed frames by default, or when `kVTDecompressionPropertyKey_RequestRAWOutput` is set to `kCFBooleanFalse`. If you want to run a [VTRAWProcessingSession](vtrawprocessingsession.md) on the RAW output to control the post-decode processing of the decoded `CVPixelBuffer` objects, you must set `kVTDecompressionPropertyKey_RequestRAWOutput` to `kCFBooleanTrue`. If `kVTDecompressionPropertyKey_RequestRAWOutput` is enabled and the decoder produces RAW output, the [VTDecompressionSession](vtdecompressionsession.md) returns `CVPixelBuffer` objects in the decoder’s native RAW format, and ignores any specified image buffer attributes.

## See Also

### Post-Decompression Processing

- [kVTDecompressionPropertyKey_DecoderProducesRAWOutput](kvtdecompressionpropertykey_decoderproducesrawoutput.md): A value that indicates whether the decoder can produce RAW output requiring a RAW processing session for post-decode processing.
- [kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_generateperframehdrdisplaymetadata.md): A key that indicates to generate per frame HDR Metadata and attach it to the resulting decoded pixel buffers.
- [kVTDecompressionPropertyKey_PixelTransferProperties](kvtdecompressionpropertykey_pixeltransferproperties.md): Specific pixel transfer features to be used during decompression.
- [kVTDecompressionPropertyKey_PropagatePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_propagateperframehdrdisplaymetadata.md)
- [kVTDecompressionPropertyKey_UsingGPURegistryID](kvtdecompressionpropertykey_usinggpuregistryid.md)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](kvtvideodecoderspecification_preferreddecodergpuregistryid.md)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](kvtvideodecoderspecification_requireddecodergpuregistryid.md)

# kVTDecompressionPropertyKey_RequestRAWOutput (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

For decoders that produce RAW output, this property requests that the decompression session provides unprocessed output.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_RequestRAWOutput;
```

<a id="discussion"></a>

## Discussion

When a decoder produces RAW output the [VTDecompressionSessionRef](vtdecompressionsession.md) automatically invokes a [VTRAWProcessingSessionRef](vtrawprocessingsession.md) with default settings and emits processed frames by default, or when `kVTDecompressionPropertyKey_RequestRAWOutput` is set to `kCFBooleanFalse`. If you want to run a [VTRAWProcessingSessionRef](vtrawprocessingsession.md) on the RAW output to control the post-decode processing of the decoded `CVPixelBuffer` objects, you must set `kVTDecompressionPropertyKey_RequestRAWOutput` to `kCFBooleanTrue`. If `kVTDecompressionPropertyKey_RequestRAWOutput` is enabled and the decoder produces RAW output, the [VTDecompressionSessionRef](vtdecompressionsession.md) returns `CVPixelBuffer` objects in the decoder’s native RAW format, and ignores any specified image buffer attributes.

## See Also

### Post-Decompression Processing

- [kVTDecompressionPropertyKey_DecoderProducesRAWOutput](kvtdecompressionpropertykey_decoderproducesrawoutput.md): A value that indicates whether the decoder can produce RAW output requiring a RAW processing session for post-decode processing.
- [kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_generateperframehdrdisplaymetadata.md): A key that indicates to generate per frame HDR Metadata and attach it to the resulting decoded pixel buffers.
- [kVTDecompressionPropertyKey_PixelTransferProperties](kvtdecompressionpropertykey_pixeltransferproperties.md): Specific pixel transfer features to be used during decompression.
- [kVTDecompressionPropertyKey_PropagatePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_propagateperframehdrdisplaymetadata.md)
- [kVTDecompressionPropertyKey_UsingGPURegistryID](kvtdecompressionpropertykey_usinggpuregistryid.md)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](kvtvideodecoderspecification_preferreddecodergpuregistryid.md)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](kvtvideodecoderspecification_requireddecodergpuregistryid.md)
