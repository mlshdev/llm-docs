> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtvideoencoderlist_displayname](https://developer.apple.com/documentation/videotoolbox/kvtvideoencoderlist_displayname)

# kVTVideoEncoderList_DisplayName (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The encoder’s display name key.

## Declaration

```swift
let kVTVideoEncoderList_DisplayName: CFString
```

<a id="Discussion"></a>

## Discussion

The associated value is a [CFString](../corefoundation/cfstring.md) with the encoder’s display name.

This value will be the same as the value of [kVTVideoEncoderList_CodecName](kvtvideoencoderlist_codecname.md) if there is only one encoder for that format; otherwise, it will be the same as the value of [kVTVideoEncoderList_EncoderName](kvtvideoencoderlist_encodername.md).

## See Also

### Encoder Keys

- [kVTVideoEncoderList_EncoderID](kvtvideoencoderlist_encoderid.md): A key that identifies the encoder ID.
- [kVTVideoEncoderList_EncoderName](kvtvideoencoderlist_encodername.md): A key for the encoder’s name.
- [kVTVideoEncoderList_CodecType](kvtvideoencoderlist_codectype.md): The encoder’s codec type key.
- [kVTVideoEncoderList_CodecName](kvtvideoencoderlist_codecname.md): The encoder’s codec name key.
- [kVTVideoEncoderList_GPURegistryID](kvtvideoencoderlist_gpuregistryid.md)
- [kVTVideoEncoderList_InstanceLimit](kvtvideoencoderlist_instancelimit.md)
- [kVTVideoEncoderList_IsHardwareAccelerated](kvtvideoencoderlist_ishardwareaccelerated.md)
- [kVTVideoEncoderList_PerformanceRating](kvtvideoencoderlist_performancerating.md)
- [kVTVideoEncoderList_QualityRating](kvtvideoencoderlist_qualityrating.md)
- [kVTVideoEncoderList_SupportedSelectionProperties](kvtvideoencoderlist_supportedselectionproperties.md)
- [kVTVideoEncoderList_SupportsFrameReordering](kvtvideoencoderlist_supportsframereordering.md)
- [kVTVideoEncoderListOption_IncludeStandardDefinitionDVEncoders](kvtvideoencoderlistoption_includestandarddefinitiondvencoders.md)

# kVTVideoEncoderList_DisplayName (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The encoder’s display name key.

## Declaration

```objectivec
extern CFStringRef const kVTVideoEncoderList_DisplayName;
```

<a id="Discussion"></a>

## Discussion

The associated value is a [CFStringRef](../corefoundation/cfstring.md) with the encoder’s display name.

This value will be the same as the value of [kVTVideoEncoderList_CodecName](kvtvideoencoderlist_codecname.md) if there is only one encoder for that format; otherwise, it will be the same as the value of [kVTVideoEncoderList_EncoderName](kvtvideoencoderlist_encodername.md).

## See Also

### Encoder Keys

- [kVTVideoEncoderList_EncoderID](kvtvideoencoderlist_encoderid.md): A key that identifies the encoder ID.
- [kVTVideoEncoderList_EncoderName](kvtvideoencoderlist_encodername.md): A key for the encoder’s name.
- [kVTVideoEncoderList_CodecType](kvtvideoencoderlist_codectype.md): The encoder’s codec type key.
- [kVTVideoEncoderList_CodecName](kvtvideoencoderlist_codecname.md): The encoder’s codec name key.
- [kVTVideoEncoderList_GPURegistryID](kvtvideoencoderlist_gpuregistryid.md)
- [kVTVideoEncoderList_InstanceLimit](kvtvideoencoderlist_instancelimit.md)
- [kVTVideoEncoderList_IsHardwareAccelerated](kvtvideoencoderlist_ishardwareaccelerated.md)
- [kVTVideoEncoderList_PerformanceRating](kvtvideoencoderlist_performancerating.md)
- [kVTVideoEncoderList_QualityRating](kvtvideoencoderlist_qualityrating.md)
- [kVTVideoEncoderList_SupportedSelectionProperties](kvtvideoencoderlist_supportedselectionproperties.md)
- [kVTVideoEncoderList_SupportsFrameReordering](kvtvideoencoderlist_supportsframereordering.md)
- [kVTVideoEncoderList_SupportsMultiPass](kvtvideoencoderlist_supportsmultipass.md)
- [kVTVideoEncoderListOption_IncludeStandardDefinitionDVEncoders](kvtvideoencoderlistoption_includestandarddefinitiondvencoders.md)
