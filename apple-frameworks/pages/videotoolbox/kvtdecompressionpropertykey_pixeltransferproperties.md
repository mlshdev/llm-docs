> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_pixeltransferproperties](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_pixeltransferproperties)

# kVTDecompressionPropertyKey_PixelTransferProperties (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Specific pixel transfer features to be used during decompression.

## Declaration

```swift
let kVTDecompressionPropertyKey_PixelTransferProperties: CFString
```

<a id="Discussion"></a>

## Discussion

This property value is a [CFDictionary](../corefoundation/cfdictionary.md) object containing properties from `VTPixelTransferProperties.h`.

## See Also

### Post-Decompression Processing

- [kVTDecompressionPropertyKey_DecoderProducesRAWOutput](kvtdecompressionpropertykey_decoderproducesrawoutput.md): A value that indicates whether the decoder can produce RAW output requiring a RAW processing session for post-decode processing.
- [kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_generateperframehdrdisplaymetadata.md): A key that indicates to generate per frame HDR Metadata and attach it to the resulting decoded pixel buffers.
- [kVTDecompressionPropertyKey_PropagatePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_propagateperframehdrdisplaymetadata.md)
- [kVTDecompressionPropertyKey_RequestRAWOutput](kvtdecompressionpropertykey_requestrawoutput.md): For decoders that produce RAW output, this property requests that the decompression session provides unprocessed output.
- [kVTDecompressionPropertyKey_UsingGPURegistryID](kvtdecompressionpropertykey_usinggpuregistryid.md)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](kvtvideodecoderspecification_preferreddecodergpuregistryid.md)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](kvtvideodecoderspecification_requireddecodergpuregistryid.md)

# kVTDecompressionPropertyKey_PixelTransferProperties (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Specific pixel transfer features to be used during decompression.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_PixelTransferProperties;
```

<a id="Discussion"></a>

## Discussion

This property value is a [CFDictionaryRef](../corefoundation/cfdictionary.md) object containing properties from `VTPixelTransferProperties.h`.

## See Also

### Post-Decompression Processing

- [kVTDecompressionPropertyKey_DecoderProducesRAWOutput](kvtdecompressionpropertykey_decoderproducesrawoutput.md): A value that indicates whether the decoder can produce RAW output requiring a RAW processing session for post-decode processing.
- [kVTDecompressionPropertyKey_GeneratePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_generateperframehdrdisplaymetadata.md): A key that indicates to generate per frame HDR Metadata and attach it to the resulting decoded pixel buffers.
- [kVTDecompressionPropertyKey_PropagatePerFrameHDRDisplayMetadata](kvtdecompressionpropertykey_propagateperframehdrdisplaymetadata.md)
- [kVTDecompressionPropertyKey_RequestRAWOutput](kvtdecompressionpropertykey_requestrawoutput.md): For decoders that produce RAW output, this property requests that the decompression session provides unprocessed output.
- [kVTDecompressionPropertyKey_UsingGPURegistryID](kvtdecompressionpropertykey_usinggpuregistryid.md)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](kvtvideodecoderspecification_preferreddecodergpuregistryid.md)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](kvtvideodecoderspecification_requireddecodergpuregistryid.md)
