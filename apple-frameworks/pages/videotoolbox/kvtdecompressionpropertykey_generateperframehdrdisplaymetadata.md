> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_generateperframehdrdisplaymetadata](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_generateperframehdrdisplaymetadata)

# kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A key that indicates to generate per frame HDR Metadata and attach it to the resulting decoded pixel buffers.

## Declaration

```swift
let kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata: CFString
```

<a id="Discussion"></a>

## Discussion

If the color space and YCbCr matrix match a supported HDR format such as HLG ([kCMFormatDescriptionTransferFunction_ITU_R_2100_HLG](../coremedia/kcmformatdescriptiontransferfunction_itu_r_2100_hlg.md)) the system analyzes the decoded frame and adds the metadata as an attachment to the pixel buffers.

## See Also

### Post-Decompression Processing

- [kVTDecompressionPropertyKey_DecoderProducesRAWOutput](kvtdecompressionpropertykey_decoderproducesrawoutput.md): A value that indicates whether the decoder can produce RAW output requiring a RAW processing session for post-decode processing.
- [kVTDecompressionPropertyKey_PixelTransferProperties](kvtdecompressionpropertykey_pixeltransferproperties.md): Specific pixel transfer features to be used during decompression.
- [kVTDecompressionPropertyKey_PropagatePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_propagateperframehdrdisplaymetadata.md)
- [kVTDecompressionPropertyKey_RequestRAWOutput](kvtdecompressionpropertykey_requestrawoutput.md): For decoders that produce RAW output, this property requests that the decompression session provides unprocessed output.
- [kVTDecompressionPropertyKey_UsingGPURegistryID](kvtdecompressionpropertykey_usinggpuregistryid.md)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](kvtvideodecoderspecification_preferreddecodergpuregistryid.md)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](kvtvideodecoderspecification_requireddecodergpuregistryid.md)

# kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A key that indicates to generate per frame HDR Metadata and attach it to the resulting decoded pixel buffers.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata;
```

<a id="Discussion"></a>

## Discussion

If the color space and YCbCr matrix match a supported HDR format such as HLG ([kCMFormatDescriptionTransferFunction_ITU_R_2100_HLG](../coremedia/kcmformatdescriptiontransferfunction_itu_r_2100_hlg.md)) the system analyzes the decoded frame and adds the metadata as an attachment to the pixel buffers.

## See Also

### Post-Decompression Processing

- [kVTDecompressionPropertyKey_DecoderProducesRAWOutput](kvtdecompressionpropertykey_decoderproducesrawoutput.md): A value that indicates whether the decoder can produce RAW output requiring a RAW processing session for post-decode processing.
- [kVTDecompressionPropertyKey_PixelTransferProperties](kvtdecompressionpropertykey_pixeltransferproperties.md): Specific pixel transfer features to be used during decompression.
- [kVTDecompressionPropertyKey_PropagatePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_propagateperframehdrdisplaymetadata.md)
- [kVTDecompressionPropertyKey_RequestRAWOutput](kvtdecompressionpropertykey_requestrawoutput.md): For decoders that produce RAW output, this property requests that the decompression session provides unprocessed output.
- [kVTDecompressionPropertyKey_UsingGPURegistryID](kvtdecompressionpropertykey_usinggpuregistryid.md)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](kvtvideodecoderspecification_preferreddecodergpuregistryid.md)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](kvtvideodecoderspecification_requireddecodergpuregistryid.md)
